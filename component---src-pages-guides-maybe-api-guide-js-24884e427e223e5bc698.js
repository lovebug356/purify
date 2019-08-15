webpackJsonp([98857381193334],{226:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),o=a(8),u=l(o),i=a(20),s=l(i),d=a(59),c=l(d),f=a(22),h=l(f),m=a(26),b=l(m),y=u.default.div.withConfig({displayName:"maybe-api-guide__Note"})(["display:inline-block;background-color:#fcf4cd;border:0 solid #f7e070;border-left-width:8px;padding:10px;margin:10px 0;"]),g=u.default.a.withConfig({displayName:"maybe-api-guide__MethodName"})(["font-size:17px;font-weight:bold;color:#3b74d7;margin-top:5px;display:inline-block;text-decoration:none;&:hover{text-decoration:underline;}"]),p=(0,u.default)(g).withConfig({displayName:"maybe-api-guide__SmallMethodName"})(["font-size:initial;font-weight:initial;margin-top:0;"]),E=function(e){return r.default.createElement(s.default,{location:e.location},r.default.createElement("h1",null,"Which Maybe method am I supposed to use now? (API guide)"),"We've all been in that research phase where we're still learning the API of library and deciding if it suits our usecases. ",r.default.createElement("br",null),"The purpose of this guide is to make that process easier by grouping all available methods for the Maybe data type.",r.default.createElement("h3",null,"Scenario #1 - I want to use Maybe but my codebase already has null/undefined all over the place"),"One of purify's main goals is great interoperability with existing code. That is why the API for Maybe is rich in utility methods for working with nullable values. ",r.default.createElement("br",null),r.default.createElement(y,null,"One might question the usage of Maybe (and purify) if you are still going to use nulls, there are already a lot of utility libraries like ramda and lodash that allow you to do that. ",r.default.createElement("br",null),"With purify you can start using ubiquitous data structures that come with a lot of literature and examples in various programming languages ",r.default.createElement("br",null),"without sacrificing coding style or ease of interop, that's why using it instead of other libraries might be a good idea."),r.default.createElement("br",null),r.default.createElement(g,{href:"/adts/Maybe/#fromNullable"},"Maybe.fromNullable")," ","/ ",r.default.createElement(g,{href:"/adts/Maybe/#fromFalsy"},"Maybe.fromFalsy")," /"," ",r.default.createElement(g,{href:"/adts/Maybe/#fromPredicate"},"Maybe.fromPredicate")," ","/ ",r.default.createElement(g,{href:"/adts/Maybe/#encase"},"Maybe.encase"),r.default.createElement("br",null),"These methods allow you to construct Maybe values from, as the names suggest, nullable and falsy values or in the case of the"," ",r.default.createElement(p,{href:"/adts/Maybe/#encase"},"encase")," method - from a function that may throw an exception. ",r.default.createElement("br",null),"`fromPredicate` is on the list because it can be used to cover all kinds of complicated checks, for example:",r.default.createElement(h.default,{language:"javascript",style:b.default},"const _ = Maybe.fromPredicate(x => x && x.length > 0, value)"),r.default.createElement(g,{href:"/adts/Maybe/#chainNullable"},"chainNullable"),r.default.createElement("br",null),"Now that you have constructed your Maybe out of an optional value, you may want to transform it with a function that returns yet another optional value. ",r.default.createElement("br",null),"If you are already familiar with the"," ",r.default.createElement(p,{href:"/adts/Maybe/#chain"},"chain")," method (a.k.a. ",r.default.createElement(c.default,null,"bind"),", ",r.default.createElement(c.default,null,"flatMap")," or ",r.default.createElement(c.default,null,">>="),") you may think of using it in combination with any of the methods mentioned above: ",r.default.createElement("br",null),r.default.createElement(h.default,{language:"javascript",style:b.default},"myMaybe.chain(x => Maybe.fromNullable(transform(x)))"),"There's nothing wrong with that approach, but there's a helper method called `chainNullable` that does exactly the same thing ",r.default.createElement("br",null),"without you having to manually construct a Maybe out of the return value of the transformation function. ",r.default.createElement("br",null),r.default.createElement(h.default,{language:"javascript",style:b.default},"myMaybe.chainNullable(x => transform(x))\n// or just straight up\nmyMaybe.chainNullable(transform)"),r.default.createElement(g,{href:"/adts/Maybe/#extract"},"extract")," /"," ",r.default.createElement(g,{href:"/adts/Maybe/#extractNullable"},"extractNullable")," ","/ ",r.default.createElement(g,{href:"/adts/Maybe/#unsafeCoerce"},"unsafeCoerce"),r.default.createElement("br",null),"Sometimes you have to interact with code that expects a nullable value, in that case you can just unwrap a Maybe down to a primitive value like null or undefined using the methods above. ",r.default.createElement("br",null),r.default.createElement(y,null,"Please note that while you may be tempted to wrap and unwrap manually every time you encounter a nullable value, ",r.default.createElement("br",null),"consider that code designed with Maybe in mind is easier to maintain and use in the long term. ",r.default.createElement("br",null),"Try to keep usage of the methods mentioned in this part of the guide low and only for compatibility reasons. ",r.default.createElement("br",null),"Don't be afraid to start returning or expecing Maybe values in functions, you'll notice some benefits you haven't considered before!"),r.default.createElement("h3",null,"Scenario #2 - I'm not sure how to check if a value exists or not"),"There are numerous ways to check if a value exists with purify, but I want to focus on the fact that you rarely need to do so explicitly.",r.default.createElement("br",null),"Try to split up your code into functions and then find ways to combine them using many of the available transformation methods like",r.default.createElement("br",null),r.default.createElement(p,{href:"/adts/Maybe/#map"},"Maybe#map")," or"," ",r.default.createElement(p,{href:"/adts/Maybe/#chain"},"Maybe#chain")," or"," ",r.default.createElement(p,{href:"/adts/Maybe/#extend"},"Maybe#extend")," ","or",r.default.createElement(p,{href:"/adts/Maybe/#filter"},"Maybe#filter"),"... you get the point.",r.default.createElement("br",null),"There are so many methods you can chain so that your code is nice and declarative that you'll almost never have to unpack a Maybe and check manually.",r.default.createElement("br",null),"There are some cases where that is needed though, let's go through them:"," ",r.default.createElement("br",null)," ",r.default.createElement("br",null),r.default.createElement(g,{href:"/adts/Maybe/#isJust"},"Maybe#isJust")," /"," ",r.default.createElement(g,{href:"/adts/Maybe/#isNothing"},"Maybe#isNothing"),r.default.createElement("br",null),"The most primitive of the bunch, these methods enable us to do JS-style checking if a value is missing or not.",r.default.createElement("br",null),"The method names are pretty self-explanatory so we won't go into much details, but it's generally not recommend to use those methods.",r.default.createElement("br",null),"Better choices are almost always available.",r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(g,{href:"/adts/Maybe/#caseOf"},"Maybe#caseOf")," /"," ",r.default.createElement(g,{href:"/adts/Maybe/#reduce"},"Maybe#reduce"),r.default.createElement("br",null),r.default.createElement(p,{href:"/adts/Maybe/#caseOf"},"caseOf")," is the go-to choice when none of the other methods seem good enough.",r.default.createElement("br",null),"Since pattern matching is still not available (yet) in JavaScript, caseOf tries to mimic this behaviour, allowing you to branch your logic by asking you for two functions that will handle each case.",r.default.createElement("br",null),r.default.createElement(p,{href:"/adts/Maybe/#reduce"},"reduce")," is very, very similar, in fact it's so similar that it looks almost useless. The goal of reduce is to provide an instance for the Foldable typeclass for Maybe.",r.default.createElement("br",null),"If you like the minimalism of reduce and you don't care about Foldable or you haven't heard of it - no problem, you can use it instead of caseOf just fine!",r.default.createElement("br",null))};t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-guides-maybe-api-guide-js-24884e427e223e5bc698.js.map