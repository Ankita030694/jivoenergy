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
// Generate a stable color based on a string
const getStableColor = (str)=>{
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 60%)`;
};
function HexedGlobe({ countryGeoJsonUrl = DEFAULT_GEOJSON_URL, hexPolygonResolution = 3, hexPolygonColor, onCountryClick, onCountryHover }) {
    _s();
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hoveredCountry, setHoveredCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const hoverTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Fetch GeoJSON data
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
                            "HexedGlobe.useEffect.fetchData.countryHexData": (feat)=>({
                                    ...feat,
                                    __hover: false,
                                    __color: hexPolygonColor ? typeof hexPolygonColor === 'function' ? hexPolygonColor(feat) : hexPolygonColor : getStableColor(feat.properties.ISO_A3 || feat.properties.ADMIN)
                                })
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
    // Initialize globe settings
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexedGlobe.useEffect": ()=>{
            if (globeRef.current) {
                // Auto-rotate
                globeRef.current.controls().autoRotate = true;
                globeRef.current.controls().autoRotateSpeed = 0.5;
                // Set initial camera position
                globeRef.current.pointOfView({
                    lat: 0,
                    lng: 0,
                    altitude: 2
                });
                // Enable zoom and pan
                globeRef.current.controls().enableZoom = true;
                globeRef.current.controls().enablePan = true;
            }
        }
    }["HexedGlobe.useEffect"], []);
    // Cleanup timeout on unmount
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
    // Handle country hover with debounce
    const handleCountryHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HexedGlobe.useCallback[handleCountryHover]": (country, prevCountry)=>{
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
            hoverTimeoutRef.current = setTimeout({
                "HexedGlobe.useCallback[handleCountryHover]": ()=>{
                    setCountries({
                        "HexedGlobe.useCallback[handleCountryHover]": (prevCountries)=>prevCountries.map({
                                "HexedGlobe.useCallback[handleCountryHover]": (c)=>({
                                        ...c,
                                        __hover: c === country
                                    })
                            }["HexedGlobe.useCallback[handleCountryHover]"])
                    }["HexedGlobe.useCallback[handleCountryHover]"]);
                    setHoveredCountry(country);
                    if (onCountryHover) {
                        onCountryHover(country, prevCountry);
                    }
                }
            }["HexedGlobe.useCallback[handleCountryHover]"], 50); // Small delay to prevent rapid state changes
        }
    }["HexedGlobe.useCallback[handleCountryHover]"], [
        onCountryHover
    ]);
    // Handle country click
    const handleCountryClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HexedGlobe.useCallback[handleCountryClick]": (country, event, coords)=>{
            if (onCountryClick) {
                onCountryClick(country, coords);
            }
        }
    }["HexedGlobe.useCallback[handleCountryClick]"], [
        onCountryClick
    ]);
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
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-d525c98fb358669b",
                            children: "Loading world data..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/HexedGlobe.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HexedGlobe.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "d525c98fb358669b",
                    children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HexedGlobe.tsx",
            lineNumber: 148,
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
                hexPolygonLabel: (d)=>`
          <div>
            <div><b>${d.properties.ADMIN} (${d.properties.ISO_A2})</b></div>
            <div>Population: <i>${d.properties.POP_EST?.toLocaleString()}</i></div>
          </div>
        `,
                hexPolygonColor: (d)=>d.__hover ? '#ff9900' : d.__color,
                hexPolygonAltitude: (d)=>d.__hover ? 0.02 : 0.001,
                hexPolygonResolution: hexPolygonResolution,
                hexPolygonMargin: 0.3,
                hexPolygonUseDots: true,
                hexPolygonsTransitionDuration: 200,
                onHexPolygonClick: (d, event, coords)=>handleCountryClick(d, event, coords),
                onHexPolygonHover: (d, prev)=>handleCountryHover(d, prev)
            }, void 0, false, {
                fileName: "[project]/src/components/HexedGlobe.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            hoveredCountry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                    transition: 'opacity 0.2s ease-in-out',
                    opacity: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0
                        },
                        children: hoveredCountry.properties.ADMIN
                    }, void 0, false, {
                        fileName: "[project]/src/components/HexedGlobe.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: '5px 0 0 0'
                        },
                        children: [
                            "ISO: ",
                            hoveredCountry.properties.ISO_A2
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HexedGlobe.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: '5px 0 0 0'
                        },
                        children: [
                            "Population: ",
                            hoveredCountry.properties.POP_EST?.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HexedGlobe.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HexedGlobe.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HexedGlobe.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(HexedGlobe, "5FUAoIx+EQNaLeauoM6ywrCvuHE=");
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