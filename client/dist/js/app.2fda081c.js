(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],i[r]&&m.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"045b":function(t,e,n){"use strict";var a=n("afc4"),i=n.n(a);i.a},"069a":function(t,e,n){},2672:function(t,e,n){},"2de4":function(t,e,n){"use strict";var a=n("2672"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},s=[],r=n("795b"),o=n.n(r),c={name:"App",components:{},created:function(){var t=this;this.getUser().then(function(e){t.$store.dispatch("getUser",e)}).catch(function(t){console.log(t)})},methods:{getUser:function(){return new o.a(function(t,e){var n={id:localStorage.getItem("userId")};n?t(n):e("User id does'n exist")})}}},l=c,u=n("2877"),d=n("6544"),m=n.n(d),f=n("7496"),v=Object(u["a"])(l,i,s,!1,null,null,null),g=v.exports;m()(v,{VApp:f["a"]});var h=n("3730"),p=n.n(h),b=n("bb71");n("da64");a["a"].use(b["a"],{iconfont:"md"});var w=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("NavBar"),n("Editor"),n("MainSection"),n("Pagination"),n("Footer")],1)},k=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-toolbar",{staticClass:"red darken-1",attrs:{app:"",flat:"","scroll-off-screen":""}},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[n("v-toolbar-title",{on:{click:t.startPage}},[n("span",{staticClass:"red--text text--lighten-5 headline font-weight-bold"},[t._v("fake")]),n("span",{staticClass:"headline"},[t._v("News")])])],1),n("v-spacer"),n("v-toolbar-items",[t.mainPage?n("v-btn",{attrs:{flat:""},on:{click:t.showEditorDialog}},[n("v-icon",[t._v("note_add")])],1):t._e()],1)],1)],1)},D=[],y={name:"NavBar",data:function(){return{isLogged:!1}},computed:{mainPage:function(){return"/"==location.pathname}},methods:{showEditorDialog:function(){this.$store.dispatch("showEditorDialog")},startPage:function(){var t=this;this.$store.dispatch("setCurrentPage",1).then(function(){t.$vuetify.goTo(0)}).catch(function(t){return console.log(t)})}}},C=y,P=(n("621e"),n("8336")),O=n("132d"),V=n("9910"),E=n("71d9"),I=n("2a7f"),N=Object(u["a"])(C,x,D,!1,null,"3af0d597",null),S=N.exports;m()(N,{VBtn:P["a"],VIcon:O["a"],VSpacer:V["a"],VToolbar:E["a"],VToolbarItems:I["a"],VToolbarTitle:I["b"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.newsOnPage.length?n("v-container",{attrs:{"mt-3":""}},[n("v-layout",[n("v-flex",{attrs:{md12:""}},[n("v-card",[n("router-link",{staticClass:"link",attrs:{to:"/page/"+t.newsOnPage[0]._id}},[n("v-layout",{class:{column:t.$vuetify.breakpoint.smAndDown}},[n("v-flex",{attrs:{md6:"",sm4:""}},[n("v-img",{attrs:{src:t.newsOnPage[0].imageURL,"aspect-ratio":"2"}})],1),n("v-flex",{attrs:{md6:""}},[n("v-layout",{staticClass:"column",attrs:{md6:""}},[n("v-flex",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline"},[t._v(t._s(t.newsOnPage[0].title))]),n("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.newsOnPage[0].body.slice(0,350)+"...")}})]),n("span",[t._v(t._s(t.newsOnPage[0].created))])])],1),n("v-card-actions",[n("v-btn",{attrs:{flat:""}},[n("v-icon",[t._v("mode_comment")]),n("span",[t._v(t._s(t.newsOnPage[0].comments.length))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t.newsOnPage.length>1?n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.newsOnPage.length-1,function(e){return n("v-layout",{key:e,attrs:{"mt-3":"","justify-center":""}},[n("v-flex",{staticStyle:{width:"300px"},attrs:{xs12:"",sm11:"",md11:""}},[n("v-card",[n("router-link",{staticClass:"link",attrs:{to:"/page/"+t.newsOnPage[e]._id}},[n("v-img",{attrs:{src:t.newsOnPage[e].imageURL,"aspect-ratio":"2.75","lazy-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5WrlkUQT9BMeXPL4NVAwuD1n9hqczs__ff8Uv8XJnPfau98e"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.newsOnPage[e].title))]),n("div",{staticStyle:{"word-break":"break-all"},domProps:{innerHTML:t._s(t.newsOnPage[e].body.slice(0,130)+"...")}})]),n("span",{staticClass:"date"},[t._v(t._s(t.newsOnPage[e].created))])]),n("v-card-actions",[n("v-btn",{attrs:{flat:""}},[n("v-icon",[t._v("mode_comment")]),n("span",[t._v(t._s(t.newsOnPage[e].comments.length))])],1)],1)],1)],1)],1)],1)}),1):t._e()],1):t._e()},L=[],U=n("cebc"),j=n("2f62"),A={name:"MainSection",data:function(){return{isDisabled:!1}},created:function(){this.getNewsData()},computed:Object(U["a"])({},Object(j["b"])(["newsData","currentPage","newsLength"]),{newsOnPage:function(){var t=7;if(1==this.currentPage)return this.newsData.slice(0,t);if(this.currentPage>1){var e=(this.currentPage-1)*t,n=this.currentPage*t;return this.newsData.slice(e,n+1)}}}),methods:{getNewsData:function(){this.$store.dispatch("getNewsData")}}},$=A,G=(n("2de4"),n("b0af")),R=n("99d9"),F=n("12b2"),M=n("a523"),B=n("0e8f"),q=n("adda"),W=n("a722"),z=Object(u["a"])($,T,L,!1,null,"2831508e",null),H=z.exports;m()(z,{VBtn:P["a"],VCard:G["a"],VCardActions:R["a"],VCardTitle:F["a"],VContainer:M["a"],VFlex:B["a"],VIcon:O["a"],VImg:q["a"],VLayout:W["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.isEditorDialog,callback:function(e){t.isEditorDialog=e},expression:"isEditorDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\r\n          Add news\r\n        ")]),n("v-container",[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"Article title",counter:"30",maxlength:"30",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("v-flex",[n("v-text-field",{attrs:{label:"image url",placeholder:"https://...",hint:"https required",required:""},model:{value:t.imageUrl,callback:function(e){t.imageUrl=e},expression:"imageUrl"}})],1),n("v-flex",[t._v("\r\n                    Main content\r\n                    "),n("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1),n("v-flex",[n("v-text-field",{attrs:{label:"Your name or nickname",counter:"15",maxlength:"15",required:""},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1)],1)],1),t.warning?n("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\r\n            Some fields are empty.\r\n        ")]):t._e(),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"warning",flat:""},on:{click:t.closeEditorDialog}},[t._v("\r\n            Cancel\r\n          ")]),n("v-btn",{attrs:{color:"primary",flat:"",loading:t.loading,disabled:t.warning},on:{click:t.publishNews}},[t._v("\r\n            Publish\r\n          ")])],1)],1)],1)],1)},X=[],Q=n("fb3d"),Y=n.n(Q),K={name:"app",data:function(){return{editor:Y.a,title:"Awesome title",imageUrl:"https://...",editorData:"Some text",nickname:"anonymous",warning:!1,editorConfig:{toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","blockQuote"]},loading:!1}},computed:Object(U["a"])({},Object(j["b"])(["isEditorDialog"])),methods:{publishNews:function(){var t=this;if(this.checkFields(),this.warning)setTimeout(function(){t.warning=!1},2e3);else{this.loading=!0;var e={title:this.title,body:this.editorData,imageURL:this.imageUrl,nickname:this.nickname};this.$store.dispatch("addNews",e).then(function(){return t.$store.dispatch("getNewsData")}).then(function(){t.loading=!1,t.closeEditorDialog()}).catch(function(t){return console.log(t)})}},checkFields:function(){return this.title.trim()&&this.imageUrl.trim()&&this.editorData.trim()&&this.nickname.trim()?this.warning=!1:this.warning=!0},closeEditorDialog:function(){this.$store.dispatch("closeEditorDialog")}}},Z=K,tt=n("0798"),et=n("169a"),nt=n("ce7e6"),at=n("2677"),it=Object(u["a"])(Z,J,X,!1,null,null,null),st=it.exports;m()(it,{VAlert:tt["a"],VBtn:P["a"],VCard:G["a"],VCardActions:R["a"],VCardTitle:F["a"],VContainer:M["a"],VDialog:et["a"],VDivider:nt["a"],VFlex:B["a"],VLayout:W["a"],VSpacer:V["a"],VTextField:at["a"]});var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{dark:"",height:"auto",fixed:"",app:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"red darken-1"},[n("v-spacer")],1),n("v-card-actions",{staticClass:"grey darken-4 justify-center"},[t._v("\n        ©2018 — "),n("strong",[t._v("2019")])])],1)],1)},ot=[],ct={name:"Footer"},lt=ct,ut=n("553a"),dt=Object(u["a"])(lt,rt,ot,!1,null,null,null),mt=dt.exports;m()(dt,{VCard:G["a"],VCardActions:R["a"],VCardTitle:F["a"],VFooter:ut["a"],VSpacer:V["a"]});var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center"},[n("v-container",[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs8:""}},[n("v-card",[n("v-card-text",[n("v-pagination",{attrs:{length:t.pagesCount},on:{input:t.setCurrentPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)],1)},vt=[],gt={name:"Pagination",data:function(){return{page:1}},computed:Object(U["a"])({},Object(j["b"])(["pagesCount","currentPage"])),methods:{setCurrentPage:function(){var t=this;this.$store.dispatch("setCurrentPage",this.page).then(function(){t.$vuetify.goTo(0)}).catch(function(t){return console.log(t)})}}},ht=gt,pt=n("891e"),bt=Object(u["a"])(ht,ft,vt,!1,null,null,null),wt=bt.exports;m()(bt,{VCard:G["a"],VCardText:R["b"],VContainer:M["a"],VFlex:B["a"],VLayout:W["a"],VPagination:pt["a"]});var _t={name:"StartPage",components:{NavBar:S,MainSection:H,Editor:st,Pagination:wt,Footer:mt}},kt=_t,xt=n("549c"),Dt=Object(u["a"])(kt,_,k,!1,null,null,null),yt=Dt.exports;m()(Dt,{VContent:xt["a"]});var Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("NavBar"),t.newsData.length?n("v-container",[n("v-img",{attrs:{src:t.novelty.imageURL,"aspect-ratio":"2","lazy-src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5WrlkUQT9BMeXPL4NVAwuD1n9hqczs__ff8Uv8XJnPfau98e"}}),n("div",[n("h2",{staticClass:"display-3"},[t._v(t._s(t.novelty.title))]),n("div",{staticStyle:{"word-break":"break-all"},domProps:{innerHTML:t._s(t.novelty.body)}}),n("span",{staticClass:"date mr-2 blue--text"},[t._v(t._s(t.novelty.nickname))]),n("span",{staticClass:"date"},[t._v(t._s(t.novelty.created))])]),n("div",{staticClass:"text-md-right text-sm-right text-xs-center"},[n("v-btn",{attrs:{flat:""},on:{click:t.showComments}},[n("v-icon",[t._v("mode_comment")]),n("span",[t._v(t._s(t.novelty.comments.length))])],1)],1),n("transition",{attrs:{name:"fade"}},[t.isVisible?n("div",[n("Comments")],1):t._e()])],1):t._e(),n("Footer")],1)},Pt=[],Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"mt-3":""}},[n("v-layout",[n("v-flex",{attrs:{md8:"",sm8:"",xs8:""}},[n("v-text-field",{attrs:{label:"Nickname"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}}),n("v-textarea",{attrs:{outline:""},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),n("v-flex",[n("v-btn",{staticStyle:{color:"blue"},attrs:{flat:"",disabled:""==t.comment.replace(/\s/g,"")},on:{click:t.addComment}},[n("v-icon",[t._v("send")])],1)],1)],1),t._l(t.comments.length,function(e){return n("v-layout",{key:e,attrs:{row:"","mt-3":""}},[n("v-flex",{attrs:{md1:"",sm1:"",xs1:"","mr-5":""}},[n("v-avatar",{attrs:{size:40,color:"grey lighten-4"}},[n("img",{attrs:{src:"https://vuetifyjs.com/apple-touch-icon-180x180.png",alt:"avatar"}})]),n("span",[t._v(t._s(t.comments[e-1].userName))])],1),n("v-flex",{attrs:{md11:"",sm10:"",xs10:""}},[n("div",{staticClass:"comments"},[t._v(t._s(t.comments[e-1].comment))])]),n("hr",{staticClass:"hr"})],1)})],2)},Vt=[],Et={name:"Comments",data:function(){return{comment:"",nickname:"",postId:location.pathname.slice(6)}},computed:Object(U["a"])({},Object(j["b"])(["userName","newsComments","newsData"]),{comments:function(){var t=this;return this.newsData.filter(function(e){return e._id==t.postId})[0].comments.reverse()}}),methods:{getNewsData:function(){this.$store.dispatch("getNewsData")},addComment:function(){var t=this,e=this.postId;if(this.nickname.trim().length>0){var n={postId:e,value:{userName:this.nickname,comment:this.comment}};this.$store.dispatch("addComments",n).then(function(){t.getNewsData()}),this.comment=""}else{var a={postId:e,value:{userName:"No name",comment:this.comment}};this.$store.dispatch("addComments",a).then(function(){t.getNewsData()}),this.comment=""}}}},It=Et,Nt=(n("045b"),n("8212")),St=n("a844"),Tt=Object(u["a"])(It,Ot,Vt,!1,null,"d66ccd68",null),Lt=Tt.exports;m()(Tt,{VAvatar:Nt["a"],VBtn:P["a"],VContainer:M["a"],VFlex:B["a"],VIcon:O["a"],VLayout:W["a"],VTextField:at["a"],VTextarea:St["a"]});var Ut={name:"NewsDetails",components:{NavBar:S,Comments:Lt,Footer:mt},data:function(){return{isVisible:!1,postId:location.pathname.slice(6),likes:0}},created:function(){this.getNewsData()},computed:Object(U["a"])({},Object(j["b"])(["newsData","likedPost","newsComments"]),{novelty:function(){var t=this;return this.newsData.filter(function(e){return e._id==t.postId})[0]},noveltyLikes:function(){return this.likes||this.novelty.likes}}),methods:{getNewsData:function(){this.$store.dispatch("getNewsData")},showComments:function(){this.isVisible=!this.isVisible},addLikes:function(){var t=this,e=this.postId,n=localStorage.getItem("userId"),a=this.likedPost.filter(function(t){return t["postId"]==e});n&&(a.length?(this.likes=this.novelty.likes-1,this.updateUserInfo("like","pull",e).then(function(){t.updateNewsInfo(e,"likes",-1)}).catch(function(t){console.log(t)})):(this.likes=this.novelty.likes+1,this.updateUserInfo("like","push",e).then(function(){t.updateNewsInfo(e,"likes",1)}).catch(function(t){console.log(t)})))},updateUserInfo:function(t,e,n){var a=this;return new o.a(function(i,s){var r=localStorage.getItem("userId");if(r){var o={id:r,action:t,method:e,value:{postId:n}};a.$store.dispatch("updateUserInfo",o).then(function(){a.$store.dispatch("getUser",{id:r})}),i()}else s("User doesn't exist")})},updateNewsInfo:function(t,e,n){var a=this,i={_id:t,key:e,step:n};this.$store.dispatch("addLikes",i).then(function(){a.getNewsData()})}}},jt=Ut,At=(n("9644"),Object(u["a"])(jt,Ct,Pt,!1,null,"860d19ea",null)),$t=At.exports;m()(At,{VBtn:P["a"],VContainer:M["a"],VContent:xt["a"],VIcon:O["a"],VImg:q["a"]}),a["a"].use(w["a"]);var Gt=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"start",component:yt},{path:"/page/:id",name:"details",props:!0,component:$t}]}),Rt=n("bc3a"),Ft=n.n(Rt),Mt="https://app-fake-news.herokuapp.com/news",Bt=Mt+"/update/likes",qt=Mt+"/update/comments",Wt=7,zt={newsData:[],isEditorDialog:!1,currentPage:1},Ht={UPDATE_NEWS_DATA:function(t,e){t.newsData=e},SHOW_EDITOR_DIALOG:function(t,e){t.isEditorDialog=!0},CLOSE_EDITOR_DIALOG:function(t,e){t.isEditorDialog=!1},SET_CURRENT_PAGE:function(t,e){t.currentPage=e}},Jt={getNewsData:function(t){var e=t.commit;return Ft.a.get(Mt).then(function(t){e("UPDATE_NEWS_DATA",t.data.reverse())})},addLikes:function(t,e){t.commit;return Ft.a.post(Bt,e)},addComments:function(t,e){t.commit;return Ft.a.post(qt,e)},addNews:function(t,e){t.commit;return Ft.a.post(Mt,e)},showEditorDialog:function(t){var e=t.commit;e("SHOW_EDITOR_DIALOG")},closeEditorDialog:function(t){var e=t.commit;e("CLOSE_EDITOR_DIALOG")},setCurrentPage:function(t,e){var n=t.commit;return new o.a(function(t,a){e?(n("SET_CURRENT_PAGE",e),t()):a("Page number error")})}},Xt={newsData:function(t){return t.newsData},pagesCount:function(t){var e=t.newsData.length;return e%Wt==0?e/Wt:Math.floor(e/Wt)+1},newsLength:function(t){return t.newsData.length},currentPage:function(t){return t.currentPage},newsComments:function(t){return t.newsData.map(function(t){return t.comments})},isEditorDialog:function(t){return t.isEditorDialog}},Qt={state:zt,mutations:Ht,actions:Jt,getters:Xt},Yt=Qt,Kt="https://app-fake-news.herokuapp.com/login",Zt={isLogged:!1},te={LOGGED_TRUE:function(t){t.isLogged=!0},LOGGED_FALSE:function(t){t.isLogged=!1}},ee={login:function(t,e){var n=t.commit;return n("LOGGED_TRUE"),localStorage.setItem("login",!0),localStorage.setItem("userId",e.id),Ft.a.post(Kt,e).then(function(t){})},logout:function(t){var e=t.commit;return new o.a(function(t){e("LOGGED_FALSE"),localStorage.removeItem("userId"),localStorage.setItem("login",!1),t()})}},ne={},ae={state:Zt,mutations:te,actions:ee,getters:ne},ie=ae,se=n("bc3a"),re="https://app-fake-news.herokuapp.com/user",oe=re+"/action",ce={user:[]},le={GET_USER:function(t,e){t.user=e}},ue={getUser:function(t,e){var n=t.commit;return se.post(re,e).then(function(t){n("GET_USER",t.data)})},updateUserInfo:function(t,e){t.commit;return se.post(oe,e).then(function(t){})}},de={userName:function(t){return t.user["first_name"]+" "+t.user["last_name"]},likedPost:function(t){return t.user.likedPost}},me={state:ce,mutations:le,actions:ue,getters:de},fe=me;a["a"].use(j["a"]);var ve=new j["a"].Store({modules:{news:Yt,login:ie,user:fe}});a["a"].use(p.a),a["a"].config.productionTip=!1,new a["a"]({router:Gt,store:ve,render:function(t){return t(g)}}).$mount("#app")},"621e":function(t,e,n){"use strict";var a=n("069a"),i=n.n(a);i.a},"709a":function(t,e,n){},9644:function(t,e,n){"use strict";var a=n("709a"),i=n.n(a);i.a},afc4:function(t,e,n){}});
//# sourceMappingURL=app.2fda081c.js.map