(window.webpackJsonp=window.webpackJsonp||[]).push([["e6cc"],{Juyh:function(t,e,n){"use strict";n.r(e);var a=n("uqIC"),c=n.n(a),r=n("iARv");e.default=function(){return c.a.createElement("div",{className:"page page-about"},c.a.createElement(r.a,{label:"about"}))}},ZUm7:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){var t=n("Juyh");return{page:t.default||t}}])},iARv:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var a=n("95Bc"),c=n("lvNx"),r=n("EjGv"),i=n("A6+v"),l=n("SxE1"),o=n("uqIC"),u=n.n(o),s=n("i/3T"),d=n.n(s),m=n("bMwp"),f=n("gQrn"),p=n.n(f),h=n("W9HR"),b=n("cPZa"),v=n("Z69C"),E=n("Qi1R"),w=function(t){function e(t){var n;return Object(a.default)(this,e),(n=Object(r.default)(this,Object(i.default)(e).call(this,t))).state={post:{}},n}return Object(l.default)(e,t),Object(c.default)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.label;m.a.byPage({labels:e,type:"PAGE"}).then(function(e){e.length&&t.setState(function(){return{post:e[0]}})}).catch(function(){d.a.push("/error")})}},{key:"render",value:function(){var t=this.state.post,e=this.props,n=e.label,a=e.children;if(!t.id)return u.a.createElement(b.a,null);var c=v.menus.find(function(t){return t.link==="/".concat(n)})||{name:Object(E.g)("notFoundTitle")};return u.a.createElement("div",{className:"post-item"},u.a.createElement(h.a,{title:"".concat(v.seo.title," | ").concat(c.name)}),u.a.createElement("div",{className:"content",style:{padding:0}},u.a.createElement(p.a,{href:"/".concat(n)},u.a.createElement("a",{className:"title",style:{marginBottom:10,fontSize:18}},t.title)),u.a.createElement("div",{className:"html markdown-body",dangerouslySetInnerHTML:{__html:t.html}}),a))}}]),e}(u.a.Component)}},[["ZUm7","5d41","9da1"]]]);