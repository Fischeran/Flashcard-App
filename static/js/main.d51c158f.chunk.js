(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{35:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=c(6),b=c(0);var o=function(){return Object(b.jsx)("header",{className:"jumbotron bg-dark",children:Object(b.jsxs)("div",{className:"container text-white",children:[Object(b.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(b.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var l=function(){return Object(b.jsx)("div",{className:"NotFound",children:Object(b.jsx)("h1",{children:"Not Found"})})},d=c(2),j=c(4),u=c(7),O=c(3),h=c(20),p=["cards"],x=Object({NODE_ENV:"production",PUBLIC_URL:"/Library-Project",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:8080",m=new Headers;function f(e){e.cards;return Object(h.a)(e,p)}function v(e,t,c){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(Object(d.a)().mark((function e(t,c,n){var r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(n));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(x,"/decks?_embed=cards"),e.next=3,v(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(Object(d.a)().mark((function e(t,c){var n,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks"),r={method:"POST",headers:m,body:JSON.stringify(f(t)),signal:c},e.next=4,v(n,r,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(Object(d.a)().mark((function e(t,c){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t,"?_embed=cards"),e.next=3,v(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(Object(d.a)().mark((function e(t,c){var n,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:m,body:JSON.stringify(f(t)),signal:c},e.next=4,v(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return I.apply(this,arguments)}function I(){return(I=Object(j.a)(Object(d.a)().mark((function e(t,c){var n,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t),r={method:"DELETE",signal:c},e.next=4,v(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,c){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(Object(d.a)().mark((function e(t,c,n){var r,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/cards"),c.deckId=Number(t),a={method:"POST",headers:m,body:JSON.stringify(c),signal:n},e.next=5,v(r,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return F.apply(this,arguments)}function F(){return(F=Object(j.a)(Object(d.a)().mark((function e(t,c){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t),e.next=3,v(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return J.apply(this,arguments)}function J(){return(J=Object(j.a)(Object(d.a)().mark((function e(t,c){var n,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t.id),r={method:"PUT",headers:m,body:JSON.stringify(t)},e.next=4,v(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return R.apply(this,arguments)}function R(){return(R=Object(j.a)(Object(d.a)().mark((function e(t,c){var n,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t),r={method:"DELETE",signal:c},e.next=4,v(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.append("Content-Type","application/json");var U=function(e){var t=e.decks,c=void 0===t?[]:t,n=e.deleteHandler,r=(new AbortController).signal;console.log(c);var a=c.map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:e.name}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("p",{children:"".concat(e.cards.length," cards")}),Object(b.jsx)("p",{children:e.description}),Object(b.jsxs)("div",{className:"row",style:{display:"flex",justifyContent:"left",margin:"8px"},children:[Object(b.jsx)(O.b,{to:"/decks/".concat(e.id),className:"btn btn-secondary",children:"View"}),Object(b.jsx)(O.b,{to:"/decks/".concat(e.id,"/study"),className:"btn btn-primary",children:"study"}),Object(b.jsx)("button",{type:"button",onClick:function(){return n(e.id,r)},className:"btn btn-danger",children:"Delete"})]})]})]},e.id)}));return Object(b.jsx)("div",{children:a})},q=c(12),Y=c(5);var B=function(e){var t=e.deckId,c=e.submitHandler,n=e.formData,r=e.changeHandler;return Object(b.jsxs)("form",{onSubmit:function(e){return c(e)},children:[Object(b.jsx)("div",{className:"row col-4",children:Object(b.jsx)("label",{htmlFor:"name",children:"Name"})}),Object(b.jsx)("div",{className:"row col-4",children:Object(b.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",value:n.name,onChange:function(e){return r(e)},required:!0})}),Object(b.jsx)("div",{className:"row col-4",children:Object(b.jsx)("label",{htmlFor:"description",children:"description"})}),Object(b.jsx)("div",{className:"row col-4",children:Object(b.jsx)("textarea",{id:"description",className:"form-control",name:"description",value:n.description,onChange:function(e){return r(e)},required:!0})}),t?Object(b.jsx)(O.b,{to:"/decks/".concat(t),className:"btn btn-secondary",children:"Cancel"}):Object(b.jsx)(O.b,{to:"/",className:"btn btn-secondary",children:"Cancel"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})};var K=function(){var e=new AbortController,t=Object(n.useState)(Object(Y.a)({},{name:"",description:""})),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(i.f)();function o(){return(o=Object(j.a)(Object(d.a)().mark((function t(c){return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,N(r,e.signal);case 3:s.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item active",children:"Create Deck"})]})}),Object(b.jsx)("h2",{children:"Create Deck"}),Object(b.jsx)(B,{handleSubmit:function(e){return o.apply(this,arguments)},formData:r,changeHandler:function(e){var t=e.target;a(Object(Y.a)(Object(Y.a)({},r),{},Object(q.a)({},t.name,t.value)))}})]})};var W=function(){var e=Object(i.f)(),t=Object(n.useState)([]),c=Object(u.a)(t,2),r=c[0],a=c[1],s=new AbortController,o=s.signal;function l(){return l=Object(j.a)(Object(d.a)().mark((function t(c,n){return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Delete this deck?\nYou will not be able to recover it.")){t.next=10;break}return t.prev=1,t.next=4,H(c,n);case 4:e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])}))),l.apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(o);case 3:t=e.sent,console.log(t),t.length>0&&a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return a([]),function(){e.apply(this,arguments)}(),function(){return s.abort()}}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(O.b,{to:"/decks/new",className:"btn btn-secondary",children:"Create"}),Object(b.jsx)(U,{decks:r,deleteHandler:function(e,t){return l.apply(this,arguments)}})]})};var V=function(e){var t=e.deck,c=e.deleteCardHandler,n=Object(i.h)().url,r=t.cards.map((function(e){return Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"row",style:{display:"flex",justifyContent:"space-evenly",fontSize:"20px"},children:[Object(b.jsx)("div",{children:e.front}),Object(b.jsx)("div",{children:e.back})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(O.b,{to:"".concat(n,"/cards/").concat(e.id,"/edit"),className:"btn btn-secondary",children:"Edit"}),Object(b.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return c(e.id)},children:"Delete"})]})]})},e)}));return Object(b.jsx)("div",{children:r})};var z=function(){var e={name:"",description:"",cards:[]},t=Object(i.g)().deckId,c=Object(n.useState)(e),r=Object(u.a)(c,2),a=r[0],s=r[1],o=new AbortController,l=Object(i.h)(),h=(l.path,l.url);Object(n.useEffect)((function(){function c(){return(c=Object(j.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,o.signal);case 3:c=e.sent,s(Object(Y.a)({},c)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return s(e),function(e){c.apply(this,arguments)}(t),function(){return o.abort()}}),[t]);var p=Object(i.f)();function x(){return(x=Object(j.a)(Object(d.a)().mark((function e(t,c){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck?\nYou will not be able to recover it.")){e.next=10;break}return e.prev=1,e.next=4,H(t,c);case 4:p.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function m(){return(m=Object(j.a)(Object(d.a)().mark((function e(t,c){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this card?\nYou will not be able to recover it.")){e.next=10;break}return e.prev=1,e.next=4,L(t,c);case 4:p.go(0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)("p",{children:"Create Deck"})})]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:a.name}),Object(b.jsx)("p",{children:a.description}),Object(b.jsxs)("div",{children:[Object(b.jsx)(O.b,{to:"".concat(h,"/edit"),className:"btn btn-secondary",children:"edit"}),Object(b.jsx)(O.b,{to:"".concat(h,"/study"),className:"btn btn-primary",children:"study"}),Object(b.jsx)(O.b,{to:"".concat(h,"/cards/new"),className:"btn btn-primary",children:"Add Cards"}),Object(b.jsx)("button",{type:"button",onClick:function(){return function(e,t){return x.apply(this,arguments)}(t,o.signal)},className:"btn btn-danger",children:"Delete icon goes here"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Cards"}),Object(b.jsx)(V,{deck:a,deleteCardHandler:function(e,t){return m.apply(this,arguments)}})]})]})};var M=function(e){var t=e.submitHandler,c=e.formData,n=e.changeHandler,r=e.deckId;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsx)("div",{className:"row col-4",children:Object(b.jsx)("label",{htmlFor:"front",children:"front"})}),Object(b.jsx)("div",{className:"row col-4",children:Object(b.jsx)("textarea",{id:"front",name:"front",className:"form-control",value:c.front,onChange:n,required:!0})}),Object(b.jsx)("div",{className:"row col-4",children:Object(b.jsx)("label",{htmlFor:"back",children:"back"})}),Object(b.jsx)("div",{className:"row col-4",children:Object(b.jsx)("textarea",{id:"back",name:"back",className:"form-control",value:c.back,onChange:n,required:!0})}),Object(b.jsx)(O.b,{to:"/decks/".concat(r),className:"btn btn-secondary",children:"Cancel"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})};var G=function(){var e=new AbortController,t={name:"",description:""},c=Object(n.useState)(t),r=Object(u.a)(c,2),a=r[0],s=r[1],o=Object(i.g)().deckId;Object(n.useEffect)((function(){function c(){return(c=Object(j.a)(Object(d.a)().mark((function t(c){var n;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(c,e.signal);case 3:n=t.sent,s(Object(Y.a)({},n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return s(t),function(e){c.apply(this,arguments)}(o),function(){return e.abort()}}),[o]);var l=Object(n.useState)(Object(Y.a)({},{front:"",back:""})),h=Object(u.a)(l,2),p=h[0],x=h[1],m=Object(i.f)();function f(){return(f=Object(j.a)(Object(d.a)().mark((function t(c){return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,A(o,p,e.signal);case 3:m.go(0);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/decks/".concat(o),children:a.name})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)("p",{children:"Add card"})})]})}),Object(b.jsx)("h4",{children:"".concat(a.name,": Add Card")}),Object(b.jsx)(M,{submitHandler:function(e){return f.apply(this,arguments)},formData:p,changeHandler:function(e){var t=e.target;x(Object(Y.a)(Object(Y.a)({},p),{},Object(q.a)({},t.name,t.value)))},deckId:o})]})};var Q=function(){var e=Object(i.f)(),t={name:"",description:"",cards:[{front:"",back:""}]},c=Object(i.g)().deckId,r=Object(n.useState)(t),a=Object(u.a)(r,2),s=a[0],o=a[1],l=new AbortController;Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,l.signal);case 3:c=e.sent,o(Object(Y.a)({},c)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return o(t),function(t){e.apply(this,arguments)}(c),function(){return l.abort()}}),[c]);var h=Object(n.useState)(0),p=Object(u.a)(h,2),x=p[0],m=p[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),k=v[0],y=v[1],w=s.cards,N=w[x];return w.length<=2?Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/decks/".concat(c),children:s.name})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)("p",{children:"Study"})})]})}),Object(b.jsx)("h4",{children:"Not Enough cards."}),Object(b.jsxs)("p",{children:["You need at least 3 cards to study. There are ",w.length," in this deck"]}),Object(b.jsx)(O.b,{to:"/decks/".concat(c,"/cards/new"),className:"btn btn-primary",children:"Add Cards"})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/decks/".concat(c),children:s.name})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)("p",{children:"Study"})})]})}),Object(b.jsx)("h2",{children:"Study: ".concat(s.name)}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h3",{children:"Card ".concat(x+1," of ").concat(w.length)})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("div",{children:k?Object(b.jsx)("p",{children:N.back}):Object(b.jsx)("p",{children:N.front})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return y((function(e){return!e}))},children:"Flip"}),Object(b.jsx)("div",{children:k?Object(b.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){x+1===w.length?window.confirm("Restart Cards?")?e.go(0):e.push("/"):(m((function(e){return e+1})),y((function(e){return!e})))},children:"Next"}):Object(b.jsx)("p",{})})]})]})]})]})};var X=function(){var e={name:"",description:"",cards:[]},t=Object(i.g)().deckId,c=Object(n.useState)(e),r=Object(u.a)(c,2),a=r[0],s=r[1],o=new AbortController,l=Object(n.useState)(Object(Y.a)({},{name:"",description:""})),h=Object(u.a)(l,2),p=h[0],x=h[1];"".concat(a.name),"".concat(a.description),Object(n.useEffect)((function(){function c(){return(c=Object(j.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,o.signal);case 3:c=e.sent,s(Object(Y.a)({},c)),x(Object(Y.a)({},c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return s(e),function(e){c.apply(this,arguments)}(t),function(){return o.abort()}}),[t]);var m=Object(i.f)();function f(){return(f=Object(j.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),t.preventDefault(),c=Object(Y.a)(Object(Y.a)({},a),{},{name:p.name,description:p.description}),e.next=5,D(c,o.signal);case 5:m.go(0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/decks/".concat(t),children:a.name})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)("p",{children:"Edit Deck"})})]})}),Object(b.jsx)("h2",{children:"Edit Deck"}),Object(b.jsx)(B,{deckId:t,submitHandler:function(e){return f.apply(this,arguments)},formData:p,changeHandler:function(e){var t=e.target;x(Object(Y.a)(Object(Y.a)({},p),{},Object(q.a)({},t.name,t.value)))}})]})};var Z=function(){var e={front:"",back:""},t={name:"",description:"",cards:[]},c=Object(i.g)(),r=c.cardId,a=c.deckId,s=Object(n.useState)(e),o=Object(u.a)(s,2),l=o[0],h=o[1],p=Object(n.useState)(t),x=Object(u.a)(p,2),m=x[0],f=x[1],v=new AbortController,k=Object(n.useState)(Object(Y.a)({},e)),y=Object(u.a)(k,2),w=y[0],N=y[1];Object(n.useEffect)((function(){function c(){return c=Object(j.a)(Object(d.a)().mark((function e(t,c){var n,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t,v.signal);case 3:return n=e.sent,e.next=6,_(c,v.signal);case 6:r=e.sent,f(Object(Y.a)({},n)),h(Object(Y.a)({},r)),N(Object(Y.a)({},r)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),c.apply(this,arguments)}return f(t),h(e),function(e,t){c.apply(this,arguments)}(a,r),function(){return v.abort()}}),[a]);var g=Object(i.f)();function S(){return(S=Object(j.a)(Object(d.a)().mark((function e(t){var c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=Object(Y.a)(Object(Y.a)({},l),{},{front:w.front,back:w.back}),e.next=4,P(c,v.signal);case 4:g.go(0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/decks/".concat(a),children:m.name})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)("p",{children:"Edit Card ".concat(l.id)})})]})}),Object(b.jsx)("h2",{children:"Edit Card"}),Object(b.jsx)(M,{submitHandler:function(e){return S.apply(this,arguments)},formData:w,changeHandler:function(e){var t=e.target;N(Object(Y.a)(Object(Y.a)({},w),{},Object(q.a)({},t.name,t.value)))},deckId:a})]})};var $=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(o,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/",children:Object(b.jsx)(W,{})}),Object(b.jsx)(i.a,{path:"/decks/new",children:Object(b.jsx)(K,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/decks/:deckId",children:Object(b.jsx)(z,{})}),Object(b.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(b.jsx)(G,{})}),Object(b.jsx)(i.a,{path:"/decks/:deckId/study",children:Object(b.jsx)(Q,{})}),Object(b.jsx)(i.a,{path:"/decks/:deckId/edit",children:Object(b.jsx)(X,{})}),Object(b.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(b.jsx)(Z,{})}),Object(b.jsx)(i.a,{children:Object(b.jsx)(l,{})})]})})]})};var ee=function(){return Object(b.jsx)("div",{className:"app-routes",children:Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/",children:Object(b.jsx)($,{})})})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O.a,{children:Object(b.jsx)(ee,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d51c158f.chunk.js.map