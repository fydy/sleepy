(window.webpackJsonp=window.webpackJsonp||[]).push([["6286"],{iARv:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var a=n("95Bc"),c=n("lvNx"),r=n("EjGv"),i=n("A6+v"),l=n("SxE1"),o=n("uqIC"),s=n.n(o),u=n("3A5w"),d=n.n(u),f=n("bMwp"),m=n("7Ode"),p=n.n(m),h=n("W9HR"),v=n("cPZa"),b=n("Z69C"),E=n("Qi1R"),w=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(r.default)(this,Object(i.default)(t).call(this,e))).state={post:{}},n}return Object(l.default)(t,e),Object(c.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.label;f.a.byPage({labels:t,type:"PAGE"}).then(function(t){t.length&&e.setState(function(){return{post:t[0]}})}).catch(function(){d.a.push("/error")})}},{key:"render",value:function(){var e=this.state.post,t=this.props,n=t.label,a=t.children;if(!e.id)return s.a.createElement(v.a,null);var c=b.menus.find(function(e){return e.link==="/".concat(n)})||{name:Object(E.g)("notFoundTitle")};return s.a.createElement("div",{className:"post-item"},s.a.createElement(h.a,{title:"".concat(b.seo.title," | ").concat(c.name)}),s.a.createElement("div",{className:"content",style:{padding:0}},s.a.createElement(p.a,{href:"/".concat(n)},s.a.createElement("a",{className:"title",style:{marginBottom:10,fontSize:18}},e.title)),s.a.createElement("div",{className:"html markdown-body",dangerouslySetInnerHTML:{__html:e.html}}),a))}}]),t}(s.a.Component)},nUAz:function(e,t,n){"use strict";n.r(t);var a=n("uqIC"),c=n.n(a),r=n("iARv");t.default=function(){return c.a.createElement("div",{className:"page page-friends"},c.a.createElement(r.a,{label:"friends"}))}},t7dC:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/friends",function(){var e=n("nUAz");return{page:e.default||e}}])}},[["t7dC","5d41","9da1"]]]);