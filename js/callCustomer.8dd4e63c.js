(function(e){function t(t){for(var o,c,a=t[0],i=t[1],u=t[2],s=0,d=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);b&&b(t);while(d.length)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={callCustomer:0},l=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="./";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var b=i;l.push([3,"chunk-vendors"]),n()})({3:function(e,t,n){e.exports=n("ea68")},e836:function(e,t,n){},ea68:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r={id:"call-customer-app"},l={class:"container"},c=Object(o["f"])("label",null,"Select Call Center : ",-1),a={value:3,key:3},i={value:2,key:2},u={value:1,key:1},b={class:"phone-list-table"},s=Object(o["f"])("thead",null,[Object(o["f"])("tr",null,[Object(o["f"])("th",null,"Phone Type"),Object(o["f"])("th",null,"Number"),Object(o["f"])("th",null,"Action")])],-1),d={class:"osc-font"},f=["disabled","onClick"],p={class:"loading",id:"loading"};function h(e,t,n,h,O,g){return Object(o["r"])(),Object(o["e"])("div",r,[Object(o["f"])("div",l,[c,Object(o["D"])(Object(o["f"])("select",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.callCenter=t)},[(Object(o["r"])(),Object(o["e"])("option",a,"Public Cy")),(Object(o["r"])(),Object(o["e"])("option",i,"Media Markt")),(Object(o["r"])(),Object(o["e"])("option",u,"Public"))],512),[[o["z"],e.callCenter]]),Object(o["f"])("table",b,[s,Object(o["f"])("tbody",d,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(e.phoneNumberList,t=>(Object(o["r"])(),Object(o["e"])("tr",{key:t.type},[Object(o["f"])("td",null,Object(o["x"])(t.type),1),Object(o["f"])("td",null,Object(o["x"])(t.number),1),Object(o["f"])("td",null,[Object(o["D"])(Object(o["f"])("button",{disabled:null==e.callCenter,onClick:n=>e.phoneNumberSelected(t.number)},"Call",8,f),[[o["B"],null!=t.number&&""!=t.number]])])]))),128))])]),Object(o["D"])(Object(o["f"])("div",{class:"red"},Object(o["x"])(e.errorMessage),513),[[o["B"],e.showError]])]),Object(o["D"])(Object(o["f"])("div",p,"Loading…",512),[[o["B"],e.loading]])])}n("e836");var O={name:"Call Customer",data:function(){return{phoneNumberList:[],loading:!1,errorMessage:"Unable to fetch Customer Phone Number",url:null,showError:!1,callCenter:null}},created(){let e=this;ORACLE_SERVICE_CLOUD.extension_loader.load("Global Extension","1").then((function(t){t.registerWorkspaceExtension((function(t){var n=t.getWorkspaceRecordType();"Contact"!=n&&"Incident"!=n||t.getFieldValues(["Contact.PhOffice","Contact.PhHome","Contact.PhMobile","Contact.PhFax","Contact.PhAsst"]).then((function(t){e.phoneNumberList[0]={type:"MM Landline Number",number:t.getField("Contact.PhOffice").getLabel()?t.getField("Contact.PhOffice").getLabel():""},e.phoneNumberList[1]={type:"Public Landline Number",number:t.getField("Contact.PhHome").getLabel()?t.getField("Contact.PhHome").getLabel():""},e.phoneNumberList[2]={type:"Public Mobile Number",number:t.getField("Contact.PhMobile").getLabel()?t.getField("Contact.PhMobile").getLabel():""},e.phoneNumberList[3]={type:"MM Mobile Number",number:t.getField("Contact.PhFax").getLabel()?t.getField("Contact.PhFax").getLabel():""},e.phoneNumberList[4]={type:"Public CY Mobile Number",number:t.getField("Contact.PhAsst").getLabel()?t.getField("Contact.PhAsst").getLabel():""}}))})),t.getGlobalContext().then((function(t){t.registerAction("OutgoingCallError",(function(t){"CALL_FAILED"==t.errorCode&&(e.showError=!0,e.errorMessage="Outgoing call failed, please try again or check phone number.",e.loading=!1)}))}))}))},methods:{phoneNumberSelected:function(e){this.loading=!0;var t=this;ORACLE_SERVICE_CLOUD.extension_loader.load("Global Extension","1").then((function(n){n.getGlobalContext().then((function(n){var o={phone_number:"*"+t.callCenter+e};n.invokeAction("PhoneNumberSelected",o)}))}))}}},g=n("6b0d"),j=n.n(g);const m=j()(O,[["render",h]]);var C=m;const y=Object(o["c"])(C);y.mount("#callCustomerApp")}});
//# sourceMappingURL=callCustomer.8dd4e63c.js.map