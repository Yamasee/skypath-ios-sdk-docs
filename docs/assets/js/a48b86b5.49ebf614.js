"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[7573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},i="Test",s={unversionedId:"Basic/Test",id:"version-2.1.0/Basic/Test",title:"Test",description:"Recording",source:"@site/versioned_docs/version-2.1.0/Basic/Test.md",sourceDirName:"Basic",slug:"/Basic/Test",permalink:"/skypath-ios-sdk-docs/docs/Basic/Test",draft:!1,tags:[],version:"2.1.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Location",permalink:"/skypath-ios-sdk-docs/docs/Basic/Location"},next:{title:"Logs",permalink:"/skypath-ios-sdk-docs/docs/Basic/Logs"}},l={},c=[{value:"Recording",id:"recording",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test"},"Test"),(0,a.kt)("h3",{id:"recording"},"Recording"),(0,a.kt)("p",null,"Recording turbulence works only in the air, so SDK provides a simulation mode to test it on the ground."),(0,a.kt)("p",null,"Use it for ",(0,a.kt)("b",null,(0,a.kt)("inlineCode",{parentName:"p"},"DEV ENV only")),". It can be set by ",(0,a.kt)("inlineCode",{parentName:"p"},"env: .dev(serverUrl: nil)")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"SkyPath.start()"),". By default when no ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," parameter is passed, the production server is used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// Set SDK to use the simulated location that you provide instead of the real from the device\nSkyPath.shared.enableSimulation(true)\n\n// Enable SDK to send turbulence and events to the server. Otherwise simulated events will not be sent. The default is disabled.\nSkyPath.shared.enablePushSimulated(true)\n\n// Stop simulation when not needed\nSkyPath.shared.enableSimulation(false)\n")),(0,a.kt)("p",null,"Provide your own simulated location. The simplest way is to have an array of CLLocationCoordinate2D on the same in air altitude and pass it by a timer with 1-second time intervals."),(0,a.kt)("p",null,"You can use your flight simulation as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.simulatedLocation(location)\n")),(0,a.kt)("p",null,"You can have some hidden developer options to enable/disable simulation mode for QA testing. Simulation mode can be enabled/disabled at any time."),(0,a.kt)("p",null,"Trigger a turbulence event by using a timer at some time intervals, or randomly during some time, or just by having a test button or your own event to trigger. Turbulence will not be tracked on the ground, so need an air-simulated location."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.simulateTurbulence(sev: .moderate)\n")),(0,a.kt)("p",null,"If turbulence was recorded the ",(0,a.kt)("inlineCode",{parentName:"p"},"SkyPathDelegate")," method will be called."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func detectedTurbulence(_ turbulence: TurbulenceItem) { }\n")))}p.isMDXComponent=!0}}]);