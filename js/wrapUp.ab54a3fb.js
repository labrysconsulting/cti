(function(e){function t(t){for(var o,i,c=t[0],a=t[1],u=t[2],d=0,b=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(t);while(b.length)b.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={wrapUp:0},l=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=a;l.push([4,"chunk-vendors"]),n()})({1897:function(e,t,n){},"3ee8":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r={method:"post",id:""},l={class:"container"},i=Object(o["f"])("label",{for:"uname"},[Object(o["f"])("b",null,"Disposition")],-1),c=Object(o["f"])("label",{for:"psw"},[Object(o["f"])("b",null,"Comments")],-1),a=Object(o["f"])("label",{for:"incident"},[Object(o["f"])("b",null,"Incident")],-1),u=Object(o["f"])("label",{for:"contact"},[Object(o["f"])("b",null,"Incident")],-1),s={key:0,style:{color:"red"}},d=["disabled"],b={key:0,class:"fa fa-spinner fa-spin"},f={class:"loading",id:"loading"};function p(e,t,n,p,O,j){return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["f"])("form",r,[Object(o["f"])("div",l,[i,Object(o["D"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t),placeholder:"Enter Cisco Finesse Username",name:"uname",required:""},null,512),[[o["A"],e.username]]),c,Object(o["D"])(Object(o["f"])("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),placeholder:"Enter Cisco Finesse Password",name:"psw",required:""},null,512),[[o["A"],e.password]]),a,u,e.loginFailed?(Object(o["r"])(),Object(o["e"])("label",s,Object(o["x"])(e.errorMessage),1)):Object(o["d"])("",!0),Object(o["f"])("button",{type:"button",onClick:t[2]||(t[2]=(...t)=>e.login&&e.login(...t)),disabled:e.loading},[e.loading?(Object(o["r"])(),Object(o["e"])("i",b)):Object(o["d"])("",!0),Object(o["h"])(" Login")],8,d)])]),Object(o["D"])(Object(o["f"])("div",f,"Loading…",512),[[o["B"],e.loading]])])}n("1897");var O={name:"Call Wrap Up",data:function(){return{incidentList:[],contactList:[],incidentId:null,contactId:null,loading:!1,errorMessage:"Unable to save",url:null,showError:!1}},created(){let e=this;ORACLE_SERVICE_CLOUD.extension_loader.load("Global Extension","1").then((function(t){t.getGlobalContext().then((function(t){t.registerAction("getWrapUpData",(function(t){e.incidentList=t.incidentList,e.contactList=t.contactList}))}))}))},methods:{phoneNumberSelected:function(e){this.loading=!0;ORACLE_SERVICE_CLOUD.extension_loader.load("Global Extension","1").then((function(t){t.getGlobalContext().then((function(t){var n={phone_number:e};t.invokeAction("PhoneNumberSelected",n)}))}))}}},j=n("6b0d"),h=n.n(j);const g=h()(O,[["render",p]]);var m=g;const v=Object(o["c"])(m);v.mount("#wrapUpApp")},4:function(e,t,n){e.exports=n("3ee8")}});
//# sourceMappingURL=wrapUp.ab54a3fb.js.map