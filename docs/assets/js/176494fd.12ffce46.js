"use strict";(self.webpackChunkskypath_ios_sdk=self.webpackChunkskypath_ios_sdk||[]).push([[542],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Quick Start",l={unversionedId:"Quick Start",id:"version-2.1.0/Quick Start",title:"Quick Start",description:"Before you begin, ensure you have Installed the SkyPath iOS SDK.",source:"@site/versioned_docs/version-2.1.0/Quick Start.md",sourceDirName:".",slug:"/Quick Start",permalink:"/skypath-ios-sdk-docs/docs/Quick Start",draft:!1,tags:[],version:"2.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/skypath-ios-sdk-docs/docs/Install"},next:{title:"Data",permalink:"/skypath-ios-sdk-docs/docs/Basic/Data"}},s={},d=[{value:"1. Import SkyPathSDK",id:"1-import-skypathsdk",level:3},{value:"2. Set Delegate",id:"2-set-delegate",level:3},{value:"3. Start SDK",id:"3-start-sdk",level:3},{value:"4. Setup Aircraft",id:"4-setup-aircraft",level:3},{value:"5. Set Viewport",id:"5-set-viewport",level:3},{value:"6. Get Turbulence",id:"6-get-turbulence",level:3},{value:"7. Set Flight",id:"7-set-flight",level:3},{value:"8. Test",id:"8-test",level:3},{value:"Whitelisting",id:"whitelisting",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Before you begin, ensure you have ",(0,r.kt)("a",{parentName:"p",href:"/skypath-ios-sdk-docs/docs/Install"},"Installed the SkyPath iOS SDK"),"."),(0,r.kt)("h3",{id:"1-import-skypathsdk"},"1. Import SkyPathSDK"),(0,r.kt)("p",null,"Near the top of any Swift file that uses SkyPathSDK, add the following import statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import SkyPathSDK\n")),(0,r.kt)("h3",{id:"2-set-delegate"},"2. Set Delegate"),(0,r.kt)("p",null,"Set your ",(0,r.kt)("inlineCode",{parentName:"p"},"SkyPathDelegate")," object. All methods will be called on the main thread."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"SkyPath.shared.delegate = delegate\n")),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"SkyPathDelegate")," protocol required methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'extension Controller: SkyPathDelegate {\n\n    func didUpdateRecordingStatus(to recording: Bool) {\n        \n        print("SkyPath did \\(recording ? "start" : "stop") recording")\n    }\n    \n    func didReceiveNewTurbulenceData(areaType: DataAreaType) {\n    \n        print("SkyPath did receive new turbulence data")\n        \n        // Query turbulence using `TurbulenceQuery` and show on the map\n        // See "Get Turbulence" step of this guide\n    }\n    \n    func didChangeDevicePosition(_ inPosition: Bool, horizontal: Bool) {\n    \n        print("SkyPath device is \\(inPosition ? "" : "not ")in position and \\(horizontal ? "" : "not ")horizontal")\n                \n        // Turbulence data is not tracked when device in not in position or is horizontal. \n        // Show a notice here to properly position the device in the cradle.\n    }\n}\n')),(0,r.kt)("p",null,"These are required to implement the methods of the delegate and are enough for a quick start. You can get more details in the corresponding documentation sections."),(0,r.kt)("h3",{id:"3-start-sdk"},"3. Start SDK"),(0,r.kt)("p",null,"Start SDK. It will not track and provide data until started."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'SkyPath.shared.start(apiKey: "API_KEY", airline: "ICAO", userId: "ID", env: .dev(serverUrl: nil)) { error in\n    if let error = error {\n        print(error)\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"API_KEY")," Please contact us at ",(0,r.kt)("a",{parentName:"li",href:"https://skypath.io/start_trial"},"Start a trial with SkyPath"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ICAO")," is a company ICAO code registered in SkyPath system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID")," is any user identifier unique per company. Does not need to be registered in the SkyPath system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".dev(serverUrl: nil)")," is set to use a default SkyPath development server ",(0,r.kt)("inlineCode",{parentName:"li"},"dev-api.skypath.io"),".")),(0,r.kt)("p",null,"The completion block will be called asynchronously on the main thread. ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," will have details in case SDK can't start. If all is good ",(0,r.kt)("inlineCode",{parentName:"p"},"SkyPathDelegate.didUpdateRecordingStatus(to:)")," will be called with ",(0,r.kt)("inlineCode",{parentName:"p"},"recording: true"),"."),(0,r.kt)("h3",{id:"4-setup-aircraft"},"4. Setup Aircraft"),(0,r.kt)("p",null,"The turbulence severity level can be different for different aircraft types."),(0,r.kt)("p",null,"Set a current a/c type using supported types from the SDK after it started."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'if let aircraft = SkyPath.shared.aircraft(byId: "B737") {\n    SkyPath.shared.aircraft = aircraft\n}\n')),(0,r.kt)("h3",{id:"5-set-viewport"},"5. Set Viewport"),(0,r.kt)("p",null,"After SDK started and the aircraft was set, set a fixed US viewport to get data in. Later it needs to be changed to a dynamic visible viewport on the map. Also, a route corridor will be set. For now, just a quick viewport to test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let testUSBbox = [(45, -124), (45, -70), (33, -76), (32, -120), (45, -124)].map {\n    CLLocationCoordinate2D(latitude: $0.0, longitude: $0.1)\n}\nSkyPath.shared.dataQuery.viewport = testUSBbox\n")),(0,r.kt)("h3",{id:"6-get-turbulence"},"6. Get Turbulence"),(0,r.kt)("p",null,"SDK fetches data from the server and caches it locally automatically."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"TurbulenceQuery")," to get filtered data as a GeoJSON string or as an array of objects. It will query locally cached data received previously. It blocks the current thread, so using a separate background thread is recommended."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let result = SkyPath.shared.turbulence(with: TurbulenceQuery())\nswitch result {\ncase .success(let turbResult):\n    let geoJSON = turbResult.geoJSON\n    // Show GeoJSON on the map\ncase .failure(let error):\n    print(error)\n}\n")),(0,r.kt)("h3",{id:"7-set-flight"},"7. Set Flight"),(0,r.kt)("p",null,"To track data, flight info is required. You can still get turbulence data without setting it. Update flight data at any time and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," when a flight is ended or removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let flight = Flight(dep: "ICAO", dest: "ICAO", fnum: "FLIGHT_NUMBER")\nSkyPath.shared.setFlight(flight)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ICAO")," is the airport's ICAO code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FLIGHT_NUMBER")," is a combination of the airline's ICAO code and 1-4 digit number. When there is no such number, use ORIG-DEST-GUID, where ORIG is the ICAO code of the departure airport, DEST is the ICAO code of the destination airport and GUID is a globally unique identifier.")),(0,r.kt)("h3",{id:"8-test"},"8. Test"),(0,r.kt)("p",null,"After completing the above steps run the project and see if the data is provided correctly. You should see some turbulence data. See ",(0,r.kt)("a",{parentName:"p",href:"/skypath-ios-sdk-docs/docs/Basic/Test"},"Test")," for how to test recording. "),(0,r.kt)("h3",{id:"whitelisting"},"Whitelisting"),(0,r.kt)("p",null,"By default, SDK will access ",(0,r.kt)("inlineCode",{parentName:"p"},"api.skypath.io")," domain. This should be whitelisted, so SDK can receive and send data. When a domain is not whitelisted it will work as when offline. "),(0,r.kt)("p",null,"You can use a proxy server to avoid whitelisting a SkyPath domain. It should forward all HTTPS network traffic for ",(0,r.kt)("inlineCode",{parentName:"p"},"api.skypath.io")," with a wildcard ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for a path. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.skypath.io"},"docs.skypath.io")," describes APIs to get data only as it's not possible to send recorded data outside of SDK. SDK will use other not documented API endpoints, so whitelisting only those or any other fixed endpoints paths list is not sufficient."))}c.isMDXComponent=!0}}]);