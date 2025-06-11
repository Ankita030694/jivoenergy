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
  const [rotation, setRotation] = useState({ lat: 0, lng: 0, altitude: 2.5 })
  const globeRef = useRef<any>(null)

  useEffect(() => {
    // Energy consumption per capita (avoiding countries with small pop)
    const getVal = (feat: CountryFeature) => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST)

    fetch(
      "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson",
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.features.filter((d: CountryFeature) => d.properties.ISO_A2 !== "AQ"))
      })
  }, [])

  useEffect(() => {
    let animationFrameId: number
    const startTime = Date.now()
    const startLng = -20 // Start from Africa (west coast)
    const endLng = 140 // End at eastern Asia
    const totalRange = endLng - startLng // Total degrees to cover
    const cycleDuration = 30000 // 30 seconds for full cycle

    const animate = () => {
      const elapsed = Date.now() - startTime
      const cycleProgress = (elapsed % cycleDuration) / cycleDuration

      // Use sine wave for smooth back-and-forth motion
      const sineProgress = (Math.sin(cycleProgress * Math.PI * 2 - Math.PI / 2) + 1) / 2
      const currentLng = startLng + sineProgress * totalRange

      // Update rotation state
      setRotation((prev) => ({
        ...prev,
        lng: currentLng,
      }))

      // Also try to control the globe directly if ref is available
      if (globeRef.current) {
        globeRef.current.pointOfView({ lat: 0, lng: currentLng, altitude: 2.5 }, 100)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation after a short delay to ensure globe is loaded
    const timeoutId = setTimeout(() => {
      animate()
    }, 1000)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      clearTimeout(timeoutId)
    }
  }, [])

  const colorScale = scaleSequentialSqrt(interpolateViridis)
  const getVal = (feat: CountryFeature) => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST)

  const maxVal = Math.max(...countries.map(getVal))
  colorScale.domain([0, maxVal])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Energy-themed overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 via-[#0A192F]/40 to-black/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyUzEyIDExLjM3MyAxMiAxOGMwIDYuNjI3IDUuMzczIDEyIDEyczEyLTUuMzczIDEyLTEyem0tMTIgMGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyUzAgMTEuMzczIDAgMThjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMnMxMi01LjM3MyAxMi0xMnoiIGZpbGw9IiM2NEZGREEvMDUiLz48L2c+PC9zdmc+')] opacity-5 z-10 pointer-events-none" />


      <Globe
        ref={globeRef}
        width={1500}
        height={900}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        lineHoverPrecision={0}
        polygonsData={countries}
        polygonAltitude={(d) => (d === hoveredCountry ? 0.156 : 0.078)}
        polygonCapColor={(d) => (d === hoveredCountry ? "#64FFDA" : colorScale(getVal(d as CountryFeature)))}
        polygonSideColor={() => "rgba(100, 255, 218, 0.15)"}
        polygonStrokeColor={() => "#64FFDA"}
        polygonLabel={(obj: any) => {
          const d = obj.properties as CountryProperties
          return `
            <div class="bg-[#0A192F]/90 p-4 rounded-lg border border-[#64FFDA]/30 shadow-lg">
              <b class="text-[#64FFDA] text-lg">${d.ADMIN}</b><br />
              <span class="text-[#8892B0]">Energy Consumption:</span> <i class="text-[#64FFDA]">${d.GDP_MD_EST ? d.GDP_MD_EST.toLocaleString() : "N/A"}</i> MWh<br/>
              <span class="text-[#8892B0]">Population:</span> <i class="text-[#64FFDA]">${d.POP_EST ? d.POP_EST.toLocaleString() : "N/A"}</i>
            </div>
          `
        }}
        onPolygonHover={(polygon: any) => {
          setHoveredCountry(polygon as CountryFeature | null)
        }}
        polygonsTransitionDuration={300}
        atmosphereColor="#64FFDA"
        atmosphereAltitude={0.1}
        animateIn={false}
        enablePointerInteraction={false}
        onGlobeReady={() => {
          console.log("Globe is ready!")
          if (globeRef.current) {
            // Disable auto-rotation and set initial view
            globeRef.current.controls().autoRotate = false
            globeRef.current.pointOfView({ lat: 0, lng: -20, altitude: 2.5 })
          }
        }}
      />
    </div>
  )
}
