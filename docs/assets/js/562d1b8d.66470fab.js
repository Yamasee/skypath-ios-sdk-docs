"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[8114],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),h=r,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7763:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:11},a="Troubleshooting",s={unversionedId:"Troubleshooting",id:"version-2.1.4/Troubleshooting",title:"Troubleshooting",description:"App Store Review",source:"@site/versioned_docs/version-2.1.4/Troubleshooting.md",sourceDirName:".",slug:"/Troubleshooting",permalink:"/skypath-ios-sdk-docs/docs/Troubleshooting",draft:!1,tags:[],version:"2.1.4",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/skypath-ios-sdk-docs/docs/Advanced/Alerts"},next:{title:"FAQ",permalink:"/skypath-ios-sdk-docs/docs/FAQ"}},l={},p=[{value:"App Store Review",id:"app-store-review",level:3},{value:"Background Location Mode",id:"background-location-mode",level:4},{value:"Whitelisting",id:"whitelisting",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"app-store-review"},"App Store Review"),(0,r.kt)("h4",{id:"background-location-mode"},"Background Location Mode"),(0,r.kt)("p",null,"App Store review team rejected the app due to background location mode."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Guideline 2.5.4 - Performance - Software Requirements"),(0,r.kt)("p",{parentName:"blockquote"},"Your app declares support for location in the UIBackgroundModes key in your Info.plist file but does not have any features that require persistent location. Apps that declare support for location in the UIBackgroundModes key in your Info.plist file must-have features that require a persistent location.")),(0,r.kt)("p",null,"Apple can request a video of how the background location is used in the app. The SkyPath SDK uses it to record turbulence data and fetch the data from the server while the app is running in the background. Make a few minutes videos that show the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use a development SkyPath server environment."),(0,r.kt)("li",{parentName:"ol"},"Simulate a flight in the application, and provide a simulated location to the SkyPath SDK."),(0,r.kt)("li",{parentName:"ol"},"Simulate turbulence in the SkyPath SDK."),(0,r.kt)("li",{parentName:"ol"},"Fly for a few minutes showing the web version where the tracked turbulence will appear in the area where the flight was simulated.")),(0,r.kt)("p",null,"Feel free to contact us, if you have any issues. "),(0,r.kt)("h3",{id:"whitelisting"},"Whitelisting"),(0,r.kt)("p",null,"By default, SDK will access ",(0,r.kt)("inlineCode",{parentName:"p"},"api.skypath.io")," domain. This should be whitelisted, so SDK can receive and send data. When a domain is not whitelisted it will work as when offline. "),(0,r.kt)("p",null,"You can use a proxy server to avoid whitelisting a SkyPath domain. It should forward all HTTPS network traffic for ",(0,r.kt)("inlineCode",{parentName:"p"},"api.skypath.io")," with a wildcard ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for a path. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.skypath.io"},"docs.skypath.io")," describes APIs to get data only as it's not possible to send recorded data outside of SDK. SDK will use other not documented API endpoints, so whitelisting only those or any other fixed endpoints paths list is not sufficient."))}d.isMDXComponent=!0}}]);