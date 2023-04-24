"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[2812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?o.createElement(f,s(s({ref:t},g),{},{components:n})):o.createElement(f,s({ref:t},g))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:10},s="Logs",i={unversionedId:"Basic/Logs",id:"version-2.1.0-beta.5/Basic/Logs",title:"Logs",description:"SDK has an internal logging system to help with debugging and solving issues. SDK logs are stored in their own files along with other files used by the SDK. To see more or less SkyPath logs in the app console you can change the logging level. By default, it is set to LoggingLevel.error to see only critical logs. More verbose levels can be needed only to debug the issue, otherwise, it is fine to have just a default value.",source:"@site/versioned_docs/version-2.1.0-beta.5/Basic/Logs.md",sourceDirName:"Basic",slug:"/Basic/Logs",permalink:"/skypath-ios-sdk-docs/docs/Basic/Logs",draft:!1,tags:[],version:"2.1.0-beta.5",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/skypath-ios-sdk-docs/docs/Basic/Test"},next:{title:"Notifications",permalink:"/skypath-ios-sdk-docs/docs/Advanced/Alerts"}},l={},c=[],g={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logs"},"Logs"),(0,r.kt)("p",null,"SDK has an internal logging system to help with debugging and solving issues. SDK logs are stored in their own files along with other files used by the SDK. To see more or less SkyPath logs in the app console you can change the logging level. By default, it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggingLevel.error")," to see only critical logs. More verbose levels can be needed only to debug the issue, otherwise, it is fine to have just a default value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.logger.level = .error\n")),(0,r.kt)("p",null,"The SDK rolls out the logs files to keep only fresh ones and does not take a lot of disk size. Configuration set to default values. ",(0,r.kt)("inlineCode",{parentName:"p"},"rollingFrequency")," is checked on every log message, so a new file will be created immediately after time passed and old files will be deleted at the same time according to ",(0,r.kt)("inlineCode",{parentName:"p"},"maximumNumberOfLogFiles"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.logger.rollingFrequency = 604_800\nSkyPath.shared.logger.maximumNumberOfLogFiles = 4\n")),(0,r.kt)("p",null,"You can also disable logging completely and SDK will not write any logging information, however in this case it will be complex to debug any possible issues with the integration, so strongly discouraged."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.logger.enabled = false\n")),(0,r.kt)("p",null,"Logs help to identify the issue, so files can be exported and then sent to the SkyPath team. By the following API, you can get the logs file URL. You can for example upload it to your own issues tracking system and then inform the SkyPath team."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.logger.exportLogs { fileUrl, error in\n    // fileUrl of a file created in the temporary directory or an error if exporting failed\n}\n")))}u.isMDXComponent=!0}}]);