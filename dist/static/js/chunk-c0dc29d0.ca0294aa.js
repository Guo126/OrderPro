(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0dc29d0"],{"0126":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"30vw"},attrs:{placeholder:"用户名",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"10vw"},attrs:{placeholder:"角色",clearable:""},model:{value:e.listQuery.role,callback:function(t){e.$set(e.listQuery,"role",t)},expression:"listQuery.role"}},e._l(e.roleList,(function(e){return i("el-option",{key:e.code,attrs:{label:e.role,value:e.code}})})),1),e._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")]),e._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("新增")])],1),e._v(" "),i("diy-table",{attrs:{headList:e.headList,dataList:e.dataList,type:"user"},on:{remove:e.removeUser}}),e._v(" "),i("el-dialog",{attrs:{title:"新增用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{staticStyle:{width:"400px","margin-left":"100px"},attrs:{model:e.temp,"label-position":"middle","label-width":"70px"}},[i("el-form-item",{attrs:{label:"姓名",prop:"name"}},[i("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"用户名",prop:"username"}},[i("el-input",{model:{value:e.temp.username,callback:function(t){e.$set(e.temp,"username",t)},expression:"temp.username"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[i("el-input",{model:{value:e.temp.pwd,callback:function(t){e.$set(e.temp,"pwd",t)},expression:"temp.pwd"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"性别",prop:"sex"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"点击选择"},model:{value:e.temp.sex,callback:function(t){e.$set(e.temp,"sex",t)},expression:"temp.sex"}},e._l(e.sexList,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"角色等级",prop:"level"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"点击选择"},model:{value:e.temp.level,callback:function(t){e.$set(e.temp,"level",t)},expression:"temp.level"}},e._l(e.roleList,(function(e){return i("el-option",{key:e.code,attrs:{label:e.role,value:e.code}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"城市",prop:"city"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"点击选择或搜索",filterable:""},on:{change:e.getArea},model:{value:e.temp.city,callback:function(t){e.$set(e.temp,"city",t)},expression:"temp.city"}},e._l(e.cityList,(function(e){return i("el-option",{key:e.city_id,attrs:{label:e.city_desc,value:e.city_id}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"区域",prop:"area"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"点击选择或搜索",filterable:""},on:{change:e.getOffice},model:{value:e.temp.area,callback:function(t){e.$set(e.temp,"area",t)},expression:"temp.area"}},e._l(e.areaList,(function(e){return i("el-option",{key:e.area_id,attrs:{label:e.area_desc,value:e.area_id}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"营业厅",prop:"office"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"点击选择或搜索",filterable:""},model:{value:e.temp.office,callback:function(t){e.$set(e.temp,"office",t)},expression:"temp.office"}},e._l(e.officeList,(function(e){return i("el-option",{key:e.office_id,attrs:{label:e.office_desc,value:e.office_id}})})),1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createUser()}}},[e._v("确认")])],1)],1)],1)},l=[],r=(i("8615"),i("ac6a"),i("db72")),n=i("f4f7"),s=i("2f62"),o={created:function(){this.listQuery={name:void 0,role:void 0,level:this.userInfo.levelId,areaId:this.userInfo.areaId},this.handleSearch(),this.getCity()},data:function(){return{calendarTypeOptions:[{key:1,display_name:"China"},{key:2,display_name:"USA"},{key:3,display_name:"Japan"},{key:4,display_name:"Eurozone"}],sexList:[{key:"y",display_name:"男"},{key:"m",display_name:"女"}],dialogFormVisible:!1,headList:[{prop:"name",label:"用户名"},{prop:"sex",label:"性别"},{prop:"levelDesc",label:"角色"},{prop:"workAge",label:"平均时长"},{prop:"cityDesc",label:"所属城市"},{prop:"areaDesc",label:"所属区域"},{prop:"officeDesc",label:"所属营业厅"}],roleList:[{code:1,role:"市级管理员"},{code:2,role:"区级管理员"},{code:3,role:"营业厅级管理员"},{code:4,role:"业务员"}],listQuery:{name:"",role:""},dataList:[],cityList:[],areaList:[],officeList:[],temp:{name:"",username:"",pwd:"",sex:"",level:void 0,city:void 0,area:void 0,office:void 0}}},components:{diyTable:n["a"]},computed:Object(r["a"])({},Object(s["b"])(["userInfo","roles"])),methods:{getCity:function(){var e=this;this.$store.dispatch("office/getCity").then((function(t){e.cityList=t}))},getArea:function(){var e=this;this.$store.dispatch("office/getArea",{cityId:this.temp.city}).then((function(t){e.areaList=t}))},getOffice:function(){var e=this;this.$store.dispatch("office/getOffice",{areaId:this.temp.area}).then((function(t){e.officeList=t}))},handleSearch:function(){var e=this;this.loading=!0,this.$store.dispatch("user/search",this.listQuery).then((function(t){var i=t.data;i.forEach((function(e){e.sex="m"==e.sex?"女":"男"})),e.dataList=i,e.loading=!1})).catch((function(){e.loading=!1}))},handleCreate:function(){this.dialogFormVisible=!0},createUser:function(){var e=this,t="",i=!1;Object.values(this.temp).some((function(e){return!e||""==e}))?(i=!0,t="请填写完整信息"):this.temp.pwd.length<5&&(i=!0,t="密码不得小于5位"),i?this.$notify({title:"提示",message:t,type:"warning"}):(this.loading=!0,this.$store.dispatch("user/create",this.temp).then((function(t){e.$notify({title:"提示",message:"新增成功！",type:"success"}),e.handleSearch(),e.loading=!1,e.dialogFormVisible=!1})).catch((function(){e.loading=!1})))},removeUser:function(e){var t=this;this.$store.dispatch("user/remove",{targetToken:e}).then((function(e){t.$notify({title:"提示",message:"删除成功！",type:"success"}),t.handleSearch()}))}}},c=o,p=(i("66fa"),i("2877")),u=Object(p["a"])(c,a,l,!1,null,"df68018c",null);t["default"]=u.exports},"504c":function(e,t,i){var a=i("9e1e"),l=i("0d58"),r=i("6821"),n=i("52a7").f;e.exports=function(e){return function(t){var i,s=r(t),o=l(s),c=o.length,p=0,u=[];while(c>p)i=o[p++],a&&!n.call(s,i)||u.push(e?[i,s[i]]:s[i]);return u}}},"66fa":function(e,t,i){"use strict";var a=i("7695"),l=i.n(a);l.a},7695:function(e,t,i){},8615:function(e,t,i){var a=i("5ca1"),l=i("504c")(!1);a(a.S,"Object",{values:function(e){return l(e)}})},f4f7:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataList,stripe:"",border:""}},[e._l(e.headList,(function(e){return i("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,width:"{ item.prop == 'rule' ? 300 :180 }"}})})),e._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return["office"==e.type?i("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:"",size:"mini"},on:{click:function(i){return e.edit(t.row)}}}):e._e(),e._v(" "),"window"==e.type?i("el-button",{attrs:{type:"primary",icon:"el-icon-view",circle:"",size:"mini"},on:{click:function(i){return e.check(t.row)}}}):e._e(),e._v(" "),"user"==e.type||"office"==e.type?i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(i){return e.handleClick(t.row)}}}):e._e()]}}])})],2)],1)},l=[],r={methods:{handleClick:function(e){switch(this.type){case"user":this.$emit("remove",e.token);break;case"office":this.$emit("remove",e.id)}},check:function(e){this.$emit("check",e)},edit:function(e){this.$emit("edit",e)}},props:{headList:{type:Array,default:[]},dataList:{type:Array,default:[]},type:{type:String,default:""}},data:function(){return{dialogFormVisible:!1,temp:{name:"",rule:"",content:"",type:""}}}},n=r,s=i("2877"),o=Object(s["a"])(n,a,l,!1,null,null,null);t["a"]=o.exports}}]);