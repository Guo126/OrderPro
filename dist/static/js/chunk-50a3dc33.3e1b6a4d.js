(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50a3dc33"],{"133c":function(e,t,s){"use strict";var a=s("d785"),i=s.n(a);i.a},"3cbc":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pan-item",style:{zIndex:e.zIndex,height:e.height,width:e.width}},[s("div",{staticClass:"pan-info"},[s("div",{staticClass:"pan-info-roles-container"},[e._t("default")],2)]),e._v(" "),s("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+e.image+")"}})])},i=[],n=(s("c5f6"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),r=n,l=(s("133c"),s("2877")),c=Object(l["a"])(r,a,i,!1,null,"799537af",null);t["a"]=c.exports},"6e50":function(e,t,s){"use strict";var a=s("df1c"),i=s.n(a);i.a},"852c":function(e,t,s){},d785:function(e,t,s){},df1c:function(e,t,s){},e8be:function(e,t,s){"use strict";var a=s("852c"),i=s.n(a);i.a},ecac:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("user-card",{attrs:{user:e.user}})],1)},i=[],n=(s("7f7f"),s("db72")),r=s("2f62"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-card",{staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("关于我")])]),e._v(" "),s("div",{staticClass:"user-profile"},[s("div",{staticClass:"box-center"},[s("pan-thumb",{attrs:{image:e.user.avatar,height:"100px",width:"100px",hoverable:!1}},[s("div",[e._v("Hello")]),e._v("\n        "+e._s(e.user.role)+"\n      ")])],1),e._v(" "),s("div",{staticClass:"box-center"},[s("div",{staticClass:"user-name text-center"},[e._v(e._s(e.user.userInfo.name))]),e._v(" "),s("div",{staticClass:"user-role text-center text-muted"},[e._v(e._s("m"==e.user.userInfo.sex?"女":"男"))])])]),e._v(" "),s("div",{staticClass:"user-bio"},[s("div",{staticClass:"user-skills user-bio-section"},[s("div",{staticClass:"user-bio-section-header"},[s("svg-icon",{attrs:{"icon-class":"skill"}}),s("span",[e._v("个人信息")])],1),e._v(" "),s("div",{staticClass:"user-bio-section-body"},[s("div",[e._v(e._s(e.user.userInfo.cityDesc)+"|"+e._s(e.user.userInfo.areaDesc)+"|"+e._s(e.user.userInfo.officeDesc))])])])])])},c=[],o=s("3cbc"),u={components:{PanThumb:o["a"]},props:{user:{type:Object,default:function(){return{name:"",email:"",avatar:"",role:"",userInfo:{name:"",sex:""}}}}}},m=u,p=(s("e8be"),s("2877")),d=Object(p["a"])(m,l,c,!1,null,"bbbf4368",null),v=d.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-activity"},[s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg"+e.avatarPrefix}}),e._v(" "),s("span",{staticClass:"username text-muted"},[e._v("Iron Man")]),e._v(" "),s("span",{staticClass:"description"},[e._v("Shared publicly - 7:30 PM today")])]),e._v(" "),s("p",[e._v("\n      Lorem ipsum represents a long-held tradition for designers,\n      typographers and the like. Some people hate it and argue for\n      its demise, but others ignore the hate as they create awesome\n      tools to help create filler text for everyone from bacon lovers\n      to Charlie Sheen fans.\n    ")]),e._v(" "),s("ul",{staticClass:"list-inline"},[e._m(0),e._v(" "),s("li",[s("span",{staticClass:"link-black text-sm"},[s("svg-icon",{attrs:{"icon-class":"like"}}),e._v("\n          Like\n        ")],1)])])]),e._v(" "),s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg"+e.avatarPrefix}}),e._v(" "),s("span",{staticClass:"username text-muted"},[e._v("Captain American")]),e._v(" "),s("span",{staticClass:"description"},[e._v("Sent you a message - yesterday")])]),e._v(" "),s("p",[e._v("\n      Lorem ipsum represents a long-held tradition for designers,\n      typographers and the like. Some people hate it and argue for\n      its demise, but others ignore the hate as they create awesome\n      tools to help create filler text for everyone from bacon lovers\n      to Charlie Sheen fans.\n    ")]),e._v(" "),s("ul",{staticClass:"list-inline"},[e._m(1),e._v(" "),s("li",[s("span",{staticClass:"link-black text-sm"},[s("svg-icon",{attrs:{"icon-class":"like"}}),e._v("\n          Like\n        ")],1)])])]),e._v(" "),s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg"+e.avatarPrefix}}),e._v(" "),s("span",{staticClass:"username"},[e._v("Spider Man")]),e._v(" "),s("span",{staticClass:"description"},[e._v("Posted 4 photos - 2 days ago")])]),e._v(" "),s("div",{staticClass:"user-images"},[s("el-carousel",{attrs:{interval:6e3,type:"card",height:"220px"}},e._l(e.carouselImages,(function(t){return s("el-carousel-item",{key:t},[s("img",{staticClass:"image",attrs:{src:t+e.carouselPrefix}})])})),1)],1),e._v(" "),s("ul",{staticClass:"list-inline"},[e._m(2),e._v(" "),s("li",[s("span",{staticClass:"link-black text-sm"},[s("svg-icon",{attrs:{"icon-class":"like"}}),e._v(" Like")],1)])])])])},h=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),e._v("\n          Share\n        ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),e._v("\n          Share\n        ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),e._v(" Share")])])}],_="?imageView2/1/w/80/h/80",b="?imageView2/2/h/440",g={data:function(){return{carouselImages:["https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg","https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg","https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg","https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg"],avatarPrefix:_,carouselPrefix:b}}},C=g,x=(s("6e50"),Object(p["a"])(C,f,h,!1,null,"1066d76c",null)),k=x.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"block"},[s("el-timeline",e._l(e.timeline,(function(t,a){return s("el-timeline-item",{key:a,attrs:{timestamp:t.timestamp,placement:"top"}},[s("el-card",[s("h4",[e._v(e._s(t.title))]),e._v(" "),s("p",[e._v(e._s(t.content))])])],1)})),1)],1)},w=[],j={data:function(){return{timeline:[{timestamp:"2019/4/20",title:"Update Github template",content:"PanJiaChen committed 2019/4/20 20:46"},{timestamp:"2019/4/21",title:"Update Github template",content:"PanJiaChen committed 2019/4/21 20:46"},{timestamp:"2019/4/22",title:"Build Template",content:"PanJiaChen committed 2019/4/22 20:46"},{timestamp:"2019/4/23",title:"Release New Version",content:"PanJiaChen committed 2019/4/23 20:46"}]}}},I=j,P=Object(p["a"])(I,y,w,!1,null,null,null),S=P.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",[s("el-form-item",{attrs:{label:"Name"}},[s("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name","string"===typeof t?t.trim():t)},expression:"user.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Email"}},[s("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email","string"===typeof t?t.trim():t)},expression:"user.email"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("Update")])],1)],1)},E=[],O={props:{user:{type:Object,default:function(){return{name:"",email:""}}}},methods:{submit:function(){this.$message({message:"User information has been updated successfully",type:"success",duration:5e3})}}},U=O,J=Object(p["a"])(U,$,E,!1,null,null,null),L=J.exports,T={name:"Profile",components:{UserCard:v,Activity:k,Timeline:S,Account:L},data:function(){return{user:{},activeTab:"activity"}},computed:Object(n["a"])({},Object(r["b"])(["name","avatar","roles","userInfo"])),created:function(){this.getUser()},methods:{getUser:function(){this.user={name:this.name,role:this.roles.join(" | "),email:"admin@test.com",avatar:this.avatar,userInfo:this.userInfo}}}},z=T,A=Object(p["a"])(z,a,i,!1,null,null,null);t["default"]=A.exports}}]);