(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64fe3036"],{"097d":function(t,i,a){"use strict";var s=a("5ca1"),e=a("8378"),n=a("7726"),o=a("ebd6"),l=a("bcaa");s(s.P+s.R,"Promise",{finally:function(t){var i=o(this,e.Promise||n.Promise),a="function"==typeof t;return this.then(a?function(a){return l(i,t()).then(function(){return a})}:t,a?function(a){return l(i,t()).then(function(){throw a})}:t)}})},1662:function(t,i,a){"use strict";var s=a("409f"),e=a.n(s);e.a},"409f":function(t,i,a){},ddb0:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"activity-box"},[a("div",{staticClass:"init-box"},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(i){t.isLoading=i},expression:"isLoading"}},[a("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},[a("div",{staticClass:"product-details-hot product-details-hot-false",style:{background:0==t.listData.length?"#fafafc":"#ffffff"}},t._l(t.listData,function(i,s){return a("div",{key:s,staticClass:"init-content"},[a("div",{staticClass:"activity-user-box"},[a("img",{staticClass:"activity-user-img",attrs:{src:i.headurl?i.headurl:"http://pic.zimeitang.cn/group1/M00/A4/F3/cjf1-FykJ62AY1ZVAAAJkHnlWag265.png"}}),a("div",{staticClass:"activity-user-info inblock"},[a("p",{staticClass:"activity-user-name"},[t._v(t._s(i.nickName.length>9?i.nickName.slice(0,7):i.nickName))]),a("p",{staticClass:"activity-user-phone"},[t._v(t._s(i.phone))])]),a("div",{staticClass:"activity-user-time inblock"},[t._v("\n                "+t._s(i.inviteTime)+"\n              ")])])])}),0)])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.all,expression:"all"}],staticClass:"loadOver"},[t._v(t._s(0==t.listData.length?"暂无邀请好友，快去邀请吧！":"已加载全部"))])],1)])},e=[],n=(a("097d"),a("b8da")),o={name:"integral",props:{},mounted:function(){},data:function(){return{allNum:"",globalUid:"",userId:"",simt_token:"",all:!1,count:0,isLoading:!1,loading:!1,finished:!1,userData:this.$UserData||{},listData:[],page:1,limit:15}},methods:{onRefresh:function(){var t=this;this.listData=[],this.page=1,this.all=!1,setTimeout(function(){t.getProductDetails()},3500)},onLoad:function(){this.getProductDetails()},getProductDetails:function(){var t=this;this.isLoading=!1,Object(n["g"])({limit:this.limit,page:this.page++,discountId:window.localStorage.getItem("activityId"),userId:this.$userData.userId?this.$userData.userId:window.localStorage.getItem("userid"),orderByField:"inviteTime",orderByType:"desc"}).then(function(i){var a=i.data.result;0==i.tag?(t.listData=JSON.parse(JSON.stringify(t.listData.concat(a))),a.length<t.limit?(t.finished=!0,t.all=!0):t.finished=!1):(t.$toast(i.errMsg),t.finished=!0,t.all=!0)}).finally(function(){t.loading=!1,t.isLoading=!1})}}},l=o,r=(a("1662"),a("2877")),c=Object(r["a"])(l,s,e,!1,null,"6d531a40",null);i["default"]=c.exports}}]);