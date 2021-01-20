(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(t,e,r){"use strict";var n=r(1),o=r.n(n),c=r(150);r(300);o.a.use(c.b)},140:function(t,e,r){"use strict";var n=r(1),o=r.n(n),c=r(194),l=r.n(c);o.a.use({install:function(t){t.component("v-select",l.a)}})},141:function(t,e,r){"use strict";var n=r(1),o=r.n(n),c=r(195);r(302);o.a.use({install:function(t){t.component("vue-simple-suggest",c.a)}})},142:function(t,e,r){"use strict";e.a=function(t){}},143:function(t,e,r){"use strict";r.r(e),r.d(e,"ButtonType",(function(){return h}));r(210);var n=r(72),o=r(74),c=r(144),l=r(145),v=r(98),f=r(24),d=r(73);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h,C=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c};!function(t){t[t.Primary=0]="Primary",t[t.Secondary=1]="Secondary"}(h||(h={}));var y=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"specificClasses",get:function(){return this.buttonType===h.Primary?"text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-500":"text-gray-600 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500"}}]),r}(d.Vue);C([Object(d.Prop)({default:h.Primary})],y.prototype,"buttonType",void 0);var x=y=C([d.Component],y),_=r(13),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center px-4 py-2 order-0 sm:order-1 border border-transparent shadow-sm text-sm font-medium rounded-md focus:ring-2 focus:ring-offset-2",class:t.specificClasses,attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.$emit("click")}}},[t._t("default",[t._v(" Button Text ")])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(143).default})},146:function(t,e,r){"use strict";e.a={index:{path:"/",pageTitle:"Dashboard"},login:{path:"/login",pageTitle:"Login"},overview:{path:"/overview",pageTitle:"Project Overview"},details:{path:"/details",pageTitle:"Project Details"},createProject:{path:"/create-project",pageTitle:"Create new Project"}}},208:function(t,e,r){"use strict";var n=r(13),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-sans antialiased min-h-screen bg-white flex"},[e("Nav"),this._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Nav:r(99).default})},209:function(t,e,r){"use strict";var n=r(13),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-sans antialiased min-h-screen bg-gray-100"},[e("Nuxt"),this._v(" "),e("MarketingFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MarketingFooter:r(308).default})},212:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return y})),r.d(e,"getters",(function(){return x})),r.d(e,"ActionTypes",(function(){return h})),r.d(e,"MutationTypes",(function(){return C})),r.d(e,"actions",(function(){return O})),r.d(e,"mutations",(function(){return T}));r(75),r(45);var n,o,c=r(15),l=r(71),v=r(1),f=r.n(v),d=r(28),m=r(91);f.a.use(d.a);var h,C,y=function(){return{signInTokens:{},projects:[],customers:[]}},x={};function _(t){setTimeout(t,350)}!function(t){t.FETCH_PROJECTS="FETCH_PROJECTS",t.CREATE_NEW_PROJECT="CREATE_NEW_PROJECT",t.FETCH_CUSTOMERS="FETCH_CUSTOMERS",t.ADD_NEW_CUSTOMER="ADD_NEW_CUSTOMER"}(h||(h={})),function(t){t.ON_AUTH_STATE_CHANGED_MUTATION="ON_AUTH_STATE_CHANGED_MUTATION",t.ON_PROJECTS_CHANGED_MUTATION="ON_PROJECTS_CHANGED_MUTATION",t.ON_CUSTOMERS_CHANGED_MUTATION="ON_CUSTOMERS_CHANGED_MUTATION"}(C||(C={}));var O=(n={},Object(c.a)(n,h.FETCH_PROJECTS,(function(t){_((function(){var e=Object(l.a)(m.default.projects);t.commit(C.ON_PROJECTS_CHANGED_MUTATION,e)}))})),Object(c.a)(n,h.CREATE_NEW_PROJECT,(function(t,e){_((function(){var r=[].concat(Object(l.a)(t.state.projects),[e]);t.commit(C.ON_PROJECTS_CHANGED_MUTATION,r)}))})),Object(c.a)(n,h.FETCH_CUSTOMERS,(function(t){_((function(){var e=Object(l.a)(m.default.customers);t.commit(C.ON_CUSTOMERS_CHANGED_MUTATION,e)}))})),Object(c.a)(n,h.ADD_NEW_CUSTOMER,(function(t,e){_((function(){var r=[].concat(Object(l.a)(t.state.customers),[e]);t.commit(C.ON_CUSTOMERS_CHANGED_MUTATION,r)}))})),n),T=(o={},Object(c.a)(o,C.ON_AUTH_STATE_CHANGED_MUTATION,(function(t,e){t.signInTokens=e})),Object(c.a)(o,C.ON_PROJECTS_CHANGED_MUTATION,(function(t,e){t.projects=e})),Object(c.a)(o,C.ON_CUSTOMERS_CHANGED_MUTATION,(function(t,e){t.customers=e})),o)},213:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("NuxtLink",{attrs:{to:"/"}},[e("div",{staticClass:"font-bold cursor-pointer"},[e("span",{staticClass:"sr-only"},[this._v("Collabrio")]),this._v("\n    Logo\n    ")])])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,r){r(215),t.exports=r(216)},234:function(t,e,r){"use strict";r.r(e),e.default=function(t){}},307:function(t,e,r){"use strict";r.r(e);var n=r(199),o=r.n(n),c=r(146),l={directives:{clickOutside:o.a.directive},data:function(){return{isOpen:!1}},computed:{routes:function(){return c.a},teams:function(){return[]}}},v=r(13),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hidden lg:flex lg:flex-shrink-0 h-full"},[r("div",{staticClass:"flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100"},[r("div",{staticClass:"flex items-center flex-shrink-0 px-6"},[r("Logo")],1),t._v(" "),r("div",{staticClass:"h-0 flex-1 flex flex-col overflow-y-auto"},[r("div",{staticClass:"px-3 mt-6 relative inline-block text-left"},[r("div",[r("button",{staticClass:"group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"true"},on:{click:function(e){t.isOpen=!t.isOpen}}},[r("span",{staticClass:"flex w-full justify-between items-center"},[t._m(0),t._v(" "),r("svg",{staticClass:"flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]),t._v(" "),r("transition",{attrs:{"enter-active-class":"transition ease-out duration-100","enter-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[t.isOpen?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return t.isOpen=!1},expression:"() => (isOpen = false)"}],staticClass:"z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"}},[r("div",{staticClass:"py-1"},[r("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("View profile")]),t._v(" "),r("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Settings")]),t._v(" "),r("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Notifications")])]),t._v(" "),r("div",{staticClass:"py-1"},[r("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Get desktop app")]),t._v(" "),r("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Support")])]),t._v(" "),r("div",{staticClass:"py-1"},[r("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",attrs:{href:"#",role:"menuitem"}},[t._v("Logout")])])]):t._e()])],1),t._v(" "),r("nav",{staticClass:"px-4 mt-6"},[r("div",{staticClass:"space-y-1"},[r("NuxtLink",{staticClass:"group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-50",attrs:{to:t.routes.index.path}},[r("svg",{staticClass:"mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})]),t._v("\n            "+t._s(t.routes.index.pageTitle)+"\n          ")]),t._v(" "),r("NuxtLink",{staticClass:"group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50",attrs:{to:t.routes.overview.path}},[r("svg",{staticClass:"mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"}})]),t._v("\n            "+t._s(t.routes.overview.pageTitle)+"\n          ")])],1),t._v(" "),t.teams.length?r("div",{staticClass:"mt-8"},[r("h3",{staticClass:"px-3 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",attrs:{id:"teams-headline"}},[t._v("\n            Teams\n          ")]),t._v(" "),r("div",{staticClass:"mt-1 space-y-1",attrs:{role:"group","aria-labelledby":"teams-headline"}},[t._l(t.teams,(function(e){return r("NuxtLink",{key:e.path,staticClass:"group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50",attrs:{to:e.path}},[r("span",{staticClass:"truncate"},[t._v(t._s(e.pageTitle))])])})),t._v(" "),r("button",{staticClass:"group w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50",attrs:{type:"button"}},[r("svg",{staticClass:"mr-1 h-5 w-7 text-gray-400 group-hover:text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}})]),t._v(" "),r("span",{staticClass:"truncate"},[t._v("Add Team")])])],2)]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"flex min-w-0 items-center justify-between space-x-3"},[e("img",{staticClass:"w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",attrs:{src:"/img/icons/person.svg",alt:"profile picture"}}),this._v(" "),e("span",{staticClass:"flex-1 min-w-0 text-left"},[e("span",{staticClass:"text-gray-900 text-sm font-medium truncate"},[this._v("Salee Name"),e("br")]),this._v(" "),e("span",{staticClass:"text-gray-500 text-sm truncate"},[this._v("Sales")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(213).default,Button:r(143).default,Nav:r(99).default})},308:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"bg-white"},[r("div",{staticClass:"max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"},[t._m(0),t._v(" "),r("div",{staticClass:"mt-8 flex justify-center space-x-6"},[r("a",{staticClass:"text-gray-500 hover:text-gray-600",attrs:{href:"#"}},[r("span",{staticClass:"sr-only"},[t._v("Facebook")]),t._v(" "),r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"}})])]),t._v(" "),r("a",{staticClass:"text-gray-500 hover:text-gray-600",attrs:{href:"#"}},[r("span",{staticClass:"sr-only"},[t._v("Instagram")]),t._v(" "),r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"}})])]),t._v(" "),r("a",{staticClass:"text-gray-500 hover:text-gray-600",attrs:{href:"#"}},[r("span",{staticClass:"sr-only"},[t._v("Twitter")]),t._v(" "),r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[r("path",{attrs:{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"}})])]),t._v(" "),r("a",{staticClass:"text-gray-500 hover:text-gray-600",attrs:{href:"#"}},[r("span",{staticClass:"sr-only"},[t._v("GitHub")]),t._v(" "),r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"}})])]),t._v(" "),r("a",{staticClass:"text-gray-500 hover:text-gray-600",attrs:{href:"#"}},[r("span",{staticClass:"sr-only"},[t._v("Dribbble")]),t._v(" "),r("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z","clip-rule":"evenodd"}})])])]),t._v(" "),r("p",{staticClass:"mt-8 text-center text-base text-gray-500"},[t._v("\n      © 2020 Collabrio, Inc. All rights reserved.\n    ")])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"-mx-5 -my-2 flex flex-wrap justify-center",attrs:{"aria-label":"Footer"}},[r("div",{staticClass:"px-5 py-2"},[r("a",{staticClass:"text-base text-gray-600 hover:text-gray-900",attrs:{href:"#"}},[t._v("\n          About\n        ")])]),t._v(" "),r("div",{staticClass:"px-5 py-2"},[r("a",{staticClass:"text-base text-gray-600 hover:text-gray-900",attrs:{href:"#"}},[t._v("\n          Blog\n        ")])]),t._v(" "),r("div",{staticClass:"px-5 py-2"},[r("a",{staticClass:"text-base text-gray-600 hover:text-gray-900",attrs:{href:"#"}},[t._v("\n          Jobs\n        ")])]),t._v(" "),r("div",{staticClass:"px-5 py-2"},[r("a",{staticClass:"text-base text-gray-600 hover:text-gray-900",attrs:{href:"#"}},[t._v("\n          Press\n        ")])]),t._v(" "),r("div",{staticClass:"px-5 py-2"},[r("a",{staticClass:"text-base text-gray-600 hover:text-gray-900",attrs:{href:"#"}},[t._v("\n          Accessibility\n        ")])]),t._v(" "),r("div",{staticClass:"px-5 py-2"},[r("a",{staticClass:"text-base text-gray-600 hover:text-gray-900",attrs:{href:"#"}},[t._v("\n          Partners\n        ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(99).default})},91:function(t,e,r){"use strict";r.r(e);var n=r(97),o=0;function c(t){return{customer:{name:t,slug:"/"+Object(n.a)(t)},projectName:"Project Name",projectId:"id-".concat(o++),projectValue:"".concat(Math.floor(15e3*Math.random()),"€"),chanceOfSuccess:"".concat(Math.floor(100*Math.random()),"%"),nextStep:"Stakeholder Approval",lastActivity:(new Date).toISOString().substring(0,10),pointOfContact:"John doe"}}e.default={signedIn:!1,customers:[{name:"Customer 1",slug:Object(n.a)("Customer 1")},{name:"Customer 2",slug:Object(n.a)("Customer 2")},{name:"Customer 3",slug:Object(n.a)("Customer 3")}],projects:[c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2"),c("Company 1"),c("Other Company 1"),c("Other Company 2")]}},99:function(t,e,r){"use strict";r.r(e);var n={computed:{signedIn:function(){return!1}}},o=r(13),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("SidebarDesktop")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SidebarDesktop:r(307).default})}},[[214,11,1,12]]]);