webpackJsonp([5],{"4ICC":function(t,s){},"Sgn/":function(t,s,e){"use strict";s.b=function(){var t=n.b+"/top/artists?limit=100";return a.a.get(t)},s.a=function(t){var s=n.b+"/artists?id="+t;return a.a.get(s)};var i=e("mtWM"),a=e.n(i),n=e("W/7t")},lEJ1:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),a=e.n(i),n=e("qwAB"),l=e("ZV4u"),r=e("y/jF"),c=e("NYxO"),o=e("W/7t"),h=e("F4+m"),u=e("Sgn/"),g=e("PvFA"),d={mixins:[h.a],props:{songs:{type:Array}},data:function(){return{listDetail:[],scrollY:0,node:null,headerTitle:"歌手"}},created:function(){this._getDetail(),this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=44-this.imageHeight},computed:a()({headerTitleTouchDown:function(){return this.singer.aliaName?this.singer.name+" ("+this.singer.aliaName+")":this.singer.name},bgStyle:function(){return"background-image: url("+this.singer.avatar+")"},title:function(){return this.headerTitleTouchDown}},Object(c.c)(["singer"])),methods:a()({handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=s,this.$refs.list.refresh()},_getDetail:function(){var t=this;this.singer.id||this.$router.push("/singer"),Object(u.a)(this.singer.id).then(function(s){s.status===o.a&&(t.node=s.data.hotSongs)})},_normalizeSongs:function(t){var s=[];return t.forEach(function(t){s.push(Object(g.d)(t))}),s},selectItem:function(t,s){this.selectPlay({list:this.listDetail,index:s})},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},sequence:function(){var t=this.listDetail;this.sequencePlay({list:t})}},Object(c.b)(["selectPlay","sequencePlay"])),watch:{node:function(t){this.listDetail=this._normalizeSongs(t)},scrollY:function(t){var s=Math.abs(t/this.imageHeight);t<this.minTranslateY+44-20?this.headerTitle=this.headerTitleTouchDown:this.headerTitle="歌手",this.$refs.header.style.background=t<0?"rgba(212, 68, 57, "+s+")":"rgba(212, 68, 57, 0)"}},components:{SongList:l.a,Scroll:n.a,Loading:r.a}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"music-list"},[e("div",{ref:"header",staticClass:"header"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"fa fa-angle-left"})]),t._v(" "),e("div",{staticClass:"text"},[e("h1",{staticClass:"title"},[t._v(t._s(t.headerTitle))])])]),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{"probe-type":t.probeType,"listen-scroll":t.listenScroll,data:t.songs},on:{scroll:t.scroll}},[e("div",{staticClass:"music-list-wrapper"},[e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"filter"}),t._v(" "),e("div",{staticClass:"text"},[e("h2",{staticClass:"list-title"},[t._v(t._s(t.title))])])]),t._v(" "),e("div",{staticClass:"song-list-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listDetail.length,expression:"listDetail.length"}],staticClass:"sequence-play",on:{click:t.sequence}},[e("i",{staticClass:"iconfont icon-bofangicon"}),t._v(" "),e("span",{staticClass:"text"},[t._v("播放全部")]),t._v(" "),e("span",{staticClass:"count"},[t._v("(共"+t._s(t.listDetail.length)+"首)")])]),t._v(" "),e("song-list",{attrs:{songs:t.listDetail},on:{select:t.selectItem}})],1)]),t._v(" "),e("div",{staticClass:"loading-content"},[e("loading")],1)])],1)])},staticRenderFns:[]};var v=e("VU/8")(d,f,!1,function(t){e("4ICC")},"data-v-35ef39a7",null);s.default=v.exports}});
//# sourceMappingURL=5.b1d884a2fda04481368c.js.map