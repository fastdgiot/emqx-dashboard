webpackJsonp([15],{fTG8:function(e,r){},lmfZ:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=s("Dd8w"),t=s.n(o),n=s("zL8q"),l=s("NYxO"),i={name:"login-view",components:{"el-col":n.Col,"el-row":n.Row,"el-card":n.Card,"el-form":n.Form,"el-form-item":n.FormItem,"el-input":n.Input,"el-checkbox":n.Checkbox,"el-button":n.Button},data:function(){return{remember:!1,user:{username:"",password:""},loginError:{username:"",password:""}}},methods:t()({},Object(l.b)(["USER_LOGIN"]),{login:function(){var e=this;return this.user.username?this.user.password?void this.$axios.post("/auth",this.user).then(function(){var r="public"===e.user.password;e.USER_LOGIN({user:t()({},e.user,{isUsingDefaultPwd:r}),remember:e.remember}),e.$router.push(e.$route.query.redirect||"/")}).catch(function(){e.loginError.username=e.$t("login.error"),e.user={username:"",password:""}}):(this.loginError.password=this.$t("login.passwordRequired"),!1):(this.loginError.username=this.$t("login.usernameRequired"),!1)}})},a={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-view"},[s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n      "+e._s(e.$t("login.title"))+"\n    ")]),e._v(" "),s("el-form",{staticClass:"el-form--public",attrs:{size:"medium","label-position":"top",model:e.user},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.login.apply(null,arguments)}}},[s("el-form-item",{attrs:{label:e.$t("login.username")}},[s("el-input",{class:{error:e.loginError.username},attrs:{placeholder:e.loginError.username},on:{focus:function(r){e.loginError.username=""}},model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("login.password")}},[s("el-input",{class:{error:e.loginError.password},attrs:{type:"password",placeholder:e.loginError.password},on:{focus:function(r){e.loginError.password=""}},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1)],1),e._v(" "),s("div",{staticClass:"login-footer"},[s("el-checkbox",{model:{value:e.remember,callback:function(r){e.remember=r},expression:"remember"}},[e._v("\n        "+e._s(e.$t("login.remember"))+"\n      ")]),e._v(" "),s("el-button",{staticClass:"confirm-btn",attrs:{type:"success",loading:e.$store.state.loading,disabled:e.$store.state.loading},on:{click:e.login}},[e._v(e._s(e.$t("login.loginButton"))+"\n      ")])],1),e._v(" "),s("div",{staticClass:"clear-fix"})],1)],1)},staticRenderFns:[]};var u=s("VU/8")(i,a,!1,function(e){s("fTG8")},null,null);r.default=u.exports}});