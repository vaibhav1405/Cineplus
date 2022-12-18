/*! For license information please see 14.30b1c472.chunk.js.LICENSE.txt */
(this["webpackJsonpcinema-plus-client"]=this["webpackJsonpcinema-plus-client"]||[]).push([[14,20],{214:function(e,t,a){"use strict";var n=a(3),r=a(1),i=a(0),o=a.n(i),c=a(5),s=a(7),l=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var d=o.a.forwardRef((function(e,t){var a=e.alignContent,i=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,f=e.container,h=void 0!==f&&f,g=e.direction,v=void 0===g?"row":g,x=e.item,b=void 0!==x&&x,y=e.justify,w=void 0===y?"flex-start":y,E=e.lg,j=void 0!==E&&E,O=e.md,N=void 0!==O&&O,S=e.sm,k=void 0!==S&&S,C=e.spacing,P=void 0===C?0:C,L=e.wrap,W=void 0===L?"wrap":L,F=e.xl,R=void 0!==F&&F,T=e.xs,I=void 0!==T&&T,A=e.zeroMinWidth,M=void 0!==A&&A,_=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(c.a)(u.root,m,h&&[u.container,0!==P&&u["spacing-xs-".concat(String(P))]],b&&u.item,M&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==W&&u["wrap-xs-".concat(String(W))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==i&&u["align-content-xs-".concat(String(i))],"flex-start"!==w&&u["justify-xs-".concat(String(w))],!1!==I&&u["grid-xs-".concat(String(I))],!1!==k&&u["grid-sm-".concat(String(k))],!1!==N&&u["grid-md-".concat(String(N))],!1!==j&&u["grid-lg-".concat(String(j))],!1!==R&&u["grid-xl-".concat(String(R))]);return o.a.createElement(p,Object(r.a)({className:z,ref:t},_))}));var p=Object(s.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return l.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(m(r,2)),width:"calc(100% + ".concat(m(r),")"),"& > $item":{padding:m(r,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};u.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(d);t.a=p},257:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),o=a.n(i),c=a(5),s=a(7),l=o.a.forwardRef((function(e,t){var a=e.alt,i=e.children,s=e.classes,l=e.className,u=e.component,m=void 0===u?"div":u,d=e.imgProps,p=e.sizes,f=e.src,h=e.srcSet,g=e.variant,v=void 0===g?"circle":g,x=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),b=null,y=f||h;return b=y?o.a.createElement("img",Object(n.a)({alt:a,src:f,srcSet:h,sizes:p,className:s.img},d)):i,o.a.createElement(m,Object(n.a)({className:Object(c.a)(s.root,s.system,s[v],l,!y&&s.colorDefault),ref:t},x),b)}));t.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}}),{name:"MuiAvatar"})(l)},282:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(17),o=a(0),c=a.n(o),s=a(5),l=a(7),u=a(11),m=c.a.forwardRef((function(e,t){var a=e.classes,i=e.className,o=e.component,l=void 0===o?"div":o,m=e.fixed,d=void 0!==m&&m,p=e.maxWidth,f=void 0===p?"lg":p,h=Object(r.a)(e,["classes","className","component","fixed","maxWidth"]);return c.a.createElement(l,Object(n.a)({className:Object(s.a)(a.root,i,d&&a.fixed,!1!==f&&a["maxWidth".concat(Object(u.a)(String(f)))]),ref:t},h))}));t.a=Object(l.a)((function(e){var t;return{root:(t={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},Object(i.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(i.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(i.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(i.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(m)},283:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(32),r=a(33),i=a(35),o=a(34),c=a(0),s=a.n(c),l=a(27),u=a(7),m=a(214),d=a(8),p=a(4),f=a(10),h=a.n(f),g=a(459),v=a(152),x=a(81);function b(){b=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(P){s=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),c=new S(r||[]);return n(o,"_invoke",{value:E(e,a,c)}),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var m={};function d(){}function p(){}function f(){}var h={};s(h,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(k([])));v&&v!==t&&a.call(v,i)&&(h=v);var x=f.prototype=d.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;n(this,"_invoke",{value:function(n,i){function o(){return new t((function(r,o){!function n(r,i,o,c){var s=u(e[r],e,i);if("throw"!==s.type){var l=s.arg,m=l.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(m).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,c)}))}c(s.arg)}(n,i,r,o)}))}return r=r?r.then(o,o):o()}})}function E(e,t,a){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return C()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=j(o,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=u(e,t,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}function j(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,n(x,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:p,configurable:!0}),p.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},y(w.prototype),s(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,n,r,i){void 0===i&&(i=Promise);var o=new w(l(t,a,n,r),i);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;N(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var y=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",phone:"",password:""},e.handleFieldChange=function(t,a){var n=Object(p.a)({},e.state);n[t]=a,e.setState(n)},e.onUpdateUser=Object(d.a)(b().mark((function t(){var a,n,r,i,o,c,s,l,u;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state,n=a.name,r=a.email,i=a.phone,o=a.password,c=localStorage.getItem("jwtToken"),s={name:n,email:r,phone:i},o&&(s=Object(p.a)(Object(p.a)({},s),{},{password:o})),"/users/me",t.next=8,fetch("/users/me",{method:"PATCH",headers:{Authorization:"Bearer ".concat(c),"Content-Type":"application/json"},body:JSON.stringify(s)});case 8:if(!(l=t.sent).ok){t.next=14;break}return t.next=12,l.json();case 12:u=t.sent,e.props.file&&e.props.uploadImage(u._id,e.props.file);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])}))),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.user,t=e.name,a=e.email,n=e.phone;this.setState({name:t,email:a,phone:n})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.className,r=this.state,i=r.name,o=r.phone,c=r.email,l=r.password,u=h()(a.root,n);return s.a.createElement(x.e,{className:u},s.a.createElement(x.h,null,s.a.createElement(x.i,{subtitle:"The information can be edited",title:"Profile"})),s.a.createElement(x.f,{noPadding:!0},s.a.createElement("form",{autoComplete:"off",noValidate:!0},s.a.createElement("div",{className:a.field},s.a.createElement(g.a,{className:a.textField,helperText:"Please specify the first name",label:"FUll Name",margin:"dense",required:!0,value:i,variant:"outlined",onChange:function(t){return e.handleFieldChange("name",t.target.value)}}),s.a.createElement(g.a,{className:a.textField,label:"Email Address",margin:"dense",required:!0,value:c,variant:"outlined",onChange:function(t){return e.handleFieldChange("email",t.target.value)}})),s.a.createElement("div",{className:a.field},s.a.createElement(g.a,{className:a.textField,label:"Phone Number",margin:"dense",type:"number",value:o,variant:"outlined",onChange:function(t){return e.handleFieldChange("phone",t.target.value)}}),s.a.createElement(g.a,{className:a.textField,label:"Password",margin:"dense",type:"password",value:l,variant:"outlined",onChange:function(t){return e.handleFieldChange("password",t.target.value)}})))),s.a.createElement(x.g,{className:a.portletFooter},s.a.createElement(v.a,{color:"primary",variant:"contained",onClick:this.onUpdateUser},"Save details")))}}]),a}(c.Component),w=Object(u.a)((function(e){return{root:{},field:{margin:e.spacing(3)},textField:{width:"420px",maxWidth:"100%",marginRight:e.spacing(3)},portletFooter:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3),paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}}))(y),E=a(219),j=a.n(E),O=a(48),N=a(257),S=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.classes,n=e.className,r=e.file,i=e.onUpload,o=h()(a.root,n);return s.a.createElement(x.e,{className:o},s.a.createElement(x.f,null,s.a.createElement("div",{className:a.details},s.a.createElement("div",{className:a.info},s.a.createElement(O.a,{variant:"h2"},t.name),s.a.createElement(O.a,{className:a.emailText,variant:"body1"},t.email),s.a.createElement(O.a,{className:a.dateText,variant:"body1"},"Join at: ",j()(t.createdAt).format("DD/MM/YYYY"))),s.a.createElement(N.a,{className:a.avatar,src:t.imageurl?t.imageurl:"/images/avatars/avatar.png"}))),s.a.createElement(x.g,null,s.a.createElement("input",{accept:"image/*",className:a.input,id:"icon-button-file",type:"file",onChange:i}),s.a.createElement("label",{htmlFor:"icon-button-file"},s.a.createElement(v.a,{className:a.uploadButton,component:"span",color:"primary",variant:"text"},"Upload picture")),s.a.createElement("span",null,r&&r.name)))}}]),a}(c.Component),k=Object(u.a)((function(e){return{root:{},details:{display:"flex"},emailText:{marginTop:e.spacing(1),color:e.palette.text.secondary},dateText:{color:e.palette.text.secondary},avatar:{marginLeft:"auto",height:"110px",width:"110px",flexShrink:0,flexGrow:0},progressWrapper:{marginTop:e.spacing(2)},input:{display:"none"},uploadButton:{marginRight:e.spacing(2)}}}))(S),C=a(49),P=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={image:null},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state.image,a=this.props,n=a.classes,r=a.user,i=a.uploadImage;return s.a.createElement("div",{className:n.root},s.a.createElement(m.a,{container:!0,spacing:4},s.a.createElement(m.a,{item:!0,lg:4,md:6,xl:4,xs:12},s.a.createElement(k,{file:t,user:r,onUpload:function(t){var a=t.target.files[0];e.setState({image:a})}})),s.a.createElement(m.a,{item:!0,lg:8,md:6,xl:8,xs:12},s.a.createElement(w,{file:t,user:r,uploadImage:i}))))}}]),a}(c.Component),L=Object(l.b)((function(e){return{user:e.authState.user}}),{uploadImage:C.V})(Object(u.a)((function(e){return{root:{padding:e.spacing(4)}}}))(P))},458:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var n=a(9),r=a(0),i=a.n(r),o=a(27),c=a(119),s=a(282),l=a(214),u=a(48),m=a(49),d=a(32),p=a(33),f=a(35),h=a(34),g=a(10),v=a.n(g),x=a(7),b=a(440),y=a(441),w=a(442),E=a(443),j=a(444),O=a(461),N=a(81),S=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowsPerPage:10,page:0},e.handleChangePage=function(t,a){e.setState({page:a})},e.handleChangeRowsPerPage=function(t){e.setState({rowsPerPage:t.target.value})},e.onFindAttr=function(e,t,a){var n=t.find((function(t){return t._id===e}));return n?n[a]:"Not ".concat(a," Found")},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.className,r=t.reservations,o=t.movies,c=t.cinemas,s=this.state,l=s.rowsPerPage,u=s.page,m=v()(a.root,n);return i.a.createElement(N.e,{className:m},i.a.createElement(N.f,{noPadding:!0},i.a.createElement(b.a,null,i.a.createElement(y.a,null,i.a.createElement(w.a,null,i.a.createElement(E.a,{align:"left"},"Movie"),i.a.createElement(E.a,{align:"left"},"Cinema"),i.a.createElement(E.a,{align:"left"},"Date"),i.a.createElement(E.a,{align:"left"},"Start At"),i.a.createElement(E.a,{align:"left"},"Ticket Price"),i.a.createElement(E.a,{align:"left"},"Total"))),i.a.createElement(j.a,null,r.slice(u*l,u*l+l).map((function(t){return i.a.createElement(w.a,{className:a.tableRow,hover:!0,key:t._id},i.a.createElement(E.a,{className:a.tableCell},e.onFindAttr(t.movieId,o,"title")),i.a.createElement(E.a,{className:a.tableCell},e.onFindAttr(t.cinemaId,c,"name")),i.a.createElement(E.a,{className:a.tableCell},new Date(t.date).toLocaleDateString()),i.a.createElement(E.a,{className:a.tableCell},t.startAt),i.a.createElement(E.a,{className:a.tableCell},t.ticketPrice),i.a.createElement(E.a,{className:a.tableCell},t.total))})))),i.a.createElement(O.a,{backIconButtonProps:{"aria-label":"Previous Page"},component:"div",count:r.length,nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,page:u,rowsPerPage:l,rowsPerPageOptions:[5,10,25]})))}}]),a}(r.Component);S.defaultProps={reservations:[],movies:[],cinemas:[],onSelect:function(){},onShowDetails:function(){}};var k=Object(x.a)((function(e){return{root:{},tableRow:{height:"64px"},tableCell:{whiteSpace:"nowrap"},tableCellInner:{display:"flex",alignItems:"center"},avatar:{backgroundColor:e.palette.primary.main,display:"inline-flex",fontSize:"14px",fontWeight:500,height:"36px",width:"36px"},nameText:{display:"inline-block",marginLeft:e.spacing(2),fontWeight:500,cursor:"pointer"}}}))(S),C=a(283),P=Object(c.a)((function(e){return Object(n.a)({title:{fontSize:"3rem",lineHeight:"3rem",textAlign:"center",textTransform:"capitalize",marginTop:e.spacing(15),marginBottom:e.spacing(3)}},e.breakpoints.down("sm"),{fullWidth:{width:"100%"}})}));var L={getMovies:m.n,getReservations:m.o,getCinemas:m.j},W=Object(o.b)((function(e){var t=e.authState,a=e.movieState,n=e.reservationState,r=e.cinemaState;return{user:t.user,movies:a.movies,reservations:n.reservations,cinemas:r.cinemas}}),L)((function(e){var t=e.user,a=e.reservations,n=e.movies,o=e.cinemas,c=e.getMovies,m=e.getReservations,d=e.getCinemas;Object(r.useEffect)((function(){c(),m(),d()}),[c,m,d]);var p=P(e),f=a.filter((function(e){return e.username===t.username}));return console.log(f),i.a.createElement(s.a,null,i.a.createElement(l.a,{container:!0,spacing:2},!!f.length&&i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(u.a,{className:p.title,variant:"h2",color:"inherit"},"My Reservations")),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(k,{reservations:f,movies:n,cinemas:o}))),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(u.a,{className:p.title,variant:"h2",color:"inherit"},"My Account")),i.a.createElement(l.a,{item:!0,xs:12},i.a.createElement(C.default,null))))}))}}]);
//# sourceMappingURL=14.30b1c472.chunk.js.map