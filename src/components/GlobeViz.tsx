"use client"
import { useEffect, useState, useRef, useMemo } from "react"
import dynamic from "next/dynamic"

// Dynamically import Globe to avoid SSR issues with WebGL
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full w-full text-white/50 animate-pulse">
      Loading 3D Globe...
    </div>
  )
})

// Country-specific data (Preserved from original)
const countryData = {
  // Africa
  ET: { 
    name: "Ethiopia", 
    projects: 12, 
    capacity: "850 MW", 
    status: "Active Development",
    flag: "https://flagcdn.com/w160/et.png",
    projectImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop"
  },
  KE: { 
    name: "Kenya", 
    projects: 8, 
    capacity: "620 MW", 
    status: "Operational",
    flag: "https://flagcdn.com/w160/ke.png",
    projectImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=300&h=200&fit=crop"
  },
  TZ: { 
    name: "Tanzania", 
    projects: 6, 
    capacity: "450 MW", 
    status: "Planning Phase",
    flag: "https://flagcdn.com/w160/tz.png",
    projectImage: "https://images.unsplash.com/photo-1566312087-9b02b5c62c77?w=300&h=200&fit=crop"
  },
  UG: { 
    name: "Uganda", 
    projects: 4, 
    capacity: "320 MW", 
    status: "Construction",
    flag: "https://flagcdn.com/w160/ug.png",
    projectImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop"
  },
  BF: { 
    name: "Burkina Faso", 
    projects: 3, 
    capacity: "180 MW", 
    status: "Early Development",
    flag: "https://flagcdn.com/w160/bf.png",
    projectImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop"
  },
  CV: { 
    name: "Cape Verde", 
    projects: 2, 
    capacity: "95 MW", 
    status: "Operational",
    flag: "https://flagcdn.com/w160/cv.png",
    projectImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=300&h=200&fit=crop"
  },
  LR: { 
    name: "Liberia", 
    projects: 1, 
    capacity: "45 MW", 
    status: "Planning",
    flag: "https://flagcdn.com/w160/lr.png",
    projectImage: "https://images.unsplash.com/photo-1566312087-9b02b5c62c77?w=300&h=200&fit=crop"
  },
  ST: { 
    name: "São Tomé & Príncipe", 
    projects: 1, 
    capacity: "25 MW", 
    status: "Feasibility",
    flag: "https://flagcdn.com/w160/st.png",
    projectImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop"
  },
  SN: { 
    name: "Senegal", 
    projects: 5, 
    capacity: "380 MW", 
    status: "Active Development",
    flag: "https://flagcdn.com/w160/sn.png",
    projectImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop"
  },
  SL: { 
    name: "Sierra Leone", 
    projects: 2, 
    capacity: "120 MW", 
    status: "Construction",
    flag: "https://flagcdn.com/w160/sl.png",
    projectImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=300&h=200&fit=crop"
  },
  MW: { 
    name: "Malawi", 
    projects: 3, 
    capacity: "200 MW", 
    status: "Planning Phase",
    flag: "https://flagcdn.com/w160/mw.png",
    projectImage: "https://images.unsplash.com/photo-1566312087-9b02b5c62c77?w=300&h=200&fit=crop"
  },
  ZA: { 
    name: "South Africa", 
    projects: 15, 
    capacity: "1200 MW", 
    status: "Operational",
    flag: "https://flagcdn.com/w160/za.png",
    projectImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop"
  },
  ZW: { 
    name: "Zimbabwe", 
    projects: 4, 
    capacity: "280 MW", 
    status: "Development",
    flag: "https://flagcdn.com/w160/zw.png",
    projectImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop"
  },
  LY: { 
    name: "Libya", 
    projects: 6, 
    capacity: "500 MW", 
    status: "Planning",
    flag: "https://flagcdn.com/w160/ly.png",
    projectImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=300&h=200&fit=crop"
  },
  TN: { 
    name: "Tunisia", 
    projects: 7, 
    capacity: "420 MW", 
    status: "Construction",
    flag: "https://flagcdn.com/w160/tn.png",
    projectImage: "https://images.unsplash.com/photo-1566312087-9b02b5c62c77?w=300&h=200&fit=crop"
  },
  // Asia & Middle East
  AE: { 
    name: "UAE", 
    projects: 10, 
    capacity: "750 MW", 
    status: "Operational",
    flag: "https://flagcdn.com/w160/ae.png",
    projectImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop"
  },
  IN: { 
    name: "India", 
    projects: 25, 
    capacity: "2100 MW", 
    status: "Multi-Phase Development",
    flag: "https://flagcdn.com/w160/in.png",
    projectImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop"
  },
}

// Colors
const DEFAULT_LAND_COLOR = "#2d3748"
const HOVER_LAND_COLOR = "#4a5568"
const SELECTED_LAND_COLOR = "#059669" // Green
const TARGET_LAND_COLOR = "#2563eb" // Blue-ish default for targets

// Target IDs
const targetRegions = Object.keys(countryData)

export default function GlobeViz() {
  const globeEl = useRef<any>(null)
  const [countries, setCountries] = useState({ features: [] })
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [hoveredPolygon, setHoveredPolygon] = useState<any>(null)
  const [popupPosition, setPopupPosition] = useState<{ x: number, y: number } | null>(null)

  useEffect(() => {
    // load data
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries)
  }, [])



  const handlePolygonClick = (polygon: any, event: MouseEvent) => {
    if (!polygon) return
    
    // Check if it's a target country (compare ISO_A2)
    const countryCode = polygon.properties.ISO_A2
    if (!targetRegions.includes(countryCode)) {
        // Can optionally close popup if clicking outside
        setSelectedCountry(null)
        setPopupPosition(null)
        return
    }

    // It's a target country
    setSelectedCountry(countryCode)
    
    // Stop rotation when looking at details
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = false
      
      // Calculate centroid to look at
      // react-globe.gl doesn't give centroid on polygon click easily in the event, 
      // but we can calculate it or just rely on manual navigation. 
      // A better UX is to rotate the globe to center the country.
      // Getting lat/lng from the click event:
      const { lat, lng } = polygon.properties.LABEL_Y && polygon.properties.LABEL_X 
        ? { lat: polygon.properties.LABEL_Y, lng: polygon.properties.LABEL_X }
        : { lat: 0, lng: 0 } // Fallback if data missing, simple approximate

      // Actually the event argument often has coords from pointer
      // But standard globe.gl polygonClick passes (polygon, event, { lat, lng, altitude })
      
      // Since type defs might be loose, let's try to animate to the looked at country if center is known.
      // For simplicity, we just stop rotation and show popup.
    }
    
    // Set popup position (simplified for now, ideally projected to screen coords)
    // Since we are in 3D canvas, screen coords need to be projected.
    // simpler to just center it or use a fixed overlay.
    // The previous implementation used fixed overlay centered on screen or calculated.
    // Let's use screen center for the popup for now.
    setPopupPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  }

  const getPolygonColor = (d: any) => {
    const code = d.properties.ISO_A2
    if (code === selectedCountry) return SELECTED_LAND_COLOR
    if (d === hoveredPolygon && targetRegions.includes(code)) return HOVER_LAND_COLOR
    if (targetRegions.includes(code)) {
        // We can use specific colors or just a default "active" color
        // The original had varied colors.
        // Let's use a subtle green/blue for targets to make them pop against dark world.
        return "#1e40af" // Dark blue
    }
    return DEFAULT_LAND_COLOR
  }

  const getCountryInfo = (countryId: string | null) => {
    if (!countryId) return null
    return countryData[countryId as keyof typeof countryData] || null
  }

  // Effect to project popup position if we want it to follow the globe?
  // Doing it simple: "modal" style popup in center or fixed position is often better for mobile/usability 
  // than chasing a moving 3D object.
  // The MapViz used a fixed position relative to the map container.

  return (
    <div className="relative w-full h-full bg-black overflow-hidden" style={{ touchAction: 'pan-y' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .popup-container {
          font-family: 'Inter', system-ui, sans-serif;
          backdrop-filter: blur(20px);
          background: rgba(10, 10, 10, 0.85); /* Dark background */
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0;
          border-radius: 12px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          animation: popupSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popupSlideIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>

      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        polygonsData={countries.features}
        polygonAltitude={d => d === hoveredPolygon ? 0.03 : 0.01}
        polygonCapColor={getPolygonColor}
        polygonSideColor={() => 'rgba(255, 255, 255, 0.1)'}
        polygonStrokeColor={() => '#555'}
        polygonLabel={({ properties: d }: any) => `
            <div style="background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px;">
                ${d.ADMIN} (${d.ISO_A2})
            </div>
        `}
        onPolygonHover={setHoveredPolygon}
        onPolygonClick={handlePolygonClick}
        width={typeof window !== 'undefined' ? window.innerWidth : 800} 
        onGlobeReady={() => {
          if (globeEl.current) {
            // Disable auto-rotation for all
            globeEl.current.controls().autoRotate = false
            globeEl.current.controls().enableZoom = false
            
            // Adjust view based on screen width
            const isMobile = window.innerWidth < 768
            const altitude = isMobile ? 2.5 : 1.8
            
            globeEl.current.pointOfView({ lat: 15, lng: 45, altitude })

            if (isMobile) {
                // Wait for the view to set, then disable controls to allow native scroll
                setTimeout(() => {
                    if (globeEl.current) {
                        globeEl.current.controls().enabled = false;
                    }
                }, 100);
            }
          }
        }}
        height={typeof window !== 'undefined' ? window.innerHeight : 600}
      />

      {/* Popup Overlay */}
      {selectedCountry && (
        <div 
            className="popup-container absolute"
            style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999, // High z-index to ensure it's above everything
                width: '90%', // Responsive width for mobile
                maxWidth: '400px' // Max width for desktop
            }}
        >
             {(() => {
              const info = getCountryInfo(selectedCountry)
              if (!info) return null
              return (
                <div className="relative">
                  <div className="flex justify-between items-start p-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={info.flag} 
                          alt={`${info.name} flag`}
                          className="w-8 h-6 object-cover rounded border border-white/20"
                        />
                         <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-black"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{info.name}</h3>
                    </div>
                    {/* Increased touch target for mobile */}
                    <button 
                      className="text-gray-400 hover:text-white text-lg font-light w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200 -mr-3 -mt-3"
                      onPointerUp={(e) => {
                          e.stopPropagation(); 
                          e.preventDefault();
                          setSelectedCountry(null)
                      }}
                    >
                      ×
                    </button>
                  </div>

                  <div className="px-4 py-4 max-h-[60vh] overflow-y-auto"> {/* Scrollable content if nice */}
                    <div className="relative overflow-hidden rounded-lg border border-white/10 mb-4 group">
                      <img 
                        src={info.projectImage} 
                        alt={`${info.name} renewable energy project`}
                        className="w-full h-28 sm:h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                       <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center px-2 py-1 rounded text-[10px] sm:text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30 backdrop-blur-sm">
                          Renewable Energy
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      <div className="flex justify-between items-center p-2.5 sm:p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                            <span className="text-blue-300 font-semibold text-sm">{info.projects}</span>
                          </div>
                          <span className="font-medium text-gray-300 text-sm">Active Projects</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-2.5 sm:p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                         <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                            <span className="text-emerald-300 font-semibold text-xs">⚡</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-300 block text-[10px] sm:text-xs mb-0.5">Total Capacity</span>
                            <div className="text-emerald-300 font-semibold text-sm">{info.capacity}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-2.5 sm:p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                            <span className="text-orange-300 font-semibold text-xs">📊</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-300 block text-[10px] sm:text-xs mb-0.5">Status</span>
                            <div className="text-orange-300 font-semibold text-sm">{info.status}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed text-justify">
                        Comprehensive renewable energy development initiative focused on sustainable power generation, 
                        modern grid infrastructure, and community empowerment through clean energy access.
                      </p>
                    </div>
                  </div>
                </div>
              )
            })()}
        </div>
      )}
    </div>
  )
}
