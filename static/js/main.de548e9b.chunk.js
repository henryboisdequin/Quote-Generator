(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),i=(n(14),n(15),n(1)),u=n.n(i),s=n(4),h=n(5),l=n(6),m=n(8),p=n(7),f=(n(17),function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).state={quote:"Outwork the Competition",author:"Unknown"},t}return Object(l.a)(n,[{key:"onClickNewQuote",value:function(t,e){this.setState({quote:t,author:e})}},{key:"loading",value:function(){this.setState({quote:"Loading...",author:"--"})}},{key:"getQuote",value:function(){var t=Object(s.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading(),"https://cors-anywhere.herokuapp.com/","https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json",t.prev=3,t.next=6,fetch("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json");case 6:return e=t.sent,t.next=9,e.json();case 9:""===(n=t.sent).quoteAuthor?this.onClickNewQuote(n.quoteText,"Unknown"):this.onClickNewQuote(n.quoteText,n.quoteAuthor),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),this.setState({quote:"Outwork the competition",author:"Unknown"});case 16:case"end":return t.stop()}}),t,this,[[3,13]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",{className:"quote"},'" ',this.state.quote),a.a.createElement("p",{className:"author"},"- ",this.state.author),a.a.createElement("button",{className:"bg-dark-green f6 link ph3 pv2 mb2 dib white b-none",onClick:this.getQuote.bind(this)},"Generate Random Quote"))}}]),n}(a.a.Component));n(18);var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.de548e9b.chunk.js.map