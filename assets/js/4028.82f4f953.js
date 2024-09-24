"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4028],{4028:(t,e,i)=>{i.d(e,{A:()=>L});var o=i(6540),n=i(961);const a=(t,e)=>t===e?.tagName?.toUpperCase?.(),s=t=>a("DIV",t)||a("SPAN",t),r=t=>a("IMG",t),h=t=>t.complete&&0!==t.naturalHeight,l=t=>a("SVG",t),d=({height:t,offset:e,width:i})=>Math.min((window.innerWidth-2*e)/i,(window.innerHeight-2*e)/t),c=({containerHeight:t,containerWidth:e,hasScalableSrc:i,offset:o,targetHeight:n,targetWidth:a})=>t&&e?!i&&n&&a?(({containerHeight:t,containerWidth:e,offset:i,targetHeight:o,targetWidth:n})=>{const a=d({height:o,offset:i,width:n}),s=n>o?n/e:o/t;return a>1?s:a*s})({containerHeight:t,containerWidth:e,offset:o,targetHeight:n,targetWidth:a}):d({height:t,offset:o,width:e}):1,m=/url(?:\(['"]?)(.*?)(?:['"]?\))/,g=t=>{if(t){if(r(t))return t.currentSrc;if(s(t)){const e=window.getComputedStyle(t).backgroundImage;if(e)return m.exec(e)?.[1]}}},u=({position:t,relativeNum:e})=>{const i=parseFloat(t);return t.endsWith("%")?e*i/100:i},f=/\.svg$/i,v=({hasZoomImg:t,imgSrc:e,isSvg:i,isZoomed:o,loadedImgEl:n,offset:a,shouldRefresh:r,targetEl:h})=>{const l=i||"data:image/svg+xml"===e?.slice?.(0,18)||t||!(!e||!f.test(e)),d=h.getBoundingClientRect(),m=window.getComputedStyle(h),g=null!=n&&s(h),v=null!=n&&!g,p=(({containerHeight:t,containerLeft:e,containerTop:i,containerWidth:o,hasScalableSrc:n,offset:a,targetHeight:s,targetWidth:r})=>{const h=c({containerHeight:t,containerWidth:o,hasScalableSrc:n,offset:a,targetHeight:s,targetWidth:r});return{top:i,left:e,width:o*h,height:t*h,transform:`translate(0,0) scale(${1/h})`}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,offset:a,targetHeight:n?.naturalHeight||d.height,targetWidth:n?.naturalWidth||d.width}),w=v?(({containerHeight:t,containerLeft:e,containerTop:i,containerWidth:o,hasScalableSrc:n,objectFit:a,objectPosition:s,offset:r,targetHeight:h,targetWidth:l})=>{if("scale-down"===a&&(a=l<=o&&h<=t?"none":"contain"),"cover"===a||"contain"===a){const d=o/l,m=t/h,g="cover"===a?Math.max(d,m):Math.min(d,m),[f="50%",v="50%"]=s.split(" "),p=u({position:f,relativeNum:o-l*g}),w=u({position:v,relativeNum:t-h*g}),E=c({containerHeight:h*g,containerWidth:l*g,hasScalableSrc:n,offset:r,targetHeight:h,targetWidth:l});return{top:i+w,left:e+p,width:l*g*E,height:h*g*E,transform:`translate(0,0) scale(${1/E})`}}if("none"===a){const[a="50%",d="50%"]=s.split(" "),m=u({position:a,relativeNum:o-l}),g=u({position:d,relativeNum:t-h}),f=c({containerHeight:h,containerWidth:l,hasScalableSrc:n,offset:r,targetHeight:h,targetWidth:l});return{top:i+g,left:e+m,width:l*f,height:h*f,transform:`translate(0,0) scale(${1/f})`}}if("fill"===a){const e=o/l,i=t/h,a=Math.max(e,i),s=c({containerHeight:h*a,containerWidth:l*a,hasScalableSrc:n,offset:r,targetHeight:h,targetWidth:l});return{width:o*s,height:t*s,transform:`translate(0,0) scale(${1/s})`}}return{}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,objectFit:m.objectFit,objectPosition:m.objectPosition,offset:a,targetHeight:n?.naturalHeight||d.height,targetWidth:n?.naturalWidth||d.width}):void 0,E=g?(({backgroundPosition:t,backgroundSize:e,containerHeight:i,containerLeft:o,containerTop:n,containerWidth:a,hasScalableSrc:s,offset:r,targetHeight:h,targetWidth:l})=>{if("cover"===e||"contain"===e){const d=a/l,m=i/h,g="cover"===e?Math.max(d,m):Math.min(d,m),[f="50%",v="50%"]=t.split(" "),p=u({position:f,relativeNum:a-l*g}),w=u({position:v,relativeNum:i-h*g}),E=c({containerHeight:h*g,containerWidth:l*g,hasScalableSrc:s,offset:r,targetHeight:h,targetWidth:l});return{top:n+w,left:o+p,width:l*g*E,height:h*g*E,transform:`translate(0,0) scale(${1/E})`}}if("auto"===e){const[e="50%",d="50%"]=t.split(" "),m=u({position:e,relativeNum:a-l}),g=u({position:d,relativeNum:i-h}),f=c({containerHeight:h,containerWidth:l,hasScalableSrc:s,offset:r,targetHeight:h,targetWidth:l});return{top:n+g,left:o+m,width:l*f,height:h*f,transform:`translate(0,0) scale(${1/f})`}}{const[d="50%",m="50%"]=e.split(" "),g=u({position:d,relativeNum:a})/l,f=u({position:m,relativeNum:i})/h,v=Math.min(g,f),[p="50%",w="50%"]=t.split(" "),E=u({position:p,relativeNum:a-l*v}),S=u({position:w,relativeNum:i-h*v}),b=c({containerHeight:h*v,containerWidth:l*v,hasScalableSrc:s,offset:r,targetHeight:h,targetWidth:l});return{top:n+S,left:o+E,width:l*v*b,height:h*v*b,transform:`translate(0,0) scale(${1/b})`}}})({backgroundPosition:m.backgroundPosition,backgroundSize:m.backgroundSize,containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,offset:a,targetHeight:n?.naturalHeight||d.height,targetWidth:n?.naturalWidth||d.width}):void 0,S=Object.assign({},p,w,E);if(o){const t=window.innerWidth/2,e=window.innerHeight/2,i=t-(parseFloat(String(S.left||0))+parseFloat(String(S.width||0))/2),o=e-(parseFloat(String(S.top||0))+parseFloat(String(S.height||0))/2);r&&(S.transitionDuration="0.01ms"),S.transform=`translate(${i}px,${o}px) scale(1)`}return S},p=t=>{if(!t)return{};if(l(t)){const e=t.parentElement,i=t.getBoundingClientRect();if(e){const t=e.getBoundingClientRect();return{height:i.height,left:t.left-i.left,top:t.top-i.top,width:i.width}}return{height:i.height,left:i.left,width:i.width,top:i.top}}return{height:t.offsetHeight,left:t.offsetLeft,width:t.offsetWidth,top:t.offsetTop}},w=["img","svg",'[role="img"]',"[data-zoom]"].map((t=>`${t}:not([aria-hidden="true"])`)).join(","),E={overflow:"",width:""};function S(t){return o.createElement(b,{...t})}class b extends o.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1,styleGhost:{}},this.refContent=o.createRef(),this.refDialog=o.createRef(),this.refModalContent=o.createRef(),this.refModalImg=o.createRef(),this.refWrap=o.createRef(),this.imgEl=null,this.isScaling=!1,this.prevBodyAttrs=E,this.styleModalImg={},this.getDialogContainer=()=>{let t=document.querySelector("[data-rmiz-portal]");return null==t&&(t=document.createElement("div"),t.setAttribute("data-rmiz-portal",""),document.body.appendChild(t)),t},this.setId=()=>{const t=()=>Math.random().toString(16).slice(-4);this.setState({id:t()+t()+t()})},this.setAndTrackImg=()=>{const t=this.refContent.current;t&&(this.imgEl=t.querySelector(w),this.imgEl?(this.contentNotFoundChangeObserver?.disconnect?.(),this.imgEl.addEventListener("load",this.handleImgLoad),this.imgEl.addEventListener("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElResizeObserver=new ResizeObserver((t=>{const e=t[0];e?.target&&(this.imgEl=e.target,this.setState({styleGhost:p(this.imgEl)}))})),this.imgElResizeObserver.observe(this.imgEl),this.contentChangeObserver||(this.contentChangeObserver=new MutationObserver((()=>{this.setState({styleGhost:p(this.imgEl)})})),this.contentChangeObserver.observe(t,{attributes:!0,childList:!0,subtree:!0}))):this.contentNotFoundChangeObserver||(this.contentNotFoundChangeObserver=new MutationObserver(this.setAndTrackImg),this.contentNotFoundChangeObserver.observe(t,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=t=>{const{isZoomed:e}=this.props;!t&&e?this.zoom():t&&!e&&this.unzoom()},this.handleImgLoad=()=>{const t=g(this.imgEl);if(!t)return;const e=new Image;r(this.imgEl)&&(e.sizes=this.imgEl.sizes,e.srcset=this.imgEl.srcset),e.src=t;const i=()=>{this.setState({loadedImgEl:e,styleGhost:p(this.imgEl)})};e.decode().then(i).catch((()=>{h(e)?i():e.onload=i}))},this.handleZoom=()=>{this.hasImage()&&this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleDialogCancel=t=>{t.preventDefault()},this.handleDialogClick=t=>{t.target!==this.refModalContent.current&&t.target!==this.refModalImg.current||this.handleUnzoom()},this.handleKeyDown=t=>{"Escape"!==t.key&&27!==t.keyCode||(t.preventDefault(),t.stopPropagation(),this.handleUnzoom())},this.handleWheel=t=>{t.ctrlKey||(t.stopPropagation(),queueMicrotask((()=>{this.handleUnzoom()})))},this.handleTouchStart=t=>{t.touches.length>1?this.isScaling=!0:1===t.changedTouches.length&&t.changedTouches[0]&&(this.touchYStart=t.changedTouches[0].screenY)},this.handleTouchMove=t=>{const e=window.visualViewport?.scale??1;if(this.props.canSwipeToUnzoom&&!this.isScaling&&e<=1&&null!=this.touchYStart&&t.changedTouches[0]){this.touchYEnd=t.changedTouches[0].screenY;const e=Math.max(this.touchYStart,this.touchYEnd),i=Math.min(this.touchYStart,this.touchYEnd);Math.abs(e-i)>this.props.swipeToUnzoomThreshold&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchEnd=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleTouchCancel=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.hasImage=()=>this.imgEl&&(this.state.loadedImgEl||l(this.imgEl))&&"none"!==window.getComputedStyle(this.imgEl).display,this.zoom=()=>{this.bodyScrollDisable(),this.refDialog.current?.showModal?.(),this.setState({modalState:"LOADING"}),this.loadZoomImg(),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleZoomEnd,{once:!0})},this.handleZoomEnd=()=>{setTimeout((()=>{this.setState({modalState:"LOADED"}),window.addEventListener("resize",this.handleResize,{passive:!0}),window.addEventListener("wheel",this.handleWheel,{passive:!0})}),0)},this.unzoom=()=>{this.setState({modalState:"UNLOADING"}),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleUnzoomEnd,{once:!0})},this.handleUnzoomEnd=()=>{setTimeout((()=>{window.removeEventListener("resize",this.handleResize),this.setState({shouldRefresh:!1,modalState:"UNLOADED"},(()=>{this.refDialog.current?.close?.(),this.bodyScrollEnable()}))}),0)},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};const t=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${t}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=E},this.loadZoomImg=()=>{const{props:{zoomImg:t}}=this,e=t?.src;if(e){const i=new Image;i.sizes=t?.sizes??"",i.srcset=t?.srcSet??"",i.src=e;const o=()=>{this.setState({isZoomImgLoaded:!0})};i.decode().then(o).catch((()=>{h(i)?o():i.onload=o}))}},this.UNSAFE_handleSvg=()=>{const{imgEl:t,refModalImg:e,styleModalImg:i}=this;if(l(t)){const o=t.cloneNode(!0);(t=>{const e="-zoom",i=["clip-path","fill","mask","marker-start","marker-mid","marker-end"],o=new Map;if(t.hasAttribute("id")){const i=t.id,n=i+e;o.set(i,n),t.id=n}t.querySelectorAll("[id]").forEach((t=>{const i=t.id,n=i+e;o.set(i,n),t.id=n})),o.forEach(((e,o)=>{const n=`url(#${o})`,a=`url(#${e})`,s=i.map((t=>`[${t}="${n}"]`)).join(", ");t.querySelectorAll(s).forEach((t=>{i.forEach((e=>{t.getAttribute(e)===n&&t.setAttribute(e,a)}))}))})),t.querySelectorAll("style").forEach((t=>{o.forEach(((e,i)=>{t.textContent&&(t.textContent=t.textContent.replaceAll(`#${i}`,`#${e}`))}))}))})(o),o.style.width=`${i.width||0}px`,o.style.height=`${i.height||0}px`,o.addEventListener("click",this.handleUnzoom),e.current?.firstChild?.remove?.(),e.current?.appendChild?.(o)}}}render(){const{handleDialogCancel:t,handleDialogClick:e,handleUnzoom:i,handleZoom:a,imgEl:h,props:{a11yNameButtonUnzoom:d,a11yNameButtonZoom:c,children:m,classDialog:u,IconUnzoom:f,IconZoom:p,isZoomed:w,wrapElement:E,ZoomContent:S,zoomImg:b,zoomMargin:L},refContent:y,refDialog:z,refModalContent:I,refModalImg:C,refWrap:W,state:{id:M,isZoomImgLoaded:D,loadedImgEl:N,modalState:H,shouldRefresh:T,styleGhost:A}}=this,U=`rmiz-modal-${M}`,Z=`rmiz-modal-img-${M}`,k=s(h),O=r(h),$=l(h),R=(t=>{if(t)return r(t)?t.alt??void 0:t.getAttribute("aria-label")??void 0})(h),x=g(h),F=O?h.sizes:void 0,Y=O?h.srcset:void 0,B=!!b?.src,G=this.hasImage(),P=R?`${c}: ${R}`:c,j="LOADING"===H||"LOADED"===H,q=G?"found":"not-found",K="UNLOADED"===H||"UNLOADING"===H?"hidden":"visible",V={visibility:"UNLOADED"===H?"visible":"hidden"};this.styleModalImg=G?v({hasZoomImg:B,imgSrc:x,isSvg:$,isZoomed:w&&j,loadedImgEl:N,offset:L,shouldRefresh:T,targetEl:h}):{};let _=null;if(G){const t=O||k?o.createElement("img",{alt:R,sizes:F,src:x,srcSet:Y,...D&&"LOADED"===H?b:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:Z,ref:C,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):$?o.createElement("div",{"data-rmiz-modal-img":!0,ref:C,style:this.styleModalImg}):null,e=o.createElement("button",{"aria-label":d,"data-rmiz-btn-unzoom":"",onClick:i,type:"button"},o.createElement(f,null));_=S?o.createElement(S,{buttonUnzoom:e,modalState:H,img:t,onUnzoom:i}):o.createElement(o.Fragment,null,t,e)}return o.createElement(E,{"aria-owns":U,"data-rmiz":"",ref:W},o.createElement(E,{"data-rmiz-content":q,ref:y,style:V},m),G&&o.createElement(E,{"data-rmiz-ghost":"",style:A},o.createElement("button",{"aria-label":P,"data-rmiz-btn-zoom":"",onClick:a,type:"button"},o.createElement(p,null))),G&&n.createPortal(o.createElement("dialog",{"aria-labelledby":Z,"aria-modal":"true",className:u,"data-rmiz-modal":"",id:U,onClick:e,onClose:i,onCancel:t,ref:z,role:"dialog"},o.createElement("div",{"data-rmiz-modal-overlay":K}),o.createElement("div",{"data-rmiz-modal-content":"",ref:I},_)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){"UNLOADED"!==this.state.modalState&&this.bodyScrollEnable(),this.contentChangeObserver?.disconnect?.(),this.contentNotFoundChangeObserver?.disconnect?.(),this.imgElResizeObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleZoomEnd),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleUnzoomEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(t){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(t.isZoomed)}}function L(t){const[e,i]=o.useState(!1);return o.createElement(S,{...t,isZoomed:e,onZoomChange:i})}b.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",canSwipeToUnzoom:!0,IconUnzoom:function(){return o.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return o.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},swipeToUnzoomThreshold:10,wrapElement:"div",zoomMargin:0}}}]);