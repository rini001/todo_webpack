"use strict";(self.webpackChunktodo_webpack=self.webpackChunktodo_webpack||[]).push([[548],{424:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"body{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    background-color: rgb(238, 238, 198);\r\n}\r\n#logo{\r\n    height: 4rem;\r\n    width: 4rem;\r\n}\r\n#myNotes{\r\n    color:rgb(78, 78, 211)\r\n}\r\n.div1{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    column-gap: 10px;\r\n}\r\n.div2{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    row-gap: 20px;\r\n}\r\n.textArea{\r\n    width: 80%;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n}\r\n.output{\r\n  text-align:center;\r\n  color:rgb(78, 78, 211)\r\n}\r\n#addBtn{\r\n    width: 30%;\r\n    height: 1.7rem;\r\n    border-radius: 30px;\r\n    border: 0;\r\n    cursor: pointer;\r\n    background-color:orange;\r\n}\r\n#addBtn:hover{\r\n    width: 30%;\r\n    height: 1.7rem;\r\n    border-radius: 30px;\r\n    border: 0;\r\n    cursor: pointer;\r\n    background-color:rgb(78, 78, 211);\r\n}\r\nh3{\r\n  color: blue;\r\n  font-size: 40px;\r\n}",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var d=[].concat(r[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},548:(r,n,e)=>{e.r(n),e.d(n,{default:()=>g});var t=e(379),o=e.n(t),a=e(795),i=e.n(a),c=e(569),s=e.n(c),u=e(565),d=e.n(u),l=e(216),p=e.n(l),f=e(589),h=e.n(f),v=e(424),m={};m.styleTagTransform=h(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),o()(v.Z,m);const g=v.Z&&v.Z.locals?v.Z.locals:void 0},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),u=0;u<a.length;u++){var d=e(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}}]);