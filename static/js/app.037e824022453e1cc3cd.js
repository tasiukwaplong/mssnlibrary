webpackJsonp([1],{"1Vhe":function(t,e,a){var s=a("mtWM"),i=a("QmSG");t.exports={getVideos:function(){return s.get(i.API_URL+"?req=videos").then(function(t){return 200===t.status?{errored:t.data.errored,message:t.data.message}:{errored:!0,message:"Unable to fetch videos. try again later"}}).catch(function(){return{errored:!0,message:"Unable to fetch videos at the moment. kindly check back in  a bit"}})},getDownloadLinks:function(t){return s.get(i.API_URL+"?req=downloadlink&url="+t).then(function(t){return 200===t.status?{errored:t.data.errored,message:t.data.message}:{errored:!1,message:"Download links unavailable at the moment"}}).catch(function(){return{errored:!0,message:"Unable to get video download links at the moment. kindly check back in  a bit"}})},pictureUrl:function(t){return""+i.API_URL+t}}},"52xl":function(t,e,a){t.exports=a.p+"static/img/mssn.9a670cb.png"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},n=a("VU/8")({name:"App"},i,!1,null,null,null).exports,r=a("/ocq"),o=a("Xxa5"),l=a.n(o),c=a("pFYg"),d=a.n(c),h=a("exGp"),v=a.n(h),u=a("1Vhe"),m=a.n(u),p=a("QmSG"),f={methods:{shortenName:function(t){if(t.trim().length>=20)return t.substring(0,19)+" ...";for(var e="",a=0;a<31-t.length;a++)e+=" ";return t+e},picture:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m.a.pictureUrl(t)},convertToMB:function(t){return!t||isNaN(t)?"-":(t/1e6).toFixed(2)+"mb"},sharableLink:function(t){return 0===t.search("https://www.facebook.com/")?t.substring(25):""+t},shareButtons:function(t,e){return'Share: <a class="share-icon" target="_blank" title="share on whatsapp" data-action="share/whatsapp/share"\n      href="whatsapp://send?text=https://mssnlibrary.netlify.app">\n        <i class="fa fa-whatsapp" aria-hidden="true"></i>\n    </a>\n    <a class="share-icon" target="_blank" title="share video on twitter"\n      href="https://twitter.com/intent/tweet?text=https://mssnlibrary.netlify.app">\n        <i class="fa fa-twitter" aria-hidden="true"></i>\n    </a>\n    <a class="share-icon" target="_blank" title="share video on facebook"\n      href="http://www.facebook.com/sharer/sharer.php?u=https://mssnlibrary.netlify.app">\n      <i class="fa fa-facebook" aria-hidden="true"></i>\n    </a>'},downloadLink:function(t,e){return p.API_URL+"/download/?url="+t+"&redirect="+p.API_URL+"&filename="+e+"-viral-videos.netlify.app"}},watch:{selectedVideo:function(){var t=v()(l.a.mark(function t(e){var a,s,i,n,r=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.downloadLoading=!0,void 0!==e.url){t.next=5;break}t.t0=null,t.next=8;break;case 5:return t.next=7,m.a.getDownloadLinks(e.url);case 7:t.t0=t.sent;case 8:a=t.t0,setTimeout(function(){r.downloadLoading=!a},2e3),a.errored||"object"!==d()(a.message)?this.selectedVideo.error=a.message:(this.selectedVideo.links=a.message,s=a.message,i=s.LQ_Link||{},n=s.HQ_Link||{},this.selectedVideoRaw=s.LQ_Link||s.HQ_Link?'<div class="embed-responsive embed-responsive-16by9">\n              <video class="embed-responsive-item" controls>\n                <source src="'+(i.link||n.link)+'" type="video/mp4">\n                  <source src="'+(i.link||n.link)+'" type="video/ogg">\n                Your browser does not support the video tag.\n              </video>\n             </div>\n             <hr>\n            <div style="color:white;font-size: 20px;" class="row">\n                <div class="col-sm-6 col-lg-6">\n                  <label class="form-check-label">\n                  <a class="btn-block btn btn-success"\n                    href="'+this.downloadLink(i.link,e.title)+'"\n                    target="_blank">\n                  Low quality ('+(this.convertToMB(i.size)||"-")+')\n                  <i class="fa fa-download" aria-hidden="true"></i>\n                  </a>\n                  </label>\n                </div>\n                <div class="col-sm-6 col-lg-6">\n                  <label class="form-check-label">\n                  <a class="btn-block btn btn-success"\n                    href="'+this.downloadLink(n.link,e.title)+'"\n                    target="_blank">\n                  High quality ('+(this.convertToMB(n.size)||"-")+')\n                  <i class="fa fa-download" aria-hidden="true"></i>\n                  </a>\n                  </label>\n                </div>\n                <div class="col-sm-12 col-lg-12 text-center" style="color: #000000">\n                 '+this.shareButtons(e.title,e.url)+"\n                 <br>\n                 <small>Got anything you want to tell the developer? Kindly send your feedback to:\n                 <a target='_blank' href='https://bit.ly/2CXY7BF'>https://bit.ly/2CXY7BF</a>\n                 </small>\n                </div>\n            </div>\n            ":'<h1 class="text-center">An unknown error has occured</h1>');case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand logo",attrs:{to:"/"}},[this._v("Viral Videos")]),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navcol-1"}},[e("ul",{staticClass:"nav navbar-nav ml-auto"},[e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("router-link",{staticClass:"nav-link",attrs:{to:"/promote"}},[this._v("Promote your video")])],1),this._v(" "),this._m(1)])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{"data-toggle":"collapse","data-target":"#navcol-1"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[e("a",{staticClass:"nav-link",attrs:{target:"_blank",href:"https://bit.ly/2CXY7BF"}},[this._v("Feedback")])])}]},g=a("VU/8")({name:"NavBar"},_,!1,null,null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"page-footer dark"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"},[e("h5",[this._v("About me")]),this._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://twitter.com/tasiukwaplong"}},[this._v("@tasiukwaplong")])])])])])]),this._v(" "),e("div",{staticClass:"footer-copyright"},[e("p",[this._v("© 2020")])])])}]},k=a("VU/8")({name:"Foot"},b,!1,null,null,null).exports,w={name:"Home",data:function(){return{errored:!1,loading:!0,videos:[],selectedVideo:{},downloadLoading:!1,selectedVideoRaw:"",videosToDisplay:{count:12,category:""},images:[],categories:{}}},mixins:[f],components:{NavBar:g,Foot:k},mounted:function(){var t=v()(l.a.mark(function t(){var e,a=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.getVideos();case 2:e=t.sent,this.loading=void 0===e,this.errored=e.errored,this.videos=e.message,"object"===d()(this.videos)&&this.videos.forEach(function(t){t.image_src.length>=5&&a.images.length<5&&a.images.push(t.image_src),t.sub_linked.length>=1?void 0===a.categories[t.category]?a.categories[t.category]=[t.sub_linked]:a.categories[t.category].push(t.sub_linked):void 0===a.categories[t.category]&&(a.categories[t.category]=[])});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("main",{staticClass:"page catalog-page"},[a("section",{staticClass:"clean-block clean-catalog dark"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"content",attrs:{id:"categories"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[t.errored?a("div",[a("div",{staticClass:"text-center alert alert-danger",attrs:{role:"alert"}},[t._m(1),t._v(" "),a("strong",[t._v("Error:")]),t._v(" "+t._s(t.videos)+"\r\n                                        ")])]):a("div",{staticClass:"row"},[t.loading?a("div",[t._m(2)]):t._l(t.videos,function(e,s){return a("div",{key:e.id,staticClass:"col-md-3"},[s<t.videosToDisplay.count?a("div",{staticClass:"card clean-card text-center"},[t._m(3,!0),t._v(" "),a("div",{staticClass:"card-body info"},[a("h6",{staticClass:"card-title"},[t._v(t._s("PDF DOC "+s))]),t._v(" "),t._m(4,!0),t._v(" "),t._m(5,!0),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.shareButtons(e.title,e.url))}}),t._v(" "),t._m(6,!0)])]):t._e()])})],2),t._v(" "),a("nav",[t.videos.length>t.videosToDisplay.count?a("ul",{directives:[{name:"show",rawName:"v-show",value:"object"==typeof t.videos,expression:"typeof(videos) === 'object'"}],staticClass:"pagination"},[a("li",{staticClass:"page-item active"},[a("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"},on:{click:function(e){t.videosToDisplay.count+=4}}},[t._v("Show more")])])]):a("ul",{directives:[{name:"show",rawName:"v-show",value:"object"==typeof t.videos,expression:"typeof(videos) === 'object'"}],staticClass:"pagination"},[t._m(7)])])])])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"modelId",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.selectedVideo.title))]),t._v(" "),t._m(8)]),t._v(" "),a("div",{staticClass:"modal-body"},[t.selectedVideo.links?a("div",{staticClass:"form-check"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.selectedVideoRaw.length>10,expression:"selectedVideoRaw.length > 10"}],domProps:{innerHTML:t._s(t.selectedVideoRaw)}})]):a("div",[t.downloadLoading?a("div",{staticClass:"form-check"},[t._v("\r\n                            Opening video player. Please wait....\r\n                            "),a("i",{staticClass:"fa fa-refresh fa-spin",attrs:{"aria-hidden":"true"}})]):a("div",{staticClass:"row form-check"},[a("div",{staticClass:"alert alert-danger text-center",attrs:{role:"alert"}},[a("i",{staticClass:"fa fa-exclamation-triangle",staticStyle:{color:"red","font-size":"20px"},attrs:{"aria-hidden":"true"}}),a("br"),t._v(" "),a("strong",[t._v("Error: ")]),t._v(" "+t._s(t.selectedVideo.error)+"\r\n                            ")])])])]),t._v(" "),t._m(9)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-heading"},[e("img",{staticClass:"img-responsive",staticStyle:{width:"100px"},attrs:{src:a("52xl")}}),this._v(" "),e("h3",[this._v("MSSN FULAFIA DIGITAL LIBRARY")]),this._v(" "),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"search",placeholder:"Enter name of book to search","aria-describedby":"helpId"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-center",staticStyle:{"font-size":"100px"}},[e("i",{staticClass:"fa fa-exclamation-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center",staticStyle:{"font-size":"30px"}},[this._v("\r\n                                            Please wait..."),e("br"),this._v(" "),e("i",{staticClass:"fa fa-refresh fa-spin",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("i",{staticClass:"fa fa-file-pdf-o embed-responsive-item",staticStyle:{"font-size":"170px",color:"red"},attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary btn-block btn-success",attrs:{type:"button"}},[this._v("Download "),e("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"}},[this._v("Preview "),e("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{target:"_blank",href:"mailto:tasiukwaplong@gmail.com"}},[this._v("\r\n                                                    Contact uploader "),e("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"page-item active"},[e("em",[this._v("That's all we have. We're glad you came this far 😊...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}]},y=a("VU/8")(w,C,!1,null,null,null).exports,x={name:"Video",data:function(){return{loading:!0,errored:!1,errorMessage:"Video unavailable..!!",link:"",LQ_LINK:void 0,HQ_LINK:void 0}},mixins:[f],components:{NavBar:g,Foot:k},methods:{videoOriginalURL:function(){var t=window.location.origin;return"https://www.facebook.com/"+window.location.href.substring(t.length+3)}},created:function(){var t=v()(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.link=this.videoOriginalURL(),t.next=3,m.a.getDownloadLinks(this.link);case 3:e=t.sent,this.errored=e.errored,this.errorMessage=this.errored?e.message:"",this.HQ_LINK=e.message.HQ_Link,this.LQ_LINK=e.message.LQ_Link,console.log(e.message.LQ_Link),this.loading=!(this.HQ_LINK||this.LQ_LINK);case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  404 NOT FOUND"),e("br"),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Go HOME")])],1)},staticRenderFns:[]},V=a("VU/8")(x,L,!1,null,null,null).exports,E={name:"Feedback",components:{NavBar:g,Foot:k}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavBar"),this._v(" "),this._m(0),this._v(" "),e("Foot")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"page catalog-page"},[e("section",{staticClass:"clean-block clean-catalog dark"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center",staticStyle:{"font-size":"50px"}},[this._v("\r\n                          Coming soon..."),e("br"),this._v("\r\n                          If you like this site or have any suggestion, Kindly drop a feedback\r\n                          "),e("a",{attrs:{target:"_blank",href:"https://bit.ly/2CXY7BF"}},[this._v("https://bit.ly/2CXY7BF")])])])])])])])}]},N=a("VU/8")(E,F,!1,null,null,null).exports;s.a.use(r.a);var R=new r.a({routes:[{path:"/",name:"Home",component:y},{path:"/promote",name:"Feedback",component:N},{path:"*",name:"Video",component:V}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:R,components:{App:n},template:"<App/>"})},QmSG:function(t,e){t.exports={API_URL:"https://nmwrrd.000webhostapp.com/facebook/"}}},["NHnr"]);
//# sourceMappingURL=app.037e824022453e1cc3cd.js.map