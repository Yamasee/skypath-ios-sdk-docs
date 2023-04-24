"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[5184],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:-1,title:"Migrate from 2.0.x to 2.1.x"},o="Migrate from 2.0.x to 2.1.x",p={unversionedId:"Migration/Migration v2.1",id:"Migration/Migration v2.1",title:"Migrate from 2.0.x to 2.1.x",description:"This guide is provided in order to ease the transition of existing applications using SkyPath v2.0.x to v2.1.x APIs.",source:"@site/docs/Migration/Migration v2.1.md",sourceDirName:"Migration",slug:"/Migration/Migration v2.1",permalink:"/skypath-ios-sdk-docs/docs/next/Migration/Migration v2.1",draft:!1,tags:[],version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1,title:"Migrate from 2.0.x to 2.1.x"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/skypath-ios-sdk-docs/docs/next/FAQ"},next:{title:"Migrate from 1.x to 2.0.x",permalink:"/skypath-ios-sdk-docs/docs/next/Migration/Migration v2"}},s={},l=[{value:"Breaking Changes",id:"breaking-changes",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrate-from-20x-to-21x"},"Migrate from 2.0.x to 2.1.x"),(0,i.kt)("p",null,"This guide is provided in order to ease the transition of existing applications using SkyPath v2.0.x to v2.1.x APIs."),(0,i.kt)("p",null,'Where possible, Xcode will provide an automatic "fix-it".'),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"New development environment requirements:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Xcode version 14.2 or higher."),(0,i.kt)("li",{parentName:"ul"},"A target of iOS 14.0 or higher."),(0,i.kt)("li",{parentName:"ul"},"Swift version 5.7 or higher. "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fetching data is broken down into different areas, so ",(0,i.kt)("inlineCode",{parentName:"p"},"DataAreaType")," is now introduced in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SkyPathDelegate"),". "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func didReceiveNewTurbulenceData()\n")),(0,i.kt)("p",{parentName:"li"},"is replaced with "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func didReceiveNewTurbulenceData(areaType: DataAreaType)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"H3.swift")," class has been removed so if you used it for any operations, please use other the corresponding properties or functions of ",(0,i.kt)("inlineCode",{parentName:"p"},"SkyPath")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"TurbulenceItem")," or any other classes. Let us know if you don't find a replacement. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TurbulenceItem.bbox")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"TurbulenceItem.vertices"),"."))))}d.isMDXComponent=!0}}]);