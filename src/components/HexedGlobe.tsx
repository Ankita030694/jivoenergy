'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import * as d3 from 'd3';

interface CountryProperties {
  ADMIN: string;
  ISO_A2: string;
  ISO_A3: string;
  POP_EST: number;
  [key: string]: any;
}

interface CountryFeature {
  type: string;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: CountryProperties;
}

interface CountryData extends CountryFeature {
  __hover?: boolean;
  __color?: string;
}

interface HexedGlobeProps {
  countryGeoJsonUrl?: string;
  hexPolygonResolution?: number;
  hexPolygonColor?: string | ((d: CountryData) => string);
  onCountryClick?: (country: CountryData, coords: { lat: number; lng: number; altitude: number }) => void;
  onCountryHover?: (country: CountryData | null, prevCountry: CountryData | null) => void;
}

// Default GeoJSON URL - Natural Earth dataset
const DEFAULT_GEOJSON_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';

// Generate a stable color based on a string
const getStableColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 70%, 60%)`;
};

export default function HexedGlobe({
  countryGeoJsonUrl = DEFAULT_GEOJSON_URL,
  hexPolygonResolution = 3,
  hexPolygonColor,
  onCountryClick,
  onCountryHover,
}: HexedGlobeProps) {
  const globeRef = useRef<GlobeMethods>(undefined);
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch GeoJSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(countryGeoJsonUrl);
        const data = await response.json();
        
        // Transform the GeoJSON features into the format needed by the Globe
        const countryHexData = data.features.map((feat: CountryFeature) => ({
          ...feat,
          __hover: false,
          __color: hexPolygonColor 
            ? (typeof hexPolygonColor === 'function' ? hexPolygonColor(feat as CountryData) : hexPolygonColor)
            : getStableColor(feat.properties.ISO_A3 || feat.properties.ADMIN)
        }));
        
        setCountries(countryHexData);
      } catch (error) {
        console.error('Error loading country data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [countryGeoJsonUrl, hexPolygonColor]);

  // Initialize globe settings
  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotate
      (globeRef.current as any).controls().autoRotate = true;
      (globeRef.current as any).controls().autoRotateSpeed = 0.5;
      
      // Set initial camera position
      (globeRef.current as any).pointOfView({
        lat: 0,
        lng: 0,
        altitude: 2
      });

      // Enable zoom and pan
      (globeRef.current as any).controls().enableZoom = true;
      (globeRef.current as any).controls().enablePan = true;
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Handle country hover with debounce
  const handleCountryHover = useCallback((country: CountryData | null, prevCountry: CountryData | null) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setCountries(prevCountries => 
        prevCountries.map(c => ({
          ...c,
          __hover: c === country
        }))
      );
      
      setHoveredCountry(country);
      if (onCountryHover) {
        onCountryHover(country, prevCountry);
      }
    }, 50); // Small delay to prevent rapid state changes
  }, [onCountryHover]);

  // Handle country click
  const handleCountryClick = useCallback((country: CountryData, event: MouseEvent, coords: { lat: number; lng: number; altitude: number }) => {
    if (onCountryClick) {
      onCountryClick(country, coords);
    }
  }, [onCountryClick]);

  if (isLoading) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 10px'
          }} />
          <p>Loading world data...</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg"
        hexPolygonsData={countries}
        hexPolygonGeoJsonGeometry={(d: any) => d.geometry}
        hexPolygonLabel={(d: any) => `
          <div>
            <div><b>${d.properties.ADMIN} (${d.properties.ISO_A2})</b></div>
            <div>Population: <i>${d.properties.POP_EST?.toLocaleString()}</i></div>
          </div>
        `}
        hexPolygonColor={(d: any) => d.__hover ? '#ff9900' : d.__color}
        hexPolygonAltitude={(d: any) => d.__hover ? 0.02 : 0.001}
        hexPolygonResolution={hexPolygonResolution}
        hexPolygonMargin={0.3}
        hexPolygonUseDots={true}
        hexPolygonsTransitionDuration={200}
        onHexPolygonClick={(d: any, event: MouseEvent, coords: { lat: number; lng: number; altitude: number }) => 
          handleCountryClick(d, event, coords)
        }
        onHexPolygonHover={(d: any, prev: any) => 
          handleCountryHover(d, prev)
        }
      />
      {hoveredCountry && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            zIndex: 1000,
            transition: 'opacity 0.2s ease-in-out',
            opacity: 1,
          }}
        >
          <h3 style={{ margin: 0 }}>{hoveredCountry.properties.ADMIN}</h3>
          <p style={{ margin: '5px 0 0 0' }}>
            ISO: {hoveredCountry.properties.ISO_A2}
          </p>
          <p style={{ margin: '5px 0 0 0' }}>
            Population: {hoveredCountry.properties.POP_EST?.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
} 