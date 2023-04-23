"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,h=p["".concat(c,".").concat(y)]||p[y]||u[y]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="Record Data",s={unversionedId:"Basic/Record Data",id:"version-2.0.17/Basic/Record Data",title:"Record Data",description:"Overview",source:"@site/versioned_docs/version-2.0.17/Basic/Record Data.md",sourceDirName:"Basic",slug:"/Basic/Record Data",permalink:"/skypath-ios-sdk-docs/docs/Basic/Record Data",draft:!1,tags:[],version:"2.0.17",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Get Data",permalink:"/skypath-ios-sdk-docs/docs/Basic/Get Data"},next:{title:"Location",permalink:"/skypath-ios-sdk-docs/docs/Basic/Location"}},c={},l=[{value:"Overview",id:"overview",level:3},{value:"Device Position",id:"device-position",level:3},{value:"Battery",id:"battery",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"record-data"},"Record Data"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"SkyPath uses iPad sensors to record real-time turbulence data. SkyPath works in the background and senses unbiased turbulence automatically (no pilot action needed), and is normalized per A/C type."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"System",src:r(501).Z,width:"300",height:"609"})),(0,a.kt)("h3",{id:"device-position"},"Device Position"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The app auto-calibrates on its own now, we show the notification that it is calibrating and ready to record."),(0,a.kt)("li",{parentName:"ul"},"When moved around, the app stops the recording but we do not show any note, since it could be intended."),(0,a.kt)("li",{parentName:"ul"},"Following a minute in a stable position, the app recalibrates and will be ready to record again."),(0,a.kt)("li",{parentName:"ul"},"Data is not recorded when the iPad is horizontal. You can show a notification to the pilot on why it is not recording.")),(0,a.kt)("h3",{id:"battery"},"Battery"),(0,a.kt)("p",null,"SkyPath works in the background to track turbulence ahead and notify pilots. The SkyPath battery consumption is highly optimized and negligible on its own. In fact, the main iPad consumer is the screen brightness. On the ground, and after the flight, SkyPath will automatically turn off location services to conserve the battery."))}u.isMDXComponent=!0},501:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/system-0ebe5601e8894aaf9a389687aa5a36a3.png"}}]);