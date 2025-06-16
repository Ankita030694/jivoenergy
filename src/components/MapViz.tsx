"use client"
import { useEffect, useRef, useState } from "react"
import Script from "next/script"

declare global {
  interface Window {
    am5: any
    am5map: any
    am5geodata_worldLow: any
    am5geodata_usaLow: any
    am5themes_Animated: any
  }
}

// Country-specific data
const countryData = {
  // Africa
  ET: { name: "Ethiopia", projects: 12, capacity: "850 MW", status: "Active Development" },
  KE: { name: "Kenya", projects: 8, capacity: "620 MW", status: "Operational" },
  TZ: { name: "Tanzania", projects: 6, capacity: "450 MW", status: "Planning Phase" },
  UG: { name: "Uganda", projects: 4, capacity: "320 MW", status: "Construction" },
  BF: { name: "Burkina Faso", projects: 3, capacity: "180 MW", status: "Early Development" },
  CV: { name: "Cape Verde", projects: 2, capacity: "95 MW", status: "Operational" },
  LR: { name: "Liberia", projects: 1, capacity: "45 MW", status: "Planning" },
  ST: { name: "São Tomé & Príncipe", projects: 1, capacity: "25 MW", status: "Feasibility" },
  SN: { name: "Senegal", projects: 5, capacity: "380 MW", status: "Active Development" },
  SL: { name: "Sierra Leone", projects: 2, capacity: "120 MW", status: "Construction" },
  MW: { name: "Malawi", projects: 3, capacity: "200 MW", status: "Planning Phase" },
  ZA: { name: "South Africa", projects: 15, capacity: "1200 MW", status: "Operational" },
  ZW: { name: "Zimbabwe", projects: 4, capacity: "280 MW", status: "Development" },
  LY: { name: "Libya", projects: 6, capacity: "500 MW", status: "Planning" },
  TN: { name: "Tunisia", projects: 7, capacity: "420 MW", status: "Construction" },
  // Asia & Middle East
  AE: { name: "UAE", projects: 10, capacity: "750 MW", status: "Operational" },
  IN: { name: "India", projects: 25, capacity: "2100 MW", status: "Multi-Phase Development" },
}

export default function MapViz() {
  const chartRef = useRef<HTMLDivElement>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!chartRef.current || !window.am5) return

    // Use am5.ready to ensure everything is loaded properly
    window.am5.ready(function() {
      if (!chartRef.current) return

      // Create root element
      const root = window.am5.Root.new(chartRef.current)

      // Set themes
      root.setThemes([window.am5themes_Animated.new(root)])

      // Create the map chart
      const chart = root.container.children.push(
        window.am5map.MapChart.new(root, {
          panX: "translateX",
          panY: "translateY",
          projection: window.am5map.geoMercator(),
          maxPanOut: 0.1,
          maxZoomLevel: 4,
          minZoomLevel: 0.8,
          centerLongitude: 100,
          centerLatitude: 10,
          zoomLevel: 2.4,
          wheelX: "none",
          wheelY: "none",
          pinchZoom: false,
        }),
      )

      // Target regions - specific countries only
      const targetRegions = [
        // Africa
        "ET", // Ethiopia
        "KE", // Kenya
        "TZ", // Tanzania
        "UG", // Uganda
        "BF", // Burkina Faso
        "CV", // Cape Verde
        "LR", // Liberia
        "ST", // São Tome & Principe
        "SN", // Senegal
        "SL", // Sierra Leone
        "MW", // Malawi
        "ZA", // South Africa
        "ZW", // Zimbabwe
        "LY", // Libya
        "TN", // Tunisia
        // Asia & Middle East
        "AE", // UAE
        "IN", // India
      ]

      // Array of different green shades for the target regions
      const regionColors = [
        "#16a34a", "#15803d", "#166534", "#14532d", "#052e16", // Standard greens
        "#22c55e", "#10b981", "#059669", "#047857", "#064e3b", // Emerald greens
        "#84cc16", "#65a30d", "#4d7c0f", "#365314", "#1a2e05", // Lime greens
        "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#164e63", // Cyan-greens
        "#14b8a6", "#0d9488", "#0f766e", "#134e4a", "#042f2e", // Teal greens
        "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", // Bright greens
        "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", // Light greens
        "#365314", "#3f6212", "#4d7c0f", "#65a30d", "#84cc16", // Olive greens
        "#064e3b", "#065f46", "#047857", "#059669", "#10b981", // Forest greens
        "#052e16", "#14532d", "#166534", "#15803d", "#16a34a", // Dark greens
        "#1a2e05", "#365314", "#3f6212", "#4d7c0f", "#65a30d", // Deep olive
        "#042f2e", "#134e4a", "#0f766e", "#0d9488", "#14b8a6", // Deep teal
        "#083344", "#164e63", "#0e7490", "#0891b2", "#06b6d4", // Blue-greens
        "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1"  // Sky-greens
      ]

      // Create a color mapping for each target region
      const countryColorMap = new Map()
      targetRegions.forEach((countryId, index) => {
        countryColorMap.set(countryId, regionColors[index % regionColors.length])
      })

      // Create polygon series for all countries
      const polygonSeries = chart.series.push(
        window.am5map.MapPolygonSeries.new(root, {
          geoJSON: window.am5geodata_worldLow,
          exclude: ["AQ"], // Exclude Antarctica
        }),
      )

      // Create point series for location icons
      const pointSeries = chart.series.push(
        window.am5map.MapPointSeries.new(root, {})
      )

      // Wait for polygon series to be ready
      polygonSeries.events.on("datavalidated", function() {
        // Create location icons for target countries
        targetRegions.forEach((countryId) => {
          const dataItem = polygonSeries.getDataItemById(countryId)
          if (dataItem) {
            const polygon = dataItem.get("mapPolygon")
            if (polygon) {
              const centroid = polygon.visualCentroid()
              pointSeries.data.push({
                geometry: {
                  type: "Point",
                  coordinates: [centroid.longitude, centroid.latitude]
                },
                countryId: countryId
              })
            }
          }
        })
      })

      // Configure point series
      pointSeries.bullets.push(function() {
        const bullet = window.am5.Bullet.new(root, {
          sprite: window.am5.Graphics.new(root, {
            svgPath: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fill: window.am5.color("#16a34a"),
            centerX: 0,
            centerY: 0,
            tooltipText: "{name}",
            cursorOverStyle: "pointer"
          })
        })

        // Add click event to the bullet sprite
        bullet.get("sprite").events.on("click", function(ev: { target: { dataItem: any } }) {
          const dataItem = ev.target.dataItem
          if (dataItem) {
            const countryId = dataItem.get("countryId")
            const coordinates = dataItem.get("geometry").coordinates
            const point = chart.convert({
              longitude: coordinates[0],
              latitude: coordinates[1]
            })
            
            setSelectedCountry(countryId)
            setPopupPosition({
              x: point.x,
              y: point.y
            })
          }
        })

        return bullet
      })

      // Set default template with improved tooltip
      polygonSeries.mapPolygons.template.setAll({
        interactive: true,
        fill: window.am5.color("#e5e7eb"), // Default gray
        stroke: window.am5.color("#77b900"),
        strokeWidth: 0.5,
      })

      // Custom tooltip content for target countries
      polygonSeries.mapPolygons.template.set("tooltipHTML", `
        <div style="
          background: white; 
          padding: 16px; 
          border-radius: 8px; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          min-width: 250px;
          max-width: 300px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          border: 1px solid #e2e8f0;
        ">
          <div style="font-size: 16px; font-weight: 600; color: #1e293b; margin-bottom: 8px;">
            {name}
          </div>
          <div style="font-size: 13px; color: #64748b; line-height: 1.4;">
            <div style="margin-bottom: 4px;"><strong>Projects:</strong> {projects}</div>
            <div style="margin-bottom: 4px;"><strong>Capacity:</strong> {capacity}</div>
            <div style="margin-bottom: 4px;"><strong>Status:</strong> {status}</div>
            <div style="margin-top: 8px; font-size: 12px; color: #94a3b8;">
              Click for more details
            </div>
          </div>
        </div>
      `)

      // Add click event to polygons
      polygonSeries.mapPolygons.template.events.on("click", function(ev: any) {
        const dataItem = ev.target.dataItem
        if (dataItem) {
          const dataContext = dataItem.dataContext as any
          if (dataContext && targetRegions.includes(dataContext.id)) {
            const polygon = dataItem.get("mapPolygon")
            const centroid = polygon.visualCentroid()
            const point = chart.convert({
              longitude: centroid.longitude,
              latitude: centroid.latitude
            })
            
            setSelectedCountry(dataContext.id)
            setPopupPosition({
              x: point.x,
              y: point.y
            })
          }
        }
      })

      // Process data to add color information and country data
      polygonSeries.data.processor = window.am5.DataProcessor.new(root, {
        reusable: true
      })

      // Set up the data with colors and country information
      polygonSeries.events.on("datavalidated", function() {
        polygonSeries.mapPolygons.each(function(polygon: any) {
          const dataItem = polygon.dataItem
          const dataContext = dataItem?.dataContext as any
          if (dataContext) {
            const id = dataContext.id
            if (targetRegions.includes(id)) {
              const countryColor = countryColorMap.get(id)
              const data = countryData[id as keyof typeof countryData]
              
              polygon.set("fill", window.am5.color(countryColor))
              
              // Add country data to the dataItem for tooltip
              if (data) {
                dataItem.set("projects", data.projects)
                dataItem.set("capacity", data.capacity)
                dataItem.set("status", data.status)
              }
            } else {
              // For non-target countries, set simple tooltip
              polygon.set("tooltipHTML", `
                <div style="
                  background: white; 
                  padding: 12px; 
                  border-radius: 6px; 
                  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  font-size: 14px;
                  color: #64748b;
                ">
                  {name}
                </div>
              `)
            }
          }
        })
      })

      // Create hover and active states with dynamic colors
      polygonSeries.mapPolygons.template.onPrivate("fill", function(this: any) {
        const dataItem = this.dataItem
        if (dataItem) {
          const dataContext = dataItem.dataContext as any
          if (dataContext && targetRegions.includes(dataContext.id)) {
            const countryColor = countryColorMap.get(dataContext.id)
            this.set("fill", window.am5.color(countryColor))
            
            // Set custom hover states for colored countries (slightly lighter)
            this.states.create("hover", {
              fill: window.am5.color(countryColor + "CC") // Add transparency for hover
            })
            this.states.create("active", {
              fill: window.am5.color(countryColor)
            })
          } else {
            // Gray countries keep gray hover
            this.states.create("hover", {
              fill: window.am5.color("#d1d5db")
            })
            this.states.create("active", {
              fill: window.am5.color("#9ca3af")
            })
          }
        }
      })

      // Add zoom control
      const zoomControl = chart.set("zoomControl", window.am5map.ZoomControl.new(root, {}))
      zoomControl.homeButton.set("visible", true)

      // Set home position
      chart.set("homeZoomLevel", 1.8)
      chart.set("homeGeoPoint", { longitude: 0, latitude: 105 })

      // Set clicking on "water" to zoom out
      chart.chartContainer.get("background").events.on("click", function () {
        chart.goHome()
      })

      // Make stuff animate on load
      chart.appear(1000, 100)

      // Cleanup function
      return () => {
        root.dispose()
      }
    })
  }, [])

  // Handle click outside popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedCountry && !(event.target as Element).closest('.popup-container')) {
        setSelectedCountry(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectedCountry])

  const handleScriptLoad = () => {
    // Force re-render when scripts are loaded
    if (chartRef.current && window.am5) {
      // Trigger useEffect by updating a dependency or state if needed
    }
  }

  const getCountryInfo = (countryId: string) => {
    return countryData[countryId as keyof typeof countryData] || {
      name: countryId,
      projects: 0,
      capacity: "N/A",
      status: "No active projects"
    }
  }

  return (
    <>
      <Script src="https://cdn.amcharts.com/lib/5/index.js" strategy="beforeInteractive" onLoad={handleScriptLoad} />
      <Script src="https://cdn.amcharts.com/lib/5/map.js" strategy="beforeInteractive" />
      <Script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js" strategy="beforeInteractive" />
      <Script src="https://cdn.amcharts.com/lib/5/themes/Animated.js" strategy="beforeInteractive" />
      <div className="flex items-center justify-center w-full h-full bg-[#ffffff] relative">
        <div 
          ref={chartRef} 
          className="w-full h-screen"
          style={{
            overflowX: 'hidden',
            overflowY: 'hidden',
            pointerEvents: 'auto'
          }}
          onWheel={(e) => {
            // Prevent map from capturing scroll events
            e.preventDefault()
            // Allow the scroll to bubble up to the parent for page scrolling
            const scrollEvent = new WheelEvent('wheel', {
              deltaY: e.deltaY,
              bubbles: true
            })
            e.currentTarget.parentElement?.dispatchEvent(scrollEvent)
          }}
        />
        {selectedCountry && (
          <div 
            className="popup-container absolute bg-white rounded-xl shadow-2xl p-6 z-50 border border-gray-200"
            style={{
              left: `${popupPosition.x + 20}px`,
              top: `${popupPosition.y - 100}px`,
              minWidth: '320px',
              maxWidth: '400px',
              transform: 'translate(-50%, -50%)'
            }}
          >
            {(() => {
              const info = getCountryInfo(selectedCountry)
              return (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{info.name}</h3>
                    <button 
                      className="text-gray-400 hover:text-gray-600 text-xl font-semibold"
                      onClick={() => setSelectedCountry(null)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Active Projects:</span>
                      <span className="text-green-600 font-semibold">{info.projects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Total Capacity:</span>
                      <span className="text-blue-600 font-semibold">{info.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Status:</span>
                      <span className="text-orange-600 font-semibold">{info.status}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      Renewable energy development project with focus on sustainable power generation and grid infrastructure.
                    </p>
                  </div>
                </>
              )
            })()}
          </div>
        )}
      </div>
    </>
  )
}
