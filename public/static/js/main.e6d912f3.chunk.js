(this.webpackJsonpmyserver_frontend=this.webpackJsonpmyserver_frontend||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(24),r=n.n(c),i=(n(79),n(80),n(40),n(6)),l=n(9),s=n(5),u=n(10),m=n(67),d=n(187),f=n(68),h=n(63),v=n.n(h),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).componentWillMount=function(){var t=Object(s.a)(e);v.a.get("https://www.maximilian-wick.de/items").then((function(e){for(var n=[],a=0;a<e.data.length;a++)n.push(e.data[a].description);console.log(n),t.setState({items:n})})).catch((function(e){console.log(e)})).finally((function(){}))},e.state={selected:0,items:[]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(d.a,{title:"W\xe4hle ein M\xf6belst\xfcck aus!",options:this.state.items.map((function(e){return{label:e,value:e}})),selected:this.state.selected,onSelect:function(t){return e.setState({selected:t.value})}},o.a.createElement(f.a,null,this.state.selected||"Select name...")))}}]),n}(a.Component);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,n){},74:function(e,t,n){e.exports=n(173)},79:function(e,t,n){},80:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[74,1,2]]]);
//# sourceMappingURL=main.e6d912f3.chunk.js.map