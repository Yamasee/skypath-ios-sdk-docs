"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(f,s(s({ref:t},g),{},{components:n})):r.createElement(f,s({ref:t},g))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:10},s="Logs",l={unversionedId:"Logs",id:"Logs",title:"Logs",description:"SDK has an internal logging system to help with debugging and solving issues. SDK logs are stored in their own files along with other files used by the SDK. To see more or less SkyPath logs in the app console you can change the logging level. By default, it is set to LoggingLevel.error to see only critical logs. More verbose levels can be needed only to debug the issue, otherwise, it is fine to have just a default value.",source:"@site/docs/Logs.md",sourceDirName:".",slug:"/Logs",permalink:"/skypath-ios-sdk-docs/next/Logs",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Turbulence Alerts",permalink:"/skypath-ios-sdk-docs/next/Alerts"},next:{title:"Troubleshooting",permalink:"/skypath-ios-sdk-docs/next/Troubleshooting"}},i={},c=[],g={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logs"},"Logs"),(0,o.kt)("p",null,"SDK has an internal logging system to help with debugging and solving issues. SDK logs are stored in their own files along with other files used by the SDK. To see more or less SkyPath logs in the app console you can change the logging level. By default, it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingLevel.error")," to see only critical logs. More verbose levels can be needed only to debug the issue, otherwise, it is fine to have just a default value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.logger.level = .error\n")),(0,o.kt)("p",null,"The SDK rolls out the logs files to keep only fresh ones and does not take a lot of disk size. Configuration set to default values. ",(0,o.kt)("inlineCode",{parentName:"p"},"rollingFrequency")," is checked on every log message, so a new file will be created immediately after time passed and old files will be deleted at the same time according to ",(0,o.kt)("inlineCode",{parentName:"p"},"maximumNumberOfLogFiles"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.logger.rollingFrequency = 604_800\nSkyPath.shared.logger.maximumNumberOfLogFiles = 4\n")),(0,o.kt)("p",null,"You can also disable logging completely and SDK will not write any logging information, however in this case it will be complex to debug any possible issues with the integration, so strongly discouraged."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.logger.enabled = false\n")),(0,o.kt)("p",null,"Logs help to identify the issue, so files can be exported and then sent to the SkyPath team. By the following API, you can get the logs file URL. You can for example upload it to your own issues tracking system and then inform the SkyPath team."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.logger.exportLogs { fileUrl, error in\n    // fileUrl of a file created in the temporary directory or an error if exporting failed\n}\n")))}p.isMDXComponent=!0}}]);