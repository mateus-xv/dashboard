(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(14),n=s.n(a),r=s(8),l=s(9),o=s(16),u=s(11),d={username:function(){var e="Guest";return window.localStorage.getItem("username")?window.localStorage.getItem("username"):(window.localStorage.setItem("username",e),e)}()};var m={articles:{results:[{title:"Loading"}]}};var j=Object(o.a)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/usernameChange":return Object(u.a)(Object(u.a)({},e),{},{username:t.payload});default:return e}},feed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"feed/articlesSuccess":return Object(u.a)(Object(u.a)({},e),{},{articles:t.payload});default:return e}}}),b=Object(o.b)(j),p=s(0),x=function(){return Object(p.jsxs)("aside",{children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("h1",{className:"logo__name",children:"Dashboard"})}),Object(p.jsxs)("nav",{className:"aside-nav",children:[Object(p.jsxs)(r.b,{className:"aside-nav__link",to:"/",children:[Object(p.jsx)("i",{className:"fas fa-angle-right"}),"Home"]}),Object(p.jsxs)(r.b,{className:"aside-nav__link",to:"/feed",children:[Object(p.jsx)("i",{className:"fas fa-angle-right"}),"Feed"]}),Object(p.jsxs)(r.b,{className:"aside-nav__link",to:"/notes",children:[Object(p.jsx)("i",{className:"fas fa-angle-right"}),"Notes"]}),Object(p.jsxs)(r.b,{className:"aside-nav__link",to:"/profile",children:[Object(p.jsx)("i",{className:"fas fa-angle-right"}),"Profile"]}),Object(p.jsxs)(r.b,{className:"aside-nav__link",to:"/saved",children:[Object(p.jsx)("i",{className:"fas fa-angle-right"}),"Saved"]})]})]})},f=function(e){return e.profile},_=function(){var e=Object(l.b)(f);return Object(i.useEffect)((function(){var e=document.querySelector(".menu-icon"),t=document.querySelector("aside"),s=document.getElementById("root");e.addEventListener("click",(function(e){return function(e,t,s){t.classList.toggle("menu-open"),s.classList.toggle("menu-open")}(0,t,s)}))}),[]),Object(p.jsxs)("header",{children:[Object(p.jsxs)("div",{className:"user",children:[Object(p.jsx)("div",{className:"user__avatar",children:Object(p.jsx)("i",{className:"fas fa-user"})}),Object(p.jsx)("p",{className:"user__name",children:e.username})]}),Object(p.jsx)("button",{className:"menu-icon",children:Object(p.jsx)("i",{className:"fas fa-bars"})})]})},O=s(3),h=function(){return Object(p.jsxs)("section",{className:"news",children:[Object(p.jsx)("h2",{className:"news__title",children:"Lorem Ipsum"}),Object(p.jsx)("p",{className:"news__content",children:"Officia ex nisi do Lorem enim aute est. Ad aute velit eiusmod consectetur cupidatat minim. Incididunt duis eu in nulla ipsum et do excepteur minim laborum amet. Veniam anim fugiat Lorem minim labore ipsum pariatur fugiat. Irure veniam ut duis nisi occaecat aliqua mollit. Proident ea in sunt sit nostrud in dolore. Pariatur veniam pariatur sint esse aliquip. Elit nisi commodo velit ea aliquip Lorem ut ipsum eu dolor non. Mollit sit ex nisi sint officia amet dolor. Occaecat tempor enim aliquip ipsum. Consectetur proident tempor dolore esse elit irure aliquip."})]})},v=s(13),N=s.n(v),g=s(21),y=function(e){return b.dispatch({type:"feed/articlesSuccess",payload:e})};function k(e){return L.apply(this,arguments)}function L(){return(L=Object(g.a)(N.a.mark((function e(t){var s,i,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"5kK2JDhdXWRQ0TJiSa1WxPzCtoZj9Ald",s="https://api.nytimes.com/svc/topstories/v2/".concat(t,".json?api-key=").concat("5kK2JDhdXWRQ0TJiSa1WxPzCtoZj9Ald"),e.next=3,fetch(s);case 3:return i=e.sent,e.next=6,i.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return E.apply(this,arguments)}function E(){return(E=Object(g.a)(N.a.mark((function e(){var t=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t.length>0&&void 0!==t[0]?t[0]:"home").then((function(e){y(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=function(){return Object(p.jsxs)("section",{className:"#/feed"===window.location.hash?"topics--feed":"topics",children:[Object(p.jsx)("h2",{className:"topics__title",children:"Topics"}),Object(p.jsxs)("ul",{className:"topics__container",children:[Object(p.jsx)("li",{onClick:function(){return w("arts")},className:"topics__single",children:"Arts"}),Object(p.jsx)("li",{onClick:function(){return w("automobiles")},className:"topics__single",children:"Automobiles"}),Object(p.jsx)("li",{onClick:function(){return w("business")},className:"topics__single",children:"Business"}),Object(p.jsx)("li",{onClick:function(){return w("food")},className:"topics__single",children:"Food"}),Object(p.jsx)("li",{onClick:function(){return w("health")},className:"topics__single",children:"Health"}),Object(p.jsx)("li",{onClick:function(){return w("movies")},className:"topics__single",children:"Movies"}),Object(p.jsx)("li",{onClick:function(){return w("politics")},className:"topics__single",children:"Politics"}),Object(p.jsx)("li",{onClick:function(){return w("science")},className:"topics__single",children:"Science"}),Object(p.jsx)("li",{onClick:function(){return w("sports")},className:"topics__single",children:"Sports"}),Object(p.jsx)("li",{onClick:function(){return w("technology")},className:"topics__single",children:"Technology"}),Object(p.jsx)("li",{onClick:function(){return w("travel")},className:"topics__single",children:"Travel"}),Object(p.jsx)("li",{onClick:function(){return w("world")},className:"topics__single",children:"World"})]})]})},S=function(){return Object(i.useEffect)((function(){var e=document.querySelector(".support__form"),t=document.querySelector(".form-success"),s=document.querySelector(".form-success, .form-success__message");e.addEventListener("submit",(function(e){return function(e,t){t.classList.add("form-success--visible"),e.preventDefault()}(e,t)})),s.addEventListener("click",(function(e){return function(e,t){t.classList.remove("form-success--visible")}(0,t)}))}),[]),Object(p.jsxs)("section",{className:"support",children:[Object(p.jsx)("h2",{className:"support__title",children:"Lorem Ipsum"}),Object(p.jsxs)("form",{className:"support__form",children:[Object(p.jsx)("textarea",{className:"support__message",name:"message",id:"message"}),Object(p.jsx)("button",{className:"support__submit",children:Object(p.jsx)("i",{className:"fas fa-angle-right"})}),Object(p.jsx)("div",{className:"form-success",children:Object(p.jsxs)("p",{className:"form-success__message",children:["Sent!",Object(p.jsx)("br",{}),Object(p.jsx)("i",{className:"fas fa-check"})]})})]})]})},C=function(){return Object(p.jsxs)("section",{className:"last-activity",children:[Object(p.jsx)("h2",{className:"last-activity__title",children:"Lorem Ipsum"}),Object(p.jsxs)("div",{className:"last-activity__body-wrapper",children:[Object(p.jsxs)("div",{className:"last-activity__content-wrapper",children:[Object(p.jsx)("div",{className:"last-activity__mark"}),Object(p.jsx)("p",{className:"last-activity__message",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est dolor doloribus."})]}),Object(p.jsxs)("div",{className:"last-activity__content-wrapper",children:[Object(p.jsx)("div",{className:"last-activity__mark"}),Object(p.jsx)("p",{className:"last-activity__message",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est dolor doloribus."})]}),Object(p.jsxs)("div",{className:"last-activity__content-wrapper",children:[Object(p.jsx)("div",{className:"last-activity__mark"}),Object(p.jsx)("p",{className:"last-activity__message",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est dolor doloribus."})]}),Object(p.jsxs)("div",{className:"last-activity__content-wrapper",children:[Object(p.jsx)("div",{className:"last-activity__mark"}),Object(p.jsx)("p",{className:"last-activity__message",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est dolor doloribus."})]}),Object(p.jsxs)("div",{className:"last-activity__content-wrapper",children:[Object(p.jsx)("div",{className:"last-activity__mark"}),Object(p.jsx)("p",{className:"last-activity__message",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est dolor doloribus."})]}),Object(p.jsxs)("div",{className:"last-activity__content-wrapper",children:[Object(p.jsx)("div",{className:"last-activity__mark"}),Object(p.jsx)("p",{className:"last-activity__message",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est dolor doloribus."})]}),Object(p.jsxs)("div",{className:"last-activity__content-wrapper",children:[Object(p.jsx)("div",{className:"last-activity__mark"}),Object(p.jsx)("p",{className:"last-activity__message",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est dolor doloribus."})]})]})]})},P=function(){return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsxs)("div",{className:"cards-wrapper",children:[Object(p.jsx)(h,{}),Object(p.jsx)(q,{}),Object(p.jsx)(S,{})]}),Object(p.jsx)("div",{className:"column-wrapper",children:Object(p.jsx)(C,{})})]})},I=function(e){var t=e.title,s=e.body,i=e.url;return Object(p.jsxs)("section",{className:"article",children:[Object(p.jsx)("h2",{className:"article__title",children:t}),Object(p.jsx)("p",{className:"article__body",children:s}),Object(p.jsxs)("div",{className:"article__actions",children:[Object(p.jsx)("button",{className:"article__save",children:Object(p.jsx)("i",{className:"far fa-bookmark"})}),Object(p.jsxs)("a",{href:i,target:"_blank",rel:"noreferrer",className:"article__see-more",children:["See More ",Object(p.jsx)("i",{className:"fas fa-arrow-circle-right"})]})]})]})};w();var F=function(e){return e.feed},J=function(){var e=Object(l.b)(F);return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)("div",{className:"column-wrapper",children:Object(p.jsx)(q,{})}),Object(p.jsx)("div",{className:"cards-wrapper",children:e.articles.results.map((function(e){return Object(p.jsx)(I,{title:e.title,body:e.abstract,url:e.url})}))})]})},M=function(){var e=function(e){e.stopPropagation()};return Object(i.useEffect)((function(){var t=document.querySelector(".note__modal"),s=document.querySelector(".note__title"),i=document.querySelector(".note__body");s.addEventListener("click",(function(){return function(e){e.classList.add("note__modal--visible")}(t)})),t.addEventListener("click",(function(){return function(e){e.classList.remove("note__modal--visible")}(t)})),i.addEventListener("click",e)}),[]),Object(p.jsx)("ul",{className:"note",children:Object(p.jsxs)("li",{className:"note__single",children:[Object(p.jsxs)("h2",{className:"note__title",children:["Lorem Ipsum ",Object(p.jsx)("i",{className:"fas fa-arrow-circle-right"})]}),Object(p.jsx)("p",{className:"note__content",children:"Lorem ipsum ullamco consectetur eu deserunt anim adipisicing ex officia minim mollit eiusmod exercitation ut sunt do ad eu eu excepteur esse duis aute fugiat amet ut ad."}),Object(p.jsx)("div",{className:"note__modal",children:Object(p.jsxs)("div",{className:"note__body",children:[Object(p.jsx)("h2",{className:"note__title",children:"Lorem Ipsum"}),Object(p.jsx)("div",{className:"note__content-wrapper",children:Object(p.jsxs)("p",{className:"note__content",children:["Lorem ipsum ullamco consectetur eu deserunt anim adipisicing ex officia minim mollit eiusmod exercitation ut sunt do ad eu eu excepteur esse duis aute fugiat amet ut ad.",Object(p.jsx)("br",{}),"Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis. Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut cupidatat aute sed adipisicing in proident dolore in pariatur eu minim.",Object(p.jsx)("br",{}),"Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis. Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut cupidatat aute sed adipisicing in proident dolore in pariatur eu minim.",Object(p.jsx)("br",{}),"Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis. Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut cupidatat aute sed adipisicing in proident dolore in pariatur eu minim.",Object(p.jsx)("br",{}),"Excepteur aute exercitation est minim. Elit minim adipisicing occaecat quis. Commodo quis. Eiusmod excepteur ad aute eu. Esse in enim mollit fugiat in ut cupidatat aute sed adipisicing in proident dolore in pariatur eu minim."]})})]})})]})})},T=function(){var e=function(e){e.stopPropagation()};return Object(i.useEffect)((function(){var t=document.querySelector(".add__modal"),s=document.querySelector(".add__body");document.querySelector(".add-button").addEventListener("click",(function(){return function(e){e.classList.add("add__modal--visible")}(t)})),t.addEventListener("click",(function(){return function(e){e.classList.remove("add__modal--visible")}(t)})),s.addEventListener("click",e)}),[]),Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)("button",{className:"add-button",children:Object(p.jsx)("i",{className:"fas fa-plus"})}),Object(p.jsx)("div",{className:"add",children:Object(p.jsx)("div",{className:"add__modal",children:Object(p.jsx)("div",{className:"add__body",children:Object(p.jsxs)("form",{className:"add__form",children:[Object(p.jsx)("input",{name:"title",id:"title",type:"text",placeholder:"Title"}),Object(p.jsx)("textarea",{name:"note",id:"note",placeholder:"Note"}),Object(p.jsx)("button",{className:"add__submit",children:Object(p.jsx)("i",{className:"fas fa-angle-right"})})]})})})})]})},A=function(){return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(M,{}),Object(p.jsx)(T,{})]})},D=function(e){return e.profile},W=function(){var e=Object(l.b)(D),t=function(e,t){var s;e.preventDefault(),localStorage.setItem("username",t.value),s=t.value,b.dispatch({type:"profile/usernameChange",payload:s})};return Object(i.useEffect)((function(){var e=document.querySelector(".profile__form"),s=document.getElementById("username");e.addEventListener("submit",(function(e){return t(e,s)}))}),[]),Object(p.jsxs)("form",{className:"profile__form",children:[Object(p.jsx)("div",{className:"user",children:Object(p.jsx)("div",{className:"user__avatar",children:Object(p.jsx)("i",{className:"fas fa-user"})})}),Object(p.jsx)("input",{type:"text",name:"username",id:"username",placeholder:e.username}),Object(p.jsx)("button",{className:"profile__submit",children:"Submit"})]})},B=function(){return Object(p.jsx)("section",{className:"profile",children:Object(p.jsx)(W,{})})},z=function(){return Object(p.jsx)("div",{className:"saved",children:Object(p.jsx)("div",{className:"cards-wrapper",children:Object(p.jsx)(I,{title:"Lorem Ipsum",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin rhoncus est, quis semper velit molestie id. Nam sit amet tincidunt est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at eros metus. Nam rutrum sem nec dolor facilisis euismod. Nunc venenatis luctus dui, vel egestas est iaculis sed. Maecenas et justo a orci elementum semper nec iaculis ante."})})})},H=function(){return Object(p.jsx)("main",{className:"clearfix",children:Object(p.jsxs)(O.d,{children:[Object(p.jsx)(O.b,{path:"/feed",component:J}),Object(p.jsx)(O.b,{path:"/profile",component:B}),Object(p.jsx)(O.b,{path:"/saved",component:z}),Object(p.jsx)(O.b,{path:"/notes",component:A}),Object(p.jsx)(O.b,{path:"/",component:P}),Object(p.jsx)(O.a,{to:"/"})]})})};s(33),s(34),s(35),s(36),s(37);var K=function(){return Object(p.jsx)(l.a,{store:b,children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(x,{}),Object(p.jsx)(_,{}),Object(p.jsx)(H,{})]})})};n.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f37bb4b8.chunk.js.map