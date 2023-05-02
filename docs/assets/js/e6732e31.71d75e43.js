"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[6594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},l="Get Data",i={unversionedId:"Basic/Get Data",id:"Basic/Get Data",title:"Get Data",description:"Turbulence",source:"@site/docs/Basic/Get Data.md",sourceDirName:"Basic",slug:"/Basic/Get Data",permalink:"/skypath-ios-sdk-docs/docs/next/Basic/Get Data",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/skypath-ios-sdk-docs/docs/next/Basic/Data"},next:{title:"Record Data",permalink:"/skypath-ios-sdk-docs/docs/next/Basic/Record Data"}},s={},u=[{value:"Turbulence",id:"turbulence",level:3},{value:"Turbulence Polygons",id:"turbulence-polygons",level:3},{value:"When Offline",id:"when-offline",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-data"},"Get Data"),(0,a.kt)("h3",{id:"turbulence"},"Turbulence"),(0,a.kt)("p",null,"SDK fetches data from the server and caches it locally automatically."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"TurbulenceQuery")," to get filtered data as a GeoJSON string or as an array of objects. It will query locally cached data received previously. It blocks the current thread, so using a separate background thread is recommended."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let result = SkyPath.shared.turbulence(with: TurbulenceQuery())\nswitch result {\ncase .success(let turbResult):\n    let geoJSON = turbResult.geoJSON\n    // Show GeoJSON on the map\ncase .failure(let error):\n    print(error)\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SkyPath.shared.dataHistoryTime")," determines the data history be fetched from the server. By default, it is ",(0,a.kt)("inlineCode",{parentName:"p"},".twoHours"),". So if it was not changed and query for ",(0,a.kt)("inlineCode",{parentName:"p"},".fourHours")," for example, there will be data only up to 2 hours because no more data was fetched from the server."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://h3geo.org/docs/core-library/restable"},"H3 resolution")," 5 is used by SkyPath for the turbulence reports area. Each turbulence report covers ~252.9 square km hexagon area (as per the H3 resolutions table) and 1000 feet of altitude. Each hexagon is connected to the other so this allows for covering the area better. So one turbulence report covers for example FL370..<FL380 or FL380..<FL390."),(0,a.kt)("p",null,"In order to get reports for specific tiles use ",(0,a.kt)("inlineCode",{parentName:"p"},"TurbulenceQuery.tiles")," property. It accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"h3")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"h3-alt")," format. Such tile id can be taken from ",(0,a.kt)("inlineCode",{parentName:"p"},"TurbulenceItem.tile")," property which is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Tile")," object with the corresponding properties ",(0,a.kt)("inlineCode",{parentName:"p"},"Tile.key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Tile.keyByCoord")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Tile.h3Hex"),". "),(0,a.kt)("h3",{id:"turbulence-polygons"},"Turbulence Polygons"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"TurbulencePolygonsQuery")," to get filtered data as a GeoJSON string. It will query locally cached data received previously. It blocks the current thread, so using a separate background thread is recommended."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let query = TurbulencePolygonsQuery(altRange: 0...52_000)\nlet result = SkyPath.shared.turbulencePolygons(with: query)\nswitch result {\ncase .success(let turbResult):\n    let geoJSON = turbResult.geoJSON\n    map.updateTurbulence(with: geoJSON)\ncase .failure(let error):\n    print(error)\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SkyPath.shared.dataHistoryTime")," determines the data history be fetched from the server. By default it is ",(0,a.kt)("inlineCode",{parentName:"p"},".twoHours"),". So if it was not changed there are no polygons data for ",(0,a.kt)("inlineCode",{parentName:"p"},".fourHours")," for example. This is because polygons data is generated per each history time separately, so SDK needs to have it cached to return."),(0,a.kt)("h3",{id:"when-offline"},"When Offline"),(0,a.kt)("p",null,"When offline there could be situations where the global turbulence polygons have been fetched but the turbulence reports are not for the specific viewport when moving the map. It is possible to use turbulence polygons data instead. Set ",(0,a.kt)("inlineCode",{parentName:"p"},"TurbulenceQuery.usePolygonsEnabled")," to use polygons data to return data in a query instead of having empty data."))}d.isMDXComponent=!0}}]);