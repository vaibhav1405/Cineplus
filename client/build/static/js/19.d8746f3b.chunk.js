(this["webpackJsonpcinema-plus-client"]=this["webpackJsonpcinema-plus-client"]||[]).push([[19],{214:function(e,a,t){"use strict";var n=t(3),i=t(1),c=t(0),o=t.n(c),r=t(5),l=t(7),s=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/a).concat(String(e).replace(String(t),"")||"px")}var m=o.a.forwardRef((function(e,a){var t=e.alignContent,c=void 0===t?"stretch":t,l=e.alignItems,s=void 0===l?"stretch":l,d=e.classes,p=e.className,m=e.component,u=void 0===m?"div":m,g=e.container,h=void 0!==g&&g,f=e.direction,v=void 0===f?"row":f,b=e.item,x=void 0!==b&&b,y=e.justify,k=void 0===y?"flex-start":y,C=e.lg,j=void 0!==C&&C,w=e.md,E=void 0!==w&&w,O=e.sm,N=void 0!==O&&O,B=e.spacing,I=void 0===B?0:B,F=e.wrap,S=void 0===F?"wrap":F,T=e.xl,z=void 0!==T&&T,R=e.xs,W=void 0!==R&&R,M=e.zeroMinWidth,L=void 0!==M&&M,H=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(r.a)(d.root,p,h&&[d.container,0!==I&&d["spacing-xs-".concat(String(I))]],x&&d.item,L&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==S&&d["wrap-xs-".concat(String(S))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==k&&d["justify-xs-".concat(String(k))],!1!==W&&d["grid-xs-".concat(String(W))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==E&&d["grid-md-".concat(String(E))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==z&&d["grid-xl-".concat(String(z))]);return o.a.createElement(u,Object(i.a)({className:P,ref:a},H))}));var u=Object(l.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,a){var t={};return s.forEach((function(n){var i=e.spacing(n);0!==i&&(t["spacing-".concat(a,"-").concat(n)]={margin:"-".concat(p(i,2)),width:"calc(100% + ".concat(p(i),")"),"& > $item":{padding:p(i,2)}})})),t}(e,"xs"),{},e.breakpoints.keys.reduce((function(a,t){return function(e,a,t){var n={};d.forEach((function(e){var a="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[a]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(i.a)(e,n):e[a.breakpoints.up(t)]=n}(a,e,t),a}),{}))}),{name:"MuiGrid"})(m);a.a=u},284:function(e,a,t){"use strict";var n=t(1),i=t(3),c=t(0),o=t.n(c),r=t(5),l=t(218),s=t(7),d=t(203),p=o.a.forwardRef((function(e,a){var t=e.autoFocus,c=e.checked,s=e.checkedIcon,p=e.classes,m=e.className,u=e.defaultChecked,g=e.disabled,h=e.icon,f=e.id,v=e.inputProps,b=e.inputRef,x=e.name,y=e.onBlur,k=e.onChange,C=e.onFocus,j=e.readOnly,w=e.required,E=e.tabIndex,O=e.type,N=e.value,B=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),I=o.a.useRef(null!=c).current,F=o.a.useState(Boolean(u)),S=F[0],T=F[1],z=Object(l.a)(),R=g;z&&"undefined"===typeof R&&(R=z.disabled);var W=I?c:S,M="checkbox"===O||"radio"===O;return o.a.createElement(d.a,Object(n.a)({component:"span",className:Object(r.a)(p.root,m,W&&p.checked,R&&p.disabled),disabled:R,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),z&&z.onFocus&&z.onFocus(e)},onBlur:function(e){y&&y(e),z&&z.onBlur&&z.onBlur(e)},ref:a},B),o.a.createElement("input",Object(n.a)({autoFocus:t,checked:c,defaultChecked:u,className:p.input,disabled:R,id:M&&f,name:x,onChange:function(e){var a=e.target.checked;I||T(a),k&&k(e,a)},readOnly:j,ref:b,required:w,tabIndex:E,type:O,value:N},v)),W?s:h)})),m=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p),u=t(211),g=Object(u.a)(o.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=Object(u.a)(o.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=t(20),v=Object(u.a)(o.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=t(11),x=o.a.createElement(h,null),y=o.a.createElement(g,null),k=o.a.createElement(v,null),C=o.a.forwardRef((function(e,a){var t=e.checkedIcon,c=void 0===t?x:t,l=e.classes,s=e.color,d=void 0===s?"secondary":s,p=e.icon,u=void 0===p?y:p,g=e.indeterminate,h=void 0!==g&&g,f=e.indeterminateIcon,v=void 0===f?k:f,C=e.inputProps,j=Object(i.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return o.a.createElement(m,Object(n.a)({type:"checkbox",checkedIcon:h?v:c,classes:{root:Object(r.a)(l.root,l["color".concat(Object(b.a)(d))],h&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":h},C),icon:h?v:u,ref:a},j))}));a.a=Object(s.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(f.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(f.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(C)},401:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(50);a.a=Object(c.a)(i.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},462:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(4),i=t(32),c=t(33),o=t(35),r=t(34),l=t(0),s=t.n(l),d=t(27),p=t(49),m=t(14),u=t(7),g=t(214),h=t(203),f=t(48),v=t(459),b=t(284),x=t(152),y=t(401),k=t(9),C=t(88),j=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(i.a)(this,t);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={values:{name:"",username:"",email:"",phone:"",password:"",image:null,policy:!1}},e.handleBack=function(){e.props.history.goBack()},e.handleFieldChange=function(a,t){var i=Object(n.a)({},e.state);i.values[a]=t,e.setState(i)},e.handleRegister=function(){var a=e.state.values;e.props.register(a)},e}return Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var a=this.props,t=a.isAuthenticated,n=a.history;(e.isAuthenticated!==t||t)&&n.push("/")}},{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state.values,n=t.policy;return s.a.createElement("div",{className:a.root},s.a.createElement(g.a,{className:a.grid,container:!0},s.a.createElement(g.a,{className:a.bgWrapper,item:!0,lg:5},s.a.createElement("div",{className:a.bg})),s.a.createElement(g.a,{className:a.content,item:!0,lg:7,xs:12},s.a.createElement("div",{className:a.content},s.a.createElement("div",{className:a.contentHeader},s.a.createElement(h.a,{className:a.backButton,onClick:this.handleBack},s.a.createElement(y.a,null))),s.a.createElement("div",{className:a.contentBody},s.a.createElement("form",{className:a.form},s.a.createElement(f.a,{className:a.title,variant:"h2"},"Create new account"),s.a.createElement(f.a,{className:a.subtitle,variant:"body1"},"Use your email to create new account... it's free."),s.a.createElement("div",{className:a.fields},s.a.createElement(v.a,{className:a.textField,label:"Full name",name:"name",value:t.name,onChange:function(a){return e.handleFieldChange("name",a.target.value)},variant:"outlined"}),s.a.createElement(v.a,{className:a.textField,label:"User name",name:"username",value:t.username,onChange:function(a){return e.handleFieldChange("username",a.target.value)},variant:"outlined"}),s.a.createElement(v.a,{className:a.textField,label:"Email address",name:"email",value:t.email,onChange:function(a){return e.handleFieldChange("email",a.target.value)},variant:"outlined"}),s.a.createElement(v.a,{className:a.textField,label:"Mobile Phone",name:"phone",value:t.phone,variant:"outlined",onChange:function(a){return e.handleFieldChange("phone",a.target.value)}}),s.a.createElement(v.a,{className:a.textField,label:"Password",type:"password",value:t.password,variant:"outlined",onChange:function(a){return e.handleFieldChange("password",a.target.value)}}),s.a.createElement(C.a,{className:a.upload,file:t.image,onUpload:function(a){var t=a.target.files[0];e.handleFieldChange("image",t)}}),s.a.createElement("div",{className:a.policy},s.a.createElement(b.a,{checked:t.policy,className:a.policyCheckbox,color:"primary",name:"policy",onChange:function(){return e.handleFieldChange("policy",!t.policy)}}),s.a.createElement(f.a,{className:a.policyText,variant:"body1"},"I have read the \xa0",s.a.createElement(m.b,{className:a.policyUrl,to:"#"},"Terms and Conditions"),"."))),s.a.createElement(x.a,{className:a.registerButton,color:"primary",disabled:!n,onClick:this.handleRegister,size:"large",variant:"contained"},"Register now"),s.a.createElement(f.a,{className:a.login,variant:"body1"},"Have an account?"," ",s.a.createElement(m.b,{className:a.loginUrl,to:"/login"},"Login"))))))))}}]),t}(l.Component),w=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.default,height:"100vh"},grid:{height:"100%"},bgWrapper:Object(k.a)({},e.breakpoints.down("md"),{display:"none"}),bg:{backgroundColor:e.palette.common.neutral,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",opacity:.5},content:{height:"100%",display:"flex",flexDirection:"column"},contentHeader:{display:"flex",alignItems:"center",paddingTop:e.spacing(5),paddingBototm:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},backButton:{},logoImage:{marginLeft:e.spacing(4)},contentBody:Object(k.a)({flexGrow:1,display:"flex",alignItems:"center"},e.breakpoints.down("md"),{justifyContent:"center"}),form:Object(k.a)({paddingLeft:"100px",paddingRight:"100px",paddingBottom:"125px",flexBasis:"700px"},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),title:{color:e.palette.common.contrastText,marginTop:e.spacing(3)},subtitle:{color:e.palette.text.secondary,marginTop:e.spacing(.5)},fields:{marginTop:e.spacing(5)},textField:{width:"100%","& + & ":{marginTop:e.spacing(2)}},upload:{width:"100%",marginTop:e.spacing(2)},policy:{display:"flex",alignItems:"center"},policyCheckbox:{marginLeft:"-14px"},policyText:{display:"inline",color:e.palette.text.secondary},policyUrl:{color:e.palette.text.primary,"&:hover":{cursor:"pointer",color:e.palette.primary.main}},progress:{display:"block",marginTop:e.spacing(2),marginLeft:"auto",marginRight:"auto"},registerButton:{marginTop:e.spacing(2),width:"100%"},login:{marginTop:e.spacing(2),color:e.palette.text.secondary},loginUrl:{color:e.palette.primary.main,fontWeight:"bold","&:hover":{color:e.palette.primary.main}},fieldError:{color:e.palette.danger.main,marginBottom:e.spacing(2),marginTop:e.spacing(1)},submitError:{color:e.palette.danger.main,alignText:"center",marginBottom:e.spacing(1),marginTop:e.spacing(2)}}}))(Object(d.b)((function(e){return{isAuthenticated:e.authState.isAuthenticated}}),{register:p.x})(j))}}]);
//# sourceMappingURL=19.d8746f3b.chunk.js.map