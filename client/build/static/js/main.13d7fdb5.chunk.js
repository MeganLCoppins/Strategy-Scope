(this["webpackJsonpstrategy-scope"]=this["webpackJsonpstrategy-scope"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},159:function(e,t){},162:function(e,t,a){},163:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=(a(93),a(17)),l=a(13),s=Object(l.a)(),u=a(5),d=a.n(u),p=a(8),m=a(7),f=a(37),h=a(80),b=a.n(h),g=function(){return window.history.replaceState({},document.title,window.location.pathname)},v=r.a.createContext(),E=function(){return Object(n.useContext)(v)},j=function(e){var t=e.children,a=e.onRedirectCallback,c=void 0===a?g:a,o=Object(f.a)(e,["children","onRedirectCallback"]),i=Object(n.useState)(),l=Object(m.a)(i,2),s=l[0],u=l[1],h=Object(n.useState)(),E=Object(m.a)(h,2),j=E[0],O=E[1],k=Object(n.useState)(),y=Object(m.a)(k,2),x=y[0],w=y[1],C=Object(n.useState)(!0),S=Object(m.a)(C,2),N=S[0],P=S[1],T=Object(n.useState)(!1),D=Object(m.a)(T,2),I=D[0],B=D[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var t,a,n,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()(o);case 2:if(t=e.sent,w(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,c(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,u(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,O(i);case 19:P(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Y=function(){var e=Object(p.a)(d.a.mark((function e(){var t,a,n=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},B(!0),e.prev=2,e.next=5,x.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,B(!1),e.finish(10);case 13:return e.next=15,x.getUser();case 15:a=e.sent,O(a),u(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,x.handleRedirectCallback();case 3:return e.next=5,x.getUser();case 5:t=e.sent,P(!1),u(!0),O(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{isAuthenticated:s,user:j,loading:N,popupOpen:I,loginWithPopup:Y,handleRedirectCallback:R,getIdTokenClaims:function(){return x.getIdTokenClaims.apply(x,arguments)},loginWithRedirect:function(){return x.loginWithRedirect.apply(x,arguments)},getTokenSilently:function(){return x.getTokenSilently.apply(x,arguments)},getTokenWithPopup:function(){return x.getTokenWithPopup.apply(x,arguments)},logout:function(){return x.logout.apply(x,arguments)}}},t)},O=function(e){var t=e.component,a=e.path,c=Object(f.a)(e,["component","path"]),o=E(),l=o.loading,s=o.isAuthenticated,u=o.loginWithRedirect;Object(n.useEffect)((function(){l||s||function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({appState:{targetUrl:window.location.pathname}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,s,u,a]);return r.a.createElement(i.a,Object.assign({path:a,render:function(e){return!0===s?r.a.createElement(t,e):null}},c))};a(101),a(54);var k=function(){var e=E(),t=e.isAuthenticated,a=e.loading,n=e.loginWithPopup,c=e.logout;return r.a.createElement("nav",{className:"navbar navbar-expand-lg "},r.a.createElement("div",{id:"navDisplay"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("div",null,r.a.createElement("h1",null,"Strategy Scope")),r.a.createElement("li",{id:"signInOut",className:"nav-item"},t||a?r.a.createElement("button",{id:"signOut",style:{position:"absolute",right:"1%",marginTop:".5%"},onClick:function(){return c()}},"Sign Out"):r.a.createElement("button",{onClick:function(){return n()},class:"btn-liquid"},r.a.createElement("span",{class:"inner"},"Liquid button ?"),">Sign In")," "))))},y=a(9),x=a(12),w=(a(102),a(18)),C=a(33),S=a(52),N=a(10),P=a.n(N),T=function(e){return P.a.get("/api/projects",{headers:{authorization:"Bearer ".concat(e)}})},D=function(e,t){return P.a.post("/api/projects",e,{headers:{authorization:"Bearer ".concat(t)}})},I=function(e){return P.a.get("/api/tasks",{headers:{authorization:"Bearer ".concat(e)}})},B=function(e,t){return P.a.post("/api/tasks",e,{headers:{authorization:"Bearer ".concat(t)}})},Y=function(e,t,a){return P.a.put("/api/tasks/"+e,{status:t},{headers:{authorization:"Bearer ".concat(a)}})},R=function(e){return P.a.get("/api/chat",{headers:{authorization:"Bearer ".concat(e)}})},W=function(e,t){return P.a.post("/api/chat",e,{headers:{authorization:"Bearer ".concat(t)}})};var A=function(){var e=E(),t=e.loading,a=e.user,c=e.getTokenSilently,o=Object(n.useState)([]),i=Object(m.a)(o,2),l=i[0],s=i[1],u=Object(n.useState)({}),f=Object(m.a)(u,2),h=f[0],b=f[1],g=Object(n.useState)({}),v=Object(m.a)(g,2),j=v[0],O=v[1],k=Object(n.useState)([]),N=Object(m.a)(k,2);if(N[0],N[1],Object(n.useEffect)((function(){P()}),[]),t||!a)return r.a.createElement("div",null,"Loading...");function P(){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:t=e.sent,T(t).then((function(e){s(e.data)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){var t=e.target,a=t.name,n=t.value;b(Object(x.a)({},h,Object(y.a)({},a,n)))}function Y(){return(Y=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!h.title){e.next=6;break}return e.next=4,c();case 4:a=e.sent,D({title:h.title,code:h.code},a).then((function(e){P(),b({title:"",code:""})})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container profile"},r.a.createElement("h1",null,"Hello ",a.name),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 createProj"},r.a.createElement("h3",null,"Create New Project"),r.a.createElement("h5",null,"Enter a project name and code below. You and your team members will use this code to gain access to your project."),r.a.createElement("h5",null,"The project code must be at least 6 characters long."),r.a.createElement(w.a,null,r.a.createElement(w.a.Group,{controlId:"createProject",id:"createProject"},r.a.createElement(C.a,null,r.a.createElement(w.a.Control,{name:"title",value:h.title,placeholder:"Enter a Project Name",onChange:B,style:{marginBottom:"3%",border:"2px solid black"}}),r.a.createElement(w.a.Control,{name:"code",value:h.code,placeholder:"Create a Project Code",onChange:B,style:{marginBottom:"3%",border:"2px solid black"}}),r.a.createElement(S.a,{disabled:!(h.title&&h.code),type:"submit",style:{width:"30%",marginLeft:"20%",background:"midnightblue"},onClick:function(e){return Y.apply(this,arguments)}},"Create Project"))))),r.a.createElement("div",{className:"col-md-6 findProj"},r.a.createElement("h3",null,"Search For Your Project"),r.a.createElement("h5",null,"Enter your project's code below, remember your code is case-sensitive."),r.a.createElement(w.a,null,r.a.createElement(w.a.Group,{style:{display:"flex"},controlId:"findProject"},r.a.createElement(w.a.Control,{name:"code",value:j.code,placeholder:"Enter Your Project's Code",onChange:function(e){var t=e.target,a=t.name,n=t.value;O(Object(x.a)({},j,Object(y.a)({},a,n)))},style:{marginLeft:"0",marginTop:"3%",border:"2px solid black"}}),r.a.createElement(S.a,{type:"submit",disabled:!j.code,style:{width:"30%",background:"midnightblue",marginTop:"3%",marginLeft:"1%"},onClick:function(e){e.preventDefault();var t=l.filter((function(e){return e.code===j.code}));window.location.href="/projects/"+t[0]._id}},"Submit")))))))};var L=function(){return r.a.createElement("div",null,r.a.createElement(A,null))},_=(a(120),a(16));function z(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function U(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"10"},e)))}function F(e){return r.a.createElement("button",Object.assign({},e,{style:{marginLeft:12,marginBottom:20,marginTop:20},className:"btn btn-success"}),e.children)}var M=a(87);a(121);var G=function(){var e=E().getTokenSilently,t=Object(n.useState)({}),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(new Date),s=Object(m.a)(l,2),u=s[0],f=s[1],h=Object(i.f)().id;function b(e){var t=e.target,a=t.name,n=t.value;o(Object(x.a)({},c,Object(y.a)({},a,n)))}function g(){return(g=Object(p.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(c.title&&c.description&&u)){t.next=6;break}return t.next=4,e();case 4:n=t.sent,B({title:c.title,description:c.description,due_date:u,project:h},n).then((function(e){alert("Task Submitted!"),o({title:"",description:""})})).catch((function(e){return console.log(e)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",{id:"taskCont"},r.a.createElement(_.a,{to:"/projects/"+h},r.a.createElement("button",{className:"chatButt"},"Go Back")),r.a.createElement(_.a,{to:"/profile"},r.a.createElement("button",{className:"chatButt"},"Profile")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"Add a New Task"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("form",null,r.a.createElement(z,{onChange:b,name:"title",placeholder:"Task Title (required)",value:c.title,id:"formTitle"}),r.a.createElement(U,{onChange:b,name:"description",placeholder:"Description of Task (required)",value:c.description,id:"formText"}),r.a.createElement("div",{className:"col-md-6 offset-3 dueDate"},r.a.createElement("h3",null,"Select Due Date "),r.a.createElement("div",{className:"calendar offset-3"},r.a.createElement(M.a,{onChange:function(e){f(e)},value:u})),r.a.createElement("div",{className:"offset-5 buttons"},r.a.createElement(F,{disabled:!(c.title&&c.description),onClick:function(e){return g.apply(this,arguments)}},"Save Task")))))))},q=a(41),H=a(40),J=(a(122),a(26)),K=a.n(J);(0,a(125).v4)();var Z=function(){var e=E().getTokenSilently,t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(i.f)().id;function s(){return(s=Object(p.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:a=t.sent,I(a).then((function(e){o(e.data.filter((function(e){return e.project===l})))})).catch((function(e){return console.log(e)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()})),r.a.createElement("div",{id:"duedate"},r.a.createElement("ul",null,0!==c.length?c.map((function(e){return r.a.createElement("li",{key:e.title},r.a.createElement("div",null,r.a.createElement("h4",null,e.title))," ",r.a.createElement("div",null,"Due Date: "),r.a.createElement(K.a,{format:"MM/DD/YYYY"},e.due_date))})):r.a.createElement("h1",null,"No Tasks to Display...")))},Q=a(34),V=a(35),X=a(38),$=a(36),ee=(a(128),a(129),a(83)),te=a.n(ee),ae=(a(162),function(){var e=E(),t=e.loading,a=e.user;return t||!a?r.a.createElement("div",null,"Loading..."):r.a.createElement(n.Fragment,null,r.a.createElement("p",{id:"name"},a.name))}),ne=te()("http://localhost:3001");var re=function(){var e=E().getTokenSilently,t=Object(i.f)().id,a=Object(n.useState)(""),c=Object(m.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)([]),u=Object(m.a)(s,2),f=u[0],h=u[1],b=Object(n.useState)([]),g=Object(m.a)(b,2),v=g[0],j=g[1];Object(n.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]);var O=E(),k=O.loading,y=O.user;if(k||!y)return r.a.createElement("div",null,"Loading...");function x(){return(x=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return C.apply(this,arguments)}function C(){return(C=Object(p.a)(d.a.mark((function a(){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e();case 2:n=a.sent,R(n).then((function(e){j(e.data.filter((function(e){return e.project===t})).reverse())})).catch((function(e){return console.log(e)})),ne.on("message",(function(e){h([e])}));case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function S(){return(S=Object(p.a)(d.a.mark((function a(n){var r,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),13!==n.keyCode){a.next=9;break}return r=[{message:o,from:"From: ",project:t}],h(f.concat(r).reverse()),ne.emit("message",r),a.next=7,e();case 7:c=a.sent,W({message:o,from:y.name,project:t},c).then((function(){l("")})).catch((function(e){return console.log(e)}));case 9:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement("div",{id:"chat"},r.a.createElement("div",{id:"grid-container"},r.a.createElement("input",{type:"text",onChange:function(e){l(e.target.value)},value:o,placeholder:"Type your message here",onKeyUp:function(e){return S.apply(this,arguments)}})),r.a.createElement("div",{id:"grid-container2"},r.a.createElement("h2",{style:{fontFamily:"'PT Sans Narrow', sans-serif",fontWeight:"bold",marginTop:"3%"}},"Chat Box"),r.a.createElement("ul",{id:"messages"},f.map((function(e){return r.a.createElement("li",{key:e._id,className:"chats"},r.a.createElement("div",{className:"userInfo"},r.a.createElement(K.a,{format:"MM/DD/YYYY h:mm a",local:!0}),r.a.createElement(ae,null)),e.message," ",r.a.createElement("span",null))})),v.map((function(e){return r.a.createElement("li",{key:e._id,className:"chats"},r.a.createElement("div",{className:"userInfo"},r.a.createElement(K.a,{format:"MM/DD/YYYY h:mm a"},e.dateCreated),r.a.createElement("p",{id:"name"},e.from)),e.message," ",r.a.createElement("span",null))})))))},ce=function(e){Object(X.a)(a,e);var t=Object($.a)(a);function a(){return Object(Q.a)(this,a),t.apply(this,arguments)}return Object(V.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"popup"},r.a.createElement(re,null),r.a.createElement("div",{className:"popup\\_inner"},r.a.createElement("button",{id:"close",onClick:this.props.closePopup},"Close")))}}]),a}(r.a.Component),oe=a(84),ie=a.n(oe),le=function(e){Object(X.a)(a,e);var t=Object($.a)(a);function a(e){var n;return Object(Q.a)(this,a),(n=t.call(this,e)).state={showPopup:!1},n}return Object(V.a)(a,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.togglePopup.bind(this),src:ie.a,alt:"chat",className:"chatButt"},"Chat"),this.state.showPopup?r.a.createElement(ce,{text:'Click "Close Button" to hide popup',closePopup:this.togglePopup.bind(this)}):null)}}]),a}(n.Component);a(163);var se=function(){var e,t=E().getTokenSilently,a=Object(n.useState)([]),c=Object(m.a)(a,2),o=(c[0],c[1]),l=Object(i.f)().id;function s(){return(s=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:a=e.sent,I(a).then((function(e){var t;o(e.data.filter((function(e){return e.project===l}))),v((t={},Object(y.a)(t,"to-do",Object(x.a)({},g["to-do"],{tasks:e.data.filter((function(e){return"to-do"===e.status&&e.project===l}))})),Object(y.a)(t,"in-progress",Object(x.a)({},g["in-progress"],{tasks:e.data.filter((function(e){return"in-progress"===e.status&&e.project===l}))})),Object(y.a)(t,"done",Object(x.a)({},g.done,{tasks:e.data.filter((function(e){return"done"===e.status&&e.project&&e.project===l}))})),t))})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]);var u=(e={},Object(y.a)(e,"to-do",{name:"To Do",tasks:[]}),Object(y.a)(e,"in-progress",{name:"In Progress",tasks:[]}),Object(y.a)(e,"done",{name:"Done",tasks:[]}),e);function f(){return(f=Object(p.a)(d.a.mark((function e(a,n,r){var c,o,i,l,s,u,p,f,h,b,g,v,E,j,O,k;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(c=e.sent,a.destination){e.next=5;break}return e.abrupt("return");case 5:o=a.source,i=a.destination,o.droppableId!==i.droppableId?(l=n[o.droppableId],s=n[i.droppableId],u=Object(q.a)(l.tasks),p=Object(q.a)(s.tasks),f=u.splice(o.index,1),h=Object(m.a)(f,1),b=h[0],g=l.tasks[o.index]._id,p.splice(i.index,0,b),Y(g,i.droppableId,c).then((function(e){var t;r(Object(x.a)({},n,(t={},Object(y.a)(t,o.droppableId,Object(x.a)({},l,{tasks:u})),Object(y.a)(t,i.droppableId,Object(x.a)({},s,{tasks:p})),t)))}))):(v=n[o.droppableId],E=Object(q.a)(v.tasks),j=E.splice(o.index,1),O=Object(m.a)(j,1),k=O[0],E.splice(i.index,0,k),r(Object(x.a)({},n,Object(y.a)({},o.droppableId,Object(x.a)({},v,{tasks:E})))));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=Object(n.useState)(u),b=Object(m.a)(h,2),g=b[0],v=b[1];return r.a.createElement("div",{id:"kanban"},r.a.createElement("div",{className:"row",style:{marginBottom:"1%"}},r.a.createElement("div",{id:"taskBtn"},r.a.createElement(_.a,{to:"/tasks/projects/"+l},r.a.createElement("button",{className:"chatButt"},"Add Task"))),r.a.createElement("div",{id:"chatBtn"},r.a.createElement(le,null)),r.a.createElement(_.a,{to:"/profile"},r.a.createElement("button",{className:"chatButt"},"Profile"))),r.a.createElement(Z,null),r.a.createElement("div",{id:"dragNDrop",style:{display:"flex",justifyContent:"center",height:"100%",marginLeft:"4.5%"}},r.a.createElement(H.a,{onDragEnd:function(e){return function(e,t,a){return f.apply(this,arguments)}(e,g,v)}},Object.entries(g).map((function(e){var t=Object(m.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:a,style:{key:"index",flexDirection:"column",justifyContent:"center",marginRight:"6%",background:"lightsteelblue"}},r.a.createElement("h2",{style:{textAlign:"center",padding:"3%",background:"midnightblue",color:"gainsboro",fontFamily:"'PT Sans Narrow', sans-serif",fontSize:"40px"}},n.name),r.a.createElement("div",{style:{margin:8}},r.a.createElement(H.c,{droppableId:a,key:a},(function(e,t){return r.a.createElement("div",Object.assign({id:"columns"},e.droppablePorps,{ref:e.innerRef,style:{background:t.isDraggingOver?"gainsboro":"none",padding:10,width:350,minHeight:500}}),n.tasks.map((function(e,t){return r.a.createElement(H.b,{key:e.title,draggableId:e._id,index:t},(function(t,a){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.dragHandleProps,t.draggableProps,{style:Object(x.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"50px",backgroundColor:a.isDragging?"steelblue":"midnightblue",color:"white"},t.draggableProps.style)}),r.a.createElement("h5",null,r.a.createElement("strong",null,e.title,":")),r.a.createElement("div",null,e.description))}))})),e.placeholder)}))))})))))};var ue=function(){return r.a.createElement("div",null,r.a.createElement(se,null))},de=(a(165),a(86)),pe=a.n(de),me=function(){var e=E(),t=e.isAuthenticated,a=e.loading,n=e.loginWithPopup,c=e.user;return a||!c?r.a.createElement("div",{id:"main"},r.a.createElement("button",{onClick:function(){return n()},className:"glow-on-hover",type:"button"},r.a.createElement("img",{id:"logo",src:pe.a,alt:"logo"})),";"):(!0===t&&alert("nice"),r.a.createElement("div",{id:"nothing"}))};var fe=function(){var e=E(),t=e.loading,a=e.isAuthenticated;return t?r.a.createElement("div",null,"Loading..."):a?r.a.createElement(i.b,{history:s},r.a.createElement(k,null),r.a.createElement(i.c,null,r.a.createElement(O,{exact:!0,path:"/",component:L}),r.a.createElement(O,{exact:!0,path:"/tasks/projects/:id",component:G}),r.a.createElement(O,{path:"/profile",component:A}),r.a.createElement(O,{path:"/projects/:id",component:ue}))):r.a.createElement(me,null)},he=a(39);o.a.render(r.a.createElement(j,{client_id:he.clientId,domain:he.domain,redirect_uri:window.location.origin,audience:he.audience,onRedirectCallback:function(e){s.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(fe,null)),document.getElementById("root"))},39:function(e){e.exports=JSON.parse('{"domain":"dev-wnzvobdc.auth0.com","clientId":"S990ZPTFna1oG81UJISlRWAMN8ejNDbG","audience":"https://strategyscope.herokuapp.com/"}')},54:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/logo7.4493851d.png"},86:function(e,t,a){e.exports=a.p+"static/media/logo6.364a7629.png"},88:function(e,t,a){e.exports=a(166)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.13d7fdb5.chunk.js.map