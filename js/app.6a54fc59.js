(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)r=o[u],n[r]&&h.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);m&&m(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/behind-the-curve/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0693":function(t){t.exports={example_1:{id:1,from:{description:"Edificio Almirante",place:"Santa Marta - Colombia",height:70,lat:11.235,lng:-74.218},to:{description:"Mirage 57",place:"Barranquilla - Colombia",height:162,lat:11.006,lng:-74.8},image:"https://www.instagram.com/p/Bn2Cc7Olm2c/"},example_2:{id:2,from:{description:"Warren Dunes State Park",place:"Michigan - USA",height:50,lat:41.906,lng:-86.602},to:{description:"Wills Tower",place:"Chicago - USA",height:527,lat:41.878,lng:-87.635},image:"https://www.instagram.com/p/BoFuJ8gBs3f/"},example_3:{id:3,from:{description:"City center",place:"St. Catharines - Canada",height:30,lat:43.181,lng:-79.284},to:{description:"CN Tower",place:"Toronto - Canada",height:553,lat:43.642,lng:-79.389},image:"https://www.instagram.com/p/BiLEyCrF8Iy/"},example_4:{id:4,from:{description:"Faro de Colonia",place:"Colonia del Sacramento - Uruguay",height:26,lat:-34.472,lng:-57.854},to:{description:"Torres Mulieris",place:"Buanos Aires - Argentina",height:162,lat:-34.613,lng:-58.357},image:"https://media-cdn.tripadvisor.com/media/photo-s/08/7a/42/6a/farol-de-colonia-do-sacramento.jpg"},example_5:{id:5,from:{description:"La Mussara, Serra de la Mussara",place:"Tarragona - Spain",height:1055,lat:41.256,lng:1.054},to:{description:"Puig Major, Serra de Tramuntana",place:"Mallorca - España",height:1445,lat:39.808,lng:2.786},image:"https://pbs.twimg.com/media/DtHLN5UXcAEcWQ8.jpg"}}},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container text-blue-darker flex flex-col items-center max-w-md font-sans"},[a("Header"),a("Content",{attrs:{distanceFromMap:t.distanceFromMap,heightFromExampleObserver:t.heightFromExampleObserver,heightFromExampleObject:t.heightFromExampleObject,isFromExample:t.isFromExample}}),a("Examples"),a("Footer")],1),a("modal",{attrs:{name:"map",width:"100%",height:"auto",classes:"p-5 relative"}},[a("Gmap",{staticStyle:{height:"auto"}})],1)],1)},s=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"p-5 relative w-full"},[a("div",{staticClass:"flex justify-center mb-10"},[a("i",{staticClass:"fas fa-globe-africa",staticStyle:{"font-size":"150px"}})]),a("h1",{staticClass:"mb-10 text-3xl text-center font-thin"},[t._v("Behind The Curve")])])}],l={name:"Header"},c=l,m=a("2877"),u=Object(m["a"])(c,r,o,!1,null,null,null),h=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mb-5 font-thin w-full"},[t._m(0),a("div",{staticClass:"mb-6"},[a("label",{staticClass:"block mb-2 pr-4"},[t._v("\n      Height of the observer in meters:\n    ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.observer,expression:"observer"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.observer},on:{input:function(e){e.target.composing||(t.observer=e.target.value)}}}),t.observer<=0?a("p",{staticClass:"text-red text-sm"},[t._v("Hight of the observer must be greater than 0.")]):t._e()]),t.observer>0?a("div",{staticClass:"mb-6"},[a("p",{staticClass:"mb-2 pr-4"},[t._v("Horizon distance:")]),a("p",{staticClass:"input"},[t._v(t._s(t._f("km")(t.horizonDistance)))])]):t._e(),t.observer>0?a("div",{staticClass:"mb-6"},[a("p",{staticClass:"mb-2 pr-4"},[t._v("Distance to object in Km:")]),a("p",{staticClass:"text-sm italic mb-2"},[t._v("\n      Enter a distance in km or use the map\n        \n      "),a("button",{staticClass:"btn",on:{click:function(e){return t.showMap()}}},[t._m(1)])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.distanceToObject,expression:"distanceToObject"}],staticClass:"input",domProps:{value:t.distanceToObject},on:{input:function(e){e.target.composing||(t.distanceToObject=e.target.value)}}})]):t._e(),t.observer>0?a("div",{staticClass:"mb-6"},[a("p",{staticClass:"mb-2 pr-4"},[t._v("Under horizon:")]),a("p",{staticClass:"input"},[t._v(t._s(t._f("m")(t.underHorizon)))])]):t._e(),t.observer>0?a("div",{staticClass:"mb-6"},[a("label",{staticClass:"block mb-2 pr-4"},[t._v("\n      Height of the object you want to see in meters:\n    ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.heightObject,expression:"heightObject"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.heightObject},on:{input:function(e){e.target.composing||(t.heightObject=e.target.value)}}}),t.heightObject<0?a("p",{staticClass:"text-red text-sm"},[t._v("Hight of the building must be greater than 0.")]):t._e()]):t._e(),t.observer>0&&t.heightObject>0?a("div",{staticClass:"mb-6"},[a("label",{staticClass:"block mb-2 pr-4",attrs:{for:"inline-full-name"}},[t._v("\n      The top of the object is "+t._s(t.isVisible())+":\n    ")]),a("p",{staticClass:"input"},[t._v(t._s(t._f("m")(t.buildingVisible)))])]):t._e()])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-16"},[a("p",[t._v("Enter the height of the observer, the distance to the object and the height of the object or use the examples below to feed the inputs.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"fa-stack"},[a("i",{staticClass:"fas fa-square fa-stack-2x"}),a("i",{staticClass:"fas fa-map-marked-alt fa-stack-1x fa-inverse"})])}],d={name:"Content",props:["distanceFromMap","heightFromExampleObserver","heightFromExampleObject","isFromExample"],data:function(){return{initialObserver:30,earthRadius:6371e3,initialHeightObject:100,initialDistance:30}},filters:{km:function(t){return t.toFixed(2)+" km"},m:function(t){return t.toFixed(2)+" m"}},computed:{horizonDistance:function(){var t=Math.sqrt(Math.pow(this.observer,2)+2*this.earthRadius*this.observer);return t},underHorizon:function(){var t=1e3*this.distanceToObject,e=t-this.horizonDistance;if(e>0){var a=(-2*this.earthRadius+Math.sqrt(Math.pow(2*this.earthRadius,2)+4*Math.pow(e,2)))/2;return a}return 0},heightObject:{get:function(){return this.isFromExample?this.heightFromExampleObject:this.initialHeightObject},set:function(t){this.initialHeightObject=t}},observer:{get:function(){return this.isFromExample?this.heightFromExampleObserver:this.initialObserver},set:function(t){this.initialObserver=t}},distanceToObject:{get:function(){return""!=this.distanceFromMap?this.distanceFromMap:this.initialDistance},set:function(t){this.initialDistance=t}},buildingVisible:function(){return this.heightObject-this.underHorizon}},methods:{isVisible:function(){return this.buildingVisible>=0?"visible":"under the horizon"},metrosToKms:function(t){var e=t/1e3;return e.toFixed(3)},showMap:function(){this.$modal.show("map")}}},g=d,b=Object(m["a"])(g,p,f,!1,null,null,null),v=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-xl m-auto relative"},[a("GmapMap",{staticClass:"w-full",staticStyle:{height:"500px"},attrs:{center:{lat:0,lng:0},zoom:3},on:{click:t.setMarker}},[t._l(t.markers,function(e,i){return a("GmapMarker",{key:i,attrs:{position:e.position,clickable:!0,draggable:!0},on:{drag:t.updateMarker,dragstart:t.setFirstMaker,dragend:function(e){return t.sendDistanceInMap()}}})}),t.line.length>1?a("GmapPolyline",{attrs:{path:t.line,editable:!1}}):t._e()],2),a("div",{staticClass:"relative p-1 text-white bg-black opacity-75 flex items-center justify-between w-full"},[a("button",{staticClass:"ml-1",on:{click:function(e){return t.$modal.hide("map")}}},[a("i",{staticClass:"fas fa-times text-xl text-white"})]),t.isDistanceSet()?a("div",{staticClass:"text-xl font-thin"},[t._v("Distance: "+t._s(t.distanceBetweenMarkers)+" km")]):t._e()])],1)},_=[];a("ac6a");function C(t,e,a,i){var n=t*Math.PI/180,s=e*Math.PI/180,r=a*Math.PI/180,o=(i-e)*Math.PI/180,l=Math.cos(r)*Math.cos(o),c=Math.cos(r)*Math.sin(o),m=Math.sqrt((Math.cos(n)+l)*(Math.cos(n)+l)+c*c),u=Math.sin(n)+Math.sin(r),h=Math.atan2(u,m),p=s+Math.atan2(c,Math.cos(n)+l),f=180*h/Math.PI,d=180*p/Math.PI;return{lat:f,lng:d}}function w(t,e,a,i){var n=6371e3,s=M(a-t),r=M(i-e),o=Math.sin(s/2)*Math.sin(s/2)+Math.cos(M(t))*Math.cos(M(a))*Math.sin(r/2)*Math.sin(r/2),l=2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)),c=n*l;return c/1e3}function M(t){return t*Math.PI/180}var k,E={middlePoint:C,getDistanceFromTwoPoints:w,toRad:M},O={name:"Gmap",data:function(){return{markers:[],isFirstMarker:""}},computed:{distanceBetweenMarkers:function(){var t=E.getDistanceFromTwoPoints(this.markers[0].position.lat,this.markers[0].position.lng,this.markers[1].position.lat,this.markers[1].position.lng).toFixed(2);return Event.$emit("distanceFromMap",t),t},line:function(){var t=[];return this.markers.forEach(function(e){t.push({lat:e.position.lat,lng:e.position.lng})}),t}},methods:{setMarker:function(t){this.markers.length<2&&this.markers.push({position:{lat:t.latLng.lat(),lng:t.latLng.lng()}})},setFirstMaker:function(t){t.latLng.lat()===this.markers[0].position.lat?this.isFirstMarker=!0:this.isFirstMarker=!1},updateMarker:function(t){this.isFirstMarker?this.markers[0].position={lat:t.latLng.lat(),lng:t.latLng.lng()}:this.markers[1].position={lat:t.latLng.lat(),lng:t.latLng.lng()}},isDistanceSet:function(){return 2===this.markers.length},sendDistanceInMap:function(){Event.$emit("distanceFromMap",this.distanceBetweenMarkers)}}},j=O,F=Object(m["a"])(j,x,_,!1,null,null,null),y=F.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mb-5 font-thin w-full"},[a("div",{staticClass:"flex justify-between items-center mb-5"},[a("h2",{staticClass:"font-thin"},[t._v("Examples")]),a("buttonToggle",{attrs:{before:"Show map",after:"Hide map",icon:"fas fa-globe-africa"},nativeOn:{click:function(e){return t.showMapWithExamples()}}})],1),t.isMapExamples?a("GmapMap",{staticClass:"w-full mb-5 h-64 absolute",attrs:{center:{lat:20,lng:-30},zoom:2,options:t.mapOptions}},[t._l(t.examples,function(e,i){return a("GmapMarker",{attrs:{position:{lat:e.to.lat,lng:e.to.lng},clickable:!0,draggable:!1},on:{click:function(a){return t.toogleInfoWindow(e,i)}}})}),a("GmapInfoWindow",{staticClass:"relative",attrs:{opened:t.infoWindow.isOpened,options:t.infoWindow.options,position:t.infoWindow.position},on:{closeclick:function(e){t.infoWindow.isOpened=!1}}},[t.infoWindow.hasImage?a("div",[t.isSpinner?a("div",{staticClass:"spinner pin",staticStyle:{top:"0px",width:"100px",height:"100px"}}):t._e(),t.isSpinner?t._e():a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.infoWindow.content}})]):t._e(),t.infoWindow.hasImage?t._e():a("div",[a("span",{staticClass:"fa-stack fa-2x text-grey",staticStyle:{"font-size":"2rem"}},[a("i",{staticClass:"fas fa-camera fa-stack-1x"}),a("i",{staticClass:"fas fa-ban fa-stack-2x"})])])])],2):t._e(),t._l(t.examples,function(e){return a("Example",{attrs:{id:e.id,from:e.from,to:e.to,url:e.image},nativeOn:{click:function(a){return t.selectExample(e)}}})})],2)},I=[],T=a("bd86"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-5 border rounded mb-5 cursor-pointer",class:{"bg-blue-lightest transition-duration-300":t.isSelected}},[t.isInstragramLink?a("div",[t.isImage&&t.hasThumbnail?a("Instagram",{staticClass:"mb-5 block",attrs:{url:t.url}}):t._e()],1):a("div",{staticClass:"mb-5 block"},[t.isImage&&t.hasThumbnail?a("a",{attrs:{href:t.url,target:"_blank"}},[a("img",{staticClass:"w-full h-auto",attrs:{src:t.url}})]):t._e()]),t.isImage&&!t.hasThumbnail?a("div",{staticClass:"text-center pb-10"},[t._m(0)]):t._e(),t.isMap&&t.isSelected?a("GmapMap",{staticClass:"w-full mb-5 aspect-ratio-square",attrs:{center:t.midPoint,zoom:8}},[a("GmapMarker",{attrs:{position:{lat:t.from.lat,lng:t.from.lng},clickable:!0,draggable:!1}}),a("GmapMarker",{attrs:{position:{lat:t.to.lat,lng:t.to.lng},clickable:!0,draggable:!1}}),t.line.length>0?a("GmapPolyline",{attrs:{path:t.line,editable:!1}}):t._e()],1):t._e(),a("div",{staticClass:"flex justify-between mb-3"},[a("span",[t._v("Distance: "+t._s(t.distance)+" km")]),a("div",{staticClass:"text-xl"},[a("button",{staticClass:"btn",on:{click:function(e){return t.showMap()}}},[t._m(1)]),a("button",{staticClass:"btn",on:{click:function(e){return t.showImage()}}},[t._m(2)])])]),a("div",{staticClass:"flex justify-between items-center mb-3"},[a("div",[a("div",[t._v(t._s(t.from.description))]),a("div",[t._v(t._s(t.from.place))])]),t._m(3),a("div",{staticClass:"text-right"},[a("div",[t._v(t._s(t.to.description))]),a("div",[t._v(t._s(t.to.place))])])])],1)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"fa-stack fa-2x text-grey",staticStyle:{"font-size":"5rem"}},[a("i",{staticClass:"fas fa-camera fa-stack-1x"}),a("i",{staticClass:"fas fa-ban fa-stack-2x"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"fa-stack"},[a("i",{staticClass:"fas fa-square fa-stack-2x"}),a("i",{staticClass:"fas fa-map-marked-alt fa-stack-1x fa-inverse"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"fa-stack"},[a("i",{staticClass:"fas fa-square fa-stack-2x"}),a("i",{staticClass:"fas fa-camera-retro fa-stack-1x fa-inverse"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"fas fa-arrow-right"})])}],W=(a("6762"),a("2fdb"),a("7a6e")),D={name:"Exmaple",components:{Instagram:W["default"]},props:["id","from","to","url"],data:function(){return{isImage:!1,isMap:!0,isSelected:!1}},computed:{midPoint:function(){return E.middlePoint(this.from.lat,this.from.lng,this.to.lat,this.to.lng)},distance:function(){return E.getDistanceFromTwoPoints(this.from.lat,this.from.lng,this.to.lat,this.to.lng).toFixed(2)},line:function(){return[{lat:this.from.lat,lng:this.from.lng},{lat:this.to.lat,lng:this.to.lng}]},hasThumbnail:function(){return""!=this.url},isInstragramLink:function(){var t=this.url;return!!t.includes("instagram")}},methods:{showImage:function(){this.isImage=!this.isImage,this.isMap=!1},showMap:function(){this.isMap=!this.isMap,this.isImage=!1}}},z=D,G=Object(m["a"])(z,P,$,!1,null,null,null),H=G.exports,L=a("0693"),q=a("bc3a"),B=a.n(q),A=(k={name:"Examples",components:{Example:H},data:function(){return{examples:L,isSelected:!1,isMapExamples:!1,isSpinner:!1,mapOptions:{disableDefaultUI:!0},infoWindow:{options:{pixelOffset:{width:0,height:-26}},position:null,isOpened:!1,content:"",hasImage:!1}}}},Object(T["a"])(k,"components",{Example:H}),Object(T["a"])(k,"methods",{selectExample:function(t){var e=E.getDistanceFromTwoPoints(t.from.lat,t.from.lng,t.to.lat,t.to.lng).toFixed(2);Event.$emit("dataFromExmaple",{distance:e,from:{description:t.from.description,place:t.from.place,height:t.from.height,lat:t.from.lat,lng:t.from.lng},to:{description:t.to.description,place:t.to.place,height:t.to.height,lat:t.to.lat,lng:t.to.lng}}),this.$children.forEach(function(e){e.id==t.id&&(e.isSelected=!0),e.id!=t.id&&(e.isSelected=!1,e.isMap=!0,e.isImage=!1)})},showMapWithExamples:function(){this.isMapExamples=!this.isMapExamples},toogleInfoWindow:function(t){var e=this;this.infoWindow.isOpened=!1,this.infoWindow.position={lat:t.to.lat,lng:t.to.lng},""!=t.image?(this.infoWindow.hasImage=!0,this.isSpinner=!0,B.a.get("https://api.instagram.com/oembed?url="+t.image).then(function(t){e.infoWindow.content=t.data.thumbnail_url,e.isSpinner=!1})):this.infoWindow.hasImage=!1,this.infoWindow.isOpened=!0}}),Object(T["a"])(k,"beforeCreate",function(){this.$options.components.Instagram=a("7a6e").default}),k),N=A,U=Object(m["a"])(N,S,I,!1,null,null,null),R=U.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-10"},[a("p",{staticClass:"font-thin"},[a("i",{staticClass:"far fa-copyright"}),t._v(" Copyright 2019, Carlos Ortiz")])])}],J={name:"Footer"},Q=J,K=Object(m["a"])(Q,V,X,!1,null,null,null),Z=K.exports,Y=(a("becf"),{name:"app",components:{Header:h,Content:v,Gmap:y,Examples:R,Footer:Z},data:function(){return{distanceFromMap:"",heightFromExampleObserver:"",heightFromExampleObject:"",isFromExample:!1,exampleSelectedId:""}},created:function(){var t=this;Event.$on("distanceFromMap",function(e){return t.distanceFromMap=e}),Event.$on("dataFromExmaple",function(e){t.distanceFromMap=e.distance,t.heightFromExampleObserver=e.from.height,t.heightFromExampleObject=e.to.height,t.isFromExample=!0,t.exampleSelectedId=e.id})}}),tt=Y,et=Object(m["a"])(tt,n,s,!1,null,null,null),at=et.exports,it=a("7591"),nt=a("1881"),st=a.n(nt),rt=(a("db43"),a("755e")),ot=a("2624"),lt=a.n(ot),ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"font-thin bg-blue-dark active:bg-blue-darker text-white p-2 items-center rounded cursor-pointer focus:outline-none",on:{click:function(e){return t.toggle()}}},[t.isToggle?a("span",[t._v(t._s(t.before))]):t._e(),t.isToggle?t._e():a("span",[t._v(t._s(t.after))]),a("i",{staticClass:"pl-3",class:t.icon})])])},mt=[],ut={props:["before","after","icon"],data:function(){return{isToggle:!0}},methods:{toggle:function(){this.isToggle=!this.isToggle}}},ht=ut,pt=Object(m["a"])(ht,ct,mt,!1,null,null,null),ft=pt.exports,dt=a("038a"),gt=a.n(dt);i["default"].use(gt.a,{tagName:"svgicon"}),i["default"].config.productionTip=!1,i["default"].use(it),i["default"].use(st.a,{dialog:!0}),i["default"].component("pCheck",lt.a),i["default"].component("buttonToggle",ft),window.Event=new i["default"],i["default"].use(rt,{load:{key:"AIzaSyDygk65evGwqGAQXOhX8uXGZtzZCgxs7xQ",libraries:"geometry,places,drawing"}}),new i["default"]({render:function(t){return t(at)}}).$mount("#app")},"7a6e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:t.url,target:"_blank"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isSpinner,expression:"isSpinner"}],staticClass:"spinner mb-16"}),a("img",{attrs:{src:t.imageSrc,alt:t.imageTitle}})])},n=[],s=a("bc3a"),r=a.n(s),o={name:"Instagram",props:["url"],data:function(){return{imageSrc:"",imageTitle:"",isSpinner:!0}},mounted:function(){var t=this;r.a.get("https://api.instagram.com/oembed?url="+this.url).then(function(e){t.isSpinner=!1,t.imageSrc=e.data.thumbnail_url,t.imageTitle=e.data.title})}},l=o,c=a("2877"),m=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=m.exports},db43:function(t,e,a){}});
//# sourceMappingURL=app.6a54fc59.js.map