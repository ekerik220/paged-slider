import*as e from"react";import t,{useRef as n,useState as r,useCallback as o,useEffect as i,useMemo as l,cloneElement as a,Children as c}from"react";var u,s=function(e){var t=r(0),n=t[0],o=t[1],l=r(0),a=l[0],c=l[1];return i((function(){var t=new ResizeObserver((function(e){o(e[0].contentRect.width),c(e[0].contentRect.height)}));return e.current&&t.observe(e.current),function(){return t.disconnect()}}),[e]),[n,a]},d=function(e){var t=n(null),l=n(null),a=n([]),c=n(!1),u=s(t)[0],d=s(l)[0],f=r(!0),v=f[0],m=f[1],h=r(!1),p=h[0],w=h[1],g=function(e,t){var l=n(!1),a=n(0),c=n(0),u=r(!1),s=u[0],d=u[1],f=o((function(t){var n=t.pageX;if(l.current){var r=n-a.current;Math.abs(r)>3&&d(!0);var o=n-c.current;c.current=n,e.current.scrollLeft-=o}}),[e]),v=o((function(e){var t=e.pageX;l.current=!0,a.current=t,c.current=t}),[]),m=o((function(){l.current=!1,d(!1)}),[]),h=o((function(){var t=e.current;t&&(t.addEventListener("mousedown",v),window.addEventListener("mousemove",f),window.addEventListener("mouseup",m))}),[e,v,f,m]),p=o((function(){var t=e.current;t&&(t.removeEventListener("mousedown",v),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m))}),[e,v,f,m]);return i((function(){if(window)return t?h():p(),function(){return p()}}),[t,h,p]),s}(t,e),b=o((function(){var e,n,r=null!==(n=null===(e=t.current)||void 0===e?void 0:e.scrollLeft)&&void 0!==n?n:0;m(0===r),w(r>=d-u)}),[d,u]),_=function(e){var n;return null===(n=t.current)||void 0===n?void 0:n.scrollTo({left:e,behavior:"smooth"})};i((function(){var e=t.current;return null==e||e.addEventListener("scroll",b),function(){return null==e?void 0:e.removeEventListener("scroll",b)}}),[b]);return{itemsContainerRef:l,itemsContainerWidth:d,visibleContainerRef:t,visibleContainerWidth:u,atStart:v,atEnd:p,dragging:g,updatePositionList:function(e,t,n,r,o){a.current[e]={width:t,height:n,x:r,y:o}},onLeftButtonClick:function(){if(t.current){var e=t.current.scrollLeft,n=a.current.findIndex((function(t){return e>t.x&&e<t.x+t.width})),r=n;if(-1===n){var o=a.current.findIndex((function(t){return t.x>=e}));r=Math.max(0,o-1)}for(var i=r,l=r;l>=0;l--){if(0===l){i=0;break}var c=a.current[r];if(!(Math.abs(c.x+c.width-a.current[l].x)<=u))break;i=l}_(a.current[i].x)}},onRightButtonClick:function(){if(t.current){var e=t.current.scrollLeft+u,n=a.current.find((function(t){return e>=t.x&&e<t.x+t.width}));n&&(e=n.x),e=Math.min(d-u,e),_(e)}},onReturnToStartButtonClick:function(){c.current||_(0)}}},f=function(e){var r=e.preventTaps,o=e.updatePositionList,l=e.children,a=n(null),c=s(a),u=c[0],d=c[1];return i((function(){var e,t,n,r,i=null!==(t=null===(e=a.current)||void 0===e?void 0:e.offsetLeft)&&void 0!==t?t:0,l=null!==(r=null===(n=a.current)||void 0===n?void 0:n.offsetTop)&&void 0!==r?r:0;o(u,d,i,l)}),[o,u,d]),t.createElement("div",{ref:a,style:{pointerEvents:r?"none":void 0,userSelect:"none"}},l)};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}const m=t=>e.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#fff",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"#fff"}},t),u||(u=e.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 0 1 0 1.414L9.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z",clipRule:"evenodd",stroke:"none"})));var h;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const w=t=>e.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#fff",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"#fff"}},t),h||(h=e.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z",clipRule:"evenodd",stroke:"none"})));var g;function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}const _=t=>e.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#fff",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"#fff"}},t),g||(g=e.createElement("path",{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1 0 1.414zm-6 0a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L5.414 10l4.293 4.293a1 1 0 0 1 0 1.414z",clipRule:"evenodd",stroke:"none"})));function x(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var y="button-module_rightPositioned__34i8V",C="button-module_leftPositioned__PxsTg",E="button-module_button__QVO9x";x('.button-module_rightPositioned__34i8V, .button-module_leftPositioned__PxsTg {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.button-module_leftPositioned__PxsTg {\n  left: 10px;\n}\n\n.button-module_rightPositioned__34i8V {\n  right: 10px;\n}\n\n.button-module_button__QVO9x {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  width: 40px;\n  height: 40px;\n  font-size: 30px;\n  background-color: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: "opacity 0.2s";\n}\n\n.button-module_button__QVO9x:hover {\n  opacity: 0.6;\n}');var L=function(e){var n=e.type,r=e.override,o=e.onClick,i=l((function(){switch(n){case"left":return{style:"".concat(C," ").concat(E),overrideStyle:C,icon:t.createElement(m,null),ariaLabel:"scroll left"};case"right":return{style:"".concat(y," ").concat(E),overrideStyle:y,icon:t.createElement(w,null),ariaLabel:"scroll right"};case"returnToStart":return{style:"".concat(y," ").concat(E),overrideStyle:y,icon:t.createElement(_,null),ariaLabel:"scroll to start"}}}),[n]),c=i.style,u=i.overrideStyle,s=i.icon,d=i.ariaLabel;return r?t.cloneElement(r,{className:u,ariaLabel:d,onClick:o}):t.createElement("button",{className:c,"aria-label":d,onClick:o},a(s,{color:"white"}))},k=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},S="pagedScroller-module_wrapper__zoXwx",T="pagedScroller-module_visibleContainer__N4iDD",P="pagedScroller-module_itemsContainer__NT1kQ";x(".pagedScroller-module_wrapper__zoXwx {\n  position: relative;\n  width: var(--width);\n  max-width: var(--itemsContainerWidth);\n}\n\n.pagedScroller-module_visibleContainer__N4iDD {\n  overflow: var(--overflow);\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.pagedScroller-module_visibleContainer__N4iDD::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.pagedScroller-module_itemsContainer__NT1kQ {\n  display: inline-flex;\n  column-gap: var(--itemGap);\n}");var R=function(e){var n=e.width,r=void 0===n?"100%":n,o=e.itemGap,i=void 0===o?0:o,l=e.showArrows,a=void 0===l?!k():l,u=e.enableDrag,s=void 0===u?k():u,v=e.scrollLeftButton,m=e.scrollRightButton,h=e.returnToStartButton,p=e.children,w=d(s),g=w.visibleContainerRef,b=w.visibleContainerWidth,_=w.itemsContainerRef,x=w.itemsContainerWidth,y=w.atStart,C=w.atEnd,E=w.dragging,R=w.updatePositionList,B=w.onLeftButtonClick,O=w.onRightButtonClick,N=w.onReturnToStartButtonClick;return t.createElement("div",{className:S,style:{"--width":r,"--itemsContainerWidth":"".concat(x,"px"),"--itemGap":"".concat(i,"px"),"--overflow":s?"auto":"hidden"}},t.createElement("div",{ref:g,className:T},t.createElement("div",{ref:_,className:P},c.map(p,(function(e,n){return t.createElement(f,{preventTaps:E,updatePositionList:function(e,t,r,o){return R(n,e,t,r,o)}},e)})))),a&&b!==x&&t.createElement(t.Fragment,null,!y&&t.createElement(L,{type:"left",override:v,onClick:B}),C?t.createElement(L,{type:"returnToStart",override:h,onClick:N}):t.createElement(L,{type:"right",override:m,onClick:O})))};export{R as PagedScroller};
//# sourceMappingURL=index.js.map
