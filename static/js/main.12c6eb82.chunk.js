(this["webpackJsonpwww-in-react"]=this["webpackJsonpwww-in-react"]||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(19),r=t.n(s),c=(t(27),t(28),t(8)),l=t(9),m=t(11),o=t(10),u=t(12),d=t(5),p=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={active:!1,navbar:""},t.handleClick=function(){!1===t.state.active?t.setState({active:!0,navbar:"is-active"}):t.setState({active:!1,navbar:""})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("nav",{id:"navbar",className:"navbar-menu is-active",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(d.b,{to:"/home",id:"logo",className:"navbar-item",href:"#"},"Company",i.a.createElement("strong",null,"Name")),i.a.createElement("a",{onClick:function(){return e.handleClick()},role:"button",className:"navbar-burger "+this.state.navbar,"data-target":"navMenu","aria-label":"menu","aria-expanded":"false"},i.a.createElement("span",{id:"logo","aria-hidden":"true"}),i.a.createElement("span",{id:"logo","aria-hidden":"true"}),i.a.createElement("span",{id:"logo","aria-hidden":"true"}))),i.a.createElement("div",{className:"navbar-menu "+this.state.navbar,id:"navMenu"},i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(d.b,{to:"/home",id:"nav-item",className:"navbar-item"},"Home"),i.a.createElement(d.b,{to:"/about",id:"nav-item",className:"navbar-item"},"About"),i.a.createElement(d.b,{to:"/faq",id:"nav-item",className:"navbar-item"},"FAQ")),i.a.createElement("div",{className:"navbar-item"},i.a.createElement("div",{className:"buttons"},i.a.createElement("a",{className:"button is-primary is-outlined"},"JOIN NOW"))))))}}]),a}(n.Component),v=function(){return i.a.createElement("div",{className:"home"},i.a.createElement("section",{className:"hero is-medium is-primary is-bold"},i.a.createElement("div",{id:"hero",className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title"},"Rising to the heights"),i.a.createElement("h2",{className:"subtitle"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",i.a.createElement("br",null)," ","sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"),i.a.createElement("button",{className:"button is-primary is-light"},"Our Services")))),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns pd is-desktop"},i.a.createElement("div",{className:"column pd is-1 has-text-centered",id:"cog"}),i.a.createElement("div",{className:"column pd is-two-third-desktop"},i.a.createElement("p",{className:"subtitle"},i.a.createElement("strong",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"))),i.a.createElement("div",{className:"column"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et")))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns pd"},i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"subtitle"},'"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"'),i.a.createElement("p",{className:"content"},"- No name")))),i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"subtitle"},'"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"'),i.a.createElement("p",{className:"content"},"- No name")))),i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"subtitle"},'"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"'),i.a.createElement("p",{className:"content"},"- No name"))))))))},E=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={error:null,isLoaded:!1,posts:[]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,posts:a})}),(function(a){e.setState({isLoaded:!1,error:a})}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,n=e.posts;return a?i.a.createElement("div",null,"Error: ",a.message):t?i.a.createElement("div",{className:"faq"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"title"},"FAQ"),i.a.createElement("p",{className:"subtitle"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"),i.a.createElement("div",{className:"columns"},n.map((function(e){return i.a.createElement("div",{key:e.id,className:"column is-one-third"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"subtitle"},e.title,"?"),i.a.createElement("p",{className:"answer"},e.body))))})))))):i.a.createElement("div",null,"Loading...")}}]),a}(n.Component),b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"title"},"About us"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, atque eveniet! A eos nam voluptatum porro rerum dicta? Reprehenderit ipsam quia accusamus recusandae voluptatum ea, saepe deserunt ex molestiae? Sed blanditiis vero minus placeat nihil quos corporis voluptas expedita eligendi, nisi, iure fuga amet doloribus repudiandae asperiores ratione at. Maxime?"),i.a.createElement("br",null),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad consectetur sunt dolorum sequi obcaecati, hic reiciendis repellendus eligendi possimus commodi quia laudantium id aliquam similique temporibus dolore a et!"),i.a.createElement("br",null),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate sint doloribus sed inventore quas deserunt similique, veritatis aliquid, fugit libero iusto quibusdam nihil rerum eligendi architecto eos tenetur adipisci voluptatum dolore? Eos, qui, dolorem quaerat ipsa possimus culpa quibusdam, sunt cum incidunt sequi ipsum!")),i.a.createElement("div",{className:"column is-one-third"},i.a.createElement("div",{id:"company",className:"card"})))))}}]),a}(n.Component),N=function(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column"},i.a.createElement("p",null,"2019 CompanyName, All Rights Reserved")),i.a.createElement("div",{className:"column is-1"},i.a.createElement("div",{id:"social"},i.a.createElement("a",{id:"fb"}),i.a.createElement("a",{id:"in"}))))))},h=t(6),g=function(){return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title"},"404"),i.a.createElement("p",{className:"subtitle"},"Strona nie istnieje")))},f=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(h.a,{exact:!0,path:"/home",component:v}),i.a.createElement(h.a,{path:"/about",component:b}),i.a.createElement(h.a,{path:"/faq",component:E}),i.a.createElement(h.a,{component:g}),i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(d.a,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.12c6eb82.chunk.js.map