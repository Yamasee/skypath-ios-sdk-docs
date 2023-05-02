"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[5112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/",sidebar_position:1},o=void 0,s={unversionedId:"Introduction",id:"version-2.0.18/Introduction",title:"Introduction",description:"SkyPath.io | The world\u2019s leading turbulence and auto-PIREPS data source",source:"@site/versioned_docs/version-2.0.18/Introduction.md",sourceDirName:".",slug:"/",permalink:"/skypath-ios-sdk-docs/docs/2.0.18/",draft:!1,tags:[],version:"2.0.18",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Install",permalink:"/skypath-ios-sdk-docs/docs/2.0.18/Install"}},l={},c=[{value:"SkyPath iOS SDK",id:"skypath-ios-sdk",level:2},{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Demo",id:"demo",level:2},{value:"License",id:"license",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SkyPath.io | The world\u2019s leading turbulence and auto-PIREPS data source",src:n(2018).Z,width:"1922",height:"300"})),(0,a.kt)("h2",{id:"skypath-ios-sdk"},"SkyPath iOS SDK"),(0,a.kt)("p",null,"The world\u2019s leading turbulence and auto-PIREPS data source.",(0,a.kt)("br",null),"\nImprove safety and operational efficiency with real-time turbulence information by automatically sensing and sharing accurate, aircraft behavior via the iPad."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"SkyPath iOS SDK enables rapid and seamless integration of SkyPath technology into existing iOS apps. The SDK doesn\u2019t assume anything regarding the app UI, and supplies needed abstraction for SkyPath push and pull server REST API communication, turbulence measurements, and turbulence alerts."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"iOS 13.0+"),(0,a.kt)("li",{parentName:"ul"},"Xcode 13.4.1+"),(0,a.kt)("li",{parentName:"ul"},"Swift 5.6.1+")),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"Try out the ",(0,a.kt)("inlineCode",{parentName:"p"},"Demo")," project inside the repo. You will need just a valid SkyPath API key and enter an airline ICAO and user id in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewController"),". It shows the dev env which has partial and degraded data. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Demo App",src:n(8764).Z,width:"2001",height:"552"})),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Copyright \xa9 SkyPath LTD 2023. All rights reserved.\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://skypath.io/terms/"},"Terms & Conditions"),"."))}p.isMDXComponent=!0},8764:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/demo_app-5c9ece6f82f8ff7475f0884f5acd3399.jpeg"},2018:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docs-logo-4dc8d787981bb3985039522ee67af397.png"}}]);