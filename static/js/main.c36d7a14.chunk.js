(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={list:"Statistics_list__2pEVZ",item:"Statistics_item__YVbnu"}},,,,function(t,e,n){t.exports={button:"FeedbackOptions_button__34fzO"}},function(t,e,n){t.exports={title:"Section_title__eAUCe"}},,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(5),a=n.n(s),o=(n(12),n(3)),l=n(6),r=n.n(l),b=n(0),u=function(t){var e=t.options,n=t.onFeedbackButtonClick;return Object(b.jsx)("button",{className:r.a.button,type:"button",name:e,onClick:n,children:e})},j=n(7),d=n.n(j),O=function(t){return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{className:d.a.title,children:t.title}),t.children]})},f=n(2),x=n.n(f),h=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,s=t.percent;return Object(b.jsxs)("ul",{className:x.a.list,children:[Object(b.jsxs)("li",{className:x.a.item,children:["Good: ",e]}),Object(b.jsxs)("li",{className:x.a.item,children:["Neutral: ",n]}),Object(b.jsxs)("li",{className:x.a.item,children:["Bad: ",c]}),Object(b.jsxs)("li",{className:x.a.item,children:["Total: ",i]}),Object(b.jsxs)("li",{className:x.a.item,children:["Positive feedback: ",s>0?"".concat(s,"%"):0]})]})},m=function(t){var e=t.message;return Object(b.jsx)("p",{children:e})};var p=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(0),a=Object(o.a)(s,2),l=a[0],r=a[1],j=Object(c.useState)(0),d=Object(o.a)(j,2),f=d[0],x=d[1],p=n+l+f,k=Math.floor(n/p*100);return Object(b.jsxs)("div",{children:[Object(b.jsxs)(O,{title:"Please leave feedback",children:[Object(b.jsx)(u,{options:"good",onFeedbackButtonClick:function(){i((function(t){return t+1}))}}),Object(b.jsx)(u,{options:"neutral",onFeedbackButtonClick:function(){r((function(t){return t+1}))}}),Object(b.jsx)(u,{options:"bad",onFeedbackButtonClick:function(){x((function(t){return t+1}))}})]}),Object(b.jsxs)(O,{title:"Statistics",children:[p?Object(b.jsx)(h,{good:n,neutral:l,bad:f,total:p,percent:k}):null,p?null:Object(b.jsx)(m,{message:"No feedback given"})]})]})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c36d7a14.chunk.js.map