(this["webpackJsonpwith-companies"]=this["webpackJsonpwith-companies"]||[]).push([[0],{206:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(30),i=n.n(o),u=n(21),l=n(5),s=n(7),f=n(12),p=["ko","en"],m=(r={},Object(f.a)(r,"ko",["\uac00","\ub098","\ub2e4","\ub77c","\ub9c8","\ubc14","\uc0ac","\uc544","\uc790","\ucc28","\uce74","\ud0c0","\ud30c","\ud558"]),Object(f.a)(r,"en",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]),r),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ko";return{type:"CHANGE_LANGUAGE",language:e}},O=function(e,t){return function(n){var r=null;return e&&p.forEach((function(t){m[t].indexOf(e)>0&&(r=t)})),r&&t!==r&&n(g(r)),n({type:"CHANGE_PREFIX",prefix:e})}},b=Object(l.f)((function(){var e=Object(s.b)(),t=Object(l.e)(),n=Object(s.c)((function(e){return e.SettingsReducer})),r=Object(s.c)((function(e){return e.CompanyReducer.companies})),a=m[n.language];return c.a.createElement("nav",{className:n.language},c.a.createElement("a",{href:"#convert",className:"convert",onClick:function(r){var a;r.preventDefault(),"/"!==t.location.pathname&&t.push("/"),e((a=n.language,function(e){var t=p[(p.indexOf(a)+1)%p.length];e(g(t))}))}},c.a.createElement("div",null,p.map((function(e){return c.a.createElement("span",{className:e,key:e},m[e][0])})).reduce((function(e,t){return[e,"/",t]})))),c.a.createElement("ul",{className:"category ".concat(n.language)},a.map((function(a,o){return c.a.createElement("li",{key:o,className:"c".concat((r||[]).filter((function(e){return e.slug[n.language]===a})).length)},c.a.createElement("a",{href:"/".concat(a),className:a===n.prefix?"active":"",onClick:function(r){r.preventDefault(),e(O(a,n.language)),"active"===r.target.getAttribute("class")?t.push("/"):t.push("/".concat(a))}},a))}))))})),E=function(){return c.a.createElement("div",{id:"header"},c.a.createElement("header",null,c.a.createElement(u.b,{to:"/",className:"logo"},c.a.createElement("img",{src:"/logo.png",alt:"\ube0c\ub79c\ub514\ub4dc"})),c.a.createElement("ul",{className:"anchors"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://cafe.naver.com/coredenim"},c.a.createElement("img",{src:"/naver-cafe.png",alt:"\ube0c\ub79c\ub514\ub4dc \uce74\ud398"}))))),c.a.createElement(b,null))},v=n(76),d=n.n(v),h=n(45);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{slug:{ko:(t=e.name.ko,h.assemble([h.disassemble(t)[0],"\u314f"])),en:e.name.en[0].toUpperCase()}});var t},w=n(77),P=n.n(w),N=n(78),S=n.n(N),k=function(e){var t=e.company,n=Object(s.c)((function(e){return e.SettingsReducer.language}));return c.a.createElement("a",{className:"company",href:t.address,target:"_blank"},c.a.createElement("div",{className:"thumb"},c.a.createElement("img",{src:"http://cfile208.uf.daum.net/image/11482E49510528EA173CA9",alt:t.name[n]})),c.a.createElement("h2",null,t.name.ko,c.a.createElement("small",null,t.name.en)),c.a.createElement("div",{className:"description"},"\ud558\ub298\uc5d0\ub294 \ubb34\ub364 \ubcc4 \ud558\ub098\uc5d0 \uc544\uc774\ub4e4\uc758 \ub4ef\ud569\ub2c8\ub2e4. \uc544\uc774\ub4e4\uc758 \uadf8\ub9ac\uace0 \ub9d0 \ubb34\uc5c7\uc778\uc9c0 \ubc84\ub9ac\uc5c8\uc2b5\ub2c8\ub2e4. \ubcc4\uc5d0\ub3c4 \uc5b4\uba38\ub2c8, \uc774\ub984\uacfc \uacc4\uc9d1\uc560\ub4e4\uc758 \ub098\ub294 \uac70\uc678\ub2e4."))},D=function(e){var t=e.candidate;return c.a.createElement("div",{className:"candidate"},c.a.createElement("h3",null,t.prefix),c.a.createElement("ul",null,t.companies.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(k,{company:e}))}))))},C=(n(206),Object(l.f)((function(e){var t=e.match,n=Object(s.b)(),r=t.params.prefix,o=Object(s.c)((function(e){return e.SettingsReducer})),i=Object(s.c)((function(e){return e.CompanyReducer.companies}));Object(a.useEffect)((function(){(!o.prefix&&r||o.prefix!==r)&&n(O(r)),i||n((function(e){return d.a.get("/companies.json").then((function(t){var n=t.data.companies;e({type:"FETCHED_COMPANIES",companies:n.map((function(e){return j(e)}))})}))}))}),[r]);var u=[],l=S()(P()(i||[],[function(e){return e.name[o.language]}]),(function(e){return e.slug[o.language]}));return m[o.language].forEach((function(e){u.push({prefix:e,companies:l[e]})})),r&&(u=u.filter((function(e){return e.prefix===r}))),c.a.createElement("div",{id:"company-page"},u.map((function(e,t){return!!e.companies&&c.a.createElement(D,{candidate:e})})))}))),x=function(){return c.a.createElement(u.a,null,c.a.createElement(E,null),c.a.createElement(l.a,{path:"/:prefix?",component:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(14);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{language:"ko"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANGUAGE":return R({},e,{language:t.language,prefix:void 0});case"CHANGE_PREFIX":return R({},e,{prefix:t.prefix});default:return e}};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_COMPANIES":return H({},e,{companies:t.companies});default:return e}},J=Object(A.c)({SettingsReducer:G,CompanyReducer:F}),T=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}},U=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}},X=n(79),L=n.n(X),M=n(80);n(210);var B=function(){var e=T(),t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,n=Object(A.e)(J,e,t(Object(A.a)(M.a)));return n.subscribe(L()((function(){U({SettingsReducer:{language:n.getState().SettingsReducer.language}})}),1e3)),n}();i.a.render(c.a.createElement(s.a,{store:B},c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,t,n){e.exports=n(211)}},[[81,1,2]]]);
//# sourceMappingURL=main.24976b32.chunk.js.map