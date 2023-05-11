"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[6596],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6550),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=k({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var f=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},5736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),i=a(5162);const l={sidebar_position:2,title:"Install"},s="Install SkyPath iOS SDK",p={unversionedId:"Install",id:"version-2.1.1/Install",title:"Install",description:"Overview",source:"@site/versioned_docs/version-2.1.1/Install.md",sourceDirName:".",slug:"/Install",permalink:"/skypath-ios-sdk-docs/docs/Install",draft:!1,tags:[],version:"2.1.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Install"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/skypath-ios-sdk-docs/docs/"},next:{title:"Quick Start",permalink:"/skypath-ios-sdk-docs/docs/Quick Start"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Import SkyPath",id:"import-skypath",level:2},{value:"Background Mode",id:"background-mode",level:2},{value:"App Download File Size",id:"app-download-file-size",level:2}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-skypath-ios-sdk"},"Install SkyPath iOS SDK"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"SkyPath iOS SDK enables your iOS applications to interact with SkyPath using either the Swift or Objective-C programming languages. This page details how to install SkyPath in your project and get started."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before getting started, ensure your development environment meets the following prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode")," version 14.2 or higher."),(0,r.kt)("li",{parentName:"ul"},"A target of iOS 14.0 or higher.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The SkyPath iOS SDK is provided as a pre-built .xcframework written in Swift."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"spm",label:"Swift Package Manager",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://swift.org/package-manager/"},"Swift Package Manager")," is a tool for automating the distribution of Swift code. It\u2019s integrated with the Swift build system to automate the process of downloading, compiling, and linking dependencies."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add Package Dependency"),(0,r.kt)("p",{parentName:"li"},"In Xcode, select ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Packages..."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify the Repository"),(0,r.kt)("p",{parentName:"li"},"Copy and paste the following into the search/input box."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"https://github.com/Yamasee/skypath-ios-sdk\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify Options"),(0,r.kt)("p",{parentName:"li"},"In the options for the ",(0,r.kt)("inlineCode",{parentName:"p"},"skypath-ios-sdk package"),", we recommend setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dependency Rule")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Up to Next Major Version"),", and enter the current ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yamasee/skypath-ios-sdk/releases"},"SkyPath iOS SDK version"),". Then, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Package"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Package Products"),(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"SkyPathSDK"),", then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Package"),".")))),(0,r.kt)(i.Z,{value:"cocoapods",label:"CocoaPods",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://guides.cocoapods.org/using/getting-started.html"},"CocoaPods")," manages library dependencies for your Xcode projects."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the CocoaPods repositories"),(0,r.kt)("p",{parentName:"li"},"On the command line, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod repo update")," to ensure CocoaPods can access the latest available SkyPath versions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize CocoaPods for Your Project"),(0,r.kt)("p",{parentName:"li"},"If you do not already have a Podfile for your project, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod init")," in the root directory of your project to create a Podfile for your project. A Podfile allows you to specify project dependencies to CocoaPods.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add SkyPath as a Dependency in Your Podfile"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '13.0'\n\ntarget 'Project' do\n  # Comment the next line if you don't want to use dynamic frameworks\n  use_frameworks!\n      \n  pod 'SkyPath'\n  \nend\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Dependencies"),(0,r.kt)("p",{parentName:"li"},"From the command line, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," to fetch the dependencies.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the CocoaPods-Generated .xcworkspace File"),(0,r.kt)("p",{parentName:"li"},"CocoaPods generates an ",(0,r.kt)("inlineCode",{parentName:"p"},".xcworkspace")," file for you. This file has all of the dependencies configured. From now on, open this file -- not the ",(0,r.kt)("inlineCode",{parentName:"p"},".xcodeproj")," file -- to work on your project.")))),(0,r.kt)(i.Z,{value:"static",label:"Static Framework",mdxType:"TabItem"},(0,r.kt)("p",null,"Install the SkyPath SDK as a static framework."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and Extract the Framework"),(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Yamasee/skypath-ios-sdk/releases"},"latest release of SkyPath")," and extract the zip.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy Framework Into Your Project"),(0,r.kt)("p",{parentName:"li"},"Drag ",(0,r.kt)("inlineCode",{parentName:"p"},"SkyPathSDK.xcframework")," to the File Navigator of your Xcode project. Select the Copy items if needed checkbox and press Finish.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Link Binaries"),(0,r.kt)("p",{parentName:"li"},"Select your project in the Xcode File Navigator. Select your app's target and go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"General")," tab. Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Frameworks, Libraries, and Embedded Content")," tap ",(0,r.kt)("inlineCode",{parentName:"p"},"Add items"),", and choose a ",(0,r.kt)("inlineCode",{parentName:"p"},"SkyPathSDK.xcframework")," file. Make sure the added framework ",(0,r.kt)("inlineCode",{parentName:"p"},"Embed")," value is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Embed & Sign"),"."))))),(0,r.kt)("h2",{id:"import-skypath"},"Import SkyPath"),(0,r.kt)("p",null,"Add the following line at the top of your source files to use SkyPath:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import SkyPathSDK\n")),(0,r.kt)("h2",{id:"background-mode"},"Background Mode"),(0,r.kt)("p",null,"Location will be used while the app is in the background to keep track of and alert to turbulence."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add Location Updates Background Mode"),(0,r.kt)("p",{parentName:"li"},"Select your project in the Xcode File Navigator. Select your app's target and go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Signing & Capabilities")," tab. Press ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Capability")," and choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Background Modes"),". Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Background Modes")," now select ",(0,r.kt)("inlineCode",{parentName:"p"},"Location Updates"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file of the project. Add key"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Privacy - Location When In Use Usage Description\n")),(0,r.kt)("p",{parentName:"li"},"with String "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Location will be used to accurately report and get notified on turbulence ahead\n")))),(0,r.kt)("h2",{id:"app-download-file-size"},"App Download File Size"),(0,r.kt)("p",null,"SkyPathSDK should only add around 4 MB to your app's download size. The releases we distribute are significantly larger because they include support for the iOS simulator which is stripped by the App Store automatically when apps are downloaded."))}k.isMDXComponent=!0}}]);