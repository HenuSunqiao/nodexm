(function(t){function e(e){for(var a,o,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"013b":function(t,e,n){},"0c0b":function(t,e,n){},"12e2":function(t,e,n){},1423:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"no-page"}},[n("h3",[t._v("404")]),n("h3",[t._v("404")]),n("h3",[t._v("404")]),n("h3",[t._v("404")]),n("h3",[t._v("404")])])}];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}))},"144f":function(t,e,n){"use strict";var a=n("cde5"),r=n.n(a);r.a},"24db":function(t,e,n){"use strict";var a=n("c68a"),r=n.n(a);e["default"]=r.a},"2c88":function(t,e,n){},"2e71":function(t,e,n){"use strict";var a=n("12e2"),r=n.n(a);r.a},"3aff":function(t,e,n){},"3d73":function(t,e,n){"use strict";var a=n("1423"),r=n("24db"),i=n("2877"),o=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"406d":function(t,e,n){"use strict";var a=n("cdbc"),r=n.n(a);r.a},"48c5":function(t,e,n){"use strict";var a=n("a67b"),r=n.n(a);r.a},"503c":function(t,e,n){function a(t,e){"use strict";var n=function(){},a=function(t){setTimeout(t||n,0)},r={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch,transitions:function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(document.createElement("swipe"))};if(t){var i,o,s,u,c=t.children[0];e=e||{};var l=parseInt(e.startSlide,10)||0,d=e.speed||300;e.continuous=void 0===e.continuous||e.continuous;var p,f,v=e.auto||0,m={},h={},b={handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":a(this.end(t));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":a(this.transitionEnd(t));break;case"resize":a(g);break}e.stopPropagation&&t.stopPropagation()},start:function(t){var e=t.touches[0];m={x:e.pageX,y:e.pageY,time:+new Date},f=void 0,h={},c.addEventListener("touchmove",this,!1),c.addEventListener("touchend",this,!1)},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)){e.disableScroll&&t.preventDefault();var n=t.touches[0];h={x:n.pageX-m.x,y:n.pageY-m.y},"undefined"==typeof f&&(f=!!(f||Math.abs(h.x)<Math.abs(h.y))),f||(t.preventDefault(),C(),e.continuous?(E(x(l-1),h.x+o[x(l-1)],0),E(l,h.x+o[l],0),E(x(l+1),h.x+o[x(l+1)],0)):(h.x=h.x/(!l&&h.x>0||l==i.length-1&&h.x<0?Math.abs(h.x)/s+1:1),E(l-1,h.x+o[l-1],0),E(l,h.x+o[l],0),E(l+1,h.x+o[l+1],0)))}},end:function(t){var n=+new Date-m.time,a=Number(n)<250&&Math.abs(h.x)>20||Math.abs(h.x)>s/2,r=!l&&h.x>0||l==i.length-1&&h.x<0;e.continuous&&(r=!1);var u=h.x<0;f||(a&&!r?(u?(e.continuous?(k(x(l-1),-s,0),k(x(l+2),s,0)):k(l-1,-s,0),k(l,o[l]-s,d),k(x(l+1),o[x(l+1)]-s,d),l=x(l+1)):(e.continuous?(k(x(l+1),s,0),k(x(l-2),-s,0)):k(l+1,s,0),k(l,o[l]+s,d),k(x(l-1),o[x(l-1)]+s,d),l=x(l-1)),e.callback&&e.callback(l,i[l])):e.continuous?(k(x(l-1),-s,d),k(l,0,d),k(x(l+1),s,d)):(k(l-1,-s,d),k(l,0,d),k(l+1,s,d))),c.removeEventListener("touchmove",b,!1),c.removeEventListener("touchend",b,!1)},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==l&&(v&&O(),e.transitionEnd&&e.transitionEnd.call(t,l,i[l]))}};return g(),v&&O(),r.addEventListener?(r.touch&&c.addEventListener("touchstart",b,!1),r.transitions&&(c.addEventListener("webkitTransitionEnd",b,!1),c.addEventListener("msTransitionEnd",b,!1),c.addEventListener("oTransitionEnd",b,!1),c.addEventListener("otransitionend",b,!1),c.addEventListener("transitionend",b,!1)),window.addEventListener("resize",b,!1)):window.onresize=function(){g()},{setup:function(){g()},slide:function(t,e){C(),y(t,e)},prev:function(){C(),_()},next:function(){C(),w()},stop:function(){C()},getPos:function(){return l},getNumSlides:function(){return u},kill:function(){C(),c.style.width="",c.style.left="";var t=i.length;while(t--){var e=i[t];e.style.width="",e.style.left="",r.transitions&&E(t,0,0)}r.addEventListener?(c.removeEventListener("touchstart",b,!1),c.removeEventListener("webkitTransitionEnd",b,!1),c.removeEventListener("msTransitionEnd",b,!1),c.removeEventListener("oTransitionEnd",b,!1),c.removeEventListener("otransitionend",b,!1),c.removeEventListener("transitionend",b,!1),window.removeEventListener("resize",b,!1)):window.onresize=null}}}function g(){i=c.children,u=i.length,i.length<2&&(e.continuous=!1),r.transitions&&e.continuous&&i.length<3&&(c.appendChild(i[0].cloneNode(!0)),c.appendChild(c.children[1].cloneNode(!0)),i=c.children),o=new Array(i.length),s=t.getBoundingClientRect().width||t.offsetWidth,c.style.width=i.length*s+"px";var n=i.length;while(n--){var a=i[n];a.style.width=s+"px",a.setAttribute("data-index",n),r.transitions&&(a.style.left=n*-s+"px",k(n,l>n?-s:l<n?s:0,0))}e.continuous&&r.transitions&&(k(x(l-1),-s,0),k(x(l+1),s,0)),r.transitions||(c.style.left=l*-s+"px"),t.style.visibility="visible"}function _(){e.continuous?y(l-1):l&&y(l-1)}function w(){e.continuous?y(l+1):l<i.length-1&&y(l+1)}function x(t){return(i.length+t%i.length)%i.length}function y(t,n){if(l!=t){if(r.transitions){var u=Math.abs(l-t)/(l-t);if(e.continuous){var c=u;u=-o[x(t)]/s,u!==c&&(t=-u*i.length+t)}var p=Math.abs(l-t)-1;while(p--)k(x((t>l?t:l)-p-1),s*u,0);t=x(t),k(l,s*u,n||d),k(t,0,n||d),e.continuous&&k(x(t-u),-s*u,0)}else t=x(t),j(l*-s,t*-s,n||d);l=t,a(e.callback&&e.callback(l,i[l]))}}function k(t,e,n){E(t,e,n),o[t]=e}function E(t,e,n){var a=i[t],r=a&&a.style;r&&(r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=n+"ms",r.webkitTransform="translate("+e+"px,0)translateZ(0)",r.msTransform=r.MozTransform=r.OTransform="translateX("+e+"px)")}function j(t,n,a){if(a)var r=+new Date,o=setInterval((function(){var s=+new Date-r;if(s>a)return c.style.left=n+"px",v&&O(),e.transitionEnd&&e.transitionEnd.call(event,l,i[l]),void clearInterval(o);c.style.left=(n-t)*(Math.floor(s/a*100)/100)+t+"px"}),4);else c.style.left=n+"px"}function O(){p=setTimeout(w,v)}function C(){v=0,clearTimeout(p)}}n("a9e3"),n("e25e"),t.exports=a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"headerBlock"}),n("router-view"),n("Footer"),n("div",{staticClass:"footerBlock"})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("ul",[n("router-link",{attrs:{tag:"li","active-class":"nav__list--active",to:"/home"}},[t._v("首页")]),n("router-link",{attrs:{tag:"li","active-class":"nav__list--active",to:"/top250"}},[t._v("Top250")]),n("router-link",{attrs:{tag:"li","active-class":"nav__list--active",to:"/inTheaters"}},[t._v("院线热映")]),n("router-link",{attrs:{tag:"li","active-class":"nav__list--active",to:"/comingSoon"}},[t._v("即将上映")]),n("router-link",{attrs:{tag:"li","active-class":"nav__list--active",to:"/weekly"}},[t._v("本周排行")])],1)])},s=[],u={data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},c=u,l=(n("b296"),n("2877")),d=Object(l["a"])(c,o,s,!1,null,"0ea49762",null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot-btn"},[n("ul",[n("router-link",{staticClass:"home",attrs:{tag:"li",to:"/home","active-class":"home_active"}},[n("a",{attrs:{href:"javascript:;"}})]),n("router-link",{staticClass:"write",attrs:{tag:"li",to:"/shopcart","active-class":""}},[n("a",{attrs:{href:"javascript:;"}})]),n("router-link",{staticClass:"my",attrs:{tag:"li",to:"/user","active-class":"my_active"}},[n("a",{attrs:{href:"javascript:;"}})])],1)])},v=[],m={data:function(){return{}},components:{},mounted:function(){},updated:function(){},methods:{}},h=m,b=(n("6164"),Object(l["a"])(h,f,v,!1,null,"79bdbd20",null)),g=b.exports,_={name:"app",components:{Header:p,Footer:g}},w=_,x=(n("6366"),Object(l["a"])(w,r,i,!1,null,null,null)),y=x.exports,k=(n("3aff"),n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),E=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Banner"),n("InTheaters"),n("ComingSoon"),n("HomeTop"),n("router-view")],1)},O=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("ul",{staticClass:"clearfix"},[n("router-link",{attrs:{to:{path:"/details/1?dataName=banner"},tag:"li"}},[n("img",{attrs:{src:"/images/img_1.jpg",alt:""}}),n("div",{staticClass:"text-box"},[n("h2",[t._v("还可以降低首付款健身房11111")]),n("p",[t._v("刘德华11 / 文")])])]),n("router-link",{attrs:{to:{path:"/detail/2?dataName=banner"},tag:"li"}},[n("img",{attrs:{src:"/images/img_2.jpg",alt:""}}),n("div",{staticClass:"text-box"},[n("h2",[t._v("还可以降低首付款健身房11111")]),n("p",[t._v("刘德华22 / 文")])])])],1)])},T=[],$=n("1157"),P=n.n($),L=n("503c"),S=n.n(L),N={data:function(){return{}},components:{},updated:function(){},methods:{},mounted:function(){console.log("mounted banner"),new S.a(P()(".banner")[0],{auto:2e3,continuous:!0,stopPropation:!0,callback:function(t,e){P()(".banner ol li").removeClass("active"),P()(".banner ol li").eq(t).addClass("active")}})},destroyed:function(){console.log("banner destroyed")}},D=N,M=(n("e9ed"),Object(l["a"])(D,C,T,!1,null,"9bdbf7b6",null)),z=M.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"in-theaters"},[n("h3",[n("p",[t._v("正在热映")]),n("router-link",{attrs:{to:"/inTheaters",tag:"span"}},[t._v("更多")])],1),n("ul",t._l(t.data.subjects,(function(t,e){return n("router-link",{key:t.id,attrs:{tag:"li",to:"/details/"+t.id+"?dataName=in_theaters"}},[n("Cell",{attrs:{data:t}})],1)})),1)])},B=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cell"}},[n("div",{staticClass:"items-container",attrs:{title:t.data.title}},[n("div",{staticClass:"main-picture"},[n("img",{attrs:{src:t.data.images.small,alt:""}})]),n("div",{staticClass:"title"},[n("p",[t._v(t._s(t.data.title))])])])])},H=[],A={name:"cell",data:function(){return{}},mounted:function(){},props:["data"]},F=A,R=(n("406d"),Object(l["a"])(F,q,H,!1,null,null,null)),U=R.exports,X={data:function(){return{data:{}}},components:{Cell:U},mounted:function(){var t=this;this.$axios({url:"https://douban-api.now.sh/v2/movie/in_theaters",params:{start:0,count:3}}).then((function(e){return t.data=e.data}))}},J=X,W=(n("2e71"),Object(l["a"])(J,I,B,!1,null,"fb987e8e",null)),Y=W.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coming-soon"},[n("h3",[n("p",[t._v("即将上映")]),n("router-link",{attrs:{to:"/comingSoon",tag:"span"}},[t._v("更多")])],1),n("ul",t._l(t.data.subjects,(function(e,a){return n("router-link",{key:e.id,attrs:{tag:"li",to:"/details/"+e.id+"?dataName=coming_soon",canshu:e}},[e.images?n("Cell",{attrs:{data:e}}):t._e()],1)})),1)])},G=[],K={data:function(){return{data:{}}},components:{Cell:U},mounted:function(){var t=this;this.$axios({url:"https://douban-api.now.sh/v2/movie/coming_soon",params:{start:0,count:3}}).then((function(e){return t.data=e.data}))}},Q=K,V=(n("48c5"),Object(l["a"])(Q,Z,G,!1,null,"108eacce",null)),tt=V.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coming-soon"},[n("h3",[n("p",[t._v("本站排名")]),n("router-link",{attrs:{to:"/top250",tag:"span"}},[t._v("更多")])],1),n("ul",t._l(t.data.subjects,(function(t,e){return n("router-link",{key:t.id,attrs:{tag:"li",to:"/details/"+t.id+"?dataName=top250",canshu:t}},[n("Cell",{attrs:{data:t}})],1)})),1)])},nt=[],at={data:function(){return{data:{}}},components:{Cell:U},mounted:function(){var t=this;this.$axios({url:"https://douban-api.now.sh/v2/movie/top250",params:{start:0,count:3}}).then((function(e){return t.data=e.data}))}},rt=at,it=(n("144f"),Object(l["a"])(rt,et,nt,!1,null,"9aef6b34",null)),ot=it.exports,st={name:"shouye",data:function(){return{data:{}}},components:{Banner:z,InTheaters:Y,ComingSoon:tt,HomeTop:ot},mounted:function(){}},ut=st,ct=(n("daf8"),Object(l["a"])(ut,j,O,!1,null,"4135d6aa",null)),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top250"}},[n("ul",t._l(t.data.subjects,(function(t,e){return n("router-link",{key:t.id,attrs:{tag:"li",to:"/details/"+t.id+"?dataName=top250",canshu:t}},[n("Cell",{attrs:{data:t}})],1)})),1)])},pt=[],ft={name:"top250",data:function(){return{title:[],data:{}}},components:{Cell:U},mounted:function(){var t=this;this.$axios({url:"https://douban-api.now.sh/v2/movie/top250",params:{start:0,count:30}}).then((function(e){return t.data=e.data}))}},vt=ft,mt=(n("60c4"),Object(l["a"])(vt,dt,pt,!1,null,"27eefa0b",null)),ht=mt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top250"}},[n("ul",t._l(t.data.subjects,(function(t,e){return n("router-link",{key:t.id,attrs:{tag:"li",to:"/details/"+t.id+"?dataName=top250",canshu:t}},[n("Cell",{attrs:{data:t}})],1)})),1)])},gt=[],_t={name:"top250",data:function(){return{title:[],data:{}}},components:{Cell:U},mounted:function(){var t=this;this.$axios({url:"https://douban-api.now.sh/v2/movie/in_theaters",params:{start:0,count:30}}).then((function(e){return t.data=e.data}))}},wt=_t,xt=(n("cbed"),Object(l["a"])(wt,bt,gt,!1,null,"49b22d00",null)),yt=xt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top250"}},[n("ul",t._l(t.data.subjects,(function(t,e){return n("router-link",{key:t.id,attrs:{tag:"li",to:"/details/"+t.id+"?dataName=top250",canshu:t}},[n("Cell",{attrs:{data:t}})],1)})),1)])},Et=[],jt={name:"top250",data:function(){return{title:[],data:{}}},components:{Cell:U},mounted:function(){var t=this;this.$axios({url:"https://douban-api.now.sh/v2/movie/coming_soon",params:{start:0,count:30}}).then((function(e){return t.data=e.data}))}},Ot=jt,Ct=(n("84c7"),Object(l["a"])(Ot,kt,Et,!1,null,"0caa6c46",null)),Tt=Ct.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top250"}},[n("ul",t._l(t.data.subjects,(function(t,e){return n("router-link",{key:t.id,attrs:{tag:"li",to:"/details/"+t.id+"?dataName=top250",canshu:t}})})),1)])},Pt=[],Lt={name:"top250",data:function(){return{title:[],data:{}}},mounted:function(){var t=this;this.$axios({url:"https://douban.uieee.com/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a"}).then((function(e){return t.data=e.data}))}},St=Lt,Nt=(n("b07b"),Object(l["a"])(St,$t,Pt,!1,null,"52027826",null)),Dt=Nt.exports,Mt=n("3d73"),zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"detail"}})},It=[],Bt={name:"detail",data:function(){return{data:{}}},props:{id:{type:String,required:!0},dataName:{type:String,required:!0}},mounted:function(){var t=this;this.$axios({url:"https://douban-api.now.sh/v2/movie/subject/"+this.id,params:{apikey:"0df993c66c0c636e29ecbb5344252a4a"}}).then((function(e){return t.data=e.data}))}},qt=Bt,Ht=Object(l["a"])(qt,zt,It,!1,null,null,null),At=Ht.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[n("h2",[n("img",{attrs:{src:t.$baseUrl+t.data.icon,alt:""}})]),n("div",{staticClass:"user-box"},[n("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.data.nikename))]),n("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[t._v("注销")])]),n("ul",{staticClass:"clear"},[n("li",[n("span",[t._v(t._s(t.data.follow))]),n("p",[t._v("关注")])]),n("li",[n("span",[t._v(t._s(t.data.fans))]),n("p",{staticClass:"end"},[t._v("粉丝")])])])]),t._m(0)])},Rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docList"},[n("ul",[n("li",{staticClass:"gk-text"},[n("i"),n("p",[t._v("公开博文")]),n("b"),n("span",[t._v("0")])]),n("li",{staticClass:"mm-text"},[n("i"),n("p",[t._v("秘密博文")]),n("b"),n("span",[t._v("0")])]),n("li",{staticClass:"cg-text"},[n("i"),n("p",[t._v("草稿箱")]),n("b"),n("span",[t._v("0")])]),n("li",{staticClass:"sc-text"},[n("i"),n("p",[t._v("收藏夹")]),n("b"),n("span",[t._v("0")])]),n("li",{staticClass:"my_cz"},[n("i"),n("p",[t._v("收藏夹")])])])])}],Ut=n("bc3a"),Xt=n.n(Ut),Jt={data:function(){return{data:{}}},components:{},mounted:function(){},updated:function(){},beforeRouteEnter:function(t,e,n){var a=window.localStorage.getItem("token");a?Xt()({url:"/api/user",headers:{token:a}}).then((function(t){return 0==t.data.err?n((function(e){return e.data=t.data.data})):n("/login")})):n("/login")},methods:{logout:function(){window.localStorage.removeItem("token"),this.$router.push("/home")}}},Wt=Jt,Yt=Object(l["a"])(Wt,Ft,Rt,!1,null,"7b3af984",null),Zt=Yt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-box"},[t._v(" 用户名"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"user"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("br"),t._v(" 密码"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",name:"pass"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("br"),t._v(" "+t._s(t.mess)),n("br"),n("input",{attrs:{type:"button",value:"登录"},on:{click:t.login}})])},Kt=[],Qt=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{name:"login",data:function(){return{username:"",password:"",mess:""}},methods:{login:function(){var t=this,e=new URLSearchParams;e.append("username",this.username),e.append("password",this.password),console.log(e),this.$axios({url:"/api/login",method:"post",data:e}).then((function(e){0==e.data.err?(window.localStorage.setItem("token",e.data.token),t.$router.push("/user")):t.mess=e.data.msg}))}}}),Vt=Qt,te=(n("a0f0"),Object(l["a"])(Vt,Gt,Kt,!1,null,null,null)),ee=te.exports,ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[t._v(" 用户名"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"user"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("br"),t._v(" 密码"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",name:"pass"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("br"),t._v(" "+t._s(t.mess)),n("br"),n("input",{attrs:{type:"button",value:"注册"},on:{click:t.reg}})])},ae=[],re={data:function(){return{username:"",password:"",mess:""}},methods:{reg:function(){var t=this,e=new FormData;e.append("username",this.username),e.append("password",this.password),Xt()({url:"/api/reg",method:"post",data:e}).then((function(e){0==e.data.err?(console.log(e.data),t.$router.push("/login")):t.mess=e.data.msg}))}}},ie=re,oe=Object(l["a"])(ie,ne,ae,!1,null,null,null),se=oe.exports;function ue(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ce(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ue(Object(n),!0).forEach((function(e){Object(k["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}a["a"].use(E["a"]);var le=[{name:"home",path:"/home",component:lt},{name:"top250",path:"/top250",component:ht},{path:"/inTheaters",component:yt},{path:"/comingSoon",component:Tt},{path:"/weekly",component:Dt},{name:"details",path:"/details/:id",component:At,props:function(t){return ce({id:t.params.id},t.query)}},{path:"/user",component:Zt},{path:"/login",component:ee},{path:"/reg",component:se},{path:"/",redirect:"/home"},{path:"*",component:Mt["default"]}],de=new E["a"]({mode:"history",routes:le}),pe=de;a["a"].prototype.$axios=Xt.a,a["a"].prototype.$baseUrl="http://localhost:3001",a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(y)},router:pe}).$mount("#app")},"60c4":function(t,e,n){"use strict";var a=n("e824"),r=n.n(a);r.a},6164:function(t,e,n){"use strict";var a=n("f494"),r=n.n(a);r.a},6366:function(t,e,n){"use strict";var a=n("8d50"),r=n.n(a);r.a},8273:function(t,e,n){},"84c7":function(t,e,n){"use strict";var a=n("d708"),r=n.n(a);r.a},8918:function(t,e,n){},"8d50":function(t,e,n){},a0f0:function(t,e,n){"use strict";var a=n("a5ec"),r=n.n(a);r.a},a5ec:function(t,e,n){},a67b:function(t,e,n){},b07b:function(t,e,n){"use strict";var a=n("8273"),r=n.n(a);r.a},b296:function(t,e,n){"use strict";var a=n("013b"),r=n.n(a);r.a},c68a:function(t,e){},cbed:function(t,e,n){"use strict";var a=n("0c0b"),r=n.n(a);r.a},cdbc:function(t,e,n){},cde5:function(t,e,n){},d708:function(t,e,n){},daf8:function(t,e,n){"use strict";var a=n("8918"),r=n.n(a);r.a},e824:function(t,e,n){},e9ed:function(t,e,n){"use strict";var a=n("2c88"),r=n.n(a);r.a},f494:function(t,e,n){}});
//# sourceMappingURL=app.8bdba12a.js.map