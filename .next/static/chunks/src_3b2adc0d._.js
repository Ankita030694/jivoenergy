(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/countries.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"properties\":{\"NAME\":\"United States\",\"ISO_A3\":\"USA\"},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[-125.0,49.0],[-125.0,25.0],[-66.0,25.0],[-66.0,49.0],[-125.0,49.0]]]]}},{\"type\":\"Feature\",\"properties\":{\"NAME\":\"Canada\",\"ISO_A3\":\"CAN\"},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[-125.0,49.0],[-125.0,60.0],[-66.0,60.0],[-66.0,49.0],[-125.0,49.0]]]]}},{\"type\":\"Feature\",\"properties\":{\"NAME\":\"Mexico\",\"ISO_A3\":\"MEX\"},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[-125.0,25.0],[-125.0,15.0],[-86.0,15.0],[-86.0,25.0],[-125.0,25.0]]]]}}]}"));}}),
"[project]/src/components/HexedGlobe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HexedGlobe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleOrdinal$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/ordinal.js [app-client] (ecmascript) <export default as scaleOrdinal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Set3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeSet3$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/categorical/Set3.js [app-client] (ecmascript) <export default as schemeSet3>");
// Default GeoJSON data for countries
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countries$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/countries.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function HexedGlobe({ countryGeoJsonUrl, hexPolygonResolution = 4, hexPolygonColor, onCountryClick, onCountryHover }) {
    _s();
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hoveredCountry, setHoveredCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Color scale for countries
    const colorScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleOrdinal$3e$__["scaleOrdinal"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$categorical$2f$Set3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__schemeSet3$3e$__["schemeSet3"]);
    // Fetch or use default GeoJSON data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexedGlobe.useEffect": ()=>{
            const fetchData = {
                "HexedGlobe.useEffect.fetchData": async ()=>{
                    try {
                        const data = countryGeoJsonUrl ? await fetch(countryGeoJsonUrl).then({
                            "HexedGlobe.useEffect.fetchData": (res)=>res.json()
                        }["HexedGlobe.useEffect.fetchData"]) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$countries$2e$json__$28$json$29$__["default"];
                        setCountries(data.features);
                    } catch (error) {
                        console.error('Error loading country data:', error);
                    }
                }
            }["HexedGlobe.useEffect.fetchData"];
            fetchData();
        }
    }["HexedGlobe.useEffect"], [
        countryGeoJsonUrl
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
    // Handle country hover
    const handleCountryHover = (country, prevCountry)=>{
        setHoveredCountry(country);
        if (onCountryHover) {
            onCountryHover(country, prevCountry);
        }
    };
    // Handle country click
    const handleCountryClick = (country, event, coords)=>{
        if (onCountryClick) {
            onCountryClick(country, coords);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$globe$2e$gl$2f$dist$2f$react$2d$globe$2e$gl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: globeRef,
                globeImageUrl: "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
                bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png",
                backgroundImageUrl: "//unpkg.com/three-globe/example/img/night-sky.png",
                hexPolygonsData: countries,
                hexPolygonGeoJsonGeometry: "geometry",
                hexPolygonLabel: (d)=>d.properties.NAME,
                hexPolygonColor: hexPolygonColor || ((d)=>colorScale(d.properties.ISO_A3)),
                hexPolygonAltitude: 0.001,
                hexPolygonResolution: hexPolygonResolution,
                hexPolygonMargin: 0.1,
                hexPolygonUseDots: false,
                hexPolygonsTransitionDuration: 300,
                onHexPolygonClick: handleCountryClick,
                onHexPolygonHover: handleCountryHover
            }, void 0, false, {
                fileName: "[project]/src/components/HexedGlobe.tsx",
                lineNumber: 83,
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
                    zIndex: 1000
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0
                        },
                        children: hoveredCountry.properties.NAME
                    }, void 0, false, {
                        fileName: "[project]/src/components/HexedGlobe.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: '5px 0 0 0'
                        },
                        children: [
                            "ISO: ",
                            hoveredCountry.properties.ISO_A3
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HexedGlobe.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HexedGlobe.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HexedGlobe.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(HexedGlobe, "sqqMWZVDX7XMEq6m4BRy3+NSQYg=");
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

//# sourceMappingURL=src_3b2adc0d._.js.map