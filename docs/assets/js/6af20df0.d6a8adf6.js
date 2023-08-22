"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[298],{3905:(e,A,t)=>{t.d(A,{Zo:()=>g,kt:()=>h});var n=t(7294);function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function i(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?i(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,n,r=function(e,A){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],A.indexOf(t)>=0||(r[t]=e[t]);return r}(e,A);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var q=n.createContext({}),l=function(e){var A=n.useContext(q),t=A;return e&&(t="function"==typeof e?e(A):a(a({},A),e)),t},g=function(e){var A=l(e.components);return n.createElement(q.Provider,{value:A},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},p=n.forwardRef((function(e,A){var t=e.components,r=e.mdxType,i=e.originalType,q=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=l(t),p=r,h=s["".concat(q,".").concat(p)]||s[p]||c[p]||i;return t?n.createElement(h,a(a({ref:A},g),{},{components:t})):n.createElement(h,a({ref:A},g))}));function h(e,A){var t=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var o={};for(var q in A)hasOwnProperty.call(A,q)&&(o[q]=A[q]);o.originalType=e,o[s]="string"==typeof e?e:r,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4764:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>q,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const i={slug:"/",sidebar_position:1},a=void 0,o={unversionedId:"Introduction",id:"version-2.1.3/Introduction",title:"Introduction",description:"SkyPath.io | The world\u2019s leading turbulence and auto-PIREPS data source",source:"@site/versioned_docs/version-2.1.3/Introduction.md",sourceDirName:".",slug:"/",permalink:"/skypath-ios-sdk-docs/docs/",draft:!1,tags:[],version:"2.1.3",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Install",permalink:"/skypath-ios-sdk-docs/docs/Install"}},q={},l=[{value:"SkyPath iOS SDK",id:"skypath-ios-sdk",level:2},{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Demo",id:"demo",level:2},{value:"License",id:"license",level:2}],g={toc:l},s="wrapper";function c(e){let{components:A,...i}=e;return(0,r.kt)(s,(0,n.Z)({},g,i,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SkyPath.io | The world\u2019s leading turbulence and auto-PIREPS data source",src:t(6897).Z,width:"1922",height:"300"})),(0,r.kt)("h2",{id:"skypath-ios-sdk"},"SkyPath iOS SDK"),(0,r.kt)("p",null,"The world\u2019s leading turbulence and auto-PIREPS data source.",(0,r.kt)("br",null),"\nImprove safety and operational efficiency with real-time turbulence information by automatically sensing and sharing accurate, aircraft behavior via the iPad."),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"SkyPath iOS SDK enables rapid and seamless integration of SkyPath technology into existing iOS apps. The SDK doesn\u2019t assume anything regarding the app UI, and supplies needed abstraction for SkyPath push and pull server REST API communication, turbulence measurements, and turbulence alerts."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS 14.0+"),(0,r.kt)("li",{parentName:"ul"},"Xcode 14.2+"),(0,r.kt)("li",{parentName:"ul"},"Swift 5.7+")),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"Try out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Demo")," project inside the repo. You will need just a valid SkyPath API key and enter an airline ICAO and user id in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewController"),". It shows the dev env which has partial and degraded data. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Demo App",src:t(2405).Z+"#gh-light-mode-only",width:"2000",height:"550"}),(0,r.kt)("img",{alt:"Demo App",src:t(8583).Z+"#gh-dark-mode-only",width:"2000",height:"550"})),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"Copyright \xa9 SkyPath LTD 2023. All rights reserved.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://skypath.io/terms/"},"Terms & Conditions"),"."))}c.isMDXComponent=!0},8583:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/demo_app_dark-acaeaca74e47d7e96eb138f55af75861.jpg"},2405:(e,A,t)=>{t.d(A,{Z:()=>n});const n=t.p+"assets/images/demo_app_light-1e9efca4372caa256534a8a474c12041.jpg"},6897:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,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"}}]);