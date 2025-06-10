(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/HexedGlobe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HexedGlobe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Default GeoJSON URL - Natural Earth dataset
const DEFAULT_GEOJSON_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';
// Define regions to show hexagons for
const TARGET_REGIONS = {
    AFRICA: {
        lat: {
            min: -35,
            max: 37
        },
        lng: {
            min: -18,
            max: 55
        }
    },
    ASIA: {
        lat: {
            min: 5,
            max: 60
        },
        lng: {
            min: 50,
            max: 150
        } // Adjusted to include all of China
    },
    MIDDLE_EAST: {
        lat: {
            min: 12,
            max: 40
        },
        lng: {
            min: 25,
            max: 65
        } // Extended to ensure complete coverage
    }
};
// Check if coordinates are within target regions
const isInTargetRegion = (lat, lng)=>{
    // Normalize longitude to handle cases where it crosses the 180/-180 boundary
    const normalizedLng = (lng + 180) % 360 - 180;
    return(// Africa
    lat >= TARGET_REGIONS.AFRICA.lat.min && lat <= TARGET_REGIONS.AFRICA.lat.max && normalizedLng >= TARGET_REGIONS.AFRICA.lng.min && normalizedLng <= TARGET_REGIONS.AFRICA.lng.max || lat >= TARGET_REGIONS.ASIA.lat.min && lat <= TARGET_REGIONS.ASIA.lat.max && normalizedLng >= TARGET_REGIONS.ASIA.lng.min && normalizedLng <= TARGET_REGIONS.ASIA.lng.max || lat >= TARGET_REGIONS.MIDDLE_EAST.lat.min && lat <= TARGET_REGIONS.MIDDLE_EAST.lat.max && normalizedLng >= TARGET_REGIONS.MIDDLE_EAST.lng.min && normalizedLng <= TARGET_REGIONS.MIDDLE_EAST.lng.max);
};
// Generate a stable color based on a string
const getStableColor = (str)=>{
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 60%)`;
};
function HexedGlobe({ countryGeoJsonUrl = DEFAULT_GEOJSON_URL, hexPolygonResolution = 2, hexPolygonColor, onCountryClick, onCountryHover }) {
    _s();
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hoveredCountry, setHoveredCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const hoverTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevHoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch GeoJSON data with memoization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexedGlobe.useEffect": ()=>{
            const fetchData = {
                "HexedGlobe.useEffect.fetchData": async ()=>{
                    try {
                        setIsLoading(true);
                        const response = await fetch(countryGeoJsonUrl);
                        const data = await response.json();
                        // Transform the GeoJSON features into the format needed by the Globe
                        const countryHexData = data.features.map({
                            "HexedGlobe.useEffect.fetchData.countryHexData": (feat)=>{
                                // Calculate the center point of the country
                                const coordinates = feat.geometry.coordinates[0];
                                const center = coordinates.reduce({
                                    "HexedGlobe.useEffect.fetchData.countryHexData.center": (acc, coord)=>({
                                            lat: acc.lat + coord[1],
                                            lng: acc.lng + coord[0]
                                        })
                                }["HexedGlobe.useEffect.fetchData.countryHexData.center"], {
                                    lat: 0,
                                    lng: 0
                                });
                                const count = coordinates.length;
                                const centerLat = center.lat / count;
                                const centerLng = center.lng / count;
                                // Special case for China to ensure it's included
                                const isChina = feat.properties.ISO_A3 === 'CHN';
                                const showHexagon = isChina || isInTargetRegion(centerLat, centerLng);
                                return {
                                    ...feat,
                                    __hover: false,
                                    __showHexagon: showHexagon,
                                    __color: showHexagon ? hexPolygonColor ? typeof hexPolygonColor === 'function' ? hexPolygonColor(feat) : hexPolygonColor : getStableColor(feat.properties.ISO_A3 || feat.properties.ADMIN) : 'transparent'
                                };
                            }
                        }["HexedGlobe.useEffect.fetchData.countryHexData"]);
                        setCountries(countryHexData);
                    } catch (error) {
                        console.error('Error loading country data:', error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["HexedGlobe.useEffect.fetchData"];
            fetchData();
        }
    }["HexedGlobe.useEffect"], [
        countryGeoJsonUrl,
        hexPolygonColor
    ]);
    // Initialize globe settings with performance optimizations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexedGlobe.useEffect": ()=>{
            if (globeRef.current && !isInitialized) {
                const globe = globeRef.current;
                // Optimize controls
                globe.controls().autoRotate = true;
                globe.controls().autoRotateSpeed = 0.3;
                globe.controls().enableDamping = true;
                globe.controls().dampingFactor = 0.05;
                // Set initial camera position
                globe.pointOfView({
                    lat: 0,
                    lng: 0,
                    altitude: 2
                });
                // Enable zoom and pan with limits
                globe.controls().enableZoom = true;
                globe.controls().minDistance = 1.5;
                globe.controls().maxDistance = 4;
                globe.controls().enablePan = true;
                // Optimize rendering
                globe.renderer().setPixelRatio(Math.min(window.devicePixelRatio, 2));
                globe.renderer().setSize(window.innerWidth, window.innerHeight);
                setIsInitialized(true);
            }
        }
    }["HexedGlobe.useEffect"], [
        isInitialized
    ]);
    // Handle country hover with optimized debounce and memoization
    const handleCountryHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HexedGlobe.useCallback[handleCountryHover]": (country, prevCountry)=>{
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
            // Skip if the same country is being hovered
            if (country === prevHoveredRef.current) {
                return;
            }
            hoverTimeoutRef.current = setTimeout({
                "HexedGlobe.useCallback[handleCountryHover]": ()=>{
                    // Update the hover state directly in the data
                    if (prevHoveredRef.current) {
                        prevHoveredRef.current.__hover = false;
                    }
                    if (country) {
                        country.__hover = true;
                    }
                    prevHoveredRef.current = country;
                    // Only update state if the country has changed
                    if (country !== hoveredCountry) {
                        setHoveredCountry(country);
                        if (onCountryHover) {
                            onCountryHover(country, prevCountry);
                        }
                    }
                }
            }["HexedGlobe.useCallback[handleCountryHover]"], 100);
        }
    }["HexedGlobe.useCallback[handleCountryHover]"], [
        onCountryHover,
        hoveredCountry
    ]);
    // Handle country click with memoization
    const handleCountryClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HexedGlobe.useCallback[handleCountryClick]": (country, event, coords)=>{
            if (onCountryClick) {
                onCountryClick(country, coords);
            }
        }
    }["HexedGlobe.useCallback[handleCountryClick]"], [
        onCountryClick
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexedGlobe.useEffect": ()=>{
            return ({
                "HexedGlobe.useEffect": ()=>{
                    if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                    }
                }
            })["HexedGlobe.useEffect"];
        }
    }["HexedGlobe.useEffect"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5'
            },
            className: "jsx-d525c98fb358669b",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center'
                    },
                    className: "jsx-d525c98fb358669b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '40px',
                                height: '40px',
                                border: '4px solid #f3f3f3',
                                borderTop: '4px solid #3498db',
                                borderRadius: '50%',
                                animation: 'spin 1s linear infinite',
                                margin: '0 auto 10px'
                            },
                            className: "jsx-d525c98fb358669b"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HexedGlobe.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-d525c98fb358669b",
                            children: "Loading world data..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/HexedGlobe.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HexedGlobe.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "d525c98fb358669b",
                    children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HexedGlobe.tsx",
            lineNumber: 229,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: globeRef,
                globeImageUrl: "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg",
                hexPolygonsData: countries,
                hexPolygonGeoJsonGeometry: (d)=>d.geometry,
                hexPolygonLabel: (d)=>d.__showHexagon ? `
          <div>
            <div><b>${d.properties.ADMIN} (${d.properties.ISO_A2})</b></div>
            <div>Population: <i>${d.properties.POP_EST?.toLocaleString()}</i></div>
          </div>
        ` : '',
                hexPolygonColor: (d)=>d.__hover ? '#ff9900' : d.__color,
                hexPolygonAltitude: (d)=>d.__hover ? 0.02 : 0.001,
                hexPolygonResolution: hexPolygonResolution,
                hexPolygonMargin: 0.3,
                hexPolygonUseDots: false,
                hexPolygonCurvatureResolution: 3,
                hexPolygonsTransitionDuration: 100,
                onHexPolygonClick: (polygon, event, coords)=>polygon.__showHexagon ? handleCountryClick(polygon, event, coords) : null,
                onHexPolygonHover: (polygon, prevPolygon)=>polygon?.__showHexagon ? handleCountryHover(polygon, prevPolygon) : null,
                rendererConfig: {
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HexedGlobe.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            hoveredCountry && hoveredCountry.__showHexagon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '15px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                    transition: 'all 0.2s ease-in-out',
                    opacity: 1,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    maxWidth: '300px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0,
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: '#333',
                            marginBottom: '8px'
                        },
                        children: hoveredCountry.properties.ADMIN
                    }, void 0, false, {
                        fileName: "[project]/src/components/HexedGlobe.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            fontSize: '0.9rem',
                            color: '#666'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "ISO:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HexedGlobe.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredCountry.properties.ISO_A2
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HexedGlobe.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Population:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HexedGlobe.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    hoveredCountry.properties.POP_EST?.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HexedGlobe.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HexedGlobe.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HexedGlobe.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HexedGlobe.tsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
_s(HexedGlobe, "gqpkH6ACcjnuqA+I6Zvtg6fV+0U=");
_c = HexedGlobe;
var _c;
__turbopack_context__.k.register(_c, "HexedGlobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HexedGlobe.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/HexedGlobe.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_HexedGlobe_tsx_470b6c1b._.js.map