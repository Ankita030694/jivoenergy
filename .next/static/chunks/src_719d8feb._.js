(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/NewGlobe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sequentialSqrt__as__scaleSequentialSqrt$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/sequential.js [app-client] (ecmascript) <export sequentialSqrt as scaleSequentialSqrt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$sequential$2d$multi$2f$YlOrRd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateYlOrRd$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js [app-client] (ecmascript) <export default as interpolateYlOrRd>");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-globe.gl/dist/react-globe.gl.mjs [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/NewGlobe.tsx",
            lineNumber: 10,
            columnNumber: 18
        }, this)
});
_c = Globe;
// Define regions to include
const INCLUDED_REGIONS = [
    'Africa',
    'Middle East',
    'Asia'
];
// Region-specific color scales
const regionColors = {
    'Africa': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sequentialSqrt__as__scaleSequentialSqrt$3e$__["scaleSequentialSqrt"])().domain([
        0,
        1
    ]).range([
        '#1a237e',
        '#0d47a1',
        '#01579b',
        '#0277bd',
        '#039be5'
    ]),
    'Middle East': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sequentialSqrt__as__scaleSequentialSqrt$3e$__["scaleSequentialSqrt"])().domain([
        0,
        1
    ]).range([
        '#006064',
        '#00838f',
        '#0097a7',
        '#00acc1',
        '#00bcd4'
    ]),
    'Asia': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sequentialSqrt__as__scaleSequentialSqrt$3e$__["scaleSequentialSqrt"])().domain([
        0,
        1
    ]).range([
        '#004d40',
        '#00695c',
        '#00796b',
        '#00897b',
        '#009688'
    ]) // Teal blues
};
const NewGlobe = ()=>{
    _s();
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        features: []
    });
    const [hoverD, setHoverD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tooltipPosition, setTooltipPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 800,
        height: 600
    });
    const globeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        lat: 30,
        lng: 45,
        altitude: 2
    });
    const [isGlobeReady, setIsGlobeReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewGlobe.useEffect": ()=>{
            // Set initial dimensions
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
            // Update dimensions on window resize
            const handleResize = {
                "NewGlobe.useEffect.handleResize": ()=>{
                    setDimensions({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["NewGlobe.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "NewGlobe.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["NewGlobe.useEffect"];
        }
    }["NewGlobe.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewGlobe.useEffect": ()=>{
            // load data
            fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson').then({
                "NewGlobe.useEffect": (res)=>res.json()
            }["NewGlobe.useEffect"]).then({
                "NewGlobe.useEffect": (data)=>{
                    // Filter countries to only include specified regions
                    const filteredFeatures = data.features.filter({
                        "NewGlobe.useEffect.filteredFeatures": (feature)=>{
                            const region = feature.properties.REGION_UN;
                            return INCLUDED_REGIONS.includes(region);
                        }
                    }["NewGlobe.useEffect.filteredFeatures"]);
                    setCountries({
                        ...data,
                        features: filteredFeatures
                    });
                }
            }["NewGlobe.useEffect"]).catch({
                "NewGlobe.useEffect": (err)=>{
                    console.error('Error loading countries data:', err);
                    setCountries({
                        features: []
                    });
                }
            }["NewGlobe.useEffect"]);
        }
    }["NewGlobe.useEffect"], []);
    const colorScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__sequentialSqrt__as__scaleSequentialSqrt$3e$__["scaleSequentialSqrt"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2d$chromatic$2f$src$2f$sequential$2d$multi$2f$YlOrRd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateYlOrRd$3e$__["interpolateYlOrRd"]);
    // GDP per capita (avoiding countries with small pop)
    const getVal = (feat)=>feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
    const maxVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewGlobe.useMemo[maxVal]": ()=>Math.max(...countries.features.map(getVal))
    }["NewGlobe.useMemo[maxVal]"], [
        countries
    ]);
    colorScale.domain([
        0,
        maxVal
    ]);
    const getPolygonColor = (d)=>{
        if (d === hoverD) return '#00b0ff' // Bright electric blue for hover
        ;
        const val = getVal(d);
        const region = d.properties.REGION_UN;
        const colorScale = regionColors[region] || regionColors['Africa'];
        return colorScale(val / maxVal);
    };
    const getPolygonSideColor = (d)=>{
        const region = d.properties.REGION_UN;
        switch(region){
            case 'Africa':
                return 'rgba(2, 119, 189, 0.15)' // Matching Africa's blue
                ;
            case 'Middle East':
                return 'rgba(0, 172, 193, 0.15)' // Matching Middle East's cyan
                ;
            case 'Asia':
                return 'rgba(0, 137, 123, 0.15)' // Matching Asia's teal
                ;
            default:
                return 'rgba(0, 100, 255, 0.15)';
        }
    };
    const handlePolygonHover = (polygon, event)=>{
        setHoverD(polygon);
        if (polygon) {
            setTooltipPosition({
                x: event.clientX,
                y: event.clientY
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewGlobe.useEffect": ()=>{
            if (isGlobeReady && globeRef.current) {
                globeRef.current.pointOfView({
                    lat: 30,
                    lng: 45,
                    altitude: 2
                });
            }
        }
    }["NewGlobe.useEffect"], [
        isGlobeReady
    ]);
    const handleZoom = (newView)=>{
        if (globeRef.current) {
            const coords = globeRef.current.getCoords(newView.lat, newView.lng, newView.altitude);
            if (coords) {
                const geoCoords = globeRef.current.toGeoCoords(coords);
                setView(geoCoords);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Globe, {
                ref: globeRef,
                onGlobeReady: ()=>setIsGlobeReady(true),
                globeImageUrl: "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg",
                backgroundImageUrl: "//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png",
                lineHoverPrecision: 0,
                polygonsData: countries.features.filter((d)=>d.properties.ISO_A2 !== 'AQ'),
                polygonAltitude: (d)=>d === hoverD ? 0.12 : 0.06,
                polygonCapColor: getPolygonColor,
                polygonSideColor: getPolygonSideColor,
                polygonStrokeColor: ()=>'rgba(255, 255, 255, 0.75)',
                polygonLabel: ({ properties: d })=>`${d.ADMIN} (${d.ISO_A2}):\nGDP: ${d.GDP_MD_EST} M$\nPopulation: ${d.POP_EST}`,
                onPolygonHover: handlePolygonHover,
                onZoom: handleZoom,
                polygonsTransitionDuration: 300,
                width: dimensions.width,
                height: dimensions.height,
                enablePointerInteraction: true,
                animateIn: false,
                rendererConfig: {
                    antialias: true,
                    alpha: true,
                    preserveDrawingBuffer: true
                },
                pointerEventsFilter: (obj)=>obj.type === 'Mesh'
            }, void 0, false, {
                fileName: "[project]/src/components/NewGlobe.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            hoverD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-[100] bg-black/80 text-white p-4 rounded-lg shadow-lg pointer-events-none",
                style: {
                    left: tooltipPosition.x + 10,
                    top: tooltipPosition.y + 10,
                    transform: 'translate(-50%, -50%)',
                    minWidth: '200px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-2",
                        children: hoverD.properties.ADMIN
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewGlobe.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "Country Code: ",
                            hoverD.properties.ISO_A2
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewGlobe.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "GDP: $",
                            hoverD.properties.GDP_MD_EST.toLocaleString(),
                            " M"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewGlobe.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "Population: ",
                            hoverD.properties.POP_EST.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewGlobe.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NewGlobe.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NewGlobe.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
};
_s(NewGlobe, "fuNPyz3/g5Ncztm4OmCfZwQCjhs=");
_c1 = NewGlobe;
const __TURBOPACK__default__export__ = NewGlobe;
var _c, _c1;
__turbopack_context__.k.register(_c, "Globe");
__turbopack_context__.k.register(_c1, "NewGlobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/page.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
}]);

//# sourceMappingURL=src_719d8feb._.js.map