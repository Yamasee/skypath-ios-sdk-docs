"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[4798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:12},o="FAQ",s={unversionedId:"FAQ",id:"version-2.1.0/FAQ",title:"FAQ",description:"How can I get an API Key?",source:"@site/versioned_docs/version-2.1.0/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/skypath-ios-sdk-docs/docs/FAQ",draft:!1,tags:[],version:"2.1.0",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/skypath-ios-sdk-docs/docs/Troubleshooting"},next:{title:"Migrate from 2.0.x to 2.1.x",permalink:"/skypath-ios-sdk-docs/docs/Migration/Migration v2.1"}},l={},u=[{value:"How can I get an API Key?",id:"how-can-i-get-an-api-key",level:3},{value:"What server domain is used by the SDK?",id:"what-server-domain-is-used-by-the-sdk",level:3},{value:"What is Battery Consumption?",id:"what-is-battery-consumption",level:3},{value:"What is Network Data Consumption?",id:"what-is-network-data-consumption",level:3},{value:"What about Security &amp; Privacy?",id:"what-about-security--privacy",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-can-i-get-an-api-key"},"How can I get an API Key?"),(0,a.kt)("p",null,"Please contact us at ",(0,a.kt)("a",{parentName:"p",href:"https://skypath.io/start_trial"},"Start a trial with SkyPath"),"."),(0,a.kt)("h3",{id:"what-server-domain-is-used-by-the-sdk"},"What server domain is used by the SDK?"),(0,a.kt)("p",null,"SDK uses ",(0,a.kt)("inlineCode",{parentName:"p"},"api.skypath.io")," server domain. Please check the ",(0,a.kt)("a",{parentName:"p",href:"/skypath-ios-sdk-docs/docs/Troubleshooting#Whitelisting"},"Whitelisting")," section on how to setup a proxy server."),(0,a.kt)("h3",{id:"what-is-battery-consumption"},"What is Battery Consumption?"),(0,a.kt)("p",null,"The main battery consumer is the screen and the brightness setting. SkyPath usage is negligible on its own."),(0,a.kt)("p",null,"We performed many tests, which are also validated by the airlines we work with SkyPath operates in a power-saving mode:"),(0,a.kt)("p",null,"Ground mode -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the background - no tracking at all."),(0,a.kt)("li",{parentName:"ul"},"In the foreground - minimum accuracy to check if airborne (3km).")),(0,a.kt)("p",null,"If airborne - change accuracy to \u2018best\u2019 in both, background and foreground until landing"),(0,a.kt)("h3",{id:"what-is-network-data-consumption"},"What is Network Data Consumption?"),(0,a.kt)("p",null,"SkyPath data logic is highly optimized and works on updates and changes. In addition, the SDK supports corridor along the route to be even more conservative."),(0,a.kt)("p",null,"Network logic:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Along the route, the H3 hexagons are updated every minute (configurable)."),(0,a.kt)("li",{parentName:"ul"},"Viewport fetches the data only on demand.")),(0,a.kt)("p",null,"On average SkyPath consumes a few MBs per standard flight (4 hours). If the corridor is enabled, significantly less than that."),(0,a.kt)("h3",{id:"what-about-security--privacy"},"What about Security & Privacy?"),(0,a.kt)("p",null,"Data is completely anonymized and hashed, only the aggregation is displayed without any specific information shared between airlines."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Security in dev process"),(0,a.kt)("li",{parentName:"ul"},"Periodic pentesting"),(0,a.kt)("li",{parentName:"ul"},"Certification - SOC2 TYPE 2"),(0,a.kt)("li",{parentName:"ul"},"Our auditors are PwC")))}d.isMDXComponent=!0}}]);