(this.webpackJsonpbrowser_storage=this.webpackJsonpbrowser_storage||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e){e.exports=JSON.parse('[{"id":1,"username":"constantine","password":"password"},{"id":2,"username":"krishna","password":"password"}]')},35:function(e,t,n){e.exports=n(49)},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),l=n(11),i=n(28),s=n(6),u=n(18),d=n(8),p=n(34),m=n(9),f={},b={},h=n(29),g={key:"root",storage:n.n(h).a,whitelist:["filter"]},O=Object(s.combineReducers)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILTER":return console.log("add filter"),Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.payload,[].concat(Object(p.a)(e[t.payload]),["filter"])));case"DEL_FILTER":return console.log("remove filter"),Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.payload,e[t.payload].slice(0,e[t.payload].length-1)));default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object.keys(e).includes(t.payload)?e:(console.log("adding new id to state"),Object(m.a)(Object(m.a)({},e),t.payload));case"LOGOUT":return b;default:return e}}}),v=Object(u.a)(g,O),E=n(30),y=n(31),j=[E.a],w=Object(s.createStore)(v,{},Object(y.composeWithDevTools)(s.applyMiddleware.apply(void 0,j))),k=Object(u.b)(w),L=(n(46),n(16)),C=n(17),F=n(20),A=n(19),D=n(32),I=n.n(D),T=(n(47),n(33)),x=n(2),N={addFilter:function(e){return function(t){t({type:"ADD_FILTER",payload:e})}},delFilter:function(e){return function(t){t({type:"DEL_FILTER",payload:e})}},logout:function(){return function(e){e({type:"LOGOUT"})}}},R=Object(l.b)((function(e){return{filters:e.filter,user:e.user}}),N)((function(e){var t=e.filters,n=e.user,a=e.addFilter,o=e.delFilter,c=e.logout,l=Object(x.f)();return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello ",n.username&&n.username.toUpperCase(),"!"),r.a.createElement("button",{onClick:function(){return c(),void l.push("/")}},"Logout"),r.a.createElement("h1",null,"Your filters:"),r.a.createElement("ul",null,n.id&&t[n.id]&&t[n.id].map((function(e){return r.a.createElement("li",null,e)}))),r.a.createElement("button",{onClick:function(){return a(n.id)}},"Add Filter"),r.a.createElement("button",{onClick:function(){return o(n.id)}},"Remove Filter"))})),_=function(e){Object(F.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(L.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleClick=function(){e.props.login(e.state)&&e.props.history.push("/dashboard")},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"Username:",r.a.createElement("input",{name:"username",onChange:function(t){return e.setState(Object(d.a)({},t.target.name,t.target.value))},type:"text"}),"Password:",r.a.createElement("input",{name:"password",onChange:function(t){return e.setState(Object(d.a)({},t.target.name,t.target.value))},type:"password"}),r.a.createElement("button",{onClick:this.handleClick},"Login"))}}]),n}(a.Component),S={login:function(e){return function(t){var n=T.filter((function(t){return e.username===t.username&&e.password===t.password}))[0];return n&&t({type:"LOGIN",payload:n}),n}}},G=Object(l.b)(null,S)(Object(x.g)(_)),U=n(15),J=function(e){Object(F.a)(n,e);var t=Object(A.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U.a,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:I.a,className:"App-logo",alt:"logo"}),r.a.createElement(x.c,null,r.a.createElement(x.a,{name:"login",exact:!0,path:"/",component:G}),r.a.createElement(x.a,{name:"dashboard",exact:!0,path:"/dashboard",component:R}),r.a.createElement(R,null)))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,{store:w},r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{persistor:k},r.a.createElement(J,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.944816fe.chunk.js.map