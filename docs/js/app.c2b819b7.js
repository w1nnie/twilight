(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/twilight/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"09e2":function(t,e,a){},"1af6":function(t,e,a){},"1eec":function(t,e,a){"use strict";var i=a("4179"),n=a.n(i);n.a},"2da1":function(t,e,a){t.exports=a.p+"img/p_m.c2d230e2.png"},"2dda":function(t,e,a){},4179:function(t,e,a){},4403:function(t,e,a){"use strict";var i=a("6e0d"),n=a.n(i);n.a},5034:function(t,e,a){t.exports=a.p+"img/p_n.267612c2.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("top")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{attrs:{id:"img-container"}},[a("img",{staticClass:"middle far",style:{filter:t.middleBlur,transform:t.middleZoom},attrs:{src:t.layers[0]}}),a("img",{staticClass:"middle",style:{filter:t.middleBlur,transform:t.middleZoom},attrs:{src:t.layers[1]}}),a("img",{staticClass:"near",style:{filter:t.nearBlur,transform:t.nearZoom},attrs:{src:t.layers[2]}})]),a("div",{staticClass:"links",on:{neutralize:t.neutral}},[a("router-link",{staticClass:"about",attrs:{to:"about"},nativeOn:{mouseover:function(e){return t.showProfile(e)},mouseout:function(e){return t.neutral(e)},click:function(e){return t.showProfile(e)}}}),a("router-link",{staticClass:"works",style:{left:t.calcWorksLeft},attrs:{to:"works/graphics"},nativeOn:{mouseover:function(e){return t.goToGalleryHover(e)},mouseout:function(e){return t.neutral(e)},click:function(e){return t.goToGallery(e)}}})],1),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},o=[],l=a("8c4f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-container"},[a("about-svg"),a("about-text")],1)},u=[],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-text-container"},[a("div",{staticClass:"textbox"},[a("div",{staticClass:"bullet"},[a("div",{staticClass:"matters"},[t._v("Handle Name")]),a("div",{staticClass:"description"},[t._v("うぃにおん")])]),a("div",{staticClass:"bullet"},[a("div",{staticClass:"matters"},[t._v("Creator Name")]),a("div",{staticClass:"description"},[t._v("白葱")])]),a("div",{staticClass:"bullet"},[a("div",{staticClass:"matters"},[t._v("Name")]),a("div",{staticClass:"description"},[t._v("Yuma Watanabe")])]),a("div",{staticClass:"bullet"},[a("div",{staticClass:"matters"},[t._v("Date of Birth")]),a("div",{staticClass:"description"},[t._v("1997/05/30")])]),a("div",{staticClass:"bullet"},[a("div",{staticClass:"matters"},[t._v("Education")]),a("div",{staticClass:"description"},[t._v("Tokyo Institute of Technology")])]),a("div",{staticClass:"bullet"},[a("div",{staticClass:"matters"},[t._v("Likes")]),a("div",{staticClass:"description"},[t._v("Illust / Pixelart ")])])])])}],p={name:"AboutText",data:function(){return{}},components:{}},m=p,g=(a("fd27"),a("2877")),h=Object(g["a"])(m,d,f,!1,null,"13a17c56",null),v=h.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-svg-container"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.w+" "+t.h}},[a("path",{attrs:{d:"M 0 0 L "+.8*t.w+" 0 L 0 0 L 0 "+.93*t.h+" z",fill:t.color}},[a("animate",{attrs:{attributeName:"d",begin:"0s",dur:"1s",fill:"freeze",calcMode:"spline",keyTimes:"0;1",keySplines:"0.25 0.1 0.25 1.0",to:"M 0 0 L "+.8*t.w+" 0 L "+.65*t.w+" "+.3*t.h+" L 0 "+.93*t.h+" z"}})]),a("path",{attrs:{d:"M "+.07*t.w+" "+t.h+" L "+t.w+" "+t.h+" L "+t.w+" "+.37*t.h+" L "+t.w+" "+t.h+" z",fill:t.color}},[a("animate",{attrs:{attributeName:"d",begin:"0s",dur:"1s",fill:"freeze",calcMode:"spline",keyTimes:"0;1",keySplines:"0.25 0.1 0.25 1.0",to:"M "+.07*t.w+" "+t.h+" L "+.72*t.w+" "+.37*t.h+" L "+t.w+" "+.37*t.h+" L "+t.w+" "+t.h+" z"}})]),a("router-link",{attrs:{to:"/",tag:"path",d:"M "+.89*t.w+" 0 L "+t.w+" 0 L "+t.w+" "+.27*t.h+" L "+t.w+" 0 z",fill:t.collapseColor}},[a("animate",{attrs:{attributeName:"d",begin:"0s",dur:"1s",fill:"freeze",calcMode:"spline",keyTimes:"0;1",keySplines:"0.25 0.1 0.25 1.0",to:"M "+.89*t.w+" 0 L "+t.w+" 0 L "+t.w+" "+.27*t.h+" L "+.75*t.w+" "+.27*t.h+" z"}})])],1)])},_=[],b={name:"AboutSvg",data:function(){return{w:window.innerWidth,h:window.innerHeight,color:"hsl(110,5%,30%)",collapseColor:"hsl(110,5%,20%)"}},components:{}},x=b,k=(a("e7f4"),Object(g["a"])(x,w,_,!1,null,"95326d70",null)),C=k.exports,y=a("5034"),T=a.n(y),L={name:"About",data:function(){return{charaImg:T.a}},components:{AboutText:v,AboutSvg:C}},O=L,j=(a("9e66"),Object(g["a"])(O,c,u,!1,null,"2f070a2e",null)),D=j.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"works-container",style:{backgroundImage:"url("+t.bgImg+")"}},[a("div",{staticClass:"header"},[t._v("works")]),a("div",{staticClass:"genre-tab"},[a("router-link",{staticClass:"works-links",attrs:{to:"/works/graphics"}},[t._v("graphics")]),a("router-link",{staticClass:"works-links",attrs:{to:"/works/tools"}},[t._v("tools")]),a("router-link",{staticClass:"works-links",attrs:{to:"/works/games"}},[t._v("games")])],1),a("div",{staticClass:"body"},[a("router-view")],1),a("router-link",{staticClass:"collapse",attrs:{to:"/"}},[t._v("×")])],1)},M=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"graphics-container"},[a("div",{staticClass:"graphics-tags"},t._l(t.tagList,(function(e,i){return a("div",{staticClass:"graphics-tags-item",on:{click:function(e){return t.enableTag(i)}}},[t._v(t._s(e))])})),0),a("transition-group",{staticClass:"graphics-item-container",attrs:{name:"filter"}},t._l(t.filteredData,(function(t){return a("router-link",{key:t.id,staticClass:"item",attrs:{to:"/works/graphics/"+t.id}},[a("img",{staticClass:"item-img",style:{objectPosition:t.position},attrs:{src:"/twilight/img/thumbnail/"+t.filename+".jpg"}})])})),1),a("router-view")],1)},I=[],Z=(a("4de4"),a("45fc"),a("656b")),E={name:"Graphics",data:function(){return{graphicsData:Z,tagList:["ドット絵","イラスト","オリジナル","二次創作"],activeTagFlags:[!1,!1,!1,!1],activeTagIndex:-1}},computed:{filteredData:function(){var t=Z,e=this.tagList,a=this.activeTagIndex;return-1==this.activeTagIndex||(t=Z.filter((function(t,i){var n=t.tags.some((function(t){return t==e[a]}));return n}))),t},sortedData:function(){return null}},methods:{enableTag:function(t){this.activeTagIndex==t?this.activeTagIndex=-1:this.activeTagIndex=t}}},P=E,B=(a("e5c4"),Object(g["a"])(P,z,I,!1,null,"46f64923",null)),S=B.exports,G=a("83c4"),N=a.n(G),W={name:"Works",data:function(){return{bgImg:N.a,bg:"url("+this.bgImg+")"}},components:{Graphics:S}},A=W,H=(a("cc0c"),Object(g["a"])(A,$,M,!1,null,"b02f44f4",null)),J=H.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"modal-container",attrs:{to:"/works/graphics"}},[t._v(t._s(t.$route.params.id)),a("div",{staticClass:"modal-content"},[a("img",{staticClass:"modal-content-img",attrs:{src:"/twilight/img/raw/"+t.graphicsData[t.$route.params.id-1].filename+t.graphicsData[t.$route.params.id-1].raw_ext}})])])},Y=[],q={name:"GraphicsModal",data:function(){return{graphicsData:Z}},methods:{}},K=q,Q=(a("1eec"),Object(g["a"])(K,F,Y,!1,null,"4c688094",null)),R=Q.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},V=[],X={name:"Tools",data:function(){return{graphicsData:Z}},methods:{}},tt=X,et=(a("4403"),Object(g["a"])(tt,U,V,!1,null,"cd4ec6de",null)),at=et.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},nt=[],st={name:"Games",data:function(){return{graphicsData:Z}},methods:{}},rt=st,ot=(a("67f2"),Object(g["a"])(rt,it,nt,!1,null,"4c5a015e",null)),lt=ot.exports;i["a"].use(l["a"]);var ct=new l["a"]({mode:"history",base:"/twilight/",routes:[{path:"/",component:wt},{path:"/about",component:D},{path:"/works",component:J,children:[{path:"graphics",component:S,children:[{path:":id",component:R}]},{path:"tools",component:at},{path:"games",component:lt}]}]}),ut=ct,dt=a("f46b"),ft=a.n(dt),pt=a("2da1"),mt=a.n(pt),gt={name:"Top",data:function(){return{layers:[ft.a,mt.a,T.a],ww:window.innerWidth,wh:window.innerHeight,middleBlur:"blur(0px)",nearBlur:"blur(0px)",middleZoom:"translate3D(0,0,0)",nearZoom:"translate3D(0,0,0)",isClicked:!1}},components:{},methods:{goToGalleryHover:function(){this.nearBlur="blur(3px)",this.nearZoom="translate3D(0px,0,8px)",this.middleZoom="translate3D(0,0,5px)"},goToGallery:function(){this.middleZoom="translate3D(100px,0,18px)",this.nearZoom="translate3D(0,0,25px)",this.isClicked=!0},showProfile:function(){this.middleBlur="blur(5px)",this.middleZoom="translate3D(0,0,2px)",this.nearZoom="translate3D(0,0,5px)"},neutral:function(){var t=this;this.isClicked?(this.isClicked=!1,setTimeout((function(){t.neutral()}),1e3)):(this.middleBlur="blur(0px)",this.nearBlur="blur(0px)",this.middleZoom="translate3D(0,0,0)",this.nearZoom="translate3D(0,0,0)")}},computed:{calcWorksLeft:function(){var t=.62*this.ww-.5*this.wh;return t+"px"}}},ht=gt,vt=(a("7b0c"),Object(g["a"])(ht,r,o,!1,null,"2449405f",null)),wt=vt.exports,_t={name:"app",components:{Top:wt}},bt=_t,xt=(a("034f"),Object(g["a"])(bt,n,s,!1,null,null,null)),kt=xt.exports;a("caf9");i["a"].config.productionTip=!1,new i["a"]({router:ut,render:function(t){return t(kt)}}).$mount("#app")},"656b":function(t){t.exports=JSON.parse('[{"id":1,"filename":"hina","raw_ext":".png","title":"グランドエスケープ","desc":"映画「天気の子」の天野陽菜さんの誕生日を記念して描いたイラスト","date":20190822,"position":"75% 50%","conf":"7","tags":["イラスト","二次創作"]},{"id":2,"filename":"lize_luigi","raw_ext":".png","title":"lize","desc":"","date":"","position":"50% 45%","conf":"","tags":["イラスト","二次創作"]},{"id":3,"filename":"mikage_mw","raw_ext":".png","title":"少し特別な帰り道","desc":"","date":20191225,"position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":4,"filename":"mikage_twl","raw_ext":".png","title":"いつまで経っても諦めきれない","desc":"","date":20191127,"position":"50% 55%","conf":"","tags":["イラスト","オリジナル"]},{"id":5,"filename":"shimarin","raw_ext":".png","title":"志摩リン生誕祭2019","desc":"","date":20191003,"position":"50% 50%","conf":"","tags":["イラスト","二次創作"]},{"id":6,"filename":"alley_e","raw_ext":".png","title":"路地(夕方)","desc":"","date":20190621,"position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":7,"filename":"kokoro","raw_ext":".png","title":"天宮こころ","desc":"","date":"2020/06/17","position":"50% 50%","conf":"","tags":["イラスト","二次創作"]},{"id":8,"filename":"lize_classroom","raw_ext":".png","title":"新衣装リゼ皇女","desc":"","date":"2020/04/22","position":"50% 50%","conf":"","tags":["イラスト","二次創作"]},{"id":9,"filename":"main_woofar","raw_ext":".png","title":"ウーファ","desc":"","date":"","position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":10,"filename":"meteor","raw_ext":".png","title":"星呼びリサイタル","desc":"","date":"2020/05/05","position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":11,"filename":"mikage_space","raw_ext":".png","title":"将来の夢は宇宙飛行士","desc":"","date":20191003,"position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":12,"filename":"msw_maid","raw_ext":".png","title":"うちのこメイド","desc":"","date":"","position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":13,"filename":"msw_ygg","raw_ext":".png","title":"旅路","desc":"","date":"","position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":14,"filename":"milkey","raw_ext":".png","title":"天の川","desc":"","date":20190320,"position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":15,"filename":"main_mikage","raw_ext":".png","title":"みかげ","desc":"","date":20190823,"position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":16,"filename":"toko_twl","raw_ext":".png","title":"戌亥とこ","desc":"","date":20190909,"position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":17,"filename":"twl","raw_ext":".png","title":"夕方の帰り道","desc":"","date":20200413,"position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":18,"filename":"msw_train","raw_ext":".png","title":"帰りの電車","desc":"","date":20191103,"position":"50% 50%","conf":"","tags":["イラスト","オリジナル"]},{"id":19,"filename":"woofar","raw_ext":".png","title":"ウーファ","desc":"","date":20190704,"position":"50% 50%","conf":"","tags":["ドット絵","オリジナル"]},{"id":20,"filename":"sanbaka","raw_ext":".gif","title":"さんばか","desc":"","date":20200914,"position":"50% 50%","conf":"","tags":["ドット絵","二次創作"]},{"id":21,"filename":"amamya","raw_ext":".gif","title":"あまみゃ","desc":"","date":20200625,"position":"50% 50%","conf":"","tags":["ドット絵","二次創作"]},{"id":22,"filename":"toko_fish","raw_ext":".gif","title":"釣りとこ","desc":"","date":20200526,"position":"50% 50%","conf":"","tags":["ドット絵","二次創作"]}]')},"67f2":function(t,e,a){"use strict";var i=a("a315"),n=a.n(i);n.a},"6e0d":function(t,e,a){},"7b0c":function(t,e,a){"use strict";var i=a("2dda"),n=a.n(i);n.a},"83c4":function(t,e,a){t.exports=a.p+"img/p_g.8c3830f8.png"},"85ec":function(t,e,a){},"9e66":function(t,e,a){"use strict";var i=a("09e2"),n=a.n(i);n.a},"9f21":function(t,e,a){},a315:function(t,e,a){},cc0c:function(t,e,a){"use strict";var i=a("1af6"),n=a.n(i);n.a},d5b3:function(t,e,a){},d971:function(t,e,a){},e5c4:function(t,e,a){"use strict";var i=a("d5b3"),n=a.n(i);n.a},e7f4:function(t,e,a){"use strict";var i=a("9f21"),n=a.n(i);n.a},f46b:function(t,e,a){t.exports=a.p+"img/p_f.b693ba59.png"},fd27:function(t,e,a){"use strict";var i=a("d971"),n=a.n(i);n.a}});
//# sourceMappingURL=app.c2b819b7.js.map