"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[9665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=n,h=p["".concat(i,".").concat(y)]||p[y]||d[y]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5},s="Get Data",l={unversionedId:"Basic/Get Data",id:"version-2.1.0-beta.5/Basic/Get Data",title:"Get Data",description:"Turbulence",source:"@site/versioned_docs/version-2.1.0-beta.5/Basic/Get Data.md",sourceDirName:"Basic",slug:"/Basic/Get Data",permalink:"/skypath-ios-sdk-docs/docs/Basic/Get Data",draft:!1,tags:[],version:"2.1.0-beta.5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/skypath-ios-sdk-docs/docs/Basic/Data"},next:{title:"Record Data",permalink:"/skypath-ios-sdk-docs/docs/Basic/Record Data"}},i={},c=[{value:"Turbulence",id:"turbulence",level:3},{value:"Turbulence Polygons",id:"turbulence-polygons",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-data"},"Get Data"),(0,n.kt)("h3",{id:"turbulence"},"Turbulence"),(0,n.kt)("p",null,"SDK fetches data from the server and caches it locally automatically."),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"TurbulenceQuery")," to get filtered data as a GeoJSON string or as an array of objects. It will query locally cached data received previously. It blocks the current thread, so using a separate background thread is recommended."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"let result = SkyPath.shared.turbulence(with: TurbulenceQuery())\nswitch result {\ncase .success(let turbResult):\n    let geoJSON = turbResult.geoJSON\n    // Show GeoJSON on the map\ncase .failure(let error):\n    print(error)\n}\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.shared.dataHistoryTime")," determines the data history be fetched from the server. By default, it is ",(0,n.kt)("inlineCode",{parentName:"p"},".twoHours"),". So if it was not changed and query for ",(0,n.kt)("inlineCode",{parentName:"p"},".fourHours")," for example, there will be data only up to 2 hours because no more data was fetched from the server."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://h3geo.org/docs/core-library/restable"},"H3 resolution")," 5 is used by SkyPath for the turbulence reports area. Each turbulence report covers ~252.9 square km hexagon area (as per the H3 resolutions table) and 1000 feet of altitude. Each hexagon is connected to the other so this allows for covering the area better. So one turbulence report covers for example FL370..<FL380 or FL380..<FL390."),(0,n.kt)("h3",{id:"turbulence-polygons"},"Turbulence Polygons"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"TurbulencePolygonsQuery")," to get filtered data as a GeoJSON string. It will query locally cached data received previously. It blocks the current thread, so using a separate background thread is recommended."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"let query = TurbulencePolygonsQuery(altRange: 0...52_000)\nlet result = SkyPath.shared.turbulencePolygons(with: query)\nswitch result {\ncase .success(let turbResult):\n    let geoJSON = turbResult.geoJSON\n    map.updateTurbulence(with: geoJSON)\ncase .failure(let error):\n    print(error)\n}\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SkyPath.shared.dataHistoryTime")," determines the data history be fetched from the server. By default it is ",(0,n.kt)("inlineCode",{parentName:"p"},".twoHours"),". So if it was not changed there are no polygons data for ",(0,n.kt)("inlineCode",{parentName:"p"},".fourHours")," for example. This is because polygons data is generated per each history time separately, so SDK needs to have it cached to return."))}d.isMDXComponent=!0}}]);