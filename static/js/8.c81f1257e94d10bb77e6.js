webpackJsonp([8],{Kjo5:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),n=e.n(i),a=e("mtWM"),o=e.n(a),r=e("W/7t");var l=e("qwAB"),c=e("y/jF"),u=e("F4+m"),d=e("NYxO"),v=[0,1,2,3,4,22,23],h={mixins:[u.a],data:function(){return{yunTopList:[],showLoading:!0}},created:function(){this._getTopList()},methods:n()({selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.rank.style.bottom=s,this.$refs.scroll.refresh()},_getTopList:function(){for(var t,s,e=this,i=0;i<v.length;i++)(t=v[i],void 0,s=r.b+"/top/list?idx="+t,o.a.get(s)).then(function(t){var s=t.data.playlist;s.top=t.data.playlist.tracks.slice(0,3),e.yunTopList.push(s)}),i===v.length-1&&(this.showLoading=!1)}},Object(d.d)({setTopList:"SET_TOP_LIST"})),components:{Scroll:l.a,Loading:c.a}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"rank",staticClass:"rank"},[e("scroll",{ref:"scroll",staticClass:"toplist"},[e("ul",t._l(t.yunTopList,function(s){return e("li",{key:s.id,staticClass:"item",on:{click:function(e){return t.selectItem(s)}}},[e("div",{staticClass:"icon"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.coverImgUrl,expression:"item.coverImgUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),e("ul",{staticClass:"songlist"},t._l(s.top,function(s,i){return e("li",{key:i,staticClass:"song"},[e("span",[t._v(t._s(i+1)+".")]),t._v(" "),e("span",[t._v(t._s(s.name)+" - "+t._s(s.ar[0].name))])])}),0)])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],staticClass:"loading-content"},[e("loading")],1)]),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var f=e("VU/8")(h,p,!1,function(t){e("vBLi")},"data-v-708bba08",null);s.default=f.exports},vBLi:function(t,s){}});
//# sourceMappingURL=8.c81f1257e94d10bb77e6.js.map