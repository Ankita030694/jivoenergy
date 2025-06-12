"use client"
import { useEffect, useRef } from "react"
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

export default function MapViz() {
  const chartRef = useRef<HTMLDivElement>(null)

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
          centerLongitude: 45,
          centerLatitude: 15,
          zoomLevel: 1.2,
          wheelX: "none",
          wheelY: "none",
          pinchZoom: false,
        }),
      )

      // Target regions (Africa, Asia, Middle East)
      const targetRegions = [
        // Africa
        "DZ", "AO", "BJ", "BW", "BF", "BI", "CM", "CV", "CF", "TD", "KM", "CG", "CD", 
        "DJ", "EG", "GQ", "ER", "ET", "GA", "GM", "GH", "GN", "GW", "CI", "KE", "LS", 
        "LR", "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW", 
        "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "SZ", "TZ", "TG", "TN", "UG", 
        "ZM", "ZW",
        // Middle East
        "AE", "BH", "IR", "IQ", "IL", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE",
        // Asia
        "AF", "AM", "AZ", "BD", "BT", "BN", "KH", "CN", "CY", "GE", "IN", "ID", "JP", 
        "KZ", "KG", "LA", "MY", "MV", "MN", "MM", "NP", "KP", "PK", "PH", "SG", "KR", 
        "LK", "TW", "TJ", "TH", "TL", "TM", "UZ", "VN",
      ]

      // Create polygon series for all countries
      const polygonSeries = chart.series.push(
        window.am5map.MapPolygonSeries.new(root, {
          geoJSON: window.am5geodata_worldLow,
          exclude: ["AQ"], // Exclude Antarctica
        }),
      )

      // Set default template
      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        toggleKey: "active",
        interactive: true,
        fill: window.am5.color("#e5e7eb"), // Default gray
        stroke: window.am5.color("#ffffff"),
        strokeWidth: 0.5,
      })

      // Process data to add color information
      polygonSeries.data.processor = window.am5.DataProcessor.new(root, {
        reusable: true
      })

      // Set up the data with colors
      polygonSeries.events.on("datavalidated", function() {
        polygonSeries.mapPolygons.each(function(polygon: any) {
          const dataItem = polygon.dataItem
          const dataContext = dataItem?.dataContext as any
          if (dataContext) {
            const id = dataContext.id
            console.log("Country ID:", id) // Debug log
            if (targetRegions.includes(id)) {
              polygon.set("fill", window.am5.color("#095d37")) // JIVO green
              console.log("Colored green:", id) // Debug log
            }
          }
        })
      })

      // Create hover and active states
      polygonSeries.mapPolygons.template.states.create("hover", {
        fill: window.am5.color("#095d37") // Light green hover
      })

      polygonSeries.mapPolygons.template.states.create("active", {
        fill: window.am5.color("#095d37") // Dark green active
      })

      // Add specific coloring for target regions after data is loaded
      polygonSeries.mapPolygons.template.onPrivate("fill", function(this: any) {
        const dataItem = this.dataItem
        if (dataItem) {
          const dataContext = dataItem.dataContext as any
          if (dataContext && targetRegions.includes(dataContext.id)) {
            this.set("fill", window.am5.color("#095d37"))
            
            // Set custom hover states for green countries
            this.states.create("hover", {
              fill: window.am5.color("#095d37")
            })
            this.states.create("active", {
              fill: window.am5.color("#095d37")
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
      chart.set("homeZoomLevel", 1.2)
      chart.set("homeGeoPoint", { longitude: 45, latitude: 15 })

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

  const handleScriptLoad = () => {
    // Force re-render when scripts are loaded
    if (chartRef.current && window.am5) {
      // Trigger useEffect by updating a dependency or state if needed
    }
  }

  return (
    <>
      <Script src="https://cdn.amcharts.com/lib/5/index.js" strategy="beforeInteractive" onLoad={handleScriptLoad} />
      <Script src="https://cdn.amcharts.com/lib/5/map.js" strategy="beforeInteractive" />
      <Script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js" strategy="beforeInteractive" />
      <Script src="https://cdn.amcharts.com/lib/5/themes/Animated.js" strategy="beforeInteractive" />
      <div className="flex items-center justify-center w-full h-full bg-white">
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
      </div>
    </>
  )
}
