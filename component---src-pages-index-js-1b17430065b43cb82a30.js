webpackJsonp([35783957827783],{658:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"hljs-comment":{color:"#8e908c"},"hljs-quote":{color:"#8e908c"},"hljs-variable":{color:"#c82829"},"hljs-template-variable":{color:"#c82829"},"hljs-tag":{color:"#c82829"},"hljs-name":{color:"#c82829"},"hljs-selector-id":{color:"#c82829"},"hljs-selector-class":{color:"#c82829"},"hljs-regexp":{color:"#c82829"},"hljs-deletion":{color:"#c82829"},"hljs-number":{color:"#f5871f"},"hljs-built_in":{color:"#f5871f"},"hljs-builtin-name":{color:"#f5871f"},"hljs-literal":{color:"#f5871f"},"hljs-type":{color:"#f5871f"},"hljs-params":{color:"#f5871f"},"hljs-meta":{color:"#f5871f"},"hljs-link":{color:"#f5871f"},"hljs-attribute":{color:"#eab700"},"hljs-string":{color:"#718c00"},"hljs-symbol":{color:"#718c00"},"hljs-bullet":{color:"#718c00"},"hljs-addition":{color:"#718c00"},"hljs-title":{color:"#4271ae"},"hljs-section":{color:"#4271ae"},"hljs-keyword":{color:"#8959a8"},"hljs-selector-tag":{color:"#8959a8"},hljs:{display:"block",overflowX:"auto",background:"white",color:"#4d4d4c",padding:"0.5em"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}}},228:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),i=a(n),o=l(25),r=a(o),s=l(8),d=a(s),c=l(60),u=a(c),f=l(20),p=a(f),g=l(22),h=a(g),m=l(658),y=a(m),x=d.default.div.withConfig({displayName:"pages__Container"})(["display:flex;flex-direction:column;height:100%;"]),b=d.default.h1.withConfig({displayName:"pages__Title"})(["margin:0;font-style:italic;"]),w=d.default.h2.withConfig({displayName:"pages__Subtitle"})(["margin:0;padding:0 10px;@media only screen and (max-width:768px){font-size:19px;}"]),j=d.default.div.withConfig({displayName:"pages__NavBar"})(["background-color:#3b74d7;height:60px;min-height:60px;display:flex;justify-content:flex-end;padding-right:80px;@media only screen and (max-width:768px){justify-content:center;padding-right:0;height:50px;min-height:50px;}"]),_=d.default.span.withConfig({displayName:"pages__NavBarLink"})(["color:white !important;font-size:22px;align-self:center;padding:0 10px;> a{text-decoration:none;&:-webkit-any-link{color:white !important;}&:link,&:visited,&:focus,&:hover,&:active{color:white;}}"]),E=d.default.div.withConfig({displayName:"pages__Content"})(["text-align:center;background-color:#fbfbfb;height:100%;@media only screen and (max-width:768px){padding-bottom:25px;height:initial;}"]),v=d.default.div.withConfig({displayName:"pages__Heading"})(["padding-top:4%;"]),C=d.default.div.withConfig({displayName:"pages__InstallBox"})(["padding:12px 0;margin:10px 0;background-color:white;border-top:1px dashed #3b74d7;border-bottom:1px dashed #3b74d7;"]),N=d.default.div.withConfig({displayName:"pages__FeaturesContainer"})(["display:flex;justify-content:center;flex-wrap:wrap;"]),k=d.default.div.withConfig({displayName:"pages__Feature"})(["flex:1;padding:0 10px;max-width:380px;@media only screen and (max-width:768px){flex-basis:100%;}"]),T=d.default.div.withConfig({displayName:"pages__Footer"})(["text-align:center;height:40px;line-height:40px;font-size:14px;@media only screen and (max-width:768px){background-color:#fbfbfb;height:initial;line-height:initial;padding-bottom:10px;}"]),F=d.default.h3.withConfig({displayName:"pages__FeatureTitle"})([""]),M=d.default.div.withConfig({displayName:"pages__RefactoringContainer"})(["display:flex;justify-content:center;flex-wrap:wrap;padding-top:25px;pre{text-align:left;align-self:center;font-size:12px;background-color:rgba(0,0,0,0.02) !important;border-radius:5px;padding:1em !important;}"]),P=d.default.div.withConfig({displayName:"pages__RefactoringText"})(["align-self:center;font-size:27px;padding:0 20px;"]),S=function(e){return i.default.createElement(p.default,{location:e.location},i.default.createElement(x,null,i.default.createElement(u.default,null),i.default.createElement(j,null,i.default.createElement(_,null,i.default.createElement(r.default,{to:"/getting-started"},"Docs")),i.default.createElement(_,null,i.default.createElement("a",{href:"https://github.com/gigobyte/purify"},"Github"))),i.default.createElement(E,null,i.default.createElement(v,null,i.default.createElement(b,null,i.default.createElement("img",{src:"https://raw.githubusercontent.com/gigobyte/purify/master/assets/logo.png",alt:"Purify"})),i.default.createElement(w,null,"Functional programming library for TypeScript"),i.default.createElement(C,null,"$ npm install purify-ts")),i.default.createElement(N,null,i.default.createElement(k,null,i.default.createElement(F,null,"Not just a port"),"For purify, bringing popular patterns doesn't mean copying the implementation down to the last details, it means expressing ideas in the cleanest way possible using the tools of the language"),i.default.createElement(k,null,i.default.createElement(F,null,"Algebraic Data Types"),"Purify provides a collection of algebraic data structures that will help you tackle common problems that increase code complexity, such as conditional logic and error handling"),i.default.createElement(k,null,i.default.createElement(F,null,"Practical approach"),"Purify is a library focused on practical functional programming in TypeScript. You will find many examples and tutorials in the"," ",i.default.createElement(r.default,{to:"/getting-started"},"docs")," section of this site.")),i.default.createElement(M,null,i.default.createElement(P,null,"Turn"),i.default.createElement(h.default,{language:"javascript",style:y.default},"const getUsers = (country?: Country): User[] => {\n    if (!country) {\n        return []\n    }\n\n    const users = getUsersByCountry(country)\n\n    if (!users) {\n        return []\n    }\n\n    return users\n}"),i.default.createElement(P,null,"into"),i.default.createElement(h.default,{language:"javascript",style:y.default,show:!0},"import { Maybe } from 'purify-ts/Maybe'\n\nconst getUsers = (country?: Country): User[] =>\n    Maybe.fromNullable(country)\n         .chain(getUsersByCountry)\n         .orDefault([])"))),i.default.createElement(T,null,"Purify is developed and maintained by Stanislav Iliev, distributed under the ISC License.")))};t.default=S,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-1b17430065b43cb82a30.js.map