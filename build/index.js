module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("react")},function(e,t,n){var r=n(2),o=n(3),a=n(4);e.exports=function(e,t){return r(e)||o(e,t)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),i=n.n(a),l=function(e){var t=e.color,n=void 0===t?"#fff":t;return i.a.createElement("div",{className:"AnimatedShowMore__ShadowOverlay",style:{backgroundImage:"linear-gradient(to bottom, transparent, ".concat(n,")"),position:"absolute",bottom:0,left:0,width:"100%",height:60}})},u=function(e){var t=e.isOpen;return i.a.createElement("span",{className:"AnimatedShowMore__DefaultToggle"},t?"Show less":"Show more")},c=function(e){var t=e.height,n=e.animationSpeed,r=void 0===n?300:n,o=e.children;return i.a.createElement("div",{className:"AnimatedShowMore__MainContent",style:{overflow:"hidden",maxHeight:"".concat(t,"px"),transition:"max-height ".concat(r,"ms linear")}},o)},d=function(e){var t=e.toggle,n=e.height,r=void 0===n?200:n,d=e.shadowColor,f=e.speed,s=e.children,p=t||u,m=function(){var e=Object(a.useState)(null),t=o()(e,2),n=t[0],r=t[1];return[n,Object(a.useCallback)(function(e){null!==e&&r(e.getBoundingClientRect())},[])]}(),h=o()(m,2),v=h[0],b=h[1],y=v?v.height:0,g=Object(a.useState)(r),S=o()(g,2),w=S[0],x=S[1],O=Object(a.useState)(!1),_=o()(O,2),j=_[0],E=_[1],M=y!==r&&r<y&&!j,A=j||M;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},M&&i.a.createElement(l,{color:d}),i.a.createElement(c,{height:w,animationSpeed:f},s),i.a.createElement("div",{ref:b,style:{opacity:0,position:"absolute",top:0},"aria-hidden":"true"},s)),A&&i.a.createElement("button",{className:"AnimatedShowMore__ToggleButton",style:{display:"block",border:"none",outline:"none",background:"transparent",padding:0,color:"inherit",font:"inherit"},onClick:function(){w===r?(x(y),E(!0)):(x(r),E(!1))}},i.a.createElement(p,{isOpen:j})))};d.displayName="AnimatedShowMore",n.d(t,"default",function(){return d})}]);