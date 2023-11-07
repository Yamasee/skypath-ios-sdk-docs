"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[4836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,y=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:12},i="FAQ",s={unversionedId:"FAQ",id:"version-2.1.4/FAQ",title:"FAQ",description:"How can I get an API Key?",source:"@site/versioned_docs/version-2.1.4/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/skypath-ios-sdk-docs/docs/FAQ",draft:!1,tags:[],version:"2.1.4",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/skypath-ios-sdk-docs/docs/Troubleshooting"},next:{title:"Migrate from 2.0.x to 2.1.x",permalink:"/skypath-ios-sdk-docs/docs/Migration/Migration v2.1"}},l={},p=[{value:"How can I get an API Key?",id:"how-can-i-get-an-api-key",level:3},{value:"What server domain is used by the SDK?",id:"what-server-domain-is-used-by-the-sdk",level:3},{value:"What is Battery Consumption?",id:"what-is-battery-consumption",level:3},{value:"What is Network Data Consumption?",id:"what-is-network-data-consumption",level:3},{value:"What about Security &amp; Privacy?",id:"what-about-security--privacy",level:3},{value:"How can I open the SkyPath app from my app?",id:"how-can-i-open-the-skypath-app-from-my-app",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"how-can-i-get-an-api-key"},"How can I get an API Key?"),(0,r.kt)("p",null,"Please contact us at ",(0,r.kt)("a",{parentName:"p",href:"https://skypath.io/start_trial"},"Start a trial with SkyPath"),"."),(0,r.kt)("h3",{id:"what-server-domain-is-used-by-the-sdk"},"What server domain is used by the SDK?"),(0,r.kt)("p",null,"SDK uses ",(0,r.kt)("inlineCode",{parentName:"p"},"api.skypath.io")," server domain. Please check the ",(0,r.kt)("a",{parentName:"p",href:"/skypath-ios-sdk-docs/docs/Troubleshooting#Whitelisting"},"Whitelisting")," section on how to setup a proxy server."),(0,r.kt)("h3",{id:"what-is-battery-consumption"},"What is Battery Consumption?"),(0,r.kt)("p",null,"The main battery consumer is the screen and the brightness setting. SkyPath usage is negligible on its own."),(0,r.kt)("p",null,"We performed many tests, which are also validated by the airlines we work with SkyPath operates in a power-saving mode:"),(0,r.kt)("p",null,"Ground mode -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the background - no tracking at all."),(0,r.kt)("li",{parentName:"ul"},"In the foreground - minimum accuracy to check if airborne (3km).")),(0,r.kt)("p",null,"If airborne - change accuracy to \u2018best\u2019 in both, background and foreground until landing"),(0,r.kt)("h3",{id:"what-is-network-data-consumption"},"What is Network Data Consumption?"),(0,r.kt)("p",null,"SkyPath data logic is highly optimized and works on updates and changes. In addition, the SDK supports corridor along the route to be even more conservative."),(0,r.kt)("p",null,"Network logic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Along the route, the H3 hexagons are updated every minute (configurable)."),(0,r.kt)("li",{parentName:"ul"},"Viewport fetches the data only on demand.")),(0,r.kt)("p",null,"On average SkyPath consumes a few MBs per standard flight (4 hours). If the corridor is enabled, significantly less than that."),(0,r.kt)("h3",{id:"what-about-security--privacy"},"What about Security & Privacy?"),(0,r.kt)("p",null,"Data is completely anonymized and hashed, only the aggregation is displayed without any specific information shared between airlines."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Security in the dev process"),(0,r.kt)("li",{parentName:"ul"},"Periodic pentesting"),(0,r.kt)("li",{parentName:"ul"},"Certification - SOC2 TYPE 2"),(0,r.kt)("li",{parentName:"ul"},"Our auditors are PwC")),(0,r.kt)("h3",{id:"how-can-i-open-the-skypath-app-from-my-app"},"How can I open the SkyPath app from my app?"),(0,r.kt)("p",null,"SkyPath app v5.0 and above supports the custom URL scheme ",(0,r.kt)("inlineCode",{parentName:"p"},"skypath"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'UIApplication.shared.open(URL(string: "skypath:")!) { result in\n    if result {\n        // The URL was delivered successfully!\n    }\n}\n')))}d.isMDXComponent=!0}}]);