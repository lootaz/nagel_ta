(function(t){function e(e){for(var n,o,a=e[0],c=e[1],u=e[2],l=0,h=[];l<a.length;l++)o=a[l],i[o]&&h.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,a=1;a<s.length;a++){var c=s[a];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var p=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),i=s.n(n);i.a},1:function(t,e){},1362:function(t,e,s){"use strict";var n=s("9858"),i=s.n(n);i.a},"24be":function(t,e,s){"use strict";var n=s("66fa"),i=s.n(n);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),i=s("2f62"),r=s("28dd"),o=(s("1157"),s("4989"),s("f9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("h1",{staticClass:"text-center"},[t._v("Nagel Shipments")]),s("router-view")],1)}),a=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.refreshList(e)}}},[t._v("Refresh")]),s("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"create"}}},[t._v("Create")])],1),s("div",{staticClass:"col-sm-6 text-right"},[s("shipment-search")],1)]),t.shipments.length>0?s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("div",{staticClass:"list-group"},t._l(t.shipments,function(e){return s("shipment-item",{key:e.id,class:t.active_shipment===e.id?"active":"",attrs:{shipment:e}})}),1)]),s("div",{staticClass:"col-8"},[s("shipment-details")],1)]):s("div",[s("h2",{staticClass:"text-center text-info"},[t._v("Shipments not found.")])])])},u=[],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pickItem(e)}}},[t._v(t._s(t.shipment.title)+" [ID: "+t._s(t.shipment.id)+"]")])},l=[],h={name:"shipment-item",props:{shipment:{type:Object,required:!0}},methods:{pickItem:function(){this.$store.getters.chosenShipmentId&&this.$store.getters.chosenShipmentId===this.shipment.id?this.$store.commit("setChosenShipment",null):this.$store.commit("setChosenShipment",this.shipment)}}},m=h,d=s("2877"),f=Object(d["a"])(m,p,l,!1,null,null,null),v=f.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.shipment?s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.shipment.title)+" [ID: "+t._s(t.shipment.id)+"]")]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.shipment.from_country)+" -> "+t._s(t.shipment.to_country))]),s("p",{staticClass:"card-text"},[s("span",{staticClass:"font-weight-bold"},[t._v("Arrived:")]),t._v(" "+t._s(t.shipment.arrived_ts)),s("br"),s("span",{staticClass:"font-weight-bolder"},[t._v("Weight, kg:")]),t._v(" "+t._s(t.shipment.weight_kg)+"\n        ")]),s("a",{staticClass:"card-link btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.editShipment(e)}}},[t._v("Edit")]),s("a",{staticClass:"card-link btn btn-danger",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeShipment(e)}}},[t._v("Remove")])])]):t._e()},g=[],b={name:"shipment-details",computed:{shipment:function(){return this.$store.state.chosen_shipment}},methods:{editShipment:function(){this.$router.push({name:"edit"})},removeShipment:function(){var t=this;this.$http.delete(this.$store.state.base_url.concat("/shipments/").concat(this.shipment.id)).then(function(){t.$router.push({name:"list"}),t.$router.go()})}},data:function(){return{is_edit_mode:!1}}},C=b,y=Object(d["a"])(C,_,g,!1,null,null,null),S=y.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_request,expression:"search_request"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"inputGroup-search",placeholder:"type part of shipment title..."},domProps:{value:t.search_request},on:{input:function(e){e.target.composing||(t.search_request=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.searchShipment(e)}}},[t._v("Search")])])])},x=[],w={name:"shipment-search",data:function(){return{search_request:""}},methods:{searchShipment:function(){this.$store.dispatch("searchShipmentsByTitle",this.search_request)}}},k=w,O=Object(d["a"])(k,$,x,!1,null,null,null),j=O.exports,E={name:"shipments-list",components:{ShipmentItem:v,ShipmentDetails:S,ShipmentSearch:j},computed:{shipments:function(){return this.$store.state.shipments},active_shipment:function(){return this.$store.getters.chosenShipmentId}},methods:{refreshList:function(){this.$store.dispatch("fetchShipments")}},mounted:function(){this.$store.commit("setChosenShipment",null),this.$store.dispatch("fetchShipments")}},P=E,G=(s("1362"),Object(d["a"])(P,c,u,!1,null,null,null)),D=G.exports,I={components:{ShipmentsList:D}},N=I,q=(s("034f"),Object(d["a"])(N,o,a,!1,null,null,null)),T=q.exports,B=s("8c4f"),J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("a",{staticClass:"btn btn-success",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.saveShipment(e)}}},[t._v("Save")])]),s("div",{staticClass:"col-sm-6 text-right"},[s("router-link",{staticClass:"btn btm-sm btn-primary",attrs:{to:{name:"home"}}},[t._v("Home")])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"input-group mb-3"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.shipment.title,expression:"shipment.title"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"inputGroup-title",placeholder:"ex: Banana"},domProps:{value:t.shipment.title},on:{input:function(e){e.target.composing||t.$set(t.shipment,"title",e.target.value)}}})]),s("div",{staticClass:"input-group mb-3"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.shipment.arrived_ts,expression:"shipment.arrived_ts"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"inputGroup-arrived",placeholder:"ex: 2019-07-30 10:00"},domProps:{value:t.shipment.arrived_ts},on:{input:function(e){e.target.composing||t.$set(t.shipment,"arrived_ts",e.target.value)}}})]),s("div",{staticClass:"input-group mb-3"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.shipment.weight_kg,expression:"shipment.weight_kg"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"inputGroup-weight",placeholder:"ex: 1000"},domProps:{value:t.shipment.weight_kg},on:{input:function(e){e.target.composing||t.$set(t.shipment,"weight_kg",e.target.value)}}})]),s("div",{staticClass:"input-group mb-3"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.shipment.from_country,expression:"shipment.from_country"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"inputGroup-from",placeholder:"ex: Egypt"},domProps:{value:t.shipment.from_country},on:{input:function(e){e.target.composing||t.$set(t.shipment,"from_country",e.target.value)}}})]),s("div",{staticClass:"input-group mb-3"},[t._m(4),s("input",{directives:[{name:"model",rawName:"v-model",value:t.shipment.to_country,expression:"shipment.to_country"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"inputGroup-to",placeholder:"ex: Estonia"},domProps:{value:t.shipment.to_country},on:{input:function(e){e.target.composing||t.$set(t.shipment,"to_country",e.target.value)}}})])]),t.errors?s("div",{staticClass:"row"},[s("p",{staticClass:"text-danger"},[t._v("\n            Detected Errors\n            "),s("ol",t._l(t.errors,function(e,n){return s("li",{key:n},[t._v(t._s(n)+": "+t._s(e))])}),0)])]):t._e()])},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-title"}},[t._v("Title")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-arrived"}},[t._v("Arrived")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-weight"}},[t._v("Weight, kg")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-from"}},[t._v("From")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-to"}},[t._v("To")])])}],L={name:"shipment-edit",props:{is_edit_mode:!1},data:function(){return{shipment:{title:null,arrived_ts:null,weight_kg:null,from_country:null,to_country:null},errors:null}},methods:{saveShipment:function(){this.is_edit_mode?this.editShipment():this.createShipmnet()},createShipmnet:function(){var t=this;this.$http.post(this.$store.state.base_url.concat("/shipments/"),this.shipment,{emulateJSON:!0}).then(function(){t.$router.push({name:"home"})},function(e){t.errors=e.body})},editShipment:function(){var t=this,e=this.$store.getters.chosenShipmentId;this.$http.put(this.$store.state.base_url.concat("/shipments/").concat(e).concat("/"),this.shipment,{emulateJSON:!0}).then(function(){t.$router.push({name:"home"})},function(e){t.errors=e.body})}},mounted:function(){this.is_edit_mode&&(this.shipment.title=this.$store.state.chosen_shipment.title,this.shipment.arrived_ts=this.$store.state.chosen_shipment.arrived_ts,this.shipment.weight_kg=this.$store.state.chosen_shipment.weight_kg,this.shipment.from_country=this.$store.state.chosen_shipment.from_country,this.shipment.to_country=this.$store.state.chosen_shipment.to_country)}},A=L,R=(s("24be"),Object(d["a"])(A,J,M,!1,null,null,null)),W=R.exports,F=[{path:"/",component:D,name:"home"},{path:"/",component:D,name:"list"},{path:"/edit",component:W,props:{is_edit_mode:!0},name:"edit"},{path:"/create",component:W,props:{is_edit_mode:!1},name:"create"},{path:"*",component:D}];n["a"].use(B["a"]);var H=new B["a"]({mode:"history",routes:F});n["a"].use(i["a"]);var U=new i["a"].Store({state:{shipments:[],chosen_shipment:null,base_url:"/api"},mutations:{setBaseUrl:function(t,e){t.base_url=e},setShipments:function(t,e){t.shipments=e},setChosenShipment:function(t,e){t.chosen_shipment=e}},getters:{chosenShipmentId:function(t){return t.chosen_shipment?t.chosen_shipment.id:0}},actions:{fetchShipments:function(t){return new Promise(function(e){n["a"].http.get(t.state.base_url.concat("/shipments/")).then(function(s){s.json().then(function(s){t.commit("setChosenShipment",null),t.commit("setShipments",s),e()}),e()})})},searchShipmentsByTitle:function(t,e){return new Promise(function(s){n["a"].http.get(t.state.base_url.concat("/shipments/?title=").concat(e)).then(function(e){e.json().then(function(e){t.commit("setChosenShipment",null),t.commit("setShipments",e),s()}),s()})})}}});n["a"].config.productionTip=!1,n["a"].use(r["a"]),new n["a"]({router:H,store:U,render:function(t){return t(T)}}).$mount("#app")},"64a9":function(t,e,s){},"66fa":function(t,e,s){},9858:function(t,e,s){}});
//# sourceMappingURL=app.50ee12c6.js.map