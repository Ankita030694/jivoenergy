(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/countryData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "countryData": (()=>countryData)
});
const countryData = [
    // Africa
    {
        lat: 30.0444,
        lng: 31.2357,
        text: "Egypt",
        color: "#33FF57",
        size: 2,
        altitude: 0.1,
        label: "Cairo",
        energyData: {
            renewablePercentage: 12,
            totalEnergyProduction: "65 GW",
            mainEnergySource: "Natural Gas",
            energyConsumption: "45 GW"
        }
    },
    {
        lat: 33.5731,
        lng: -7.5898,
        text: "Morocco",
        color: "#33FF57",
        size: 2,
        altitude: 0.1,
        label: "Rabat",
        energyData: {
            renewablePercentage: 35,
            totalEnergyProduction: "10 GW",
            mainEnergySource: "Solar & Wind",
            energyConsumption: "8 GW"
        }
    },
    {
        lat: 6.5244,
        lng: 3.3792,
        text: "Nigeria",
        color: "#33FF57",
        size: 2,
        altitude: 0.1,
        label: "Lagos",
        energyData: {
            renewablePercentage: 15,
            totalEnergyProduction: "12 GW",
            mainEnergySource: "Oil & Gas",
            energyConsumption: "8 GW"
        }
    },
    {
        lat: -33.9249,
        lng: 18.4241,
        text: "South Africa",
        color: "#33FF57",
        size: 2,
        altitude: 0.1,
        label: "Cape Town",
        energyData: {
            renewablePercentage: 18,
            totalEnergyProduction: "58 GW",
            mainEnergySource: "Coal",
            energyConsumption: "50 GW"
        }
    },
    {
        lat: -1.2921,
        lng: 36.8219,
        text: "Kenya",
        color: "#33FF57",
        size: 2,
        altitude: 0.1,
        label: "Nairobi",
        energyData: {
            renewablePercentage: 73,
            totalEnergyProduction: "3 GW",
            mainEnergySource: "Geothermal",
            energyConsumption: "2.5 GW"
        }
    },
    // Middle East
    {
        lat: 24.7136,
        lng: 46.6753,
        text: "Saudi Arabia",
        color: "#FF5733",
        size: 2,
        altitude: 0.1,
        label: "Riyadh",
        energyData: {
            renewablePercentage: 0.5,
            totalEnergyProduction: "12.5 million barrels/day",
            mainEnergySource: "Oil",
            energyConsumption: "3.5 million barrels/day"
        }
    },
    {
        lat: 25.2048,
        lng: 55.2708,
        text: "UAE",
        color: "#FF5733",
        size: 2,
        altitude: 0.1,
        label: "Dubai",
        energyData: {
            renewablePercentage: 7,
            totalEnergyProduction: "3.5 million barrels/day",
            mainEnergySource: "Oil & Gas",
            energyConsumption: "1.2 million barrels/day"
        }
    },
    {
        lat: 31.9522,
        lng: 35.9336,
        text: "Jordan",
        color: "#FF5733",
        size: 2,
        altitude: 0.1,
        label: "Amman",
        energyData: {
            renewablePercentage: 20,
            totalEnergyProduction: "5 GW",
            mainEnergySource: "Natural Gas",
            energyConsumption: "4 GW"
        }
    },
    {
        lat: 33.3152,
        lng: 44.3661,
        text: "Iraq",
        color: "#FF5733",
        size: 2,
        altitude: 0.1,
        label: "Baghdad",
        energyData: {
            renewablePercentage: 2,
            totalEnergyProduction: "4.5 million barrels/day",
            mainEnergySource: "Oil",
            energyConsumption: "1.5 million barrels/day"
        }
    },
    {
        lat: 35.6892,
        lng: 51.3890,
        text: "Iran",
        color: "#FF5733",
        size: 2,
        altitude: 0.1,
        label: "Tehran",
        energyData: {
            renewablePercentage: 5,
            totalEnergyProduction: "4.2 million barrels/day",
            mainEnergySource: "Oil & Gas",
            energyConsumption: "2.1 million barrels/day"
        }
    },
    // Asia
    {
        lat: 35.6762,
        lng: 139.6503,
        text: "Japan",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Tokyo",
        energyData: {
            renewablePercentage: 20,
            totalEnergyProduction: "250 GW",
            mainEnergySource: "Nuclear",
            energyConsumption: "200 GW"
        }
    },
    {
        lat: 39.9042,
        lng: 116.4074,
        text: "China",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Beijing",
        energyData: {
            renewablePercentage: 30,
            totalEnergyProduction: "2,200 GW",
            mainEnergySource: "Coal",
            energyConsumption: "1,800 GW"
        }
    },
    {
        lat: 28.6139,
        lng: 77.2090,
        text: "India",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "New Delhi",
        energyData: {
            renewablePercentage: 25,
            totalEnergyProduction: "400 GW",
            mainEnergySource: "Coal",
            energyConsumption: "350 GW"
        }
    },
    {
        lat: 1.3521,
        lng: 103.8198,
        text: "Singapore",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Singapore",
        energyData: {
            renewablePercentage: 3,
            totalEnergyProduction: "12 GW",
            mainEnergySource: "Natural Gas",
            energyConsumption: "10 GW"
        }
    },
    {
        lat: 13.7563,
        lng: 100.5018,
        text: "Thailand",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Bangkok",
        energyData: {
            renewablePercentage: 15,
            totalEnergyProduction: "45 GW",
            mainEnergySource: "Natural Gas",
            energyConsumption: "40 GW"
        }
    },
    {
        lat: 37.5665,
        lng: 126.9780,
        text: "South Korea",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Seoul",
        energyData: {
            renewablePercentage: 7,
            totalEnergyProduction: "130 GW",
            mainEnergySource: "Nuclear",
            energyConsumption: "110 GW"
        }
    },
    {
        lat: 21.0285,
        lng: 105.8542,
        text: "Vietnam",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Hanoi",
        energyData: {
            renewablePercentage: 12,
            totalEnergyProduction: "60 GW",
            mainEnergySource: "Coal",
            energyConsumption: "50 GW"
        }
    },
    {
        lat: 14.5995,
        lng: 120.9842,
        text: "Philippines",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Manila",
        energyData: {
            renewablePercentage: 22,
            totalEnergyProduction: "25 GW",
            mainEnergySource: "Coal",
            energyConsumption: "20 GW"
        }
    },
    {
        lat: 3.1390,
        lng: 101.6869,
        text: "Malaysia",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Kuala Lumpur",
        energyData: {
            renewablePercentage: 18,
            totalEnergyProduction: "35 GW",
            mainEnergySource: "Natural Gas",
            energyConsumption: "30 GW"
        }
    },
    {
        lat: -6.2088,
        lng: 106.8456,
        text: "Indonesia",
        color: "#3357FF",
        size: 2,
        altitude: 0.1,
        label: "Jakarta",
        energyData: {
            renewablePercentage: 15,
            totalEnergyProduction: "70 GW",
            mainEnergySource: "Coal",
            energyConsumption: "60 GW"
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Globe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GlobeComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/countryData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GlobeComponent({ labelsData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countryData"], onLabelClick, onLabelRightClick, onLabelHover, hexPolygonsData = [], hexPolygonLabel = 'name', hexPolygonGeoJsonGeometry = 'geometry', hexPolygonColor = ()=>'#ffffaa', hexPolygonAltitude = 0.001, hexPolygonResolution = 3, hexPolygonMargin = 0.2, hexPolygonUseDots = false, hexPolygonCurvatureResolution = 5, hexPolygonDotResolution = 12, hexPolygonsTransitionDuration = 0, onHexPolygonClick, onHexPolygonRightClick, onHexPolygonHover }) {
    _s();
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [hoveredCountry, setHoveredCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobeComponent.useEffect": ()=>{
            if (globeRef.current) {
                // Auto-rotate
                globeRef.current.controls().autoRotate = true;
                globeRef.current.controls().autoRotateSpeed = -0.5;
                // Set initial camera position to focus on Africa
                globeRef.current.pointOfView({
                    lat: 0,
                    lng: 20,
                    altitude: 2 // Fixed zoom level
                });
                // Disable zoom and pan for fixed view
                globeRef.current.controls().enableZoom = false;
                globeRef.current.controls().enablePan = false;
                // Remove rotation constraints for free movement
                globeRef.current.controls().minPolarAngle = 0;
                globeRef.current.controls().maxPolarAngle = Math.PI;
                globeRef.current.controls().minAzimuthAngle = -Infinity;
                globeRef.current.controls().maxAzimuthAngle = Infinity;
                // Cleanup event listener
                return ({
                    "GlobeComponent.useEffect": ()=>{
                    // Remove the scroll prevention code since we want normal page scrolling
                    }
                })["GlobeComponent.useEffect"];
            }
        }
    }["GlobeComponent.useEffect"], []);
    const handleLabelHover = (label, prevLabel)=>{
        setHoveredCountry(label);
        if (onLabelHover) {
            onLabelHover(label, prevLabel);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '100%',
            height: '100%'
        },
        className: "jsx-7576889ffbec5d59" + " " + "globe-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: globeRef,
                globeImageUrl: "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
                bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png",
                backgroundImageUrl: "//unpkg.com/three-globe/example/img/night-sky.png",
                labelsData: labelsData,
                labelLat: "lat",
                labelLng: "lng",
                labelText: "text",
                labelColor: "color",
                labelSize: "size",
                labelAltitude: "altitude",
                labelLabel: "label",
                labelResolution: 3,
                labelIncludeDot: true,
                labelDotRadius: 0.1,
                labelDotOrientation: ()=>'bottom',
                labelsTransitionDuration: 1000,
                onLabelClick: onLabelClick,
                onLabelRightClick: onLabelRightClick,
                onLabelHover: handleLabelHover,
                hexPolygonsData: hexPolygonsData,
                hexPolygonLabel: hexPolygonLabel,
                hexPolygonGeoJsonGeometry: hexPolygonGeoJsonGeometry,
                hexPolygonColor: hexPolygonColor,
                hexPolygonAltitude: hexPolygonAltitude,
                hexPolygonResolution: hexPolygonResolution,
                hexPolygonMargin: hexPolygonMargin,
                hexPolygonUseDots: hexPolygonUseDots,
                hexPolygonCurvatureResolution: hexPolygonCurvatureResolution,
                hexPolygonDotResolution: hexPolygonDotResolution,
                hexPolygonsTransitionDuration: hexPolygonsTransitionDuration,
                onHexPolygonClick: onHexPolygonClick,
                onHexPolygonRightClick: onHexPolygonRightClick,
                onHexPolygonHover: onHexPolygonHover,
                htmlElementsData: labelsData,
                htmlLat: "lat",
                htmlLng: "lng",
                htmlElement: (d)=>{
                    const label = d;
                    const el = document.createElement('div');
                    el.innerHTML = `<img src="${label.image || '/logo.png'}" alt="${''}" style="width: 40px; height: 30px; border: 2px solid #0A5C35; object-fit: cover;" />`;
                    el.style.cursor = 'pointer';
                    el.addEventListener('mouseenter', ()=>handleLabelHover(label, null));
                    el.addEventListener('mouseleave', ()=>handleLabelHover(null, label));
                    return el;
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Globe.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            hoveredCountry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#0A5C35',
                    padding: '20px',
                    borderRadius: '12px',
                    maxWidth: '320px',
                    zIndex: 1000,
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(10, 92, 53, 0.15)',
                    border: '1px solid rgba(10, 92, 53, 0.1)',
                    animation: 'fadeIn 0.3s ease-out',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                },
                className: "jsx-7576889ffbec5d59",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '15px'
                        },
                        className: "jsx-7576889ffbec5d59",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: hoveredCountry.image || '/logo.png',
                                // alt={hoveredCountry}
                                style: {
                                    width: '60px',
                                    height: '45px',
                                    marginRight: '12px',
                                    border: '2px solid #0A5C35',
                                    objectFit: 'cover'
                                },
                                className: "jsx-7576889ffbec5d59"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Globe.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: '0',
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    color: '#0A5C35'
                                },
                                className: "jsx-7576889ffbec5d59"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Globe.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Globe.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this),
                    hoveredCountry.energyData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gap: '12px'
                        },
                        className: "jsx-7576889ffbec5d59",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px',
                                    backgroundColor: 'rgba(10, 92, 53, 0.05)',
                                    borderRadius: '8px'
                                },
                                className: "jsx-7576889ffbec5d59",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#0A5C35'
                                        },
                                        className: "jsx-7576889ffbec5d59",
                                        children: "Renewable Energy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Globe.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: '500',
                                            color: '#0A5C35'
                                        },
                                        className: "jsx-7576889ffbec5d59",
                                        children: [
                                            hoveredCountry.energyData.renewablePercentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Globe.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Globe.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px',
                                    backgroundColor: 'rgba(10, 92, 53, 0.05)',
                                    borderRadius: '8px'
                                },
                                className: "jsx-7576889ffbec5d59",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#0A5C35'
                                        },
                                        className: "jsx-7576889ffbec5d59",
                                        children: "Total Production"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Globe.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: '500',
                                            color: '#0A5C35'
                                        },
                                        className: "jsx-7576889ffbec5d59",
                                        children: hoveredCountry.energyData.totalEnergyProduction
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Globe.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Globe.tsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px',
                                    backgroundColor: 'rgba(10, 92, 53, 0.05)',
                                    borderRadius: '8px'
                                },
                                className: "jsx-7576889ffbec5d59",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#0A5C35'
                                        },
                                        className: "jsx-7576889ffbec5d59",
                                        children: "Main Source"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Globe.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: '500',
                                            color: '#0A5C35'
                                        },
                                        className: "jsx-7576889ffbec5d59",
                                        children: hoveredCountry.energyData.mainEnergySource
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Globe.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Globe.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px',
                                    backgroundColor: 'rgba(10, 92, 53, 0.05)',
                                    borderRadius: '8px'
                                },
                                className: "jsx-7576889ffbec5d59",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#0A5C35'
                                        },
                                        className: "jsx-7576889ffbec5d59",
                                        children: "Consumption"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Globe.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: '500',
                                            color: '#0A5C35'
                                        },
                                        className: "jsx-7576889ffbec5d59",
                                        children: hoveredCountry.energyData.energyConsumption
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Globe.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Globe.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Globe.tsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Globe.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7576889ffbec5d59",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translate(-50%,-48%)}to{opacity:1;transform:translate(-50%,-50%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Globe.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(GlobeComponent, "MwcCWi7Z9D84MRRtO46oTrpzTX0=");
_c = GlobeComponent;
var _c;
__turbopack_context__.k.register(_c, "GlobeComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Globe.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Globe.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_f981f558._.js.map