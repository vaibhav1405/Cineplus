(this["webpackJsonpcinema-plus-client"]=this["webpackJsonpcinema-plus-client"]||[]).push([[27],{453:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(32),r=a(33),i=a(35),o=a(34),c=a(0),l=a.n(c),s=a(27),m=a(233),u=a(7),h=a(10),g=a.n(h),p=a(440),d=a(441),v=a(442),f=a(443),b=a(444),C=a(461),E=a(81),P=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={rowsPerPage:10,page:0},e.handleChangePage=function(t,a){e.setState({page:a})},e.handleChangeRowsPerPage=function(t){e.setState({rowsPerPage:t.target.value})},e.onFindAttr=function(e,t,a){var n=t.find((function(t){return t._id===e}));return n?n[a]:"Not ".concat(a," Found")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.className,r=t.reservations,i=t.movies,o=t.cinemas,c=this.state,s=c.rowsPerPage,m=c.page,u=g()(a.root,n);return l.a.createElement(E.e,{className:u},l.a.createElement(E.f,{noPadding:!0},l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(v.a,null,l.a.createElement(f.a,{align:"left"},"User"),l.a.createElement(f.a,{align:"left"},"Phone"),l.a.createElement(f.a,{align:"left"},"Start At"),l.a.createElement(f.a,{align:"left"},"Movie"),l.a.createElement(f.a,{align:"left"},"Cinema"),l.a.createElement(f.a,{align:"left"},"Ticket Price"),l.a.createElement(f.a,{align:"left"},"Total"),l.a.createElement(f.a,{align:"left"},"Checkin"))),l.a.createElement(b.a,null,r.sort((function(e,t){return new Date(t.date)-new Date(e.date)})).slice(m*s,m*s+s).map((function(t){return l.a.createElement(v.a,{className:a.tableRow,hover:!0,key:t._id},l.a.createElement(f.a,{className:a.tableCell},t.username),l.a.createElement(f.a,{className:a.tableCell},t.phone),l.a.createElement(f.a,{className:a.tableCell},t.startAt),l.a.createElement(f.a,{className:a.tableCell},e.onFindAttr(t.movieId,i,"title")),l.a.createElement(f.a,{className:a.tableCell},e.onFindAttr(t.cinemaId,o,"name")),l.a.createElement(f.a,{className:a.tableCell},t.ticketPrice),l.a.createElement(f.a,{className:a.tableCell},t.total),l.a.createElement(f.a,{className:a.tableCell},t.checkin?"yes":"no"))})))),l.a.createElement(C.a,{backIconButtonProps:{"aria-label":"Previous Page"},component:"div",count:r.length,nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,page:m,rowsPerPage:s,rowsPerPageOptions:[5,10,25]})))}}]),a}(c.Component);P.defaultProps={reservations:[],movies:[],cinemas:[],onSelect:function(){},onShowDetails:function(){}};var y=Object(u.a)((function(e){return{root:{},tableRow:{height:"64px"},tableCell:{whiteSpace:"nowrap"},tableCellInner:{display:"flex",alignItems:"center"},avatar:{backgroundColor:e.palette.primary.main,display:"inline-flex",fontSize:"14px",fontWeight:500,height:"36px",width:"36px"},nameText:{display:"inline-block",marginLeft:e.spacing(2),fontWeight:500,cursor:"pointer"}}}))(P),w=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.className,n=e.search,r=e.mode,i=e.onChangeSearch,o=e.onChangeMode,c=g()(t.root,a);return l.a.createElement("div",{className:c},l.a.createElement("div",{className:t.row},l.a.createElement(E.k,{className:t.searchInput,placeholder:"Search reservation by Phone",value:n,onChange:i}),l.a.createElement(E.b,{mode:r,onChange:o})))}}]),a}(c.Component),j=Object(u.a)((function(e){return{root:{},row:{height:"42px",display:"flex",alignItems:"center",marginTop:e.spacing(1),justifyContent:"space-between"},searchInput:{marginRight:e.spacing(1)}}}))(w),O=a(49),N=a(395),k=a(278),S=a(397),x=a(398),I=(a(399),a(400),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).onFindAttr=function(e,t,a){var n=t.find((function(t){return t._id===e}));return n?n[a]:"Not ".concat(a," Found")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.reservations,n=t.cinemas,r=t.movies,i=a.map((function(t){return{title:"Movie: ".concat(e.onFindAttr(t.movieId,r,"title"),"-Cinema: ").concat(e.onFindAttr(t.cinemaId,n,"name")),start:t.date,url:"/movie/".concat(t.movieId)}}));return l.a.createElement(N.a,{defaultView:"dayGridMonth",header:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},plugins:[k.d,S.a,x.a],events:i})}}]),a}(c.Component)),A=a(31),M=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={mode:"list",search:""},e.onChangeMode=function(){return e.setState((function(e){return{mode:"grid"===e.mode?"list":"grid"}}))},e.onChangeSearch=function(t){return e.setState({search:t.target.value})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.reservations,a=e.movies,n=e.cinemas,r=e.getReservations,i=e.getMovies,o=e.getCinemas;t.length||r(),a.length||i(),n.length||o()}},{key:"render",value:function(){var e=this.state,t=e.mode,a=e.search,n=this.props,r=n.classes,i=n.reservations,o=n.movies,c=n.cinemas,s=Object(A.c)(a,i,"phone");return l.a.createElement("div",{className:r.root},l.a.createElement(j,{reservations:s,search:a,onChangeSearch:this.onChangeSearch,mode:t,onChangeMode:this.onChangeMode}),l.a.createElement("div",{className:r.content},s.length?"list"===t?l.a.createElement(y,{reservations:s,movies:o,cinemas:c}):l.a.createElement(I,{reservations:s,movies:o,cinemas:c}):l.a.createElement("div",{className:r.progressWrapper},l.a.createElement(m.a,null))))}}]),a}(c.Component),F={getReservations:O.o,getMovies:O.n,getCinemas:O.j},R=Object(s.b)((function(e){var t=e.reservationState,a=e.movieState,n=e.cinemaState;return{reservations:t.reservations,movies:a.movies,cinemas:n.cinemas}}),F)(Object(u.a)((function(e){return{root:{padding:e.spacing(3)},content:{marginTop:e.spacing(2)},progressWrapper:{paddingTop:"48px",paddingBottom:"24px",display:"flex",justifyContent:"center"}}}))(M))}}]);
//# sourceMappingURL=27.9d7f683f.chunk.js.map