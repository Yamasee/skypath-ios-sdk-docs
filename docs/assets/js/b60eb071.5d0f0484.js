"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[5302],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),u=n,f=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return a?o.createElement(f,i(i({ref:t},p),{},{components:a})):o.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9788:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:4},i="Data",l={unversionedId:"Basic/Data",id:"version-2.2.0/Basic/Data",title:"Data",description:"Overview",source:"@site/versioned_docs/version-2.2.0/Basic/Data.md",sourceDirName:"Basic",slug:"/Basic/Data",permalink:"/skypath-ios-sdk-docs/docs/Basic/Data",draft:!1,tags:[],version:"2.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/skypath-ios-sdk-docs/docs/Quick Start"},next:{title:"Get Data",permalink:"/skypath-ios-sdk-docs/docs/Basic/Get Data"}},s={},d=[{value:"Overview",id:"overview",level:3},{value:"Offline First",id:"offline-first",level:3},{value:"Data Query",id:"data-query",level:3},{value:"Turbulence Polygons",id:"turbulence-polygons",level:3},{value:"Route Corridor (Polygon)",id:"route-corridor-polygon",level:3},{value:"Viewport",id:"viewport",level:3},{value:"History Time",id:"history-time",level:3},{value:"Update",id:"update",level:3},{value:"Data Types",id:"data-types",level:3},{value:"Turbulence Severity",id:"turbulence-severity",level:3},{value:"Color Legend",id:"color-legend",level:5}],p={toc:d},h="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data"},"Data"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"After extensive field trials, development & research, SkyPath decided to divide the world into 10x10 miles x 1000 feet high logical rectangular boxes, which were found to be the best balance; not to overload the pilots with information, but give enough granularity for the pilots to be able to take action and avoid CAT consequences."),(0,n.kt)("p",null,"SkyPath uses ",(0,n.kt)("a",{parentName:"p",href:"https://h3geo.org"},"H3")," hexagonal hierarchical geospatial indexing system with H3 resolution 5 to represent turbulence area by hexagons of different severity levels. SDK handles all work with H3 indexes out of the box so you don't need to do anything for it on your side. "),(0,n.kt)("p",null,"SkyPath world map tiles logical view\n",(0,n.kt)("img",{alt:"H3",src:a(9442).Z,width:"822",height:"714"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"H3",src:a(7018).Z+"#gh-light-mode-only",width:"2048",height:"320"}),(0,n.kt)("img",{alt:"H3",src:a(6800).Z+"#gh-dark-mode-only",width:"2048",height:"320"})),(0,n.kt)("h3",{id:"offline-first"},"Offline First"),(0,n.kt)("p",null,"The SDK is offline first. All tracked turbulence data is stored offline until successfully sent to the server and the fetched data from the server is stored on the disk and accessible offline according to the description below. All configurations are stored on the disk and stay across app launches until explicit change."),(0,n.kt)("h3",{id:"data-query"},"Data Query"),(0,n.kt)("p",null,"At first request, the whole data according to ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.dataQuery")," is fetched and then only the new data that appeared (delta) is fetched to save network traffic. When cached data expires or a delta can't be received, the whole fresh data will be received again. "),(0,n.kt)("p",null,"There are thousands of turbulence reports around the globe. To reduce network traffic usage and keep only data that is currently needed the data fetch is separated into the different types controlled by the ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.dataQuery")," object that is set initially to default values and can be updated at any time. All of the below are optional to set but recommended due to your specific flow."),(0,n.kt)("p",null,"After updating ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.dataQuery")," in any way, the check, if need to fetch new data, will be made. And if the change requires a new server fetch, the server request will be made immediately. No need to call ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.fetchData(refresh:)"),"."),(0,n.kt)("p",null,"You can update data query at any time and in both ways by setting a property only or a whole object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.types = [.turbulence, .turbulencePolygons]\nSkyPath.shared.dataQuery = DataQuery(types: [.turbulence, .turbulencePolygons])\n")),(0,n.kt)("h3",{id:"turbulence-polygons"},"Turbulence Polygons"),(0,n.kt)("p",null,"A planet-wide aggregated turbulence area polygons as a GeoJSON string. Used to show turbulence areas worldwide without fetching too much data. ",(0,n.kt)("inlineCode",{parentName:"p"},"DataQuery.types")," should have ",(0,n.kt)("inlineCode",{parentName:"p"},".turbulencePolygons")," to fetch it. Stored on disk, accessible offline."),(0,n.kt)("p",null,"Turbulence polygons are generated per time history separately and by default, only selected time history is fetched for polygons. To enable fetching polygons for all time histories up to selected set a corresponding flag. For example, if set to fetch 4h, then to have polygons available offline for 0.5h, 1h, 2h, and 4h you need to set this flag to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.globalTurbulencePolygonsUpToEnabled = false\n")),(0,n.kt)("blockquote",null,(0,n.kt)("font",{color:"FFBC09"},"\u26a0")," `globalTurbulencePolygonsUpToEnabled = true` consumes more network traffic"),(0,n.kt)("p",null,"SDK periodically fetches global turbulence polygons and calls the delegate method when receiving new data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// SkyPathDelegate\nfunc didReceiveNewTurbulencePolygons() { }\n")),(0,n.kt)("p",null,"Polygons data is generated per each history time separately, so if ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.dataHistory")," is set to ",(0,n.kt)("inlineCode",{parentName:"p"},".twoHours")," for example, polygons for ",(0,n.kt)("inlineCode",{parentName:"p"},".fourHours")," will not be available to query, because it will not be fetched from the server. It is possible also to fetch polygons for times up to selected by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"DataQuery. globalTurbulencePolygonsUpToEnabled = true"),". It means that if set to ",(0,n.kt)("inlineCode",{parentName:"p"},".fourHours")," polygons will be fetched also for ",(0,n.kt)("inlineCode",{parentName:"p"},".halfHour"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".hour"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".twoHours"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},".fourHours"),". It will allow you to change time and see polygons data when offline. "),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"DataQuery.globalEnabled")," == ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," turbulence polygons will be fetched worldwide, otherwise, if ",(0,n.kt)("inlineCode",{parentName:"p"},"polygon")," is set - only inside the polygon. The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",null,"It is recommended to keep turbulence polygons and low-level hexagons data on separate layers. Show and hide the corresponding layer when zooming in/out of the map. Here is an approximate zoom level when switching from hexagons to global polygons:"),(0,n.kt)("p",null,"3320 meters/point (1660 meters/pixel) or 10892 feet/point (5446 feet/pixel)"),(0,n.kt)("p",null,"Here is an example screenshot of the iPad Pro 9.7 inch screen with a visible area when to switch."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Turbulence Polygons",src:a(5533).Z+"#gh-light-mode-only",width:"2048",height:"1496"}),(0,n.kt)("img",{alt:"Turbulence Polygons",src:a(6912).Z+"#gh-dark-mode-only",width:"2048",height:"1496"})),(0,n.kt)("h3",{id:"route-corridor-polygon"},"Route Corridor (Polygon)"),(0,n.kt)("p",null,"Route corridor polygon is a geo-fence area to fetch data inside only. It should be a valid GeoJSON Polygon ",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6"},"RFC 7946"),". Use your route line coordinates to create a polygon with some width distance (50-150 NM is good). "),(0,n.kt)("p",null,"SDK will fetch all data in the corridor at first and then only the delta since the previous fetch in this corridor. When changing the corridor to a different then all data will be fetched in the new corridor (not delta) and then will use delta again. So the route corridor should change only when the route line changes. Changing corridors frequently will result in big network traffic use. Also, choose the corridor width according to your needs because a bigger width and bigger corridor will consume more network traffic."),(0,n.kt)("blockquote",null,(0,n.kt)("font",{color:"FFBC09"},"\u26a0")," Frequent changes and a bigger width of the corridor consume more network traffic"),(0,n.kt)("p",null,"It is fetched separately from other data types and as fast as possible, and also stored offline. Stored on disk, accessible offline."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"let polygon: [CLLocationCoordinate2D] = []\nSkyPath.shared.dataQuery.polygon = polygon\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Route Polygon",src:a(369).Z+"#gh-light-mode-only",width:"2048",height:"600"}),(0,n.kt)("img",{alt:"Route Polygon",src:a(9142).Z+"#gh-dark-mode-only",width:"2048",height:"600"})),(0,n.kt)("p",null,"According to GeoJSON Polygon ",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6"},"RFC 7946")," it should be a closed ring with up to 250 coordinates, otherwise ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.didFailToFetchNewData")," will be called with an error. It is recommended to have fewer coordinates and simplify the polygon with enough tolerance."),(0,n.kt)("p",null,"To make a route corridor and simplification of the polygon you can use the provided ",(0,n.kt)("inlineCode",{parentName:"p"},"[CLLocationCoordinate2D].buffer(widthNM:simplify:tolerance:)")," from the SDK.\nUsage example (a background thread is recommended to not block the main thread):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// where `polygon` is [CLLocationCoordinate2D]\ndataQuery.polygon = polygon.buffer(widthNM: 100, simplify: true)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("font",{color:"FFBC09"},"\u26a0")," For performance and network optimization, we recommend limiting the polygon to an area no larger in size than the route corridor in 250 NM width."),(0,n.kt)("h3",{id:"viewport"},"Viewport"),(0,n.kt)("p",null,"A viewport is a polygon of a visible map area in the app to fetch the right data when it's needed. Please keep in mind, that the SDK will try to fetch the data for the viewport as soon as possible after updating ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.shared.dataQuery.viewport"),". So to save network traffic consider updating ",(0,n.kt)("inlineCode",{parentName:"p"},"viewport")," when it's needed. "),(0,n.kt)("p",null,"All data in the viewport will be fetched at first and then a delta will be fetched only. But when changing a viewport all data will be fetched again."),(0,n.kt)("blockquote",null,(0,n.kt)("font",{color:"FFBC09"},"\u26a0")," Frequent changes and a bigger viewport consumes more network traffic"),(0,n.kt)("p",null,"A good place could be when the pilot moved the map manually, released the finger and the map stopped moving after animation, or when the focused map area is moved by code far from the previously focused area. Stored in memory, accessible offline until app relaunch. The previous viewport data is replaced with new viewport data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"let polygon: [CLLocationCoordinate2D] = []\nSkyPath.shared.dataQuery.viewport = polygon\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Route Polygon",src:a(8182).Z+"#gh-light-mode-only",width:"2048",height:"1200"}),(0,n.kt)("img",{alt:"Route Polygon",src:a(7956).Z+"#gh-dark-mode-only",width:"2048",height:"1200"})),(0,n.kt)("p",null,"The simplest viewport polygon would be a currently visible rectangle on the map like ",(0,n.kt)("inlineCode",{parentName:"p"},"[NorthWest, NorthEast, SouthEast, SouthWest, NorthWest]"),". For a more complex polygon, the following rules are applied."),(0,n.kt)("p",null,"Should be a closed ring and have max 250 coordinates, otherwise ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.didFailToFetchNewData")," will be called with an error. Simplify the polygon with enough tolerance."),(0,n.kt)("p",null,"To make a viewport and simplification of the polygon you can use the provided ",(0,n.kt)("inlineCode",{parentName:"p"},"[CLLocationCoordinate2D].buffer(widthNM:simplify:tolerance:)")," from the SDK.\nUsage example (a background thread is recommended to not block the main thread):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// where `polygon` is [CLLocationCoordinate2D]\ndataQuery.viewport = polygon.buffer(widthNM: 100, simplify: true)\n// or\ndataQuery.viewport = polygon.simplify()\n")),(0,n.kt)("blockquote",null,(0,n.kt)("font",{color:"FFBC09"},"\u26a0")," For performance and network optimization, we recommend limiting the viewport to an area no larger in size than the Continental US for example."),(0,n.kt)("h3",{id:"history-time"},"History Time"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"DataHistoryTime")," to fetch data for. It's an enum with cases: ",(0,n.kt)("inlineCode",{parentName:"p"},"halfHour"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"hour"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"twoHours"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fourHours"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"sixHours"),". The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"twoHours"),". The server does some data precalculations so only the specified time frames are supported."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataHistoryTime = .twoHours\n")),(0,n.kt)("p",null,"When started, SDK fetches initial data from time back in time and then receives only updates since the last update."),(0,n.kt)("p",null,"It determines the data history to be fetched from the server. So if it is set to ",(0,n.kt)("inlineCode",{parentName:"p"},".twoHours")," for example (the default one), there will be no data locally available for more than 2 hours ago. If need 4 hours of history, set ",(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.dataHistoryTime")," to ",(0,n.kt)("inlineCode",{parentName:"p"},".fourHours"),". "),(0,n.kt)("p",null,"Changing from lower time to higher will require an API request to fetch data, when changing from higher to lower time, data could be available immediately as it was already included in the higher history time fetch. Alternatively, time can be set to ",(0,n.kt)("inlineCode",{parentName:"p"},".sixTime")," once to fetch 6 hours of history data always and then just query with a different time history to show on the map. Please note, that it will increase network traffic but will allow having more data available immediately and offline during changing time history. "),(0,n.kt)("h3",{id:"update"},"Update"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"DataUpdateFrequency"),", it's an enum with cases: ",(0,n.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"minimal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"medium"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fast"),". The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"fast")," (every 1 min). It controls time intervals to fetch data for global turbulence polygons, route polygons, viewport, and other data. When the data query route polygon or the viewport is changed, they are fetched as fast as possible not waiting for the next time interval. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataUpdateFrequency = .fast\n")),(0,n.kt)("p",null,"To save network traffic, you can set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"none")," to disable periodic new data fetch from the server at all or set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"minimal")," to update with bigger time intervals.\nCan be updated at any time in the project. Value is stored across app launches until changed.\nThe default is ",(0,n.kt)("inlineCode",{parentName:"p"},"fast"),"."),(0,n.kt)("p",null,"When you change some query parameters SDK will start fetching fresh data immediately if needed.  No need to force fetch manually."),(0,n.kt)("p",null,"At some point, if need to fetch fresh data immediately (not after a data query update) call the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.fetchData(refresh: true)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("font",{color:"FFBC09"},"\u26a0")," Frequent `fetchData(refresh: true)` consumes more network traffic"),(0,n.kt)("p",null,"It could be helpful to know if SkyPath data was updated a long time ago (when offline for example), so check when the last time data was successfully received from the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataUpdatedAt\n")),(0,n.kt)("h3",{id:"data-types"},"Data Types"),(0,n.kt)("p",null,"SkyPath provides different data types, see ",(0,n.kt)("inlineCode",{parentName:"p"},"DataTypeOptions"),". The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"turbulence")," only. Set it if you need more than just turbulence data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.types = [.turbulence, .turbulencePolygons]\n")),(0,n.kt)("h3",{id:"turbulence-severity"},"Turbulence Severity"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"H3",src:a(2616).Z+"#gh-light-mode-only",width:"316",height:"68"}),(0,n.kt)("img",{alt:"H3",src:a(5510).Z+"#gh-dark-mode-only",width:"316",height:"68"})),(0,n.kt)("h5",{id:"color-legend"},"Color Legend"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Smooth")," ","#","FFFFFF (alpha 0.6) ",(0,n.kt)("em",{parentName:"p"},"Border")," ","#","898989 (alpha 0.8) ",(0,n.kt)("font",{color:"898989"},"\u2b21"),(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"Light")," ","#","FFF04C (alpha 0.8) ",(0,n.kt)("font",{color:"FFF04C"},"\u2b23"),(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"Light-Moderate")," ","#","FFBC09 (alpha 0.8) ",(0,n.kt)("font",{color:"FFBC09"},"\u2b23"),(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"Moderate")," ","#","FF7100 (alpha 0.8) ",(0,n.kt)("font",{color:"FF7100"},"\u2b23"),(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"Moderate-Occasionally Severe")," ","#","FF0000 (alpha 0.8) ",(0,n.kt)("font",{color:"FF0000"},"\u2b23"),(0,n.kt)("br",null)),(0,n.kt)("p",null,"By default, all severities of turbulence will be fetched, but you can provide a list of severities to fetch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.sevs = [.moderate, .moderateSevere]\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},".none")," or smooth severity means that the pilot who crossed this hexagon didn't experience any turbulence, so his report is none. Each hexagon can have multiple reports left for it because multiple flights crossed this hexagon. By default, ",(0,n.kt)("inlineCode",{parentName:"p"},"TurbulenceQuery")," has ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate = true")," which means you'll get one ",(0,n.kt)("inlineCode",{parentName:"p"},"TurbulenceItem")," per hexagon (tile) with the most severe report for this hexagon."))}c.isMDXComponent=!0},9142:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/corridor_dark-368fa34500c5a94ed76cd88561b48e16.jpg"},369:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/corridor_light-70d7edb0338df2df5d6181d25f1752c5.jpg"},6800:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/h3_dark-3b288445d522ad56de325da90154239c.jpg"},7018:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/h3_light-95b64c4b7b36585dde7034188db9e6d5.jpg"},6912:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/polygons_zoom_dark-67ba31c042ccd55e759298495e744131.jpg"},5533:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/polygons_zoom_light-734ebe8f8fca08cd3562302dc46dfb2f.jpg"},5510:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sevs_dark-30f64bb86b9f40c6171d8a4fefb378ae.svg"},2616:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sevs_light-f001a5980760c0d72e00f3ab1b08175b.svg"},9442:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/tilesgrid-10dd39483c3fadc4b7ee0a424a34c64e.png"},7956:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/viewport_dark-7469db6a6a60212ed7f7f3c037814e4c.jpg"},8182:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/viewport_light-d8b83f527a5fe7992aa3eef9aa2cbd7e.jpg"}}]);