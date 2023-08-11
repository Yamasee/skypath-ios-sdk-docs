"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:9},i="Notifications",l={unversionedId:"Advanced/Alerts",id:"version-2.1.2/Advanced/Alerts",title:"Notifications",description:"Overview",source:"@site/versioned_docs/version-2.1.2/Advanced/Alerts.md",sourceDirName:"Advanced",slug:"/Advanced/Alerts",permalink:"/skypath-ios-sdk-docs/docs/Advanced/Alerts",draft:!1,tags:[],version:"2.1.2",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Logs",permalink:"/skypath-ios-sdk-docs/docs/Basic/Logs"},next:{title:"Troubleshooting",permalink:"/skypath-ios-sdk-docs/docs/Troubleshooting"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"Manually",id:"manually",level:3},{value:"Automatic",id:"automatic",level:3},{value:"Test",id:"test",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notifications"},"Notifications"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Alerts will be searched in locally cached data received per the ",(0,a.kt)("inlineCode",{parentName:"p"},"SkyPath.dataQuery")," configuration. No server request will be made here. "),(0,a.kt)("p",null,"By default, SDK will use a predefined configuration for searching turbulence alerts, see ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertQuery")," for more details. So it will be a good start to use the default values of ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertQuery()"),"."),(0,a.kt)("p",null,"There are 2 ways to get turbulence alerts:"),(0,a.kt)("h3",{id:"manually"},"Manually"),(0,a.kt)("p",null,"Manually when needed. For example, on every location update, or by time intervals or distance passed. This will have all currently found turbulence alerts despite whether they were found in the previous query. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let query = AlertQuery(altRange: altRange, route: route?.coordinates)\nlet result = SkyPath.shared.alerts(with: query)\n")),(0,a.kt)("p",null,"It blocks the current thread, so using a separate background thread is recommended."),(0,a.kt)("h3",{id:"automatic"},"Automatic"),(0,a.kt)("p",null,"Automatic monitoring. SDK will check for turbulence on every new location update. When found, an alert will be reported via ",(0,a.kt)("inlineCode",{parentName:"p"},"SkyPathDelegate.didReceiveAlert(alert:)"),". This will not report the same turbulence alert multiple times in a row, but it could report the same alert that was reported previously if there were other alerts in between. So it will report only once in cases A1 A1 A1 A1 but will report 3 times in cases A1, A2, and A1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let query = AlertQuery(altRange: altRange, route: route?.coordinates)\nSkyPath.shared.startMonitoringAlerts(with: query)\n")),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertQuery")," changes you can call only ",(0,a.kt)("inlineCode",{parentName:"p"},"startMonitoringAlerts(with:)")," with a new query without stopping it first."),(0,a.kt)("p",null,"Based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertQuery")," properties, SDK filters server reports. All ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertQuery")," properties have default values. Configure it per your needs."),(0,a.kt)("p",null,"There are two modes: route and beam."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Route mode is used when route line coordinates or a polygon are set in the query. It can use polygon or route line coordinates and width around to make a corridor.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Beam mode is used when no route is provided. It is configured by angle span, and distance from the current location."))),(0,a.kt)("p",null,"When got a turbulence alert you can show it in the app with the local iOS notification if the app is in the background."),(0,a.kt)("p",null,"It is safe to call ",(0,a.kt)("inlineCode",{parentName:"p"},"startMonitoringAlerts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stopMonitoringAlerts")," multiple times. However, it works as enable disable, so no need to call it again after starting monitoring until stopped monitoring and needs to start again. You can also check ",(0,a.kt)("inlineCode",{parentName:"p"},"SkyPath.shared.isMonitoringAlerts")," if need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"startMonitoringAlerts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"stopMonitoringAlerts"),"."),(0,a.kt)("h3",{id:"test"},"Test"),(0,a.kt)("p",null,"To test the notification you need to simulate a flight towards some turbulence area that meets ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertQuery")," criteria (see the SDK API docs for more details), so the turbulence reports will be in the query corridor altitude, proper severity, etc. The following will describe the simple steps for testing using the default ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertQuery")," parameters. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find on the map some turbulence hexagons with a Moderate severity level at an altitude of, for example, ~38,000 ft.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Simulate a flight to fly at ~38,000 ft (same hexagon turbulence report altitude, so report will be within searching altitude corridor) towards that Moderate turbulence hexagon on a distance of more than 100 NM, for example, 150-200 NM.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By default, turbulence alerts are searched in a beam mode within 100 NM ahead, so when you fly at a distance closer than 100 NM the hexagon turbulence will be in range. Make sure that based on the current speed, it will require at least a few minutes to cover this distance.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The turbulence notification should arrive. "))),(0,a.kt)("p",null,"These quick steps are valid if the default query parameters are used. Please take into account any customizations you made in ",(0,a.kt)("inlineCode",{parentName:"p"},"AlertQuery")," for testing. For example, if the severity to alert is set to Moderate-Severity and above, you'll need to find a corresponding Moderate-Severity hexagon and so on."))}c.isMDXComponent=!0}}]);