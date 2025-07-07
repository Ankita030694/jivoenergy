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

      // Set themes with enhanced animations
      root.setThemes([window.am5themes_Animated.new(root)])

      // Create gradient for map background
      const backgroundGradient = window.am5.RadialGradient.new(root, {
        stops: [
          { color: window.am5.color("#0f1419") },
          { color: window.am5.color("#1a2332") },
          { color: window.am5.color("#243447") }
        ]
      })

      // Create the map chart with enhanced styling
      const chart = root.container.children.push(
        window.am5map.MapChart.new(root, {
          panX: "translateX",
          panY: "translateY",
          projection: window.am5map.geoMercator(),
          maxPanOut: 0.2,
          maxZoomLevel: 4,
          minZoomLevel: 1.3,
          centerLongitude: 350,
          centerLatitude: -20,
          zoomLevel: 1.7,
          wheelX: "none",
          wheelY: "none",
          pinchZoom: false,
          background: window.am5.Rectangle.new(root, {
            fill: backgroundGradient,
            fillOpacity: 1
          })
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

      // Enhanced primary color with variations for visual depth
      const primaryColor = "#085D36"
      const primaryColorLight = "#0a6b3f"
      const primaryColorDark = "#064f2e"
      const primaryColorGlow = "#10b981"

      // Create polygon series for all countries with enhanced styling
      const polygonSeries = chart.series.push(
        window.am5map.MapPolygonSeries.new(root, {
          geoJSON: window.am5geodata_worldLow,
          exclude: ["AQ"], // Exclude Antarctica
        }),
      )

      // Create point series for location icons with glow effect
      const pointSeries = chart.series.push(
        window.am5map.MapPointSeries.new(root, {})
      )

      // Enhanced country name labels with modern styling
      pointSeries.bullets.push(function(root: any, series: any, dataItem: any) {
        const data = dataItem.dataContext as any
        return window.am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0,
          sprite: window.am5.Label.new(root, {
            text: data.name,
            centerX: 0,
            centerY: window.am5.p50,
            fill: window.am5.color("#ffffff"),
            fontSize: "13px",
            fontWeight: "700",
            fontFamily: "Inter, system-ui, sans-serif",
            background: window.am5.RoundedRectangle.new(root, {
              fill: window.am5.LinearGradient.new(root, {
                stops: [
                  { color: window.am5.color("#085D36") },
                  { color: window.am5.color("#064f2e") }
                ]
              }),
              fillOpacity: 0.95,
              cornerRadiusTL: 6,
              cornerRadiusTR: 6,
              cornerRadiusBL: 6,
              cornerRadiusBR: 6,
              stroke: window.am5.color("#10b981"),
              strokeWidth: 1
            }),
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 12,
            paddingRight: 12,
            dx: 15
          })
        })
      })

      // Wait for polygon series to be ready
      polygonSeries.events.on("datavalidated", function() {
        // Create enhanced location icons for target countries
        targetRegions.forEach((countryId) => {
          const dataItem = polygonSeries.getDataItemById(countryId)
          if (dataItem) {
            const polygon = dataItem.get("mapPolygon")
            if (polygon) {
              const centroid = polygon.visualCentroid()
              const data = countryData[countryId as keyof typeof countryData]
              
              // Create point data with country information
              const pointData = {
                geometry: {
                  type: "Point",
                  coordinates: [centroid.longitude, centroid.latitude]
                },
                countryId: countryId,
                name: data?.name || countryId
              }
              
              // Add the point to the series
              pointSeries.data.push(pointData)
            }
          }
        })
      })

      // Enhanced point series with glowing markers
      pointSeries.bullets.push(function() {
        const container = window.am5.Container.new(root, {})
        
        // Outer glow circle
        const glowCircle = window.am5.Circle.new(root, {
          radius: 12,
          fill: window.am5.color("#10b981"),
          fillOpacity: 0.3
        })
        
        // Main marker
        const marker = window.am5.Graphics.new(root, {
          svgPath: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
          fill: window.am5.LinearGradient.new(root, {
            stops: [
              { color: window.am5.color("#10b981") },
              { color: window.am5.color("#085D36") }
            ]
          }),
          stroke: window.am5.color("#ffffff"),
          strokeWidth: 2,
          centerX: 0,
          centerY: 0,
          tooltipText: "{name}",
          cursorOverStyle: "pointer",
          scale: 1.2
        })
        
        container.children.push(glowCircle)
        container.children.push(marker)
        
        const bullet = window.am5.Bullet.new(root, {
          sprite: container
        })

        // Enhanced hover animation
        marker.states.create("hover", {
          scale: 1.4,
          fill: window.am5.color("#10b981")
        })

        // Pulsing animation for markers
        marker.animate({
          key: "scale",
          from: 1.2,
          to: 1.35,
          duration: 2000,
          loops: window.am5.Infinity,
          easing: window.am5.ease.yoyo(window.am5.ease.cubic)
        })

        // Add click event to the marker
        marker.events.on("click", function(ev: { target: { dataItem: any } }) {
          const dataItem = ev.target.dataItem
          if (dataItem) {
            const countryId = dataItem.get("countryId")
            const coordinates = dataItem.get("geometry").coordinates
            const point = chart.convert({
              longitude: coordinates[0],
              latitude: coordinates[1]
            })
            
            console.log('Marker clicked:', {
              countryId,
              coordinates,
              point,
              countryData: countryData[countryId as keyof typeof countryData]
            });
            
            setSelectedCountry(countryId)
            setPopupPosition({
              x: point.x,
              y: point.y
            })
          }
        })

        return bullet
      })

      // Enhanced polygon styling with modern colors and effects
      polygonSeries.mapPolygons.template.setAll({
        interactive: true,
        fill: window.am5.color("#2d3748"), // Dark gray for non-target countries
        stroke: window.am5.color("#4a5568"),
        strokeWidth: 0.3,
        strokeOpacity: 0.5
      })

      // Enhanced tooltip with modern glass-morphism design
      polygonSeries.mapPolygons.template.set("tooltipHTML", `
        <div style="
          background: rgba(255, 255, 255, 0.95); 
          backdrop-filter: blur(20px);
          padding: 20px; 
          border-radius: 12px; 
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.15),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.2);
          min-width: 280px;
          max-width: 350px;
          font-family: 'Inter', system-ui, sans-serif;
          border: 1px solid rgba(8, 93, 54, 0.1);
          position: relative;
          overflow: hidden;
        ">
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #085D36 0%, #10b981 50%, #085D36 100%);
          "></div>
          <div style="font-size: 18px; font-weight: 700; color: #1a202c; margin-bottom: 12px; display: flex; align-items: center;">
            <div style="
              width: 8px; 
              height: 8px; 
              background: #085D36; 
              border-radius: 50%; 
              margin-right: 8px;
              box-shadow: 0 0 8px #10b981;
            "></div>
            {name}
          </div>
          <div style="font-size: 14px; color: #4a5568; line-height: 1.6;">
            <div style="margin-bottom: 8px; display: flex; justify-content: space-between;">
              <span style="font-weight: 600;">Projects:</span> 
              <span style="color: #085D36; font-weight: 700;">{projects}</span>
            </div>
            <div style="margin-bottom: 8px; display: flex; justify-content: space-between;">
              <span style="font-weight: 600;">Capacity:</span> 
              <span style="color: #0369a1; font-weight: 700;">{capacity}</span>
            </div>
            <div style="margin-bottom: 8px; display: flex; justify-content: space-between;">
              <span style="font-weight: 600;">Status:</span> 
              <span style="color: #ea580c; font-weight: 700;">{status}</span>
            </div>
            <div style="
              margin-top: 12px; 
              padding-top: 12px; 
              border-top: 1px solid rgba(8, 93, 54, 0.1);
              font-size: 12px; 
              color: #6b7280;
              text-align: center;
            ">
              ✨ Click for detailed information
            </div>
          </div>
        </div>
      `)

      // Add click event to polygons with enhanced interaction
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
            
            console.log('Polygon clicked:', {
              countryId: dataContext.id,
              centroid,
              point,
              countryData: countryData[dataContext.id as keyof typeof countryData]
            });
            
            setSelectedCountry(dataContext.id)
            setPopupPosition({
              x: point.x,
              y: point.y
            })
          }
        }
      })

      // Process data to add enhanced colors and country data
      polygonSeries.data.processor = window.am5.DataProcessor.new(root, {
        reusable: true
      })

      // Set up enhanced data with gradients and modern styling
      polygonSeries.events.on("datavalidated", function() {
        console.log('Polygon series data validated');
        polygonSeries.mapPolygons.each(function(polygon: any) {
          const dataItem = polygon.dataItem
          const dataContext = dataItem?.dataContext as any
          if (dataContext) {
            const id = dataContext.id
            if (targetRegions.includes(id)) {
              const data = countryData[id as keyof typeof countryData]
              
              console.log('Setting up enhanced polygon:', {
                id,
                name: data?.name
              });
              
              // Create gradient fill for target countries
              const countryGradient = window.am5.LinearGradient.new(root, {
                stops: [
                  { color: window.am5.color(primaryColor) },
                  { color: window.am5.color(primaryColorLight) }
                ]
              })
              
              polygon.set("fill", countryGradient)
              polygon.set("stroke", window.am5.color("#10b981"))
              polygon.set("strokeWidth", 1)
              polygon.set("strokeOpacity", 0.8)
              
              // Add country data to the dataItem for tooltip
              if (data) {
                dataItem.set("projects", data.projects)
                dataItem.set("capacity", data.capacity)
                dataItem.set("status", data.status)
                dataItem.set("name", data.name)
              }
            } else {
              // Enhanced styling for non-target countries
              polygon.set("tooltipHTML", `
                <div style="
                  background: rgba(45, 55, 72, 0.95); 
                  backdrop-filter: blur(12px);
                  padding: 12px 16px; 
                  border-radius: 8px; 
                  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                  font-family: 'Inter', system-ui, sans-serif;
                  font-size: 14px;
                  color: #ffffff;
                  border: 1px solid rgba(255,255,255,0.1);
                ">
                  {name}
                </div>
              `)
            }
          }
        })
      })

      // Enhanced hover and active states with smooth transitions
      polygonSeries.mapPolygons.template.onPrivate("fill", function(this: any) {
        const dataItem = this.dataItem
        if (dataItem) {
          const dataContext = dataItem.dataContext as any
          if (dataContext && targetRegions.includes(dataContext.id)) {
            // Enhanced hover states for target countries
            this.states.create("hover", {
              fill: window.am5.LinearGradient.new(root, {
                stops: [
                  { color: window.am5.color("#10b981") },
                  { color: window.am5.color("#085D36") }
                ]
              }),
              stroke: window.am5.color("#34d399"),
              strokeWidth: 2,
              scale: 1.02
            })
            this.states.create("active", {
              fill: window.am5.color(primaryColorDark),
              scale: 0.98
            })
          } else {
            // Enhanced hover for non-target countries
            this.states.create("hover", {
              fill: window.am5.color("#4a5568"),
              stroke: window.am5.color("#718096"),
              strokeWidth: 1
            })
            this.states.create("active", {
              fill: window.am5.color("#2d3748")
            })
          }
        }
      })

      // Enhanced zoom control with modern styling
      const zoomControl = chart.set("zoomControl", window.am5map.ZoomControl.new(root, {
        paddingTop: 20,
        paddingRight: 20
      }))
      zoomControl.homeButton.set("visible", true)

      // Style zoom control buttons
      zoomControl.plusButton.set("background", window.am5.RoundedRectangle.new(root, {
        fill: window.am5.color("#085D36"),
        cornerRadiusTL: 6,
        cornerRadiusTR: 6,
        cornerRadiusBL: 6,
        cornerRadiusBR: 6
      }))
      zoomControl.minusButton.set("background", window.am5.RoundedRectangle.new(root, {
        fill: window.am5.color("#085D36"),
        cornerRadiusTL: 6,
        cornerRadiusTR: 6,
        cornerRadiusBL: 6,
        cornerRadiusBR: 6
      }))
      zoomControl.homeButton.set("background", window.am5.RoundedRectangle.new(root, {
        fill: window.am5.color("#085D36"),
        cornerRadiusTL: 6,
        cornerRadiusTR: 6,
        cornerRadiusBL: 6,
        cornerRadiusBR: 6
      }))

      // Keep the home (reset) position in sync with the above values
      chart.set("homeZoomLevel", 1.5)
      chart.set("homeGeoPoint", { longitude: 350, latitude: -20 })

      // Add background click handler with smooth animation
      chart.chartContainer.get("background").events.on("click", function(ev: any) {
        console.log('Background/water clicked');
        ev.event.stopPropagation();
        chart.goHome();
      })

      // Enhanced entrance animation
      chart.appear(1500, 200)

      // Cleanup function
      return () => {
        root.dispose()
      }
    })
  }, [])

  // Handle click outside popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const popupContainer = document.querySelector('.popup-container');
      const mapBackground = document.querySelector('.am5-background');
      
      console.log('Click event:', {
        target: target.className,
        isPopupClick: popupContainer?.contains(target),
        isMapBackground: mapBackground?.contains(target),
        selectedCountry
      });
      
      // Only close if clicking outside popup and not on map background
      if (selectedCountry && 
          popupContainer && 
          !popupContainer.contains(target) &&
          !mapBackground?.contains(target)) {
        console.log('Closing popup, selectedCountry:', selectedCountry);
        setSelectedCountry(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectedCountry])

  // Add debug log for selectedCountry changes
  useEffect(() => {
    console.log('selectedCountry changed:', selectedCountry);
  }, [selectedCountry]);

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
      status: "No active projects",
      flag: "https://flagcdn.com/w160/xx.png", // Default/fallback flag
      projectImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop"
    }
  }

  return (
    <>
      <Script src="https://cdn.amcharts.com/lib/5/index.js" strategy="beforeInteractive" onLoad={handleScriptLoad} />
      <Script src="https://cdn.amcharts.com/lib/5/map.js" strategy="beforeInteractive" />
      <Script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js" strategy="beforeInteractive" />
      <Script src="https://cdn.amcharts.com/lib/5/themes/Animated.js" strategy="beforeInteractive" />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        .map-container {
          background: linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #243447 100%);
          position: relative;
          overflow: hidden;
        }
        
        .map-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(8, 93, 54, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(52, 211, 153, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }
        
        .popup-container {
          font-family: 'Inter', system-ui, sans-serif;
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(8, 93, 54, 0.1);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          animation: popupSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center center;
        }
        
        @keyframes popupSlideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        .popup-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #085D36 0%, #10b981 50%, #085D36 100%);
          border-radius: 12px 12px 0 0;
        }
      `}</style>
      
      <div className="flex justify-center items-start w-full h-full relative overflow-hidden">
        <div 
          ref={chartRef} 
          className="w-full h-full map-container"
          style={{
            overflowX: 'hidden',
            overflowY: 'hidden',
            pointerEvents: 'auto',
            position: 'relative',
            zIndex: 1,
          }}
          onClick={(e) => {
            console.log('Map container clicked');
            e.stopPropagation();
          }}
          onWheel={(e) => {
            e.preventDefault()
            const scrollEvent = new WheelEvent('wheel', {
              deltaY: e.deltaY,
              bubbles: true
            })
            e.currentTarget.parentElement?.dispatchEvent(scrollEvent)
          }}
        />
        {selectedCountry && (
          <div 
            className="popup-container absolute rounded-xl p-0 overflow-hidden"
            style={{
              left: `${popupPosition.x + 20}px`,
              top: `${popupPosition.y - 100}px`,
              minWidth: '420px',
              maxWidth: '480px',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000
            }}
            onClick={(e) => {
              console.log('Popup clicked');
              e.stopPropagation();
            }}
          >
            {(() => {
              const info = getCountryInfo(selectedCountry)
              return (
                <div className="relative">
                  {/* Header with flag and title */}
                  <div className="flex justify-between items-start p-6 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img 
                          src={info.flag} 
                          alt={`${info.name} flag`}
                          className="w-10 h-7 object-cover rounded-md border-2 border-white shadow-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{info.name}</h3>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-gray-600 text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setSelectedCountry(null)}
                    >
                      ×
                    </button>
                  </div>

                  {/* Project Image */}
                  <div className="px-6 mb-6">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={info.projectImage} 
                        alt={`${info.name} renewable energy project`}
                        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                          🌱 Renewable Energy
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="px-6 space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{info.projects}</span>
                          </div>
                          <span className="font-semibold text-gray-700">Active Projects</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">⚡</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700">Total Capacity</span>
                            <div className="text-blue-600 font-bold text-lg">{info.capacity}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">📊</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700">Development Status</span>
                            <div className="text-orange-600 font-bold text-sm">{info.status}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6 pt-4">
                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        🌍 Comprehensive renewable energy development initiative focused on sustainable power generation, 
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
    </>
  )
}
