webpackJsonp([8],{BSU3:function(e,t){},WcsB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),o=a("exGp"),s=a.n(o),i=a("ion0"),l=a("Dd8w"),c=a.n(l),u=[{value:"clientid",label:"ClientID"},{value:"topic",label:"Topic"},{value:"ip_address",label:"IP Address"}],d=function(){return{name:"",type:u[0].value,clientid:"",ip_address:"",topic:"",startTime:[]}},p={name:"create-log-trace-dialog",props:{value:{type:Boolean,default:!1}},data:function(){var e=this,t=this.$t("logTrace.needStartTime");return{typeOptions:u,record:d(),rules:{name:[{required:!0,messages:this.$t("oper.pleaseEnter")},{validator:function(t,a,n){/[\w-]+/.test(a)?n():n(new Error(e.$t("logTrace.validString")))},trigger:["blur","change"]}],topic:[{required:!0,messages:this.$t("oper.pleaseEnter")}],clientid:[{required:!0,messages:this.$t("oper.pleaseEnter")}],ip_address:[{required:!0,messages:this.$t("oper.pleaseEnter")}],startTime:[{validator:function(e,a,n){a&&a[0]&&a[1]?n():n(new Error(t))}}]}}},computed:{showDialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},watch:{showDialog:function(e){var t=this;if(e){this.record=d();var a=new Date;this.record.startTime=[a,new Date(a.getTime()+18e5)],this.$nextTick(function(){t.$refs.formCom.clearValidate()})}}},methods:{getDataToSubmit:function(){var e=this.record,t=e.clientid,a=e.ip_address,n=e.name,r=e.topic,o=e.type,s=e.startTime,i={};switch(o){case u[0].value:i={clientid:t,type:o};break;case u[1].value:i={topic:r,type:o};break;case u[2].value:i={ip_address:a,type:o}}return c()({name:n},i,{start_at:new Date(s[0]).toISOString(),end_at:new Date(s[1]).toISOString()})},submit:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.formCom.validate();case 2:return t.prev=2,t.next=5,e.$httpPost("/trace",e.getDataToSubmit());case 5:e.$message.success(e.$t("logTrace.createSuc")),e.$emit("submitted"),e.showDialog=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0);case 13:case"end":return t.stop()}},t,e,[[2,10]])}))()},cancel:function(){this.showDialog=!1}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"create-log-trace",attrs:{width:"800px",title:e.$t("logTrace.createLog"),visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}}},[a("el-form",{ref:"formCom",staticClass:"el-form--public",attrs:{size:"medium","label-position":"top",model:e.record,rules:e.rules}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("logTrace.name"),prop:"name"}},[a("el-input",{model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("logTrace.type"),prop:"type"}},[a("el-select",{staticClass:"el-select--public type-select",attrs:{"popper-class":"el-select--public"},model:{value:e.record.type,callback:function(t){e.$set(e.record,"type",t)},expression:"record.type"}},e._l(e.typeOptions,function(e){var t=e.value,n=e.label;return a("el-option",{key:t,attrs:{value:t,label:n}})}),1)],1)],1),e._v(" "),"topic"===e.record.type?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Topic",prop:"topic"}},[a("el-input",{model:{value:e.record.topic,callback:function(t){e.$set(e.record,"topic",t)},expression:"record.topic"}})],1)],1):e._e(),e._v(" "),"clientid"===e.record.type?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"ClientID",prop:"clientid"}},[a("el-input",{model:{value:e.record.clientid,callback:function(t){e.$set(e.record,"clientid",t)},expression:"record.clientid"}})],1)],1):e._e(),e._v(" "),"ip_address"===e.record.type?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"IP Address",prop:"ip_address"}},[a("el-input",{model:{value:e.record.ip_address,callback:function(t){e.$set(e.record,"ip_address",t)},expression:"record.ip_address"}})],1)],1):e._e(),e._v(" "),a("el-col",{staticStyle:{clear:"both"},attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("logTrace.startEndTime"),prop:"startTime"}},[a("el-date-picker",{staticClass:"range-datepicker",attrs:{type:"datetimerange","start-placeholde":e.$t("logTrace.startTime"),"end-placeholde":e.$t("logTrace.endTime")},model:{value:e.record.startTime,callback:function(t){e.$set(e.record,"startTime",t)},expression:"record.startTime"}})],1)],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:e.cancel}},[e._v("\n      "+e._s(e.$t("oper.cancel"))+"\n    ")]),e._v(" "),a("el-button",{staticClass:"confirm-btn",attrs:{type:"success",loading:e.$store.state.loading},on:{click:e.submit}},[e._v("\n      "+e._s(e.$t("oper.add"))+"\n    ")])],1)],1)},staticRenderFns:[]};var m=a("VU/8")(p,g,!1,function(e){a("rZGr")},null,null).exports,f=a("//Fk"),v=a.n(f),h=a("w7XY"),b=a("JaHG"),_=function(){var e=s()(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/trace/"+encodeURIComponent(t)+"/download",{responseType:"blob"});case 3:return a=e.sent,n=a.data,Object(b.b)(n),e.abrupt("return",v.a.resolve());case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",v.a.reject(e.t0));case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),w=a("9H3m"),T=0,$=0,x={name:"log-trace-detail-dialog",props:{value:{type:Boolean,default:!1},traceName:{type:String}},components:{Monaco:w.a},data:function(){return{node:"",nodes:[],initialHeight:500,logContent:"",nextPageLoading:"",showEditor:!1,isLoadedDataWithin300MS:!1}},computed:{showDialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},watch:{showDialog:function(e){var t=this;return s()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e?t.$nextTick(function(){t.countInitialHeight(),t.initLog(),t.$nextTick(function(){t.showEditor=!0})}):t.showEditor=!1;case 1:case"end":return a.stop()}},a,t)}))()}},methods:{loadNodes:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$httpGet("/nodes").then(function(t){e.nodes=t.data,e.node=e.nodes[0].node}).catch(function(t){e.$message.error(t||e.$t("error.networkError"))});case 1:case"end":return t.stop()}},t,e)}))()},scrollLoadFunc:function(e){var t=this;return s()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e.scrollTop+t.initialHeight>=e.scrollHeight&&e.scrollTopChanged&&e.scrollTop>=$)){a.next=9;break}if(!(T<=5242880)){a.next=8;break}return $=e.scrollTop,t.nextPageLoading=t.$t("logTrace.loadNextPage"),a.next=6,t.loadLog();case 6:a.next=9;break;case 8:t.$messages.warning(t.$t("logTrace.tooLargeLog"));case 9:case"end":return a.stop()}},a,t)}))()},initLog:function(){T=0,$=0,this.logContent="",this.nextPageLoading="",window.clearTimeout(this.loadLogTimer),this.loadLogTimer=void 0,this.loadLog()},loadLog:function(){var e=this;return s()(r.a.mark(function t(){var a,n,o,s,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.isLoadedDataWithin300MS){t.next=3;break}return t.abrupt("return");case 3:return e.isLoadedDataWithin300MS=!0,window.setTimeout(function(){e.isLoadedDataWithin300MS=!1},300),a={position:T,bytes:51200,node:e.node},t.next=8,e.$httpGet("/trace/"+e.traceName+"/log",a);case 8:n=t.sent,(o=n.data).items&&(s=o.meta,i=void 0===s?{}:s,e.logContent+=o.items,i.position?T=i.position:T+=51200),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}},t,e,[[0,13]])}))()},countInitialHeight:function(){var e=window.innerHeight,t=this.$refs.monacoContainer.getBoundingClientRect().top;this.initialHeight=Math.floor(e-t-100)},download:function(){_(this.traceName)}},mounted:function(){this.loadNodes()}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.$t("logTrace.viewLog"),visible:e.showDialog,"custom-class":"log-dialog",fullscreen:""},on:{"update:visible":function(t){e.showDialog=t}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.$store.state.loading,expression:"$store.state.loading"}],attrs:{"element-loading-text":e.nextPageLoading}},[a("el-row",{staticClass:"handler-bar"},[a("el-col",{attrs:{span:6}},[a("el-select",{staticClass:"type-select select-radius",attrs:{size:"medium"},on:{change:e.initLog},model:{value:e.node,callback:function(t){e.node=t},expression:"node"}},e._l(e.nodes,function(e){return a("el-option",{key:e.node,attrs:{value:e.node}})}),1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.$store.state.loading,expression:"$store.state.loading"}],attrs:{plain:"",type:"primary",size:"medium"},on:{click:e.download}},[e._v("\n          "+e._s(e.$t("logTrace.download"))+"\n        ")])],1)],1),e._v(" "),a("el-row",[a("div",{ref:"monacoContainer",staticClass:"m-container",style:{height:e.initialHeight+"px"}},[e.showEditor?a("monaco",{ref:"monaco",attrs:{id:"log-trace","scroll-loading":!0,"scroll-func":e.scrollLoadFunc,lang:"powershell",disabled:!0,"line-numbers-min-chars":6},model:{value:e.logContent,callback:function(t){e.logContent=t},expression:"logContent"}}):e._e()],1)])],1)])},staticRenderFns:[]};var D=a("VU/8")(x,k,!1,function(e){a("BSU3")},null,null).exports,y={name:"log-trace",filters:i.a,components:{CreateLogTraceDialog:m,LogTraceDetailDialog:D},data:function(){return{isLogTraceEnable:!0,tableSorter:void 0,tableData:[],showCreateDialog:!1,showDetailDialog:!1,currentViewTraceName:""}},methods:{loadTableData:function(){var e=this;this.$httpGet("/trace").then(function(t){var a=t.data;e.tableData=a,e.isLogTraceEnable=!0}).catch(function(t){e.$message.warning(e.$t("error."+t.message)),e.isLogTraceEnable=!1})},enableLogTrace:function(){var e=this;this.$httpPut("/modules/emqx_mod_trace/load").then(function(){e.$message.success(e.$t("oper.enableSuccess")),e.loadTableData()}).catch(function(t){e.$message.warning(e.$t("error."+t.message))})},addLogTrace:function(){this.showCreateDialog=!0},stopTrace:function(e){var t=this,a=e.name;return s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$httpPut("/trace/"+encodeURIComponent(a)+"/stop");case 3:t.$message.success(t.$t("logTrace.stopSuc")),t.loadTableData(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},deleteTrace:function(e){var t=this;return s()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$confirm(t.$t("logTrace.confirmDeleteTrace"),{confirmButtonText:t.$t("oper.confirm"),cancelButtonText:t.$t("oper.cancel"),type:"warning"});case 2:return a.prev=2,a.next=5,t.$httpDelete("/trace/"+encodeURIComponent(e.name));case 5:t.$message.success(t.$t("logTrace.deleteSuc")),t.loadTableData(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),console.error(a.t0);case 12:case"end":return a.stop()}},a,t,[[2,9]])}))()},downloadLog:function(e){_(e.name)},viewLogTrace:function(e){var t=e.name;this.currentViewTraceName=t,this.showDetailDialog=!0}},created:function(){this.loadTableData()}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"log-trace"},[a("div",{staticClass:"page-title"},[a("div",[e._v("\n      "+e._s(e.$t("logTrace.logTrace"))+"\n      "),a("span",{staticClass:"sub-tip"},[e._v(e._s(e.$t("logTrace.logTraceDesc")))])]),e._v(" "),e.isLogTraceEnable?a("el-button",{staticClass:"confirm-btn",attrs:{round:"",plain:"",type:"success",icon:"el-icon-plus",size:"medium",disable:e.$store.state.loading},on:{click:e.addLogTrace}},[e._v("\n      "+e._s(e.$t("rule.create"))+"\n    ")]):a("el-button",{staticClass:"confirm-btn",attrs:{round:"",plain:"",type:"success",size:"medium",disable:e.$store.state.loading},on:{click:function(t){return e.enableLogTrace(e.selfArgument,t)}}},[e._v("\n      "+e._s(e.$t("modules.enable"))+"\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$store.state.loading,expression:"$store.state.loading"}],attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:e.$t("logTrace.name"),prop:"name",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logTrace.type"),prop:"type",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logTrace.condition")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v("\n        "+e._s(a[a.type])+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logTrace.startEndTime"),"min-width":"90",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(e._f("dateFormat")(n.start_at))),a("br"),e._v(e._s(e._f("dateFormat")(n.end_at))+" ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logTrace.status"),sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("div",{staticClass:"trace-status"},[a("el-badge",{attrs:{"is-dot":"",type:"running"===n.status?"primary":"stopped"===n.status?"danger":"info"}}),e._v(" "),a("span",[e._v(e._s(n.status&&e.$t("logTrace.s"+n.status)))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("logTrace.logSize"),sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v("\n        "+e._s((Object.keys(a.log_size).reduce(function(e,t){return e+a.log_size[t]},0)/1024).toFixed(2))+"KB\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"140",label:e.$t("oper.oper")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(t){return e.viewLogTrace(n)}}},[e._v("\n          "+e._s(e.$t("logTrace.view"))+"\n        ")]),e._v(" "),a("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(t){return e.downloadLog(n)}}},[e._v("\n          "+e._s(e.$t("logTrace.download"))+"\n        ")]),e._v(" "),"stopped"!==n.status?[a("el-button",{attrs:{plain:"",size:"mini",type:"danger"},on:{click:function(t){return e.stopTrace(n)}}},[e._v("\n            "+e._s(e.$t("logTrace.stop"))+"\n          ")])]:[a("el-button",{attrs:{plain:"",size:"mini",type:"danger"},on:{click:function(t){return e.deleteTrace(n)}}},[e._v("\n            "+e._s(e.$t("oper.delete"))+"\n          ")])]]}}])})],1),e._v(" "),a("CreateLogTraceDialog",{on:{submitted:e.loadTableData},model:{value:e.showCreateDialog,callback:function(t){e.showCreateDialog=t},expression:"showCreateDialog"}}),e._v(" "),a("LogTraceDetailDialog",{attrs:{"trace-name":e.currentViewTraceName},model:{value:e.showDetailDialog,callback:function(t){e.showDetailDialog=t},expression:"showDetailDialog"}})],1)},staticRenderFns:[]};var L=a("VU/8")(y,C,!1,function(e){a("gcKK")},null,null);t.default=L.exports},gcKK:function(e,t){},rZGr:function(e,t){}});