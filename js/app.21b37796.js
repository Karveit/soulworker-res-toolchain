(function(e){function t(t){for(var r,a,o=t[0],u=t[1],s=t[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1b63f57a":"4b762a19"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1b63f57a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1b63f57a":"120e5789"}[e]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"136a":function(e,t,n){"use strict";var r=n("fe3a"),a=(n("ac1f"),n("5319"),function(e){return e.replace(/\\n/gi,"<br/>")}),c=function(e){return function(){return 2*this[e]}};r["Parser"].prototype.swstring=function(e,t){return this.string(e,{encoding:"utf-16",length:c(t),formatter:a})};t["a"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new r["Parser"];return e.endianess("little").uint32("id").uint8("unknown1").uint16("strLen1").swstring("str1","strLen1")}},4990:function(e,t,n){},"9f58":function(e,t,n){"use strict";(function(e){n("99af"),n("a15b"),n("d81d"),n("b0c0"),n("b64b"),n("d3b7"),n("07ac"),n("96cf");var r=n("1da1"),a=n("fe3a"),c=n("7a23"),i=n("136a"),o=n("e2e1"),u=n("df7c");t["a"]=Object(c["g"])({name:"app",methods:{convertToCSV:function(){var e=Object.keys(this.file.parsed.rows[0]).join(),t=this.file.parsed.rows.map((function(e){return Object.values(e).join()})).join("\n"),n="data:text/csv;charset=utf-8,".concat(e,"\n").concat(t),r=encodeURI(n),a=document.createElement("a");a.setAttribute("href",r),a.setAttribute("download","".concat(this.file.filename,".csv")),a.click()},onSelectFile:function(t){var n=this,r=t.target;if(!(r.files.length<1)){this.file=null;var a=r.files[0],c=new FileReader;c.onload=function(t){return n.file=n.resParse(Object(u["basename"])(a.name,".res"),e.from(t.target.result))},c.readAsArrayBuffer(a)}},resParse:function(e,t){if(!(e in this.parsers))return null;var n=this.parsers[e];return{filename:e,parsed:n.parse(t)}},resRegisterParser:function(e,t){this.parsers[e]=(new a["Parser"]).endianess("little").uint32("count").array("rows",{length:"count",type:t(new a["Parser"])}).uint16("crcLen").string("crc",{length:"crcLen"})}},data:function(){return{parsers:{},file:null}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.resRegisterParser("tb_UI_String",i["a"]),e.resRegisterParser("tb_Option_String",o["a"]);case 2:case"end":return t.stop()}}),t)})))()},components:{TableComponent:Object(c["f"])((function(){return n.e("chunk-1b63f57a").then(n.bind(null,"1ea4"))}))}})}).call(this,n("b639").Buffer)},a82a:function(e,t,n){"use strict";n("4990")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["n"])("data-v-34a1be92");Object(r["j"])("data-v-34a1be92");var c={class:"sidebar"},i={class:"upload-button"},o=Object(r["e"])("label",{class:"upload-res",for:"upload-res"},"Import RES file",-1),u={class:"supports"},s=Object(r["e"])("h3",null,"Supports files",-1),l={class:"main"};Object(r["i"])();var f=a((function(e,t,n,a,f,p){var d=Object(r["l"])("TableComponent");return Object(r["h"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("aside",c,[Object(r["e"])("div",i,[o,Object(r["e"])("input",{type:"file",accept:".res",id:"upload-res",onChange:t[1]||(t[1]=function(){return e.onSelectFile&&e.onSelectFile.apply(e,arguments)})},null,32)]),e.file?(Object(r["h"])(),Object(r["c"])("div",{key:0,class:"convert-to-csv",onClick:t[2]||(t[2]=function(){return e.convertToCSV&&e.convertToCSV.apply(e,arguments)})},"Export CSV file")):Object(r["d"])("",!0),Object(r["e"])("div",u,[s,(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(e.parsers,(function(e,t){return Object(r["h"])(),Object(r["c"])("div",{class:"supports-name",key:t},Object(r["m"])(t),1)})),128))])]),Object(r["e"])("main",l,[null!==e.file?(Object(r["h"])(),Object(r["c"])(d,{key:0,table:e.file.parsed},null,8,["table"])):Object(r["d"])("",!0)])],64)})),p=n("9f58");n("e387"),n("e300"),n("a82a"),n("fea7");p["a"].render=f,p["a"].__scopeId="data-v-34a1be92";var d=p["a"];Object(r["b"])(d).mount("#app")},e044:function(e,t,n){},e2e1:function(e,t,n){"use strict";var r=n("fe3a");t["a"]=function(){return(new r["Parser"]).uint16("id").uint8("u1").uint16("u2").uint16("u3").uint8("u4").uint8("u5")}},e300:function(e,t,n){"use strict";n("e9a2")},e387:function(e,t,n){"use strict";n("ec77")},e9a2:function(e,t,n){},ec77:function(e,t,n){},fea7:function(e,t,n){"use strict";n("e044")}});
//# sourceMappingURL=app.21b37796.js.map