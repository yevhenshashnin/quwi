(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{259:function(e,t,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(105).default)("6d3ebee4",content,!0,{sourceMap:!1})},260:function(e,t,o){"use strict";o(259)},261:function(e,t,o){var r=o(104)(!1);r.push([e.i,":focus{outline:none}.c-active-input{margin-bottom:12px}.b-input{position:relative;width:100%}.e-placeholder{color:#999}.e-placeholder,.e-placeholder-error{font-size:14px;word-spacing:1px;margin:0 10px;max-width:calc(100% - 20px);position:absolute;top:-.55em;background:#fff;display:block;float:left;padding:0 3px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.e-placeholder-error{color:#d40000}.b-input input{border:1px solid #dadada;border-radius:5px;width:100%;padding:15px;box-sizing:border-box}.has-error{border-color:#d40000!important}",""]),e.exports=r},265:function(e,t,o){var content=o(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(105).default)("5387662c",content,!0,{sourceMap:!1})},266:function(e,t,o){"use strict";o.r(t);var r={name:"CustomInput",props:{value:{type:String,default:""},type:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Boolean,default:""},errorText:{type:String,default:""},handler:{type:Function,default:function(){}}}},l=(o(260),o(43)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"c-active-input"},[o("div",{staticClass:"b-input"},[e.value.length&&!e.error?o("div",{staticClass:"e-placeholder"},[e._v("\n      "+e._s(e.placeholder)+"\n    ")]):e._e(),e._v(" "),e.error?o("div",{staticClass:"e-placeholder-error"},[e._v("\n      "+e._s(e.errorText)+"\n    ")]):e._e(),e._v(" "),o("input",{class:{"has-error":e.error},attrs:{placeholder:e.placeholder,type:e.type,autocomplete:""},domProps:{value:e.value},on:{input:function(t){return e.$emit("change",t.target.value)}}})])])}),[],!1,null,null,null);t.default=component.exports},270:function(e,t,o){var content=o(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(105).default)("3ccda8c4",content,!0,{sourceMap:!1})},271:function(e,t,o){"use strict";o(265)},272:function(e,t,o){var r=o(104)(!1);r.push([e.i,".modal-backdrop{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);display:flex;justify-content:center;align-items:center}.modal{background:#fff;box-shadow:2px 2px 20px 1px;overflow-x:auto;display:flex;flex-direction:column}.modal-footer,.modal-header{padding:15px;display:flex}.modal-header{position:relative;border-bottom:1px solid #eee;color:#4aae9b;justify-content:space-between}.modal-footer{border-top:1px solid #eee;flex-direction:column;justify-content:flex-end}.modal-body{position:relative;padding:20px 10px}.btn-close{position:absolute;top:0;right:0;border:none;font-size:20px;padding:10px;cursor:pointer;font-weight:700;color:#4aae9b;background:transparent}.btn-green{color:#fff;background:#4aae9b;border:1px solid #4aae9b;border-radius:2px}",""]),e.exports=r},276:function(e,t,o){"use strict";o.r(t);var r={name:"CustomModal",methods:{close:function(){this.$emit("close")}}},l=(o(271),o(43)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"modal-backdrop"},[o("div",{staticClass:"modal"},[o("header",{staticClass:"modal-header"},[e._t("header",(function(){return[e._v(" This is the default title! ")]})),e._v(" "),o("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:e.close}},[e._v("x")])],2),e._v(" "),o("section",{staticClass:"modal-body"},[e._t("body",(function(){return[e._v(" This is the default body! ")]}))],2),e._v(" "),o("footer",{staticClass:"modal-footer"},[e._t("footer")],2)])])}),[],!1,null,null,null);t.default=component.exports},278:function(e,t,o){"use strict";o(270)},279:function(e,t,o){var r=o(104)(!1);r.push([e.i,".b-project-content{display:flex;align-items:center;background-color:#fff;border-radius:8px;border:1px solid #dedede;padding:25px;cursor:pointer;font-size:.9em;margin-top:10px}.b-name{flex:2;overflow:hidden}.b-name .e-name{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:100%;font-weight:500;font-size:14px;font-family:GoogleSans}.b-logo{border:none;padding:0;flex:1;margin-right:25px;max-width:65px;cursor:pointer}.e-active{color:green;font-size:1.5rem}.b-time{margin-left:20px}",""]),e.exports=r},293:function(e,t,o){"use strict";o.r(t);o(26);var r=o(262),l=o.n(r),n={name:"ProjectCard",props:{project:{type:Object},getProjects:{type:Function}},data:function(){return{isModalVisible:!1,isSent:!1,projectName:{value:this.project.name,type:"text",error:!1,placeholder:"name"}}},methods:{showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},projectNameHandler:function(e){this.projectName.value=e},saveProjectName:function(){var e=this;this.isSent=!0,l.a.post("https://api.quwi.com/v2/projects-manage/update",{name:this.projectName.value},{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")},params:{id:this.project.id}}).then((function(t){e.closeModal(),e.$emit("getProjects")})).catch((function(t){console.log(t),e.isSent=!1}))}}},c=(o(278),o(43)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("div",{staticClass:"b-project-content",on:{click:e.showModal}},[o("div",{staticClass:"b-logo"},[o("div",{staticClass:"b-avatar"},[o("img",{attrs:{width:"51",height:"51",src:e.project.logo_url}})])]),e._v(" "),o("div",{staticClass:"b-name"},[o("div",{staticClass:"e-name"},[e._v(e._s(e.project.name))])]),e._v(" "),o("div",{staticClass:"b-active"},[1==e.project.is_active?o("div",{staticClass:"e-active"},[e._v("Active")]):e._e()]),e._v(" "),o("div",{staticClass:"b-time"},[e._v("time this week "+e._s(e.project.spent_sec_all_time))])]),e._v(" "),o("CustomModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" Project ")]},proxy:!0},{key:"body",fn:function(){return[o("CustomInput",{attrs:{value:e.projectName.value,type:e.projectName.type,error:e.projectName.error,placeholder:e.projectName.placeholder},on:{change:e.projectNameHandler}}),e._v(" "),o("button",{attrs:{disabled:e.isSent},on:{click:e.saveProjectName}},[e._v("save")])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomInput:o(266).default,CustomModal:o(276).default})}}]);