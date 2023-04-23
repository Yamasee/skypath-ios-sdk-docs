"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[37],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(o),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8514:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:7},i="Location",c={unversionedId:"Basic/Location",id:"Basic/Location",title:"Location",description:"Overview",source:"@site/docs/Basic/Location.md",sourceDirName:"Basic",slug:"/Basic/Location",permalink:"/skypath-ios-sdk-docs/docs/next/Basic/Location",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Record Data",permalink:"/skypath-ios-sdk-docs/docs/next/Basic/Record Data"},next:{title:"Test",permalink:"/skypath-ios-sdk-docs/docs/next/Basic/Test"}},l={},s=[{value:"Overview",id:"overview",level:3},{value:"Error",id:"error",level:3},{value:"Low Power Mode",id:"low-power-mode",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"location"},"Location"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"While data fetching from the server does not depend much on the location, it is important to have a good location to track turbulence data. Cellular devices have a built-in GPS and can have a stable location without an internet connection, but WiFi-only devices do not and need an internet connection or an external GPS receiver. When a device has poor location data (outdated or invalid) SDK will not track data and show the current position on the map. However, SDK tries to operate with a poor or shaky GPS signal as much as possible. SDK handles all location-related stuff out of the box."),(0,r.kt)("h3",{id:"error"},"Error"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SkyPathDelegate.locationManagerDidFail(withError:)")," could be called when SDK failed to get a location when, for example, a GPS signal is not available, or location usage permission has not been granted for the app."),(0,r.kt)("h3",{id:"low-power-mode"},"Low Power Mode"),(0,r.kt)("p",null,"Low power mode. SDK tracks the best accuracy location when in flight to correctly track turbulence data. When the location is not needed anymore (when landed) and SDK was not stopped (when the app is left in the background or foreground), SDK can stop location tracking and switch to low power mode to save battery. Location tracking will start for the next flight."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SkyPathDelegate.didUpdateLowPowerMode(_:)")," notifies that SDK updated the low power mode state. A method is optional. You can use it to notify that location tracking stopped or just do nothing and ignore it."))}u.isMDXComponent=!0}}]);