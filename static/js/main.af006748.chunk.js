(this["webpackJsonpbasic-react"]=this["webpackJsonpbasic-react"]||[]).push([[0],{17:function(e,t,a){e.exports={title:"PosterList_title__2IisD",container:"PosterList_container__ud-OS"}},30:function(e,t,a){e.exports=a.p+"static/media/netflix-logo.067dbb15.svg"},35:function(e,t,a){e.exports=a(73)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),i=(a(40),a(41),a(11)),l=a(6),s=a(7),u=a(9),m=a(8),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Something went wrong."),r.a.createElement("button",{type:"button",className:"btn",onClick:function(){window.location.reload()}},"Reload")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component),d=a(1),h=a(30),g=a.n(h);a(42);function b(e){return r.a.createElement("div",{className:"app-bar"},e.children)}a(43);function f(e){return r.a.createElement(i.b,{className:"app-logo",to:"/"},r.a.createElement("img",{src:e.logo,alt:"logo"}))}function v(e){return r.a.createElement("button",{className:"btn",type:"button",onClick:e.login},"Login")}a(49);function E(e){return r.a.createElement("button",{className:"btn logout-button",type:"button",onClick:e.logout},"Logout")}a(50);function _(e){var t=e.path,a=e.children;return r.a.createElement(i.c,{activeClassName:"nav-item--active",className:"nav-item",to:t,exact:!0},a)}function w(e){return e.username?r.a.createElement("span",null,"Welcome ",e.username?"".concat(e.username):"user","!"):null}a(51);function O(e){var t=e.id,a=e.name,n=e.image;return r.a.createElement(i.c,{className:"poster",to:{pathname:"shows/".concat(t,"/").concat(a.toLowerCase().split(" ").join("_")),state:{poster:e}},exact:!0},r.a.createElement("img",{className:"poster__image",src:n,alt:a}))}O.defaultProps={image:"placeholder_image_source"};var j=a(17),y=a.n(j);var k=a(34);a(52);var N,L=a(18),C=a(32),x=a.n(C),S=function(){var e=x.a.create({baseURL:"https://api.themoviedb.org/3"});function t(e){return"".concat("https://image.tmdb.org/t/p/original").concat(e)}function a(e){var a=e.data.results;return function(e){return e.map((function(e){return Object(L.a)(Object(L.a)({},e),{},{backdrop_path:t(e.backdrop_path),poster_path:t(e.poster_path)})}))}(void 0===a?[]:a)}return e.interceptors.request.use((function(e){return e.params||(e.params={}),e.params.api_key="bae0d6e59a93e166f73ccf08386c4416",e})),{getNetflixOriginals:function(){return e.get("/discover/tv",{params:{with_networks:"213"}}).then(a)},getTrendingNow:function(){return e.get("/trending/all/week",{params:{language:"en-US"}}).then(a)}}}(),I=(N=function(e){var t=e.title,a=e.posters,n=e.showBackdrop;return r.a.createElement("div",{className:"poster-list"},r.a.createElement("h3",{className:y.a.title},t),r.a.createElement("div",{className:y.a.container},a.length>0?a.map((function(e){var t=e.id,a=e.name,o=e.original_name,c=e.original_title,i=e.backdrop_path,l=e.poster_path;return r.a.createElement(O,Object.assign({key:t,id:t,name:a||o||c,image:n?i:l},e))})):r.a.createElement(r.a.Fragment,null,"This list is empty now, please come back later.")))},function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,posters:[]};var r=e.load,o=Object(k.a)(e,["load"]);return n.loader=r,n.otherProps=o,n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.loader().then((function(t){e.setState({isLoading:!1,posters:t})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("p",{className:"loading"},"Loading something"):r.a.createElement(N,Object.assign({posters:this.state.posters},this.otherProps))}}]),a}(n.Component)),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{username:this.props.username}),r.a.createElement(I,{title:"trending now",load:S.getNetflixOriginals}),r.a.createElement(I,{title:"netflix originals",load:S.getTrendingNow}))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={counter:0},e.addCounter=function(){e.setState((function(e){return{counter:e.counter+1}}))},e}return Object(s.a)(a,[{key:"render",value:function(){if(5===this.state.counter)throw new Error("Counter error");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"My List"),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn",onClick:this.addCounter},"Add Counter (",this.state.counter,")"))}}]),a}(n.Component),M=a(33),A=a.n(M),D=(a(70),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(!this.props.location.state)return r.a.createElement(d.a,{to:"/"});var e=this.props.location.state.poster,t=e.backdrop_path,a=e.first_air_date,n=e.id,o=e.name,c=e.original_title,i=e.overview,l=e.release_date,s=e.vote_average,u=o||c,m=a||l,p=Math.round(10*s),h=A()("show-detail__rating",{"show-detail__rating--good":p>=80,"show-detail__rating--average":p>=50&&p<80,"show-detail__rating--bad":p<50});return r.a.createElement("div",{className:"show-detail","data-id":n},r.a.createElement("img",{className:"show-detail__image",src:t,alt:u}),r.a.createElement("h1",null,u),r.a.createElement("p",null,r.a.createElement("span",{className:h},"Rating: ",p,"%"),"\xa0",r.a.createElement("span",{className:"show-detail__date"},"Release date: ",m)),r.a.createElement("p",{className:"show-detail__overview"},i),r.a.createElement("button",{className:"btn btn--primary show-detail__button",type:"button"},"Play"),r.a.createElement("button",{className:"btn show-detail__button",type:"button"},"+ My List"))}}]),a}(n.Component)),R=Object(d.g)(D),B=(a(71),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:null,isLoggedIn:!1},e.login=function(){e.setState({username:"johndoe",isLoggedIn:!0})},e.logout=function(){e.setState({username:null,isLoggedIn:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.isLoggedIn?r.a.createElement(E,{logout:this.logout}):r.a.createElement(v,{login:this.login});return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,r.a.createElement(f,{logo:g.a}),r.a.createElement(_,{path:"/"},"Home"),r.a.createElement(_,{path:"/myList"},"My List"),r.a.createElement("div",{className:"grow"}),e),r.a.createElement("main",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0},r.a.createElement(P,this.state)),r.a.createElement(d.b,{path:"/myList",exact:!0},r.a.createElement(F,this.state)),r.a.createElement(d.b,{path:"/shows/:id/:name?",exact:!0},r.a.createElement(R,this.state)))))}}]),a}(n.Component)),T=Object(d.g)(B);a(72);function W(){return r.a.createElement(i.a,{basename:"/basic-react"},r.a.createElement(p,null,r.a.createElement(T,null)))}var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.af006748.chunk.js.map