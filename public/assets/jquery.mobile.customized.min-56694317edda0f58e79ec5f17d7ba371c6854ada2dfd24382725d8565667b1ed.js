window.define=function(){Array.prototype.slice.call(arguments).pop()(window.jQuery)},define(["jquery"],function(){!function(e,t){if(e.cleanData){var n=e.cleanData;e.cleanData=function(t){for(var i,o=0;null!=(i=t[o]);o++)e(i).triggerHandler("remove");n(t)}}else{var i=e.fn.remove;e.fn.remove=function(t,n){return this.each(function(){return n||t&&!e.filter(t,[this]).length||e("*",this).add([this]).each(function(){e(this).triggerHandler("remove")}),i.call(e(this),t,n)})}}e.widget=function(t,n,i){var o,r=t.split(".")[0];t=t.split(".")[1],o=r+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][o]=function(n){return!!e.data(n,t)},e[r]=e[r]||{},e[r][t]=function(e,t){arguments.length&&this._createWidget(e,t)};var a=new n;a.options=e.extend(!0,{},a.options),e[r][t].prototype=e.extend(!0,a,{namespace:r,widgetName:t,widgetEventPrefix:e[r][t].prototype.widgetEventPrefix||t,widgetBaseClass:o},i),e.widget.bridge(t,e[r][t])},e.widget.bridge=function(n,i){e.fn[n]=function(o){var r="string"==typeof o,a=Array.prototype.slice.call(arguments,1),s=this;return o=!r&&a.length?e.extend.apply(null,[!0,o].concat(a)):o,r&&"_"===o.charAt(0)?s:(r?this.each(function(){var i=e.data(this,n);if(!i)throw"cannot call methods on "+n+" prior to initialization; attempted to call method '"+o+"'";if(!e.isFunction(i[o]))throw"no such method '"+o+"' for "+n+" widget instance";var r=i[o].apply(i,a);return r!==i&&r!==t?(s=r,!1):void 0}):this.each(function(){var t=e.data(this,n);t?t.option(o||{})._init():e.data(this,n,new i(o,this))}),s)}},e.Widget=function(e,t){arguments.length&&this._createWidget(e,t)},e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(t,n){e.data(n,this.widgetName,this),this.element=e(n),this.options=e.extend(!0,{},this.options,this._getCreateOptions(),t);var i=this;this.element.bind("remove."+this.widgetName,function(){i.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){var t={};return e.metadata&&(t=e.metadata.get(element)[this.widgetName]),t},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(n,i){var o=n;if(0===arguments.length)return e.extend({},this.options);if("string"==typeof n){if(i===t)return this.options[n];o={},o[n]=i}return this._setOptions(o),this},_setOptions:function(t){var n=this;return e.each(t,function(e,t){n._setOption(e,t)}),this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&this.widget()[t?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",t),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(t,n,i){var o=this.options[t];if(n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i=i||{},n.originalEvent)for(var r,a=e.event.props.length;a;)r=e.event.props[--a],n[r]=n.originalEvent[r];return this.element.trigger(n,i),!(e.isFunction(o)&&o.call(this.element[0],n,i)===!1||n.isDefaultPrevented())}}}(jQuery)}),define(["jquery","./jquery.ui.widget"],function(){!function(e,t){e.widget("mobile.widget",{_createWidget:function(){e.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_getCreateOptions:function(){var n=this.element,i={};return e.each(this.options,function(e){var o=n.jqmData(e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}));o!==t&&(i[e]=o)}),i},enhanceWithin:function(t){var n=e.mobile.closestPageData(e(t)),i=n&&n.keepNativeSelector()||"";e(this.options.initSelector,t).not(i)[this.widgetName]()}})}(jQuery)}),define(["jquery","./jquery.mobile.core"],function(){!function(e){var t=(e(window),e("html"));e.mobile.media=function(){var n={},i=e("<div id='jquery-mediatest'>"),o=e("<body>").append(i);return function(e){if(!(e in n)){var r=document.createElement("style"),a="@media "+e+" { #jquery-mediatest { position:absolute; } }";r.type="text/css",r.styleSheet?r.styleSheet.cssText=a:r.appendChild(document.createTextNode(a)),t.prepend(o).prepend(r),n[e]="absolute"===i.css("position"),o.add(r).remove()}return n[e]}}()}(jQuery)}),define(["jquery","./jquery.mobile.media"],function(){!function(e,t){function n(){var t,n,i=location.protocol+"//"+location.host+location.pathname+"ui-dir/",o=e("head base"),r=null,a="";return o.length?a=o.attr("href"):o=r=e("<base>",{href:i}).appendTo("head"),t=e("<a href='testurl' />").prependTo(s),n=t[0].href,o[0].href=a||location.pathname,r&&r.remove(),0===n.indexOf(i)}function o(){var t="transform-3d";return r("perspective","10px","moz")||e.mobile.media("(-"+c.join("-"+t+"),(-")+"-"+t+"),("+t+")")}function r(e,t,n){var o,r=document.createElement("div"),a=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},s=function(e){return"-"+e.charAt(0).toLowerCase()+e.substr(1)+"-"},u=function(n){var i=s(n)+e+": "+t+";",u=a(n),c=u+a(e);r.setAttribute("style",i),r.style[c]&&(o=!0)},l=n?[n]:c;for(i=0;i<l.length;i++)u(l[i]);return!!o}function a(e){var n=e.charAt(0).toUpperCase()+e.substr(1),i=(e+" "+c.join(n+" ")+n).split(" ");for(var o in i)if(u[i[o]]!==t)return!0}var s=e("<body>").prependTo("html"),u=s[0].style,c=["Webkit","Moz","O"],l="palmGetResource"in window,d=window.operamini&&"[object OperaMini]"==={}.toString.call(window.operamini),h=window.blackberry;e.extend(e.mobile,{browser:{}}),e.mobile.browser.ie=function(){for(var e=3,t=document.createElement("div"),n=t.all||[];t.innerHTML="<!--[if gt IE "+ ++e+"]><br><![endif]-->",n[0];);return e>4?e:!e}(),e.extend(e.support,{orientation:"orientation"in window&&"onorientationchange"in window,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window||r("transition","height 100ms linear"),pushState:"pushState"in history&&"replaceState"in history,mediaquery:e.mobile.media("only all"),cssPseudoElement:!!a("content"),touchOverflow:!!a("overflowScrolling"),cssTransform3d:o(),boxShadow:!!a("boxShadow")&&!h,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement||"scrollTop"in s[0])&&!l&&!d,dynamicBaseTag:n()}),s.remove();var p=function(){var e=window.navigator.userAgent;return e.indexOf("Nokia")>-1&&(e.indexOf("Symbian/3")>-1||e.indexOf("Series60/5")>-1)&&e.indexOf("AppleWebKit")>-1&&e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}();e.mobile.ajaxBlacklist=window.blackberry&&!window.WebKitPoint||d||p,p&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-mobile-nosupport-boxshadow")}(jQuery)}),define(["jquery"],function(){!function(e,t,n,i){function o(t){var n=t.substr(1);return{setup:function(){a(this)||e.data(this,E,{});var i=e.data(this,E);i[t]=!0,A[t]=(A[t]||0)+1,1===A[t]&&L.bind(n,d),e(this).bind(n,r),z&&(A.touchstart=(A.touchstart||0)+1,1===A.touchstart&&L.bind("touchstart",l).bind("touchend",s).bind("touchmove",u).bind("scroll",c))},teardown:function(){--A[t],A[t]||L.unbind(n,d),z&&(--A.touchstart,A.touchstart||L.unbind("touchstart",l).unbind("touchmove",u).unbind("touchend",s).unbind("scroll",c));var i=e(this),o=e.data(this,E);o&&(o[t]=!1),i.unbind(n,r),a(this)||i.removeData(E)}}}function r(){}function a(t){var n,i=e.data(t,E);if(i)for(n in i)if(i[n])return!0;return!1}function s(e){if(!k){g();var t,n=y(e.target);if(h("vmouseup",e,n),!O){var i=h("vclick",e,n);i&&i.isDefaultPrevented()&&(t=T(e).changedTouches[0],S.push({touchID:B,x:t.clientX,y:t.clientY}),W=!0)}h("vmouseout",e,n),O=!1,f()}}function u(t){if(!k){var n=T(t).touches[0],i=O,o=e.vmouse.moveDistanceThreshold;O=O||Math.abs(n.pageX-_)>o||Math.abs(n.pageY-q)>o,flags=y(t.target),O&&!i&&h("vmousecancel",t,flags),h("vmousemove",t,flags),f()}}function c(e){k||(O||h("vmousecancel",e,y(e.target)),O=!0,f())}function l(t){var n,i,o=T(t).touches;if(o&&1===o.length&&(n=t.target,i=y(n),i.hasVirtualBinding)){B=I++,e.data(n,j,B),p(),m(),O=!1;var r=T(t).touches[0];_=r.pageX,q=r.pageY,h("vmouseover",t,i),h("vmousedown",t,i)}}function d(t){var n=e.data(t.target,j);if(!(W||B&&B===n)){var i=h("v"+t.type,t);i&&(i.isDefaultPrevented()&&t.preventDefault(),i.isPropagationStopped()&&t.stopPropagation(),i.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function h(t,n,i){var o;return(i&&i[t]||!i&&w(n.target,t))&&(o=D(n,t),e(n.target).trigger(o)),o}function p(){M&&(clearTimeout(M),M=0)}function f(){p(),M=setTimeout(function(){M=0,v()},e.vmouse.resetTimerDuration)}function m(){b()}function v(){B=0,S.length=0,W=!1,g()}function g(){k=!0}function b(){k=!1}function w(t,n){for(var i;t;){if(i=e.data(t,E),i&&(!n||i[n]))return t;t=t.parentNode}return null}function y(t){for(var n,i,o={};t;){n=e.data(t,E);for(i in n)n[i]&&(o[i]=o.hasVirtualBinding=!0);t=t.parentNode}return o}function D(t,n){var o,r,a,s,u,c,l,d,h=t.type;if(t=e.Event(t),t.type=n,o=t.originalEvent,r=e.event.props,h.search(/mouse/)>-1&&(r=C),o)for(l=r.length,s;l;)s=r[--l],t[s]=o[s];if(h.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),-1!==h.search(/^touch/)&&(a=T(o),h=a.touches,u=a.changedTouches,c=h&&h.length?h[0]:u&&u.length?u[0]:i))for(d=0,len=x.length;d<len;d++)s=x[d],t[s]=c[s];return t}function T(e){for(;e&&"undefined"!=typeof e.originalEvent;)e=e.originalEvent;return e}var E="virtualMouseBindings",j="virtualTouchID",N="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),x="clientX clientY pageX pageY screenX screenY".split(" "),P=e.event.mouseHooks?e.event.mouseHooks.props:[],C=e.event.props.concat(P),A={},M=0,_=0,q=0,O=!1,S=[],W=!1,k=!1,z="addEventListener"in n,L=e(n),I=1,B=0;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var U=0;U<N.length;U++)e.event.special[N[U]]=o(N[U]);z&&n.addEventListener("click",function(t){var n,i,o,r,a,s,u=S.length,c=t.target;if(u)for(n=t.clientX,i=t.clientY,threshold=e.vmouse.clickDistanceThreshold,o=c;o;){for(r=0;u>r;r++)if(a=S[r],s=0,o===c&&Math.abs(a.x-n)<threshold&&Math.abs(a.y-i)<threshold||e.data(o,j)===a.touchID)return t.preventDefault(),void t.stopPropagation();o=o.parentNode}},!0)}(jQuery,window,document)}),define(["jquery","./jquery.mobile.core","./jquery.mobile.media","./jquery.mobile.support","./jquery.mobile.vmouse"],function(){!function(e,t,n){function i(t,n,i){var o=i.type;i.type=n,e.event.handle.call(t,i),i.type=o}e.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn[n]=!0});var o=e.support.touch,r="touchmove scroll",a=o?"touchstart":"mousedown",s=o?"touchend":"mouseup",u=o?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){n=t,i(a,n?"scrollstart":"scrollstop",e)}var n,o,a=this,s=e(a);s.bind(r,function(i){e.event.special.scrollstart.enabled&&(n||t(i,!0),clearTimeout(o),o=setTimeout(function(){t(i,!1)},50))})}},e.event.special.tap={setup:function(){var t=this,n=e(t);n.bind("vmousedown",function(o){function r(e){a(),c==e.target&&i(t,"tap",e)}function a(){s(),n.unbind("vclick",r).unbind("vmouseup",s),e(document).unbind("vmousecancel",a)}function s(){clearTimeout(u)}if(o.which&&1!==o.which)return!1;var u,c=o.target;o.originalEvent;n.bind("vmouseup",s).bind("vclick",r),e(document).bind("vmousecancel",a),u=setTimeout(function(){i(t,"taphold",e.Event("taphold"))},750)})}},e.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var t=this,i=e(t);i.bind(a,function(t){function o(t){if(c){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t;r={time:(new Date).getTime(),coords:[n.pageX,n.pageY]},Math.abs(c.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()}}var r,a=t.originalEvent.touches?t.originalEvent.touches[0]:t,c={time:(new Date).getTime(),coords:[a.pageX,a.pageY],origin:e(t.target)};i.bind(u,o).one(s,function(){i.unbind(u,o),c&&r&&r.time-c.time<e.event.special.swipe.durationThreshold&&Math.abs(c.coords[0]-r.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(c.coords[1]-r.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&c.origin.trigger("swipe").trigger(c.coords[0]>r.coords[0]?"swipeleft":"swiperight"),c=r=n})})}},function(e,t){function n(){var e=o();e!==r&&(r=e,u.trigger("orientationchange"))}var i,o,r,a,s,u=e(t),c={0:!0,180:!0};e.support.orientation&&(a=e.mobile.media("all and (orientation: landscape)"),s=c[t.orientation],(a&&s||!a&&!s)&&(c={"-90":!0,90:!0})),e.event.special.orientationchange=i={setup:function(){return e.support.orientation&&e.mobile.orientationChangeEnabled?!1:(r=o(),void u.bind("throttledresize",n))},teardown:function(){return e.support.orientation&&e.mobile.orientationChangeEnabled?!1:void u.unbind("throttledresize",n)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=o(),t.apply(this,arguments)}}},e.event.special.orientationchange.orientation=o=function(){var n=!0,i=document.documentElement;return n=e.support.orientation?c[t.orientation]:i&&i.clientWidth/i.clientHeight<1.1,n?"portrait":"landscape"}}(jQuery,t),function(){e.event.special.throttledresize={setup:function(){e(this).bind("resize",r)},teardown:function(){e(this).unbind("resize",r)}};var t,n,i,o=250,r=function(){n=(new Date).getTime(),i=n-a,i>=o?(a=n,e(this).trigger("throttledresize")):(t&&clearTimeout(t),t=setTimeout(r,o-i))},a=0}(),e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})}(jQuery,this)}),define(["jquery","../external/requirejs/text!../version.txt","./jquery.mobile.widget"],function(e,t){!function(e,n){var i={};e.mobile=e.extend({},{version:t,ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:10,touchOverflowEnabled:!1,defaultDialogTransition:"pop",loadingMessage:"loading",pageLoadErrorMessage:"Error Loading Page",loadingMessageTextVisible:!1,loadingMessageTheme:"a",pageLoadErrorMessageTheme:"e",autoInitializePage:!0,pushStateEnabled:!0,orientationChangeEnabled:!0,gradeA:function(){return e.support.mediaquery||e.mobile.browser.ie&&e.mobile.browser.ie>=7},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(t){"number"!==e.type(t)&&(t=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){n.scrollTo(0,t),e(document).trigger("silentscroll",{x:0,y:t})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},nsNormalizeDict:i,nsNormalize:function(t){return t?i[t]||(i[t]=e.camelCase(e.mobile.ns+t)):void 0},getInheritedTheme:function(e,t){for(var n,i,o=e[0],r="",a=/ui-(bar|body)-([a-z])\b/;o;){var n=o.className||"";if((i=a.exec(n))&&(r=i[2]))break;o=o.parentNode}return r||t||"a"},closestPageData:function(e){return e.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page")}},e.mobile),e.fn.jqmData=function(t,n){var i;return"undefined"!=typeof t&&(i=this.data(t?e.mobile.nsNormalize(t):t,n)),i},e.jqmData=function(t,n,i){var o;return"undefined"!=typeof n&&(o=e.data(t,n?e.mobile.nsNormalize(n):n,i)),o},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.fn.removeWithDependents=function(){e.removeWithDependents(this)},e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.fn.addDependents=function(t){e.addDependents(e(this),t)},e.addDependents=function(t,n){var i=e(t).jqmData("dependents")||e();e(t).jqmData("dependents",e.merge(i,n))},e.fn.getEncodedText=function(){return e("<div/>").text(e(this).text()).html()};var o=e.find,r=/:jqmData\(([^)]*)\)/g;e.find=function(t,n,i,a){return t=t.replace(r,"[data-"+(e.mobile.ns||"")+"$1]"),o.call(this,t,n,i,a)},e.extend(e.find,o),e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0}}(jQuery,this)});