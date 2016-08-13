/*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?o[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||n.call(e,t)},r.each=function(e,r,a){var o,n=0,i=e.length,s=t(e);if(a){if(s)for(;i>n&&(o=r.apply(e[n],a),o!==!1);n++);else for(n in e)if(o=r.apply(e[n],a),o===!1)break}else if(s)for(;i>n&&(o=r.call(e[n],n,e[n]),o!==!1);n++);else for(n in e)if(o=r.call(e[n],n,e[n]),o===!1)break;return e},r.data=function(e,t,o){if(void 0===o){var n=e[r.expando],i=n&&a[n];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var n=e[r.expando]||(e[r.expando]=++r.uuid);return a[n]=a[n]||{},a[n][t]=o,o}},r.removeData=function(e,t){var o=e[r.expando],n=o&&a[o];n&&r.each(t,function(e,t){delete n[t]})},r.extend=function(){var e,t,a,o,n,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(n=arguments[l]))for(o in n)e=s[o],a=n[o],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[o]=r.extend(c,i,a)):void 0!==a&&(s[o]=a));return s},r.queue=function(e,a,o){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,o=e.length;r>a;)e[o++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[o++]=t[a++];return e.length=o,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return o?(!i||r.isArray(o)?i=r.data(e,a,n(o)):i.push(o),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var o=r.queue(a,t),n=o.shift();"inprogress"===n&&(n=o.shift()),n&&("fx"===t&&o.unshift("inprogress"),n.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),o=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(o.top+=parseFloat(e.style.borderTopWidth)||0,o.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-o.top,left:a.left-o.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var o={},n=o.hasOwnProperty,i=o.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)o["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function o(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}function n(e){return y.isWrapped(e)?e=[].slice.call(e):y.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,o){function n(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((n(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*n(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var o=0;y>o;++o){var n=u(r,e,a);if(0===n)return r;var i=l(r,e,a)-t;r-=i/n}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,o){var n,i,s=0;do i=r+(o-r)/2,n=l(i,e,a)-t,n>0?o=i:r=i;while(Math.abs(n)>h&&++s<v);return i}function d(t){for(var r=0,o=1,n=b-1;o!=n&&w[o]<=t;++o)r+=x;--o;var i=(t-w[o])/(w[o+1]-w[o]),s=r+i*x,l=u(s,e,a);return l>=m?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=o)&&p()}var y=4,m=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===o?t:0===t?0:1===t?1:l(d(t),r,o)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:o}]};var T="generateBezier("+[e,r,a,o]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return y.isString(e)?b.Easings[e]||(r=!1):r=y.isArray(e)&&1===e.length?s.apply(null,e):y.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):y.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e)for(var t=(new Date).getTime(),r=0,o=b.State.calls.length;o>r;r++)if(b.State.calls[r]){var n=b.State.calls[r],s=n[0],l=n[2],u=n[3],d=!!u;u||(u=b.State.calls[r][3]=t-16);for(var g=Math.min((t-u)/l.duration,1),m=0,h=s.length;h>m;m++){var v=s[m],x=v.element;if(i(x)){var P=!1;if(l.display!==a&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var V=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(V,function(e,t){S.setPropertyValue(x,"display",t)})}S.setPropertyValue(x,"display",l.display)}l.visibility!==a&&"hidden"!==l.visibility&&S.setPropertyValue(x,"visibility",l.visibility);for(var C in v)if("element"!==C){var T,k=v[C],A=y.isString(k.easing)?b.Easings[k.easing]:k.easing;if(1===g)T=k.endValue;else if(T=k.startValue+(k.endValue-k.startValue)*A(g),!d&&T===k.currentValue)continue;if(k.currentValue=T,S.Hooks.registered[C]){var F=S.Hooks.getRoot(C),E=i(x).rootPropertyValueCache[F];E&&(k.rootPropertyValue=E)}var j=S.setPropertyValue(x,C,k.currentValue+(0===parseFloat(T)?"":k.unitType),k.rootPropertyValue,k.scrollData);S.Hooks.registered[C]&&(i(x).rootPropertyValueCache[F]=S.Normalizations.registered[F]?S.Normalizations.registered[F]("extract",null,j[1]):j[1]),"transform"===j[0]&&(P=!0)}l.mobileHA&&i(x).transformCache.translate3d===a&&(i(x).transformCache.translate3d="(0px, 0px, 0px)",P=!0),P&&S.flushTransformCache(x)}}l.display!==a&&"none"!==l.display&&(b.State.calls[r][2].display=!1),l.visibility!==a&&"hidden"!==l.visibility&&(b.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(n[1],n[1],g,Math.max(0,u+l.duration-t),u),1===g&&p(r)}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],o=b.State.calls[e][1],n=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||n.loop||("none"===n.display&&S.setPropertyValue(p,"display",n.display),"hidden"===n.visibility&&S.setPropertyValue(p,"visibility",n.visibility)),n.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,o=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(o)&&(d=!0,delete i(p).transformCache[t])}),n.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&n.complete&&!n.loop&&u===c-1)try{n.complete.call(o,o)}catch(g){setTimeout(function(){throw g},1)}s&&n.loop!==!0&&s(o),n.loop!==!0||t||(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),b(p,"reverse",{loop:!0,delay:n.delay})),n.queue!==!1&&f.dequeue(p,n.queue)}b.State.calls[e]=!1;for(var y=0,m=b.State.calls.length;m>y;y++)if(b.State.calls[y]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),y={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},m=!1;if(e.fn&&e.fn.jquery?(f=e,m=!0):f=t.Velocity.Utilities,8>=d&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:y.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},n=t(r,.5*a,o),i=t(r,.5*a,n),s=t(r,a,i),l=1/6*(o.dx+2*(n.dx+i.dx)+s.dx),u=1/6*(o.dv+2*(n.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,o){var n,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,o=o||null,l.tension=e,l.friction=t,n=null!==o,n?(c=a(e,t),i=c/o*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return n?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,o;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],o=a[0].split(" ");var n=a[1].match(S.RegEx.valueSplit);"Color"===o[0]&&(o.push(o.shift()),n.push(n.shift()),S.Hooks.templates[r]=[o.join(" "),n.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],o=a[0].split(" ");for(var e in o){var i=r+o[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],o=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var o,n,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),o=r.toString().match(S.RegEx.valueSplit),o[s]=t,n=o.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var o=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=o?o[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var n=!1;switch(t.substr(0,t.length-1)){case"translate":n=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>o&&(o=1),n=!/(\d)$/i.test(o);break;case"skew":n=!/(deg|\d)$/i.test(o);break;case"rotate":n=!/(deg|\d)$/i.test(o)}return n||(i(r).transformCache[t]="("+o+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return t;case"extract":var n;if(S.RegEx.wrappedValueAlreadyExtracted.test(o))n=o;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?i=s[o]!==a?s[o]:s.black:S.RegEx.isHex.test(o)?i="rgb("+S.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(i=s.black),n=(i||o).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==n.split(" ").length||(n+=" 1"),n;case"inject":return 8>=d?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=d?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),y.isString(b.State.prefixElement.style[o]))return b.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,o,n){function s(e,r){function o(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!n){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return o(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return o(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),(d||b.State.isFirefox)&&"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var y=s(e,"position");("fixed"===y||"absolute"===y&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);o===a&&(o=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(o=S.Normalizations.registered[c]("extract",e,o)),l=S.Hooks.extractValue(u,o)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}return/^[\d-]/.test(l)||(l=i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?/^(height|width)$/i.test(r)?e.getBBox()[r]:e.getAttribute(r):s(e,S.Names.prefixCheck(r)[0])),S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,o,n){var s=r;if("scroll"===r)n.container?n.container["scroll"+n.direction]=a:"Left"===n.direction?t.scrollTo(a,n.alternateValue):t.scrollTo(n.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);o=o||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,o),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var o,n;f.each(i(e).transformCache,function(t){return o=i(e).transformCache[t],"transformPerspective"===t?(n=o,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+o+" "))}),n&&(r="perspective"+n+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var o=a;return e=n(e),f.each(e,function(e,n){if(i(n)===a&&b.init(n),r===a)o===a&&(o=b.CSS.getPropertyValue(n,t));else{var s=b.CSS.setPropertyValue(n,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(n),o=s}}),o};var P=function(){function e(){return l?A.promise||null:d}function s(){function e(){function e(e,t){var r=a,o=a,n=a;return y.isArray(e)?(r=e[0],!y.isArray(e[1])&&/^[\d-]/.test(e[1])||y.isFunction(e[1])||S.RegEx.isHex.test(e[1])?n=e[1]:(y.isString(e[1])&&!S.RegEx.isHex.test(e[1])||y.isArray(e[1]))&&(o=t?e[1]:u(e[1],l.duration),e[2]!==a&&(n=e[2]))):r=e,t||(o=o||l.easing),y.isFunction(r)&&(r=r.call(s,C,V)),y.isFunction(n)&&(n=n.call(s,C,V)),[r||0,o,n]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function g(){var e={myParent:s.parentNode||r.body,position:S.getPropertyValue(s,"position"),fontSize:S.getPropertyValue(s,"fontSize")},a=e.position===R.lastPosition&&e.myParent===R.lastParent,o=e.fontSize===R.lastFontSize;R.lastParent=e.myParent,R.lastPosition=e.position,R.lastFontSize=e.fontSize;var n=100,l={};if(o&&a)l.emToPx=R.lastEmToPx,l.percentToPxWidth=R.lastPercentToPxWidth,l.percentToPxHeight=R.lastPercentToPxHeight;else{var u=i(s).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,n+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",n+"em"),l.percentToPxWidth=R.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/n,l.percentToPxHeight=R.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/n,l.emToPx=R.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/n,e.myParent.removeChild(u)}return null===R.remToPx&&(R.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===R.vwToPx&&(R.vwToPx=parseFloat(t.innerWidth)/100,R.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=R.remToPx,l.vwToPx=R.vwToPx,l.vhToPx=R.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),s),l}if(l.begin&&0===C)try{l.begin.call(m,m)}catch(h){setTimeout(function(){throw h},1)}if("scroll"===F){var P,w,T,k=/^x$/i.test(l.axis)?"Left":"Top",E=parseFloat(l.offset)||0;l.container?y.isWrapped(l.container)||y.isNode(l.container)?(l.container=l.container[0]||l.container,P=l.container["scroll"+k],T=P+f(s).position()[k.toLowerCase()]+E):l.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+k]],w=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===k?"Top":"Left")]],T=f(s).offset()[k.toLowerCase()]+E),p={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:k,alternateValue:w}},element:s},b.debug&&console.log("tweensContainer (scroll): ",p.scroll,s)}else if("reverse"===F){if(!i(s).tweensContainer)return void f.dequeue(s,l.queue);"none"===i(s).opts.display&&(i(s).opts.display="auto"),"hidden"===i(s).opts.visibility&&(i(s).opts.visibility="visible"),i(s).opts.loop=!1,i(s).opts.begin=null,i(s).opts.complete=null,x.easing||delete l.easing,x.duration||delete l.duration,l=f.extend({},i(s).opts,l);var j=f.extend(!0,{},i(s).tweensContainer);for(var H in j)if("element"!==H){var N=j[H].startValue;j[H].startValue=j[H].currentValue=j[H].endValue,j[H].endValue=N,y.isEmptyObject(x)||(j[H].easing=l.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(j[H]),s)}p=j}else if("start"===F){var j;i(s).tweensContainer&&i(s).isAnimating===!0&&(j=i(s).tweensContainer),f.each(v,function(t,r){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(t)){var o=e(r,!0),n=o[0],i=o[1],s=o[2];if(S.RegEx.isHex.test(n)){for(var l=["Red","Green","Blue"],u=S.Values.hexToRgb(n),c=s?S.Values.hexToRgb(s):a,p=0;p<l.length;p++){var f=[u[p]];i&&f.push(i),c!==a&&f.push(c[p]),v[t+l[p]]=f}delete v[t]}}});for(var L in v){var z=e(v[L]),q=z[0],M=z[1],$=z[2];L=S.Names.camelCase(L);var I=S.Hooks.getRoot(L),B=!1;if(i(s).isSVG||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(l.display!==a&&null!==l.display&&"none"!==l.display||l.visibility!==a&&"hidden"!==l.visibility)&&/opacity|filter/.test(L)&&!$&&0!==q&&($=0),l._cacheValues&&j&&j[L]?($===a&&($=j[L].endValue+j[L].unitType),B=i(s).rootPropertyValueCache[I]):S.Hooks.registered[L]?$===a?(B=S.getPropertyValue(s,I),$=S.getPropertyValue(s,L,B)):B=S.Hooks.templates[I][1]:$===a&&($=S.getPropertyValue(s,L));var W,G,D,X=!1;if(W=d(L,$),$=W[0],D=W[1],W=d(L,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],$=parseFloat($)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(L)?(q/=100,G="em"):/^scale/.test(L)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(L)&&(q=q/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==$)if(0===q)G=D;else{n=n||g();var Y=/margin|padding|left|right|width|text|word|letter/i.test(L)||/X$/.test(L)||"x"===L?"x":"y";switch(D){case"%":$*="x"===Y?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:$*=n[D+"ToPx"]}switch(G){case"%":$*=1/("x"===Y?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:$*=1/n[G+"ToPx"]}}switch(X){case"+":q=$+q;break;case"-":q=$-q;break;case"*":q=$*q;break;case"/":q=$/q}p[L]={rootPropertyValue:B,startValue:$,currentValue:$,endValue:q,unitType:G,easing:M},b.debug&&console.log("tweensContainer ("+L+"): "+JSON.stringify(p[L]),s)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}p.element=s}p.element&&(S.Values.addClass(s,"velocity-animating"),O.push(p),""===l.queue&&(i(s).tweensContainer=p,i(s).opts=l),i(s).isAnimating=!0,C===V-1?(b.State.calls.length>1e4&&(b.State.calls=o(b.State.calls)),b.State.calls.push([O,m,l,null,A.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):C++)}var n,s=this,l=f.extend({},b.defaults,x),p={};switch(i(s)===a&&b.init(s),parseFloat(l.delay)&&l.queue!==!1&&f.queue(s,l.queue,function(e){b.velocityQueueEntryFlag=!0,i(s).delayTimer={setTimeout:setTimeout(e,parseFloat(l.delay)),next:e}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=h;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}b.mock!==!1&&(b.mock===!0?l.duration=l.delay=1:(l.duration*=parseFloat(b.mock)||1,l.delay*=parseFloat(b.mock)||1)),l.easing=u(l.easing,l.duration),l.begin&&!y.isFunction(l.begin)&&(l.begin=null),l.progress&&!y.isFunction(l.progress)&&(l.progress=null),l.complete&&!y.isFunction(l.complete)&&(l.complete=null),l.display!==a&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=b.CSS.Values.getDisplayType(s))),l.visibility!==a&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,l.queue===!1?l.delay?setTimeout(e,l.delay):e():f.queue(s,l.queue,function(t,r){return r===!0?(A.promise&&A.resolver(m),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==l.queue&&"fx"!==l.queue||"inprogress"===f.queue(s)[0]||f.dequeue(s)}var l,d,g,m,v,x,w=arguments[0]&&(f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||y.isString(arguments[0].properties));if(y.isWrapped(this)?(l=!1,g=0,m=this,d=this):(l=!0,g=1,m=w?arguments[0].elements:arguments[0]),m=n(m)){w?(v=arguments[0].properties,x=arguments[0].options):(v=arguments[g],x=arguments[g+1]);var V=m.length,C=0;if("stop"!==v&&!f.isPlainObject(x)){var T=g+1;x={};for(var k=T;k<arguments.length;k++)y.isArray(arguments[k])||!/^(fast|normal|slow)$/i.test(arguments[k])&&!/^\d/.test(arguments[k])?y.isString(arguments[k])||y.isArray(arguments[k])?x.easing=arguments[k]:y.isFunction(arguments[k])&&(x.complete=arguments[k]):x.duration=arguments[k]}var A={promise:null,resolver:null,rejecter:null};l&&b.Promise&&(A.promise=new b.Promise(function(e,t){A.resolver=e,A.rejecter=t}));var F;switch(v){case"scroll":F="scroll";break;case"reverse":F="reverse";break;case"stop":f.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var E=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,o){var n=y.isString(x)?x:"";return x!==a&&t[2].queue!==n?!0:void f.each(m,function(t,r){r===o&&(x!==a&&(f.each(f.queue(r,n),function(e,t){y.isFunction(t)&&t(null,!0)}),f.queue(r,n,[])),i(r)&&""===n&&f.each(i(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),E.push(e))})})}),f.each(E,function(e,t){p(t,!0)}),A.promise&&A.resolver(m),e();default:if(!f.isPlainObject(v)||y.isEmptyObject(v)){if(y.isString(v)&&b.Redirects[v]){var j=f.extend({},x),H=j.duration,N=j.delay||0;return j.backwards===!0&&(m=f.extend(!0,[],m).reverse()),f.each(m,function(e,t){parseFloat(j.stagger)?j.delay=N+parseFloat(j.stagger)*e:y.isFunction(j.stagger)&&(j.delay=N+j.stagger.call(t,e,V)),j.drag&&(j.duration=parseFloat(H)||(/^(callout|transition)/.test(v)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/V:(e+1)/V),.75*j.duration,200)),b.Redirects[v].call(t,t,j||{},e,V,m,A.promise?A:a)}),e()}var L="Velocity: First argument ("+v+") was not a property map, a known action, or a registered redirect. Aborting.";return A.promise?A.rejecter(new Error(L)):console.log(L),e()}F="start"}var R={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},O=[];f.each(m,function(e,t){y.isNode(t)&&s.call(t)});var z,j=f.extend({},b.defaults,x);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var q=0;z>q;q++){var M={delay:j.delay,progress:j.progress};q===z-1&&(M.display=j.display,M.visibility=j.visibility,
M.complete=j.complete),P(m,"reverse",M)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,o,n,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,o,n,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=o!==n-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)});