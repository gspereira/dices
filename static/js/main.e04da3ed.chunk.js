(window.webpackJsonpdices=window.webpackJsonpdices||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),i=(a(9),a(1)),u=(a(10),function(e){return l.a.createElement("div",{className:"form-div"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Places")),e.places.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("td",null,e))})))),l.a.createElement("form",{onSubmit:e.addPlace},l.a.createElement("div",null,l.a.createElement("input",{value:e.newPlace,onChange:e.handlePlaceChange})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"addButton"},"Add"))))}),o=function(e){return l.a.createElement("div",{className:"form-div"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Actions")),e.actions.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("td",null,e))})))),l.a.createElement("form",{onSubmit:e.addAction},l.a.createElement("div",null,l.a.createElement("input",{value:e.newAction,onChange:e.handleActionChange})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"addButton"},"Add"))))},m=(a(11),function(e){var t=e.actions,a=e.places,c=Object(n.useState)(""),r=Object(i.a)(c,2),u=r[0],o=r[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),d=s[0],E=s[1],f=function(e){return e[Math.floor(Math.random()*e.length)]};return l.a.createElement("div",null,l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"dice"},l.a.createElement("strong",{className:"dice-content"},u)),l.a.createElement("div",{className:"dice"},l.a.createElement("strong",{className:"dice-content"},d))),l.a.createElement("div",{className:"rollButton"},l.a.createElement("button",{onClick:function(){E(f(a)),o(f(t))}}," Roll ")))});var s=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),d=s[0],E=s[1],f=Object(n.useState)([]),v=Object(i.a)(f,2),b=v[0],p=v[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),j=g[0],N=g[1];return l.a.createElement("div",{className:"Wrapper"},l.a.createElement(m,{actions:a,places:b}),l.a.createElement("div",{className:"form-lists"},l.a.createElement(o,{handleActionChange:function(e){E(e.target.value)},newAction:d,addAction:function(e){if(e.preventDefault(),""!==d.trim()){if(a.filter((function(e){return e===d})).length>0)alert("Action ".concat(d," already exists"));else{var t=d;c(a.concat(t))}E("")}else alert("Invalid value")},actions:a}),l.a.createElement(u,{handlePlaceChange:function(e){N(e.target.value)},newPlace:j,addPlace:function(e){if(e.preventDefault(),""!==j.trim()){if(b.filter((function(e){return e===j})).length>0)alert("Place ".concat(j," already exists"));else{var t=j;p(b.concat(t))}N("")}else alert("Invalid value")},places:b})))};r.a.render(l.a.createElement(s,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.e04da3ed.chunk.js.map