!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,i,l,a=B;for(l=arguments.length;l-- >2;)A.push(arguments[l]);for(t&&null!=t.children&&(A.length||A.push(t.children),delete t.children);A.length;)if((o=A.pop())&&void 0!==o.pop)for(l=o.length;l--;)A.push(o[l]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?a[a.length-1]+=o:a===B?a=[o]:a.push(o),n=i;var c=new r;return c.nodeName=e,c.children=a,c.attributes=null==t?void 0:t,c.key=null==t?void 0:t.key,void 0!==j.vnode&&j.vnode(c),c}function i(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t){return o(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e._dirty&&(e._dirty=!0)&&1==V.push(e)&&(j.debounceRendering||W)(c)}function c(){var e,t=V;for(V=[];e=t.pop();)e._dirty&&T(e)}function u(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"===(void 0===r?"undefined":L(r))){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===Q.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,m,l):e.removeEventListener(t,m,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)h(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var a=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function h(e,t,n){try{e[t]=n}catch(e){}}function m(e){return this._listeners[e.type](j.event&&j.event(e)||e)}function y(){for(var e;e=I.pop();)j.afterMount&&j.afterMount(e),e.componentDidMount&&e.componentDidMount()}function _(e,t,n,r,o,i){D++||(J=null!=o&&void 0!==o.ownerSVGElement,R=null!=e&&!("__preactattr_"in e));var l=b(e,t,n,r,i);return o&&l.parentNode!==o&&o.appendChild(l),--D||(R=!1,i||y()),l}function b(e,t,n,r,o){var i=e,l=J;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),k(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return M(e,t,n,r);if(J="svg"===a||"foreignObject"!==a&&J,a=String(a),(!e||!s(e,a))&&(i=f(a,J),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),k(e,!0)}var c=i.firstChild,u=i.__preactattr_,p=t.children;if(null==u){u=i.__preactattr_={};for(var d=i.attributes,v=d.length;v--;)u[d[v].name]=d[v].value}return!R&&p&&1===p.length&&"string"==typeof p[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=p[0]&&(c.nodeValue=p[0]):(p&&p.length||null!=c)&&g(i,p,n,r,R||null!=u.dangerouslySetInnerHTML),C(i,t.attributes,u),J=l,i}function g(e,t,n,r,o){var i,l,a,c,s,p=e.childNodes,f=[],v={},h=0,m=0,y=p.length,_=0,g=t?t.length:0;if(0!==y)for(var w=0;w<y;w++){var C=p[w],x=C.__preactattr_,N=g&&x?C._component?C._component.__key:x.key:null;null!=N?(h++,v[N]=C):(x||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(f[_++]=C)}if(0!==g)for(var w=0;w<g;w++){c=t[w],s=null;var N=c.key;if(null!=N)h&&void 0!==v[N]&&(s=v[N],v[N]=void 0,h--);else if(!s&&m<_)for(i=m;i<_;i++)if(void 0!==f[i]&&u(l=f[i],c,o)){s=l,f[i]=void 0,i===_-1&&_--,i===m&&m++;break}s=b(s,c,n,r),a=p[w],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?d(a):e.insertBefore(s,a))}if(h)for(var w in v)void 0!==v[w]&&k(v[w],!1);for(;m<=_;)void 0!==(s=f[_--])&&k(s,!1)}function k(e,t){var n=e._component;n?P(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;k(e,!0),e=t}}function C(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=void 0,J);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],J)}function x(e){var t=e.constructor.name;(H[t]||(H[t]=[])).push(e)}function N(e,t,n){var r,o=H[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),E.call(r,t,n)):(r=new E(t,n),r.constructor=e,r.render=S),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function S(e,t,n){return this.constructor(e,n)}function U(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===j.syncComponentUpdates&&e.base?a(e):T(e,1,o)),e.__ref&&e.__ref(e))}function T(e,t,n,r){if(!e._disable){var o,l,a,c=e.props,u=e.state,s=e.context,f=e.prevProps||c,d=e.prevState||u,v=e.prevContext||s,h=e.base,m=e.nextBase,b=h||m,g=e._component,w=!1;if(h&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,u,s)?w=!0:e.componentWillUpdate&&e.componentWillUpdate(c,u,s),e.props=c,e.state=u,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!w){o=e.render(c,u,s),e.getChildContext&&(s=i(i({},s),e.getChildContext()));var C,x,S=o&&o.nodeName;if("function"==typeof S){var M=p(o);l=g,l&&l.constructor===S&&M.key==l.__key?U(l,M,1,s,!1):(C=l,e._component=l=N(S,M,s),l.nextBase=l.nextBase||m,l._parentComponent=e,U(l,M,0,s,!1),T(l,1,n,!0)),x=l.base}else a=b,C=g,C&&(a=e._component=null),(b||1===t)&&(a&&(a._component=null),x=_(a,o,s,n||!h,b&&b.parentNode,!0));if(b&&x!==b&&l!==g){var E=b.parentNode;E&&x!==E&&(E.replaceChild(x,b),C||(b._component=null,k(b,!1)))}if(C&&P(C),e.base=x,x&&!r){for(var O=e,L=e;L=L._parentComponent;)(O=L).base=x;x._component=O,x._componentConstructor=O.constructor}}if(!h||n?I.unshift(e):w||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),j.afterUpdate&&j.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);D||r||y()}}function M(e,t,n,r){for(var o=e&&e._component,i=o,l=e,a=o&&e._componentConstructor===t.nodeName,c=a,u=p(t);o&&!c&&(o=o._parentComponent);)c=o.constructor===t.nodeName;return o&&c&&(!r||o._component)?(U(o,u,3,n,r),e=o.base):(i&&!a&&(P(i),e=l=null),o=N(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e,l=null),U(o,u,1,n,r),e=o.base,l&&e!==l&&(l._component=null,k(l,!1))),e}function P(e){j.beforeUnmount&&j.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?P(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),x(e),w(t)),e.__ref&&e.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function O(e,t,n){return _(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0});var L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j={},A=[],B=[],W="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,Q=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,V=[],I=[],D=0,J=!1,R=!1,H={};i(E.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),T(this,2)},render:function(){}});var z={h:o,createElement:o,cloneElement:l,Component:E,render:O,rerender:c,options:j};t.h=o,t.createElement=o,t.cloneElement=l,t.Component=E,t.render=O,t.rerender=c,t.options=j,t.default=z},function(e,t,n){"use strict";n(2);var r=n(0),o=n(3),i=function(e){return e&&e.__esModule?e:{default:e}}(o);(0,r.render)((0,r.h)(i.default,null),document.body)},function(e,t,n){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(4);var a=n(0),c=n(5),u=function(e){return e&&e.__esModule?e:{default:e}}(c);window.prc=window.prc||{};var s=navigator.userAgent.toLowerCase(),p=function(){return"micromessenger"==s.match(/MicroMessenger/i)}(),f=function(){if(!window.Jsbridge)throw new Error("没有引入 JSBridge.js");return Jsbridge.isApp()}(),d=/android|adr/gi.test(s),v=(/iphone|ipod|ipad/gi.test(s),[{key:1,val:"微信"},{key:5,val:"朋友圈"},{key:4,val:"QQ"},{key:6,val:"QQ空间"},{key:3,val:"微博"},{key:8,val:"复制链接"}]),h=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.appShare=window.prc.share=n,n.state={show:!1,list:[],icon:"",title:"",content:"",shareUrl:"",cover:{src:"",style:{},callback:null},callback:null},n}return i(t,e),l(t,[{key:"getList",value:function(e){return"total"===e?[{key:1,val:"微信"},{key:2,val:"短信"},{key:3,val:"微博"},{key:4,val:"QQ"},{key:5,val:"朋友圈"},{key:6,val:"QQ空间"},{key:7,val:"二维码"},{key:8,val:"复制链接"},{key:9,val:"一键分享"}]:"init"===e?v:"custom"===e?this.state.list:void 0}},{key:"fromApp",value:function(e){var t=this.state,n=t.list,r=t.callback;Jsbridge.toAppWebViewShare({shareTypeList:n},function(e){var t=function(){return d?JSON.parse(e).ShareResult:e}();r&&r(t)})}},{key:"fromWeiXin",value:function(){this.setState({show:!0})}},{key:"set",value:function(e){var t=e.icon,n=e.title,r=e.content,o=e.shareUrl,i=e.cover,l=e.custom,a=e.callback;this.getList("total"),null!=l&&0!==l.length&&l.forEach(function(e,t){var n=(0,u.default)(v,function(t){return t.key===e.key});n>-1?v[n]=e:v.push(e)});var c=void 0,s=v.map(function(e,i){if(c=function(){return 3===e.key||5===e.key?e.title||n:null==e.content?r:e.content}(),!1!==e.enabled)return{ShareToolType:e.key,ShareToolName:e.val,IconUrl:t,Title:null==e.title?n:e.title,ShareContent:c,ShareUrl:null==e.shareUrl?o:e.shareUrl,IsEnabled:!0}}).filter(function(e){return void 0!=e});this.setState({list:s,icon:t,title:n,content:r,shareUrl:o,cover:i,custom:l,callback:a})}},{key:"show",value:function(){return f?void this.fromApp():p?void this.fromWeiXin():void alert("打开app或微信即可分享")}},{key:"hide",value:function(){this.setState({show:!1})}},{key:"render",value:function(e,t){var n=this;return t.show?(0,a.h)("div",{onTouchMove:function(e){return e.preventDefault()},onClick:function(){t.cover.callback&&t.cover.callback(),n.hide()},className:"prc-share"},(0,a.h)("div",{style:t.cover.style,className:"prc-share-img"},(0,a.h)("img",{src:t.cover.src,style:t.cover.style}))):null}}]),t}(a.Component);t.default=h},function(e,t,n){},function(e,t,n){"use strict";e.exports=function(e,t,n){if("function"==typeof Array.prototype.findIndex)return e.findIndex(t,n);if("function"!=typeof t)throw new TypeError("predicate must be a function");var r=Object(e),o=r.length;if(0===o)return-1;for(var i=0;i<o;i++)if(t.call(n,r[i],i,r))return i;return-1}}]);