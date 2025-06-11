"use client"
import { useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import { scaleSequentialSqrt } from "d3-scale"
import { interpolateViridis } from "d3-scale-chromatic"

interface CountryProperties {
  ADMIN: string
  ISO_A2: string
  GDP_MD_EST: number
  POP_EST: number
  [key: string]: any
}

interface CountryFeature {
  type: string
  geometry: {
    type: string
    coordinates: number[][][]
  }
  properties: CountryProperties
}

// Dynamically import Globe with no SSR
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
})

export default function GlobeViz() {
  const [countries, setCountries] = useState<CountryFeature[]>([])
  const [hoveredCountry, setHoveredCountry] = useState<CountryFeature | null>(null)
  const [rotation, setRotation] = useState({ lat: 0, lng: -20, altitude: 2.5 })
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const globeRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson",
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.features.filter((d: CountryFeature) => d.properties.ISO_A2 !== "AQ"))
      })
  }, [])

  // Auto-rotation effect
  useEffect(() => {
    let animationFrameId: number
    const startTime = Date.now()
    const startLng = -20 // Start from Africa (west coast)
    const endLng = 140 // End at eastern Asia
    const totalRange = endLng - startLng
    const cycleDuration = 60000 // 60 seconds for full cycle (was 30000)

    const animate = () => {
      // Only auto-rotate if user is not interacting
      if (!isUserInteracting) {
        const elapsed = Date.now() - startTime
        const cycleProgress = (elapsed % cycleDuration) / cycleDuration
        const sineProgress = (Math.sin(cycleProgress * Math.PI * 2 - Math.PI / 2) + 1) / 2
        const currentLng = startLng + sineProgress * totalRange

        if (globeRef.current) {
          globeRef.current.pointOfView({ lat: 0, lng: currentLng, altitude: 2.5 }, 100)
        }

        setRotation((prev) => ({
          ...prev,
          lng: currentLng,
        }))
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const timeoutId = setTimeout(() => {
      animate()
    }, 1000)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      clearTimeout(timeoutId)
    }
  }, [isUserInteracting])

  // Prevent scroll zoom on globe
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current?.contains(e.target as Node)) {
        // Allow page scroll instead of globe zoom
        return true
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: true })
      return () => container.removeEventListener("wheel", handleWheel)
    }
  }, [])

  const colorScale = scaleSequentialSqrt(interpolateViridis)
  const getVal = (feat: CountryFeature) => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST)

  const maxVal = Math.max(...countries.map(getVal))
  colorScale.domain([0, maxVal])

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Energy-themed overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 via-[#0A192F]/40 to-black/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyUzEyIDExLjM3MyAxMiAxOGMwIDYuNjI3IDUuMzczIDEyIDEyczEyLTUuMzczIDEyLTEyem0tMTIgMGMwLTYuNjI3LTUuMzczLTEyLT1.MzczLTEyUzAgMTEuMzczIDAgMThjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMnMxMi01LjM3MyAxMi0xMnoiIGZpbGw9IiM2NEZGREEvMDUiLz48L2c+PC9zdmc+')] opacity-5 z-10 pointer-events-none" />



      <Globe
        ref={globeRef}
        width={1500}
        height={900}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        lineHoverPrecision={0}
        polygonsData={countries}
        polygonAltitude={(d) => (d === hoveredCountry ? 0.12 : 0.06)}
        polygonCapColor={(d) => (d === hoveredCountry ? "#64FFDA" : colorScale(getVal(d as CountryFeature)))}
        polygonSideColor={() => "rgba(100, 255, 218, 0.15)"}
        polygonStrokeColor={() => "#64FFDA"}
        polygonLabel={(d: any) => {
          const country = d.properties as CountryProperties
          return `
            <div style="
              background: rgba(10, 25, 47, 0.95);
              padding: 12px;
              border-radius: 8px;
              border: 1px solid rgba(100, 255, 218, 0.3);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
              font-family: system-ui, -apple-system, sans-serif;
              max-width: 250px;
            ">
              <div style="color: #64FFDA; font-size: 16px; font-weight: bold; margin-bottom: 8px;">
                ${country.ADMIN}
              </div>
              <div style="color: #8892B0; font-size: 12px; margin-bottom: 4px;">
                Energy Consumption: 
                <span style="color: #64FFDA; font-weight: 500;">
                  ${country.GDP_MD_EST ? country.GDP_MD_EST.toLocaleString() : "N/A"} MWh
                </span>
              </div>
              <div style="color: #8892B0; font-size: 12px;">
                Population: 
                <span style="color: #64FFDA; font-weight: 500;">
                  ${country.POP_EST ? country.POP_EST.toLocaleString() : "N/A"}
                </span>
              </div>
            </div>
          `
        }}
        onPolygonHover={(polygon: any) => {
          setHoveredCountry(polygon as CountryFeature | null)
        }}
        onPolygonClick={(polygon: any) => {
          console.log("Clicked country:", polygon?.properties?.ADMIN)
        }}
        polygonsTransitionDuration={300}
        atmosphereColor="#64FFDA"
        atmosphereAltitude={0.1}
        animateIn={false}
        enablePointerInteraction={true}
        onGlobeReady={() => {
          console.log("Globe is ready!")
          if (globeRef.current) {
            // Configure controls
            const controls = globeRef.current.controls()
            controls.autoRotate = false
            controls.enableZoom = false // Disable zoom
            controls.enablePan = false // Disable panning
            controls.enableRotate = true // Allow rotation
            controls.rotateSpeed = 0.25 // Slower manual rotation (was 0.5)

            // Set initial view
            globeRef.current.pointOfView({ lat: 0, lng: -20, altitude: 2.5 })

            // Listen for user interaction
            controls.addEventListener("start", () => {
              setIsUserInteracting(true)
            })

            controls.addEventListener("end", () => {
              // Resume auto-rotation after 3 seconds of no interaction
              setTimeout(() => {
                setIsUserInteracting(false)
              }, 3000)
            })
          }
        }}
      />
    </div>
  )
}
