(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{250:function(t,e,n){"use strict";var r=n(3),o=n(38).find,c=n(115),l=n(20),f=!0,d=l("find");"find"in[]&&Array(1).find((function(){f=!1})),r({target:"Array",proto:!0,forced:f||!d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("find")},251:function(t,e,n){"use strict";n.r(e);n(250),n(171),n(252);var r=n(109),o=n(112),c=n(110),l=n(111),f=n(71),d=n(18),h=n(54),v=n(113),y=n(108);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).buttonType=y.ButtonType,t}return Object(o.a)(n,[{key:"computedPageTitle",get:function(){if(this.pageTitle)return this.pageTitle;var path=this.$nuxt.$route.path,t=Object.values(v.a).find((function(t){return t.path===path}));if(!t)throw new Error("Error in ActionStripe.vue: Route not found. Either the route is messed, or you should provide a (valid) pageTitle.");return t.pageTitle}}]),n}(h.Vue);j([Object(h.Prop)()],O.prototype,"pageTitle",void 0);var w=O=j([h.Component],O),x=n(8),component=Object(x.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-16 border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},[e("div",{staticClass:"flex-1 min-w-0"},[e("h2",{staticClass:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},[this._t("title",[this._v(this._s(this.computedPageTitle))])],2)]),this._v(" "),e("div",{staticClass:"mt-4 flex sm:mt-0 sm:ml-4"},[this._t("actions")],2)])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){var r=n(3),o=n(253).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},253:function(t,e,n){var r=n(16),o=n(72),c=n(27),l=n(114).f,f=function(t){return function(e){for(var n,f=c(e),d=o(f),h=d.length,i=0,v=[];h>i;)n=d[i++],r&&!l.call(f,n)||v.push(t?[n,f[n]]:f[n]);return v}};t.exports={entries:f(!0),values:f(!1)}},254:function(t,e,n){"use strict";n.r(e);n(171);var r=n(109),o=n(112),c=n(110),l=n(111),f=n(71),d=n(18),h=n(54);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"linkClasses",get:function(){return"text-blue-600 hover:text-blue-900"}}]),n}(h.Vue);y([Object(h.Prop)({default:"empty-link"})],m.prototype,"href",void 0),y([Object(h.Prop)({default:!0})],m.prototype,"useNuxtLink",void 0);var j=m=y([h.Component],m),O=n(8),component=Object(O.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return this.useNuxtLink?e("NuxtLink",{class:this.linkClasses,attrs:{to:this.href}},[this._t("default")],2):e("a",{class:this.linkClasses,attrs:{href:this.href}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,n){var content=n(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("de6af1f6",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n(258)},267:function(t,e,n){(e=n(39)(!1)).push([t.i,".collabrio-table-theme th{padding:1.25rem .75rem!important;font-weight:500;color:#4b5563!important}.collabrio-table-theme th,.vgt-wrap__footer{background:#f9fafb!important}.collabrio-table-theme td{padding:1.25rem .75rem!important}",""]),t.exports=e},275:function(t,e,n){"use strict";n.r(e);var r={props:{items:{type:Array,default:function(){return[]}}}},o=n(8),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"mt-10 sm:hidden"},[this._m(0),this._v(" "),e("ul",{staticClass:"mt-3 border-t border-gray-200 divide-y divide-gray-100"},[e("li",[e("a",{staticClass:"group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6",attrs:{href:"#"}},[this._m(1),this._v(" "),e("svg",{staticClass:"ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-4 sm:px-6"},[e("h2",{staticClass:"text-gray-500 text-xs font-medium uppercase tracking-wide"},[this._v("\n        Projects\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"flex items-center truncate space-x-3"},[e("span",{staticClass:"w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"font-medium truncate text-sm leading-6"},[this._v("\n              GraphQL API\n              "),e("span",{staticClass:"truncate font-normal text-gray-500"},[this._v("in Engineering")])])])}],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);n(43),n(55),n(28),n(171);var r=n(10),o=n(109),c=n(112),l=n(110),f=n(111),d=n(71),h=n(18),v=n(54),y=n(116),m=n(70),j=n(108),O=n(254);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P=function(t){Object(l.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).buttonType=j.ButtonType,t}return Object(c.a)(n,[{key:"columns",get:function(){return[{label:"Company",field:"company"},{label:"Project Name",field:"projectName"},{label:"Projected Value",field:"value"},{label:"Stage",field:"currentStage"},{label:"Next Step Due Date",field:"nextStepDueDate"},{label:"Contact",field:"contact"}].map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t)}))}},{key:"rows",get:function(){return this.$store.state.projects.map((function(t){return{company:t.customer.name,projectName:{href:"/project/".concat(Object(m.a)(t.projectId)),content:t.projectName},value:t.projectValue,currentStage:t.nextStep,nextStepDueDate:(new Date).toISOString().slice(0,10),contact:t.pointOfContact}}))}}]),n}(v.Vue),C=P=_([Object(v.Component)({components:{Button:j.default,Link:O.default,VueGoodTable:y.a}})],P),R=(n(266),n(8)),component=Object(R.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-8"},[n("VueGoodTable",{attrs:{columns:t.columns,rows:t.rows,"style-class":"vgt-table",theme:"collabrio-table-theme","pagination-options":{enabled:!0,mode:"records",perPage:10,position:"top",perPageDropdown:[20,50],dropdownAllowAll:!0,nextLabel:"Next",prevLabel:"Previous"}},scopedSlots:t._u([{key:"table-column",fn:function(e){return[n("span",[t._v("\n        "+t._s(e.column.label)+"\n      ")])]}},{key:"table-row",fn:function(e){return[e.row[e.column.field].href?n("span",[n("Link",{attrs:{href:e.row[e.column.field].href}},[t._v("\n          "+t._s(e.formattedRow[e.column.field].content)+"\n        ")])],1):n("span",[t._v("\n        "+t._s(e.formattedRow[e.column.field])+"\n      ")])]}},{key:"emptystate",fn:function(){return[t._v("\n      It looks like you don't have any open projects.\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Link:n(254).default})},279:function(t,e,n){"use strict";n.r(e);var r=n(8),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ProjectOverviewMobile"),this._v(" "),e("ProjectOverviewDesktop")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectOverviewMobile:n(275).default,ProjectOverviewDesktop:n(276).default})},286:function(t,e,n){"use strict";n.r(e);n(171);var r=n(109),o=n(112),c=n(110),l=n(111),f=n(71),d=n(18),h=n(54),v=n(113),y=n(172),m=n(108);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).buttonType=m.ButtonType,t}return Object(o.a)(n,[{key:"mounted",value:function(){this.$store.dispatch(y.ActionTypes.FETCH_PROJECTS),this.$store.dispatch(y.ActionTypes.FETCH_CUSTOMERS)}},{key:"onCreateNewProjectClick",value:function(){this.$router.push(v.a.createProject.path)}}]),n}(h.Vue),x=w=O([Object(h.Component)({middleware:["auth"],components:{Button:m.default}})],w),_=n(8),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("ActionStripe",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("NuxtLink",{attrs:{to:"/create-project"}},[n("Button",{attrs:{"button-type":t.buttonType.Primary},on:{click:t.onCreateNewProjectClick}},[t._v("Create Project")])],1)]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"w-4/5 mx-auto min-h-screen flex overflow-hidden bg-white"},[n("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[n("main",{staticClass:"flex-1 relative z-0 overflow-y-auto focus:outline-none",attrs:{tabindex:"0"}},[n("ProjectOverview")],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(108).default,ActionStripe:n(251).default,ProjectOverview:n(279).default})}}]);