"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[8065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,v=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:11},l="Live Flights",o={unversionedId:"Advanced/LiveFlights",id:"version-2.2.0/Advanced/LiveFlights",title:"Live Flights",description:"Overview",source:"@site/versioned_docs/version-2.2.0/Advanced/LiveFlights.md",sourceDirName:"Advanced",slug:"/Advanced/LiveFlights",permalink:"/skypath-ios-sdk-docs/docs/Advanced/LiveFlights",draft:!1,tags:[],version:"2.2.0",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Nowcasting",permalink:"/skypath-ios-sdk-docs/docs/Advanced/Nowcast"},next:{title:"Troubleshooting",permalink:"/skypath-ios-sdk-docs/docs/Troubleshooting"}},s={},d=[{value:"Overview",id:"overview",level:3},{value:"Setup in DataQuery",id:"setup-in-dataquery",level:3},{value:"Query",id:"query",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"live-flights"},"Live Flights"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"A live flight is a flight with the SkyPath app or SDK running on the iPad. When the device records data, the live location is periodically tracked and sent to the server. The live flight report consists of the aircraft details, coordinates, and other data, see ",(0,a.kt)("inlineCode",{parentName:"p"},"LiveFlight")," SDK API docs for more details."),(0,a.kt)("h3",{id:"setup-in-dataquery"},"Setup in DataQuery"),(0,a.kt)("p",null,"By default, the live flight data fetch is disabled. It should be included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataQuery.types")," list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.types = [.turbulence, .liveFlights]\n\n")),(0,a.kt)("p",null,"Or using a ",(0,a.kt)("inlineCode",{parentName:"p"},"DataTypeOptions.set(type:enabled:)")," function :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.dataQuery.types.set(type: .liveFlights, enabled: true)\n")),(0,a.kt)("p",null,"It can be enabled or disabled at any time. "),(0,a.kt)("p",null,"When enabled, live flights will be fetched from the server based on ",(0,a.kt)("inlineCode",{parentName:"p"},"SkyPath.dataUpdateFrequency")," time interval. Fetched data is not stored on disk and will not be available offline. Only flights that reported location during the last 3 minutes will be fetched and returned by the SDK."),(0,a.kt)("p",null,"When disabled, live flights will not be fetched from the server and will be removed when expire based on the time-to-expire interval of 3 minutes."),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("p",null,"Get live flight data using a query in locally cached memory data without making a server request."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"LiveFlightQuery")," to get filtered data as a GeoJSON string or as an array of objects."),(0,a.kt)("p",null,"It blocks the current thread, so using a separate background thread is recommended."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let query = LiveFlightQuery(\n    altRange: altRange,\n    resultOptions: .items,\n    polygon: corridor)\ndo {\n    let result = try SkyPath.shared.liveFlights(with: query).get()\n    let items = result.items\n    // Show items on the map\n} catch {\n    print(error)\n}\n")))}u.isMDXComponent=!0}}]);