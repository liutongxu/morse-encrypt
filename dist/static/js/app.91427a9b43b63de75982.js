webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};for(var o=n("VU/8")({name:"App"},a,!1,function(e){n("u1/h")},null,null).exports,s=n("/ocq"),r=n("woOf"),c=n.n(r),l=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."],p=["-----",".----","..---","...--","....-",".....","-....","--...","---..","----."],d={},u={},v={},h=[],f=10;f<36;f++){var m=f.toString(36);h.push(m)}var g=p;for(var _ in h)d[h[_]]=l[_];for(var w in d)u[d[w]]=w;for(var y in p)v[p[y]]=y;var C=c()(u,v),b="|/|";function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if("string"==typeof e&&0!==e.length){var i=[];for(var a in e){var o=e[a];" "===o?i.push("-...-"):"|"===o?i.push(".--.."):parseInt(o)||0==parseInt(o)?i.push(g[e[a]]):i.push(d[e[a]])}var s=i.join("/");return t+(s=(s=(s=s.replace(/\//g,"&#8203;")).replace(/\./g,"&#8204;")).replace(/\-/g,"&#8205;"))+n}}function T(e){if("string"==typeof e&&0!==e.length){var t=[];return e.match(/(\&\#8203\;|\&\#8204\;|\&\#8205\;|\u200B|\u200C|\u200D|\&zwnj\;|\&zwj\;)+/g).map(function(e){var n=(e=(e=(e=e.replace(/\&\#8203\;|\u200B/g,"|")).replace(/\&\#8204\;|\u200C|\&zwnj\;/g,".")).replace(/\&\#8205\;|\u200D|\&zwj\;/g,"-")).split("|");for(var i in n)t.push(C[n[i]])}),t}}function D(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[],a=0;a<e.length;a++)i.push(e.charCodeAt(a).toString(36));return t+x(i.join(b)+b)+n}C["-...-"]=" ",C[".--.-"]="\\",C[".--.."]=b,d["\\"]=".--.-",d[b]=".--..";var I={name:"Index",data:function(){return{msg:"encrypt",plaintext_before:"",plaintext_after:"",encryptType:"morse",showMessage:!1,incodes:"",willDecode:"",outcodes:""}},created:function(){D()},methods:{handleSwitchChange:function(e){var t=e.target.id;t&&(this.encryptType=t)},handleIncode:function(){var e=this,t="";if("morse"===this.encryptType){var n=this.incodes.match(/[\u4e00-\u9fa5]+/g),i=this.incodes;n&&(i=i.replace(/[\u4e00-\u9fa5]/g,function(e){return"\\u"+parseInt(e.charCodeAt(0),10).toString(16)})),t=x(i,this.plaintext_before,this.plaintext_after)}else"unicode"===this.encryptType&&(t=D(this.incodes,this.plaintext_before,this.plaintext_after));var a="",o=function(n){setTimeout(function(){a+=t[n],e.outcodes=a},3*n)};for(var s in t)o(s);document.getElementById("string").innerHTML=t},handleDecode:function(){var e,t,n,i="";"morse"===this.encryptType?i=(i=T(this.willDecode).join("")).replace(/\\u[0-9a-z]{4}/g,function(e){return String.fromCharCode(parseInt(e.replace("\\u",""),16))}):"unicode"===this.encryptType&&(e=this.willDecode,t="",n="",T(e).map(function(e){n+=e||b}),n.split(b).forEach(function(e){if(e&&0!==e.length){var n=parseInt(e,36);t+=String.fromCharCode(n)}}),i=t);this.outcodes=i},copyCodes:function(){this.copyToClipboard("string")},copyToClipboard:function(e){var t=this,n=document.createElement("input"),i=document.getElementById(e).innerHTML||document.getElementById(e).value;n.setAttribute("value",i),document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.showMessage=!0,setTimeout(function(){t.showMessage=!1},2e3)}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{class:e.showMessage?"message message-show":"message"},[e._v("已复制到剪贴板")]),e._v(" "),n("div",{staticClass:"page-title"},[e._v("\n    零宽字符隐藏加密\n  ")]),e._v(" "),n("div",{staticClass:"switch-box",on:{click:e.handleSwitchChange}},[n("button",{class:"morse"==e.encryptType?"switch-btn switch-active":"switch-btn",attrs:{id:"morse"}},[e._v("摩斯码")]),e._v(" "),n("button",{class:"unicode"==e.encryptType?"switch-btn switch-active":"switch-btn",attrs:{id:"unicode"}},[e._v("Unicode码")])]),e._v(" "),n("div",{staticClass:"type-info"},[e._v(e._s("morse"==e.encryptType?"支持小写英文+数字+中文":"支持全部字符"))]),e._v(" "),n("div",{staticClass:"ipt-box"},[n("div",{staticClass:"ipt-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.plaintext_before,expression:"plaintext_before"}],staticClass:"ipt-cell",attrs:{placeholder:"输入前段文本"},domProps:{value:e.plaintext_before},on:{input:function(t){t.target.composing||(e.plaintext_before=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"ipt-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.incodes,expression:"incodes"}],staticClass:"ipt-cell",attrs:{placeholder:"输入加密文本"},domProps:{value:e.incodes},on:{input:function(t){t.target.composing||(e.incodes=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"ipt-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.plaintext_after,expression:"plaintext_after"}],staticClass:"ipt-cell",attrs:{placeholder:"输入后段文本"},domProps:{value:e.plaintext_after},on:{input:function(t){t.target.composing||(e.plaintext_after=t.target.value)}}}),e._v(" "),n("button",{staticClass:"btn",on:{click:e.handleIncode}},[e._v("加密")])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"ipt-row"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.willDecode,expression:"willDecode"}],staticClass:"ipt-cell",staticStyle:{height:"300px"},attrs:{placeholder:"粘贴密文"},domProps:{value:e.willDecode},on:{input:function(t){t.target.composing||(e.willDecode=t.target.value)}}}),e._v(" "),n("button",{staticClass:"btn",on:{click:e.handleDecode}},[e._v("解密")])]),e._v(" "),n("div",{attrs:{id:"string"},on:{click:e.copyCodes}}),e._v(" "),n("div",{staticClass:"show-cell",attrs:{id:"box"}},[e._v(e._s(e.outcodes))])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer-info"},[t("div",[this._v("Designed & Powerd by Rovelast")]),this._v(" "),t("div",[this._v("项目地址"),t("a",{attrs:{href:"https://github.com/rover95/morse-encrypt",target:"_blank"}},[this._v("Github")])])])}]};var j=n("VU/8")(I,E,!1,function(e){n("xA9q")},null,null).exports;i.a.use(s.a);var A=new s.a({mode:"history",routes:[{path:"/",name:"MorseEncrypt",component:j}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:A,components:{App:o},template:"<App/>"})},"u1/h":function(e,t){},xA9q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.91427a9b43b63de75982.js.map