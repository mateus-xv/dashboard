(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(13),i=c.n(n),r=c(12),o=c(7),l=c(16),d=c(26),u=c(2),j={username:"Guest"};var b={isLoading:!0,error:!1,articles:{results:[]}};var m=c(10),h={notes:[],amount:0};var p={savedArticles:[]};var O={activities:[]};var f=Object(l.combineReducers)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/usernameChange":return Object(u.a)(Object(u.a)({},e),{},{username:t.payload});default:return e}},feed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"feed/articlesSuccess":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,error:!1,articles:t.payload});case"feed/articlesFailed":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,error:!0});case"feed/articlesLoading":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0,error:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"notes/addNote":return Object(u.a)(Object(u.a)({},e),{},{notes:[].concat(Object(m.a)(e.notes),[t.payload]),amount:e.amount+1});case"notes/removeNote":return Object(u.a)(Object(u.a)({},e),{},{notes:e.notes.filter((function(e){return e.noteId!==t.payload.noteId})),amount:e.amount-1});default:return e}},saved:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"saved/addArticle":return Object(u.a)(Object(u.a)({},e),{},{savedArticles:[].concat(Object(m.a)(e.savedArticles),[t.payload])});case"saved/removeArticle":return Object(u.a)(Object(u.a)({},e),{},{savedArticles:e.savedArticles.filter((function(e){return e.url!==t.payload.url}))});default:return e}},activity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"activity/clearActivities":return Object(u.a)(Object(u.a)({},e),{},{activities:[]});case"profile/usernameChange":return Object(u.a)(Object(u.a)({},e),{},{activities:[].concat(Object(m.a)(e.activities),['Changed username to "'.concat(t.payload,'"')])});case"saved/addArticle":return Object(u.a)(Object(u.a)({},e),{},{activities:[].concat(Object(m.a)(e.activities),['Added "'.concat(t.payload.title.length>50?t.payload.title.slice(0,50).trim()+"...":t.payload.title.trim(),'" to saved articles')])});case"saved/removeArticle":return Object(u.a)(Object(u.a)({},e),{},{activities:[].concat(Object(m.a)(e.activities),['Removed "'.concat(t.payload.title.length>50?t.payload.title.slice(0,50).trim()+"...":t.payload.title.trim(),'" from saved articles')])});case"notes/addNote":return Object(u.a)(Object(u.a)({},e),{},{activities:[].concat(Object(m.a)(e.activities),['Added "'.concat(t.payload.title.length>50?t.payload.title.slice(0,50).trim()+"...":t.payload.title.trim(),'" to notes')])});case"notes/removeNote":return Object(u.a)(Object(u.a)({},e),{},{activities:[].concat(Object(m.a)(e.activities),['Removed "'.concat(t.payload.title.length>50?t.payload.title.slice(0,50).trim()+"...":t.payload.title.trim(),'" from notes')])});default:return e}}}),v=c(27),_=localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):{},x=Object(l.createStore)(f,_,Object(v.composeWithDevTools)(Object(l.applyMiddleware)(d.a)));x.subscribe((function(){window.localStorage.setItem("state",JSON.stringify(x.getState()))}));var N=x,g=c(14),y=c(0),w=function(){var e=Object(s.useState)(window.location.hash),t=Object(g.a)(e,2),c=t[0],a=t[1],n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#/";return c===e?"fas fa-angle-double-right":"fas fa-angle-right"};return Object(s.useEffect)((function(){window.addEventListener("hashchange",(function(){return a(window.location.hash)}))}),[]),Object(y.jsxs)("aside",{children:[Object(y.jsx)("div",{className:"logo",children:Object(y.jsx)("h1",{className:"logo__name",children:"Dashboard"})}),Object(y.jsxs)("nav",{onClick:function(e){e.stopPropagation(),window.innerWidth<768&&(document.querySelector("aside").classList.remove("menu-open"),document.getElementById("root").classList.remove("menu-open"))},className:"aside-nav",children:[Object(y.jsxs)(r.b,{className:"aside-nav__link",to:"/",children:[Object(y.jsx)("i",{className:n()}),"Home"]}),Object(y.jsxs)(r.b,{className:"aside-nav__link",to:"/feed",children:[Object(y.jsx)("i",{className:n("#/feed")}),"Feed"]}),Object(y.jsxs)(r.b,{className:"aside-nav__link",to:"/notes",children:[Object(y.jsx)("i",{className:n("#/notes")}),"Notes"]}),Object(y.jsxs)(r.b,{className:"aside-nav__link",to:"/profile",children:[Object(y.jsx)("i",{className:n("#/profile")}),"Profile"]}),Object(y.jsxs)(r.b,{className:"aside-nav__link",to:"/saved",children:[Object(y.jsx)("i",{className:n("#/saved")}),"Saved"]})]})]})},S=function(e){return e.profile},k=function(){var e=Object(o.b)(S);return Object(s.useEffect)((function(){var e=document.querySelector(".menu-icon"),t=document.querySelector("aside"),c=document.getElementById("root");e.addEventListener("click",(function(e){return function(e,t,c){t.classList.toggle("menu-open"),c.classList.toggle("menu-open")}(0,t,c)}))}),[]),Object(y.jsxs)("header",{children:[Object(y.jsxs)("div",{className:"user",children:[Object(y.jsx)("div",{className:"user__avatar",children:Object(y.jsx)("i",{className:"fas fa-user"})}),Object(y.jsx)("p",{className:"user__name",children:e.username})]}),Object(y.jsx)("button",{className:"menu-icon",children:Object(y.jsx)("i",{className:"fas fa-bars"})})]})},q=c(4),C=c(51),A=c(50),L=function(){var e=Object(s.useState)(0),t=Object(g.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),i=Object(g.a)(n,2),r=i[0],o=i[1],l=function(e){if(r+1e3<Date.now()){o(Date.now());var t=document.querySelectorAll(".news__content").length;switch(e){case"nextSlide":c<t-1?(document.querySelector(".news__content-wrapper").scrollLeft+=document.querySelector(".news__content-wrapper").getBoundingClientRect().width,a(c+1)):(document.querySelector(".news__content-wrapper").scrollLeft=0,a(0));break;case"prevSlide":0===c?(document.querySelector(".news__content-wrapper").scrollLeft+=(t-1)*document.querySelector(".news__content-wrapper").getBoundingClientRect().width,a(t-1)):(document.querySelector(".news__content-wrapper").scrollLeft-=document.querySelector(".news__content-wrapper").getBoundingClientRect().width,a(c-1))}}};return Object(y.jsxs)("section",{className:"news",children:[Object(y.jsx)("h2",{className:"news__title",children:"News"}),Object(y.jsxs)("div",{className:"news__content-wrapper",children:[Object(y.jsx)("p",{className:"news__content",children:"Dolor pariatur quasi quidem laboriosam repudiandae Itaque odit repudiandae quidem deserunt ratione Sint laudantium ea voluptatum alias ratione id consequuntur. Laudantium sint reiciendis voluptatum vel excepturi Perspiciatis est impedit quis."}),Object(y.jsx)("p",{className:"news__content",children:"Amet at iure veritatis optio cum? Dolorum veniam quis necessitatibus recusandae similique sunt. Unde pariatur explicabo debitis at rerum. Iure nobis vitae ducimus quisquam doloremque? Necessitatibus eaque corrupti consectetur quos"}),Object(y.jsx)("p",{className:"news__content",children:"Elit consectetur expedita dolore sed distinctio impedit. Dicta dolore dolorum soluta aut neque, laudantium nam Animi voluptatum tempore itaque illum nulla. Atque sequi ea incidunt cumque quas iusto. Consequatur nostrum!"})]}),Object(y.jsx)("button",{onClick:function(){return l("prevSlide")},className:"news__arrow-left",children:Object(y.jsx)("i",{className:"fas fa-chevron-left"})}),Object(y.jsx)("button",{onClick:function(){return l("nextSlide")},className:"news__arrow-right",children:Object(y.jsx)("i",{className:"fas fa-chevron-right"})})]})},E=c(25),I=c.n(E),D=c(28),B=function(e){return N.dispatch({type:"feed/articlesSuccess",payload:e})},P=0;function F(e){return function(){var t=Object(D.a)(I.a.mark((function t(){var c,s,a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(P+1e3<Date.now())){t.next=15;break}return P=Date.now(),"5kK2JDhdXWRQ0TJiSa1WxPzCtoZj9Ald",c="https://api.nytimes.com/svc/topstories/v2/".concat(e,".json?api-key=").concat("5kK2JDhdXWRQ0TJiSa1WxPzCtoZj9Ald"),N.dispatch({type:"feed/articlesLoading"}),t.next=6,fetch(c);case 6:if((s=t.sent).ok){t.next=11;break}N.dispatch({type:"feed/articlesFailed"}),t.next=15;break;case 11:return t.next=13,s.json();case 13:a=t.sent,B(a);case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home";N.dispatch(F(e))}var R=function(){return Object(s.useEffect)((function(){document.querySelectorAll(".topics__button").forEach((function(e){e.addEventListener("click",(function(){"#/"===window.location.hash&&(window.location.hash="#/feed")}))}))}),[]),Object(y.jsxs)("section",{className:"#/feed"===window.location.hash?"topics--feed":"topics",children:[Object(y.jsx)("h2",{className:"topics__title",children:"Topics"}),Object(y.jsxs)("ul",{className:"topics__container",children:[Object(y.jsx)("li",{onClick:function(){return J("arts")},className:"topics__single",children:Object(y.jsx)("button",{className:"topics__button",children:"Arts"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("automobiles")},className:"topics__button",children:"Automobiles"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("business")},className:"topics__button",children:"Business"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("food")},className:"topics__button",children:"Food"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("health")},className:"topics__button",children:"Health"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("movies")},className:"topics__button",children:"Movies"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("politics")},className:"topics__button",children:"Politics"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("science")},className:"topics__button",children:"Science"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("sports")},className:"topics__button",children:"Sports"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("technology")},className:"topics__button",children:"Technology"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("travel")},className:"topics__button",children:"Travel"})}),Object(y.jsx)("li",{className:"topics__single",children:Object(y.jsx)("button",{onClick:function(){return J("world")},className:"topics__button",children:"World"})})]})]})},T=function(){return Object(s.useEffect)((function(){var e=document.querySelector(".support__form"),t=document.querySelector(".form-success"),c=document.querySelector(".form-success, .form-success__message");e.addEventListener("submit",(function(e){return function(e,t){t.classList.add("form-success--visible"),e.preventDefault()}(e,t)})),c.addEventListener("click",(function(){return function(e){e.classList.remove("form-success--visible")}(t)}))}),[]),Object(y.jsxs)("section",{className:"support",children:[Object(y.jsx)("h2",{className:"support__title",children:"Support"}),Object(y.jsxs)("form",{className:"support__form",children:[Object(y.jsx)("textarea",{className:"support__message",name:"message",id:"message"}),Object(y.jsx)("button",{className:"support__submit",children:Object(y.jsx)("i",{className:"fas fa-angle-right"})}),Object(y.jsx)("div",{className:"form-success",children:Object(y.jsxs)("p",{className:"form-success__message",children:["Sent!",Object(y.jsx)("br",{}),Object(y.jsx)("i",{className:"fas fa-check"})]})})]})]})},W=function(e){var t=e.message;return Object(y.jsxs)("div",{className:"last-activity__content-wrapper",children:[Object(y.jsx)("div",{className:"last-activity__mark"}),Object(y.jsx)("p",{className:"last-activity__message",children:t})]})},M=function(e){return e.activity},Y=function(){var e=Object(o.b)(M);return Object(y.jsxs)("section",{className:"last-activity",children:[Object(y.jsx)("h2",{className:"last-activity__title",children:"Activity"}),e.activities[0]?Object(y.jsx)("button",{onClick:function(){N.dispatch({type:"activity/clearActivities"})},className:"last-activity__clear-button",children:Object(y.jsx)("i",{className:"fas fa-trash"})}):null,Object(y.jsx)("div",{className:"last-activity__body-wrapper",children:e.activities[0]?e.activities.map((function(e){return Object(y.jsx)(W,{message:e})})):Object(y.jsx)("p",{children:"You don't have any activities."})})]})},z=function(){return Object(y.jsxs)(a.a.Fragment,{children:[Object(y.jsxs)("div",{className:"cards-wrapper",children:[Object(y.jsx)(L,{}),Object(y.jsx)(R,{}),Object(y.jsx)(T,{})]}),Object(y.jsx)("div",{className:"column-wrapper",children:Object(y.jsx)(Y,{})})]})},H=c(29),K=function(e){var t=e.title,c=e.body,a=e.url,n=e.isSaved,i=void 0!==n&&n,r=Object(s.useState)(i),o=Object(g.a)(r,2),l=o[0],d=o[1];return Object(y.jsxs)("section",{className:"article",children:[Object(y.jsx)("h2",{className:"article__title",children:t}),Object(y.jsx)("p",{className:"article__body",children:c}),Object(y.jsxs)("div",{className:"article__actions",children:[Object(y.jsx)("button",{onClick:function(){var e,s;l?(e={title:t,url:a},N.dispatch({type:"saved/removeArticle",payload:e}),"#/feed"===window.location.hash&&d(!1)):(s={title:t,body:c,url:a},N.dispatch({type:"saved/addArticle",payload:s}),d(!0))},className:"article__save",children:Object(y.jsx)("i",{className:l?"fas fa-bookmark":"far fa-bookmark"})}),Object(y.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer",className:"article__see-more",children:["See More ",Object(y.jsx)("i",{className:"fas fa-arrow-circle-right"})]})]})]})},Q=function(){return Object(y.jsx)("div",{className:"loading"})},X=function(){return Object(y.jsxs)("div",{className:"error",children:[Object(y.jsx)("i",{className:"fas fa-times"}),Object(y.jsx)("p",{children:"An error has ocurred"})]})};J();var Z=function(e){return e.feed},G=function(e){return e.saved},U=function(){var e=Object(o.b)(Z),t=Object(o.b)(G),c=function(e){var c,s=Object(H.a)(t.savedArticles);try{for(s.s();!(c=s.n()).done;){var a=c.value;if(e.url===a.url)return!0}}catch(n){s.e(n)}finally{s.f()}return!1};return Object(y.jsxs)(a.a.Fragment,{children:[Object(y.jsx)("div",{className:"column-wrapper",children:Object(y.jsx)(R,{})}),Object(y.jsx)("div",{className:"cards-wrapper",children:e.isLoading?Object(y.jsx)(Q,{}):e.error?Object(y.jsx)(X,{}):!e.error&&e.articles.results?e.articles.results.map((function(e,t){return Object(y.jsx)(K,{title:e.title,body:e.abstract,url:e.url,isSaved:c(e)},t)})):void 0})]})},V=function(e){var t=e.title,c=e.header,s=e.content,a=e.noteId,n=function(e){var c;e.stopPropagation(),c={title:t,noteId:a},N.dispatch({type:"notes/removeNote",payload:c})};return Object(y.jsxs)("li",{onClick:function(e){return t=e.currentTarget.querySelector(".note__modal"),void(s.length>200&&t.classList.add("note__modal--visible"));var t},className:"note__single",children:[Object(y.jsx)("h2",{className:"note__title",children:t}),Object(y.jsx)("p",{className:"note__header",children:c}),Object(y.jsx)("div",{onClick:function(e){return function(e,t){e.stopPropagation(),t.classList.remove("note__modal--visible")}(e,e.target)},className:"note__modal",children:Object(y.jsx)("div",{onClick:function(e){e.stopPropagation()},className:"note__body",children:Object(y.jsxs)("div",{className:"note__content-wrapper",children:[Object(y.jsx)("h2",{className:"note__title",children:t}),Object(y.jsx)("p",{className:"note__content",children:s})]})})}),s.length>=200?Object(y.jsxs)("div",{className:"note__footer",children:[Object(y.jsx)("button",{className:"note__remove-button",onClick:function(e){return n(e)},children:Object(y.jsx)("i",{className:"fas fa-trash"})}),Object(y.jsx)("button",{className:"note__inspect-button",children:Object(y.jsx)("i",{className:"fas fa-eye"})})]}):Object(y.jsx)("div",{className:"note__footer--disabled",children:Object(y.jsx)("button",{className:"note__remove-button",onClick:function(e){return n(e)},children:Object(y.jsx)("i",{className:"fas fa-trash"})})})]})},$=function(e){return e.notes},ee=function(){var e=Object(o.b)($),t=function(t){t.preventDefault();var c,s=document.getElementById("title").value,a=document.getElementById("note").value;c={noteId:e.amount,title:s,header:a.length<=200?a:a.slice(0,200)+"...",content:a},N.dispatch({type:"notes/addNote",payload:c}),document.getElementById("title").value="",document.getElementById("note").value="",document.querySelector(".add__modal").classList.remove("add__modal--visible")};return Object(y.jsxs)(a.a.Fragment,{children:[Object(y.jsx)("button",{onClick:function(){document.querySelector(".add__modal").classList.add("add__modal--visible")},className:"add-button",children:Object(y.jsx)("i",{className:"fas fa-plus"})}),Object(y.jsx)("div",{className:"add",children:Object(y.jsx)("div",{onClick:function(){document.querySelector(".add__modal").classList.remove("add__modal--visible")},className:"add__modal",children:Object(y.jsx)("div",{onClick:function(e){e.stopPropagation()},className:"add__body",children:Object(y.jsxs)("form",{onSubmit:function(e){return t(e)},className:"add__form",children:[Object(y.jsx)("input",{name:"title",id:"title",type:"text",placeholder:"Title"}),Object(y.jsx)("textarea",{name:"note",id:"note",placeholder:"Note"}),Object(y.jsx)("button",{className:"add__submit",children:Object(y.jsx)("i",{className:"fas fa-angle-right"})})]})})})})]})},te=function(e){return e.notes},ce=function(){var e=Object(o.b)(te);return Object(y.jsxs)(a.a.Fragment,{children:[Object(y.jsx)("ul",{className:"note",children:e.notes[0]?e.notes.map((function(e,t){return Object(y.jsx)(V,{noteId:e.noteId,title:e.title,header:e.header,content:e.content},t)})):Object(y.jsx)("p",{children:"You don't have any notes"})}),Object(y.jsx)(ee,{})]})},se=function(e){return e.profile},ae=function(){var e=Object(o.b)(se),t=function(e,t){var c;e.preventDefault(),localStorage.setItem("username",t.value),c=t.value,N.dispatch({type:"profile/usernameChange",payload:c})};return Object(s.useEffect)((function(){var e=document.querySelector(".profile__form"),c=document.getElementById("username");e.addEventListener("submit",(function(e){return t(e,c)}))}),[]),Object(y.jsxs)("form",{className:"profile__form",children:[Object(y.jsx)("div",{className:"user",children:Object(y.jsx)("div",{className:"user__avatar",children:Object(y.jsx)("i",{className:"fas fa-user"})})}),Object(y.jsx)("input",{type:"text",name:"username",id:"username",placeholder:e.username}),Object(y.jsx)("button",{className:"profile__submit",children:"Submit"})]})},ne=function(){return Object(y.jsx)("section",{className:"profile",children:Object(y.jsx)(ae,{})})},ie=function(e){return e.saved},re=function(){var e=Object(o.b)(ie);return Object(y.jsx)("div",{className:"saved",children:Object(y.jsx)("div",{className:"cards-wrapper",children:e.savedArticles[0]?e.savedArticles.map((function(e){return Object(y.jsx)(K,{title:e.title,body:e.body,url:e.url,isSaved:!0})})):Object(y.jsx)("p",{children:"You don't have any saved articles."})})})},oe=(c(42),function(){var e=Object(q.g)();return Object(y.jsx)("main",{children:Object(y.jsx)(C.a,{children:Object(y.jsx)(A.a,{classNames:"page",timeout:300,children:Object(y.jsx)("div",{className:"main-wrapper",children:Object(y.jsxs)(q.d,{location:e,children:[Object(y.jsx)(q.b,{path:"/feed",component:U}),Object(y.jsx)(q.b,{path:"/profile",component:ne}),Object(y.jsx)(q.b,{path:"/saved",component:re}),Object(y.jsx)(q.b,{path:"/notes",component:ce}),Object(y.jsx)(q.b,{path:"/",component:z}),Object(y.jsx)(q.a,{to:"/"})]})})},e.pathname)})})});c(43),c(44),c(45),c(46),c(47);var le=function(){return Object(y.jsx)(o.a,{store:N,children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(w,{}),Object(y.jsx)(k,{}),Object(y.jsx)(oe,{})]})})};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(le,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1d59166a.chunk.js.map