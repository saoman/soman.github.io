(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28c883de"],{"8c42":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"details-all"},t._l(t.dataResult,function(s,a){return i("div",{staticClass:"details-all-sec"},[i("div",{staticClass:"details-all-box"},[i("img",{staticClass:"details-info-img",attrs:{src:s.showImg||s.imgUrls}}),i("div",{staticClass:"details-info-box"},[i("div",{staticClass:"details-info-title"},[0==s.isPostage?i("span",{staticClass:"datails-by"},[t._v("包邮")]):t._e(),t._v(t._s(s.goodsName)+"\n        ")]),1==t.specifications.length?i("div",{staticClass:"details-specifications"},[t._v("\n          规格:"+t._s(t.specifications[0].specifications)+"\n        ")]):t._e(),i("div",[i("div",{staticClass:"datails-ex-box"},[i("span",{staticClass:"datails-ex-money"},[t._v("¥"+t._s(s.marketPrice))]),i("span",{staticClass:"datails-ex-now"},[t._v("剩余"+t._s(s.inventory)+"件")]),i("span",{staticClass:"datails-ex-jf pull-right"},[i("i",[t._v(t._s(2==s.isDiscount?s.point:s.discountPoint))]),i("i",[t._v("积分可兑")])])])])]),s.discountPoint>0?i("div",{staticClass:"seckill-border-ccc"}):t._e(),s.discountPoint>0&&2==s.isDiscount?i("div",{staticClass:"seckill-loading"},[i("span",{staticClass:"seckill-time"},[i("i",[t._v("折扣倒计时：")]),i("i",{staticClass:"seckill-times"},[t._v(t._s(t.days))]),i("i",[t._v("天")]),i("i",{staticClass:"seckill-times"},[t._v(t._s(t.hours))]),i("i",[t._v("时")]),i("i",{staticClass:"seckill-times"},[t._v(t._s(t.minutes))]),i("i",[t._v("分")]),i("i",{staticClass:"seckill-times"},[t._v(t._s(t.seconds))]),i("i",[t._v("秒")])]),i("span",{staticClass:"seckill-right"},[t._v(t._s(s.discountPoint)+"积分")])]):t._e(),s.discountPoint>0&&1==s.isDiscount?i("div",{staticClass:"seckill-bagin"},[i("span",{staticClass:"seckill-time"},[i("i",[t._v("限时积分兑换：")]),i("i",{staticClass:"seckill-times"},[t._v(t._s(t.days))]),i("i",[t._v("天")]),i("i",{staticClass:"seckill-times"},[t._v(t._s(t.hours))]),i("i",[t._v("时")]),i("i",{staticClass:"seckill-times"},[t._v(t._s(t.minutes))]),i("i",[t._v("分")]),i("i",{staticClass:"seckill-times"},[t._v(t._s(t.seconds))]),i("i",[t._v("秒")])]),i("span",{staticClass:"seckill-right"},[t._v(t._s(s.point)+"积分")])]):t._e(),i("div",{staticClass:"hui"}),i("div",{staticClass:"details-info-text"},[t._v("商品详情")]),i("div",{staticClass:"details-img-box"},[t._l(t.datailImgs,function(t,s){return[i("img",{attrs:{src:t}})]})],2),i("div",{staticClass:"details-info-text"},[t._v("购买须知")]),i("div",{staticClass:"details-img-box",domProps:{innerHTML:t._s(s.instructions)}})]),i("div",{staticClass:"details-ex-btn",on:{click:t.exchange}},[t._v("立即兑换")]),i("van-popup",{attrs:{position:"bottom"},model:{value:t.exStatus,callback:function(s){t.exStatus=s},expression:"exStatus"}},[i("div",{staticClass:"store-order-top-b"}),i("div",{staticClass:"store-order"},[i("div",{staticClass:"store-order-content"},[i("div",{staticClass:"store-order-top"},[i("img",{staticClass:"store-product pull-left",attrs:{src:t.rulesData.imgUrl||s.showImg||s.imgUrls}}),i("div",{staticClass:"store-product-text pull-left"},[i("div",{staticClass:"store-product-points-title"},[t._v("\n                "+t._s(2==t.rulesData.isDiscount?t.rulesData.point:t.rulesData.discountPoint)+"积分\n                ")]),i("div",{staticClass:"set-font-size"},[t._v("\n                库存"+t._s(t.rulesData.inventory)+"件\n              ")]),i("div",{staticClass:"chose-active-tag set-font-size"},[t._v("\n                已选择："),i("span",[t._v(t._s(t.rulesData.specifications))])])])])]),i("div",{staticClass:"store-rules"},[t._v("规格")]),i("div",{staticClass:"store-rules-box"},[t._l(t.specifications,function(s,a){return[i("span",{key:a,class:a==t.storeIndex?"active":"",on:{click:function(i){return t.storeChose(s,a)}}},[t._v(t._s(s.specifications))])]})],2),i("div",{staticClass:"store-buy"},[i("div",[i("span",[t._v("兑换数量")]),i("van-stepper",{staticClass:"pull-right",attrs:{max:t.rulesData.inventory},model:{value:t.inputNum,callback:function(s){t.inputNum=s},expression:"inputNum"}})],1)]),i("div",{staticClass:"store-order-next",on:{click:t.exFinally}},[t._v("兑换")])])])],1)}),0)},e=[],n=(i("a481"),i("28a5"),i("ac6a"),i("b8da")),o={name:"productDetails",components:{},data:function(){return{datailImgs:"",storeIndex:0,baginTime:"",statusMs:"",days:"00",hours:"00",minutes:"00",seconds:"00",exStatus:!1,inputNum:1,userData:this.$UserData||{},item:"",isEx:!1,num:"",dataResult:[],specifications:[],rulesData:""}},mounted:function(){this.item=JSON.parse(this.$route.query.data),this.isEx=this.$route.query.isEx,this.num=this.$route.query.num,this.$route.query.exStatus&&(this.exStatus=!0),this.getInitData(),this.getSpecifications()},methods:{getImgUrl:function(t){var s=new Array;return t.split('src="').forEach(function(t,i){t.indexOf("group1/M00")<0?i>0&&s.push(t.split('"')[0]):i>0&&s.push(t.split('"')[0]+"_600x8000.jpg")}),s},storeChose:function(t,s){this.storeIndex=s,this.rulesData=t},getInitData:function(){var t=this;Object(n["i"])({goodsCode:this.item.goodsCode}).then(function(s){0==s.tag?(t.dataResult=[s.data.result],t.datailImgs=t.getImgUrl(s.data.result.detail),s.data.result.discountPoint>0&&t.countDown(t.timeToString(s.data.result.discountStartTime),s.data.result.nowTime,t.timeToString(s.data.result.discountEndTime))):t.$toast(s.errMsg||s.msg)})},getSpecifications:function(){var t=this;Object(n["j"])({virtualGoodsCode:this.item.virtualGoodsCode}).then(function(s){0==s.tag?(t.specifications=s.data.result,t.rulesData=s.data.result[0]):t.$toast(s.errMsg||s.msg)})},exchange:function(){var t=2==this.dataResult[0].isDiscount?this.dataResult[0].point:this.dataResult[0].discountPoint;t<=this.num?this.dataResult[0].inventory>0?this.exStatus=!0:this.$toast("商品库存不足"):this.$toast("积分不足")},exFinally:function(){if(this.rulesData.inventory>0){var t=2==this.rulesData.isDiscount?this.rulesData.point:this.rulesData.discountPoint;t*this.inputNum<=this.num?this.$bridge.callhandler("integralMall.exchange",{productId:this.rulesData.goodsCode,productPoints:t,exNum:this.inputNum,points:this.num}):this.$toast("积分不足")}else this.$toast("库存不足")},getNowTime:function(){return Date.parse(new Date)},timeToString:function(t){t=t.replace(/-/g,"/");var s=new Date(t);return s=s.getTime(),s},countDown:function(t,s,i){t>s?(this.dataResult[0].isDiscount=2,this.statusMs="开始",this.getCountDown(t,s,i)):s>t&&i>s?(this.dataResult[0].isDiscount=1,this.statusMs="结束",this.getCountDown(t,s,i)):(this.dataResult[0].discountPoint=0,this.dataResult[0].isDiscount=2)},skillTimeInit:function(t,s,i){this.baginTime=s;var a=this;t>a.baginTime?(a.statusMs="开始",a.baginTime+=1e3,a.GetDateDiff(a.baginTime,t)):a.baginTime>t&&i>a.baginTime?(a.statusMs="结束",a.baginTime+=1e3,a.GetDateDiff(a.baginTime,i)):(a.dataResult[0].discountPoint=0,this.dataResult[0].isDiscount=2)},getCountDown:function(t,s,i){this.baginTime=s;var a=this;a.skillTimeInit(t,s,i),setInterval(function(){t>a.baginTime?(a.statusMs="开始",a.baginTime+=1e3,a.GetDateDiff(a.baginTime,t)):a.baginTime>t&&i>a.baginTime?(a.statusMs="结束",a.baginTime+=1e3,a.GetDateDiff(a.baginTime,i)):(a.dataResult[0].discountPoint=0,this.dataResult[0].isDiscount=2)},1e3)},GetDateDiff:function(t,s){var i=s-t,a=Math.floor(i/864e5),e=i%864e5,n=Math.floor(e/36e5),o=e%36e5,l=Math.floor(o/6e4),c=o%6e4,r=Math.round(c/1e3);a<10&&(a="0"+a),n<10&&(n="0"+n),l<10&&(l="0"+l),r<10&&(r="0"+r),this.days=a,this.hours=n,this.minutes=l,this.seconds=r}}},l=o,c=(i("bd95"),i("2877")),r=Object(c["a"])(l,a,e,!1,null,"de57cca8",null);s["default"]=r.exports},a481:function(t,s,i){"use strict";var a=i("cb7c"),e=i("4bf8"),n=i("9def"),o=i("4588"),l=i("0390"),c=i("5f1b"),r=Math.max,u=Math.min,d=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};i("214f")("replace",2,function(t,s,i,g){return[function(a,e){var n=t(this),o=void 0==a?void 0:a[s];return void 0!==o?o.call(a,n,e):i.call(String(n),a,e)},function(t,s){var e=g(i,t,this,s);if(e.done)return e.value;var d=a(t),v=String(this),h="function"===typeof s;h||(s=String(s));var p=d.global;if(p){var _=d.unicode;d.lastIndex=0}var C=[];while(1){var D=c(d,v);if(null===D)break;if(C.push(D),!p)break;var b=String(D[0]);""===b&&(d.lastIndex=l(v,n(d.lastIndex),_))}for(var x="",k=0,T=0;T<C.length;T++){D=C[T];for(var y=String(D[0]),w=r(u(o(D.index),v.length),0),S=[],I=1;I<D.length;I++)S.push(f(D[I]));var M=D.groups;if(h){var $=[y].concat(S,w,v);void 0!==M&&$.push(M);var P=String(s.apply(void 0,$))}else P=m(y,v,w,S,M,s);w>=k&&(x+=v.slice(k,w)+P,k=w+y.length)}return x+v.slice(k)}];function m(t,s,a,n,o,l){var c=a+t.length,r=n.length,u=h;return void 0!==o&&(o=e(o),u=v),i.call(l,u,function(i,e){var l;switch(e.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,a);case"'":return s.slice(c);case"<":l=o[e.slice(1,-1)];break;default:var u=+e;if(0===u)return i;if(u>r){var v=d(u/10);return 0===v?i:v<=r?void 0===n[v-1]?e.charAt(1):n[v-1]+e.charAt(1):i}l=n[u-1]}return void 0===l?"":l})}})},bd95:function(t,s,i){"use strict";var a=i("cd94"),e=i.n(a);e.a},cd94:function(t,s,i){}}]);