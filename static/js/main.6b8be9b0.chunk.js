(this["webpackJsonpproject5-frank-hoedl"]=this["webpackJsonpproject5-frank-hoedl"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/noun_Rain_1518109.eb81db1a.svg"},19:function(e,t,n){e.exports=n.p+"static/media/bkgdBuilding.edd1fb03.svg"},20:function(e,t,n){e.exports=n.p+"static/media/midBuilding.7ea0b3a0.svg"},21:function(e,t,n){e.exports=n.p+"static/media/foreBuilding.5148a2e4.svg"},22:function(e,t,n){e.exports=n(45)},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=(n(27),n(1)),l=n(2),i=n(4),u=n(3),m=n(18),p=n.n(m),d=n(19),h=n.n(d),b=n(20),f=n.n(b),v=n(21),w=n.n(v),g=[{iSRC:h.a},{iSRC:f.a},{iSRC:w.a},{iCondition:"Rain",iAlt:"Rain Icon",iSrc:p.a},{iCondition:"Cloud",iAlt:"Cloud Icon",iSRC:"Assets/noun_Cloud_1518102.svg"},{iCondition:"Cloud w Wind",iAlt:"Cloud with Wind Icon",iSRC:"Assets/noun_Wind_1518101_Blue.svg"}],E=(n(8),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:g[0].iSRC,alt:"Background Building",className:"bkgdElements bkgd"}),r.a.createElement("img",{src:g[1].iSRC,alt:"Background Building",className:"bkgdElements mid"}),r.a.createElement("img",{src:g[2].iSRC,alt:"Background Building",className:"bkgdElements fore"}))}}]),n}(a.Component)),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleUserInput=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.userInput?e.setState({userInput:""}):alert("Please enter Location"),e.props.searchInput(t,e.state.userInput)},e.state={userInput:""},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:"locateWSubmit"},r.a.createElement("input",{onChange:this.handleUserInput,type:"text",id:"locateInput",value:this.state.userInput,placeholder:"New Search",className:"locateField"}),r.a.createElement("input",{onClick:this.handleSubmit,type:"submit",value:"Submit",className:"locateField"}))}}]),n}(a.Component),C=n(6),j=n.n(C),O=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={userInput:"",newSearchInput:"",searchedFor:"",newLat:"",newLon:"",mapApiResult:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;j()({url:"http://www.mapquestapi.com/geocoding/v1/address",method:"GET",responseType:"json",params:{key:"srnbJxPHaOsssQrGNwDmj2K6n47ObSRq",location:"Toronto, ON"}}).then((function(t){e.setState({mapApiResult:t,newLat:t.data.results[0].locations[0].latLng.lat,newLon:t.data.results[0].locations[0].latLng.lng}),console.log(e.state.mapApiResult,e.state.newLat,e.state.newLon)}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),alert("Button Click working")}},{key:"render",value:function(){return r.a.createElement("div",{className:"geoLocateLink"},r.a.createElement("input",{type:"button",value:"...use your current location",className:"locateField geoLocationField",onClick:this.handleSubmit}))}}]),n}(a.Component),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"landingContainer"},r.a.createElement("h1",null,"forecaster"),r.a.createElement("h2",null,"a weather app"),r.a.createElement(k,{classname:"lpInputs"}),r.a.createElement(O,{classname:"lpGeoLocate"}))}}]),n}(a.Component),S=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).search=function(){j()({url:"https://www.mapquestapi.com/geocoding/v1/address",method:"GET",responseType:"json",params:{key:"srnbJxPHaOsssQrGNwDmj2K6n47ObSRq",location:e.state.newSearch}}).then((function(n){e.setState({mapApiResult:n,newLat:n.data.results[0].locations[0].latLng.lat,newLon:n.data.results[0].locations[0].latLng.lng}),t()}));var t=function(){j()({url:"https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.state.newLat,"&lon=").concat(e.state.newLon,"&units=").concat(e.state.units,"&appid=").concat(e.state.keys),method:"GET",responseType:"json"}).then((function(t){var n=t.data,a=n.daily,r=n.hourly;e.setState({weather:a[0],currentTemp:r[0].temp.toFixed(0),currentTempFeelLIke:r[0].feels_like.toFixed(0),currentCond:a[0].weather[0].description,weatherTomorrow:a[1],weatherIn2Days:a[2]})}))}},e.searchFor=function(t,n){t.preventDefault(),e.setState({newSearch:n},e.search)},e.state={newSearch:"Toronto",newLat:"",newLon:"",mapApiResult:[],keys:"1b5614554d2203c32690e03daee17bfb",units:"metric",weather:[],currentTemp:[],currentTempFeelLIke:[],currentCond:[],weatherTomorrow:[],weatherIn2Days:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.search()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("span",{className:"visHidden"}),this.state.currentTemp,r.a.createElement("span",null,"\xb0")),r.a.createElement("div",{className:"conditionsContainer"},r.a.createElement("img",{src:g[3].iSrc,alt:g[3].iAlt,className:"wIcons"}),r.a.createElement("h5",null,r.a.createElement("span",null,"...")," ",this.state.currentCond)),r.a.createElement("section",{className:"locationContainer"},r.a.createElement("h2",{className:"selectedLocale"},this.state.newSearch),r.a.createElement("div",{className:"inputContainer"},r.a.createElement(k,{searchInput:this.searchFor}))))}}]),n}(a.Component),L=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("main",{className:"mainContainer wrapper"},r.a.createElement("section",{className:"header"},r.a.createElement("h4",null,"forecaster")),r.a.createElement("section",{className:"dataContainer"},r.a.createElement(S,null)))}}]),n}(a.Component),I=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"background"},r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(L,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.6b8be9b0.chunk.js.map