"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[5787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:4},i="Data",l={unversionedId:"Basic/Data",id:"version-2.1.0/Basic/Data",title:"Data",description:"Overview",source:"@site/versioned_docs/version-2.1.0/Basic/Data.md",sourceDirName:"Basic",slug:"/Basic/Data",permalink:"/skypath-ios-sdk-docs/docs/2.1.0/Basic/Data",draft:!1,tags:[],version:"2.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/skypath-ios-sdk-docs/docs/2.1.0/Quick Start"},next:{title:"Get Data",permalink:"/skypath-ios-sdk-docs/docs/2.1.0/Basic/Get Data"}},s={},d=[{value:"Overview",id:"overview",level:3},{value:"Offline First",id:"offline-first",level:3},{value:"Data Query",id:"data-query",level:3},{value:"Turbulence Polygons",id:"turbulence-polygons",level:3},{value:"Polygon",id:"polygon",level:3},{value:"Viewport",id:"viewport",level:3},{value:"History Time",id:"history-time",level:3},{value:"Update",id:"update",level:3},{value:"Data Types",id:"data-types",level:3},{value:"Turbulence Severity",id:"turbulence-severity",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data"},"Data"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"After extensive field trials, development & research, SkyPath decided to divide the world into 10x10 miles x 1000 feet high logical rectangular boxes, which were found to be the best balance; not to overload the pilots with information, but give enough granularity for the pilots to be able to take action and avoid CAT consequences."),(0,o.kt)("p",null,"SkyPath uses ",(0,o.kt)("a",{parentName:"p",href:"https://h3geo.org"},"H3")," hexagonal hierarchical geospatial indexing system with H3 resolution 5 to represent turbulence area by hexagons of different severity levels. SDK handles all work with H3 indexes out of the box so you don't need to do anything for it on your side. "),(0,o.kt)("p",null,"SkyPath world map tiles logical view\n",(0,o.kt)("img",{alt:"H3",src:a(4422).Z,width:"822",height:"714"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"H3",src:a(1096).Z,width:"1519",height:"211"})),(0,o.kt)("h3",{id:"offline-first"},"Offline First"),(0,o.kt)("p",null,"The SDK is offline first. All tracked turbulence data is stored offline until successfully sent to the server and the fetched data from the server is stored on the disk and accessible offline according to the description below. All configurations are stored on the disk and stay across app launches until explicit change."),(0,o.kt)("h3",{id:"data-query"},"Data Query"),(0,o.kt)("p",null,"At first request, the whole data according to ",(0,o.kt)("inlineCode",{parentName:"p"},"SkyPath.dataQuery")," is fetched and then only the new data that appeared (delta) is fetched to save network traffic. When cached data expires or a delta can't be received, the whole fresh data will be received again. "),(0,o.kt)("p",null,"There are thousands of turbulence reports around the globe. To reduce network traffic usage and keep only data that is currently needed the data fetch is separated into the different types controlled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"SkyPath.dataQuery")," object that is set initially to default values and can be updated at any time. All of the below are optional to set but recommended due to your specific flow."),(0,o.kt)("p",null,"After updating ",(0,o.kt)("inlineCode",{parentName:"p"},"SkyPath.dataQuery")," in any way, the check, if need to fetch new data, will be made. And if the change requires a new server fetch, the server request will be made immediately. No need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"SkyPath.fetchData(refresh:)"),"."),(0,o.kt)("p",null,"You can update data query at any time and in both ways by setting a property only or a whole object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.polygon = polygon\nSkyPath.shared.dataQuery = DataQuery(polygon: polygon)\n")),(0,o.kt)("h3",{id:"turbulence-polygons"},"Turbulence Polygons"),(0,o.kt)("p",null,"A planet-wide aggregated turbulence area polygons as a GeoJSON string. Used to show turbulence areas worldwide without fetching too much data. ",(0,o.kt)("inlineCode",{parentName:"p"},"DataQuery.types")," should have ",(0,o.kt)("inlineCode",{parentName:"p"},".turbulencePolygons")," to fetch it. Stored on disk, accessible offline."),(0,o.kt)("p",null,"Turbulence polygons are generated per time history separately and by default only selected time history is fetched for polygons. To enable fetching polygons for all time histories up to selected set a corresponding flag. For example, if set to fetch 4h, then to have polygons available offline for 0.5h, 1h, 2h, and 4h you need to set this flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.globalTurbulencePolygonsUpToEnabled = false\n")),(0,o.kt)("p",null,"SDK periodically fetches global turbulence polygons and calls the delegate method when receiving new data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// SkyPathDelegate\nfunc didReceiveNewTurbulencePolygons() { }\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Turbulence Polygons",src:a(3768).Z,width:"554",height:"157"})),(0,o.kt)("p",null,"Polygons data is generated per each history time separately, so if ",(0,o.kt)("inlineCode",{parentName:"p"},"SkyPath.dataHistory")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},".twoHours")," for example, polygons for ",(0,o.kt)("inlineCode",{parentName:"p"},".fourHours")," will not be available to query, because it will not be fetched from the server. It is possible also to fetch polygons for times up to selected by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"DataQuery. globalTurbulencePolygonsUpToEnabled = true"),". It means that if set to ",(0,o.kt)("inlineCode",{parentName:"p"},".fourHours")," polygons will be fetched also for ",(0,o.kt)("inlineCode",{parentName:"p"},".halfHour"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".hour"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".twoHours"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},".fourHours"),". It will allow to change time and see polygons data when offline. "),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"DataQuery.globalEnabled")," == ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," turbulence polygons will be fetched worldwide, otherwise, if ",(0,o.kt)("inlineCode",{parentName:"p"},"polygon")," is set - only inside the polygon. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"polygon"},"Polygon"),(0,o.kt)("p",null,"Polygon is a geo-fence area to fetch data inside only. The route corridor is a good example. Route line coordinates can be used to create a polygon that includes the route with a width distance. It is fetched separately from other data types and as fast as possible, and also stored offline. It is not recommended to set a worldwide polygon, use global turbulence polygons for it instead. Stored on disk, accessible offline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let polygon: [CLLocationCoordinate2D] = []\nSkyPath.shared.dataQuery.polygon = polygon\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Route Polygon",src:a(737).Z,width:"1973",height:"444"})),(0,o.kt)("h3",{id:"viewport"},"Viewport"),(0,o.kt)("p",null,"A viewport is a polygon of a visible map area in the app to fetch the right data when it's needed. Please keep in mind, that the SDK will try to fetch the data for the viewport as soon as possible after updating ",(0,o.kt)("inlineCode",{parentName:"p"},"SkyPath.shared.dataQuery.viewport"),". So to save network traffic consider updating ",(0,o.kt)("inlineCode",{parentName:"p"},"viewport")," when it's actually needed. A good place could be when the pilot moved the map manually, released the finger and the map stopped moving after animation, or when the focused map area is moved by code far from the previously focused area. Stored in memory, accessible offline until app relaunch. The previous viewport data is replaced with new viewport data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let polygon: [CLLocationCoordinate2D] = []\nSkyPath.shared.dataQuery.viewport = polygon\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Route Polygon",src:a(3975).Z,width:"1981",height:"999"})),(0,o.kt)("h3",{id:"history-time"},"History Time"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHistoryTime")," to fetch data for. It's an enum with cases: ",(0,o.kt)("inlineCode",{parentName:"p"},"halfHour"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"hour"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"twoHours"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fourHours"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sixHours"),". Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"twoHours"),". The server does some data precalculations so only the specified time frames are supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataHistoryTime = .twoHours\n")),(0,o.kt)("p",null,"When started, SDK fetches initial data from time back in time and then receives only updates since the last update."),(0,o.kt)("p",null,"It determines the data history to be fetched from the server. So if it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},".twoHours")," for example (the default one), there will be no data locally available for more than 2 hours ago. If need 4 hours of history, set ",(0,o.kt)("inlineCode",{parentName:"p"},"SkyPath.dataHistoryTime")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".fourHours"),". "),(0,o.kt)("p",null,"Changing from lower time to higher will require an API request to fetch data, when change from higher to lower time, data could be available immediately as it was already included in the higher history time fetch. Alternatively, time can be set to ",(0,o.kt)("inlineCode",{parentName:"p"},".sixTime")," once to fetch 6 hours of history data always and then just query with a different time history to show on the map. Please note, that it will increase network traffic but will allow having more data available immediately and offline during changing time history. "),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"DataUpdateFrequency"),", it's an enum with cases: ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"minimal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"medium"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fast"),". The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"fast")," (every 1 min). It controls time intervals to fetch data for global turbulence polygons, route polygons, viewport, and other data. When the data query route polygon or the viewport is changed, they are fetched as fast as possible not waiting for the next time interval. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataUpdateFrequency = .fast\n")),(0,o.kt)("p",null,"To save network traffic, you can set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," to disable periodic new data fetch from the server at all or set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"minimal")," to update with bigger time intervals.\nCan be updated at any time in the project. Value is stored across app launches until changed.\nThe default is ",(0,o.kt)("inlineCode",{parentName:"p"},"fast"),"."),(0,o.kt)("p",null,"When you change some query parameters SDK will start fetching fresh data immediately if needed.  No need to force fetch manually."),(0,o.kt)("p",null,"At some point, if need to fetch fresh data immediately (not after a data query update) call the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.fetchData(refresh: true)\n")),(0,o.kt)("p",null,"It could be helpful to know if SkyPath data was updated a long time ago (when offline for example), so check when the last time data was successfully received from the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataUpdatedAt\n")),(0,o.kt)("h3",{id:"data-types"},"Data Types"),(0,o.kt)("p",null,"SkyPath provides the following data types: ",(0,o.kt)("inlineCode",{parentName:"p"},"turbulence"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"traffic"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pireps"),". The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"turbulence")," only. Set it if you need more than just turbulence data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.types = [.turbulence, .pireps]\n")),(0,o.kt)("h3",{id:"turbulence-severity"},"Turbulence Severity"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"H3",src:a(5038).Z,width:"400",height:"86"})),(0,o.kt)("p",null,"By default, all severities of turbulence will be fetched, but you can provide a list of severities to fetch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.sevs = [.moderate, .moderateSevere]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".none")," or smooth severity means that the pilot who crossed this hexagon didn't experience any turbulence, so his report is none. Each hexagon can have multiple reports left for it because multiple flights crossed this hexagon. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"TurbulenceQuery")," has ",(0,o.kt)("inlineCode",{parentName:"p"},"aggregate = true")," which means you'll get one ",(0,o.kt)("inlineCode",{parentName:"p"},"TurbulenceItem")," per hexagon (tile) with the most severe report for this hexagon."))}c.isMDXComponent=!0},1096:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/h3-f6f4c45f0c3f50c5d32bc7566562dc0d.jpeg"},737:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/route_polygon-c8c264250283e5c1f1c1adad2717f93d.jpeg"},5038:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sevs-a65bec3da1d69e47e254ecfd279b2b8b.png"},4422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tilesgrid-c3c71d9269be70fc4bd168e03172283e.png"},3768:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/turbulence_polygons-dfae666b0ca07cd7f7e8132d760384f6.jpeg"},3975:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/viewport-df90d30f0b0341069adc1062e2ebc4c4.jpeg"}}]);