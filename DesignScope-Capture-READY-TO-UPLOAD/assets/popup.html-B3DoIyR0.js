import"./modulepreload-polyfill-B32Nu7ID.js";/* empty css               */import{checkFramePermissions as bt,showPermissionDialog as yt,removeFramePermissions as vt}from"./framePermissions-K0LJi7pR.js";/* empty css             */import{$ as w}from"./jquery-BbtLhie5.js";import{a as xt,g as kt,e as Et,b as H,o as Mt,E as Ct}from"./ProCrypto-C8L1dF1S.js";import{a as k,t as St}from"./tools-Ct9qgDMU.js";import{H as L}from"./init-C7CqfD1Z.js";import{C as W}from"./ConfigManager-DO4kPkt2.js";import{d as X,b as Z}from"./db-Bnxp305x.js";import{g as lt,u as dt}from"./userBehavior-bB2m7De_.js";import{s as It,a as Tt}from"./tempStorage-DgVgQA3D.js";function V(n){return new Promise((t,e)=>{const a=new Image;a.onload=()=>{t({img:a,width:a.naturalWidth,height:a.naturalHeight})},a.onerror=s=>{e(new Error(`Failed to load image: ${s}`))},a.src=n})}function Lt(n){return new Promise(t=>setTimeout(t,n))}async function _t(n,t,e){return t=t||"image/png",e=e||1,window.HTMLCanvasElement&&HTMLCanvasElement.prototype.toBlob?new Promise(a=>n.toBlob(s=>a(s),t,e)):new Promise(a=>{a(function(s){let r=atob(s.split(",")[1]),i=s.split(",")[0].split(":")[1].split(";")[0];return function(o,l){let u=new ArrayBuffer(o.length),c=new Uint8Array(u),h=o.length;for(;h--;)c[h]=o.charCodeAt(h);return new Blob([u],{type:l})}(r,i)}(n.toDataURL(t,e)))})}const j=(n,t,e,a,s,r)=>{const i=document.getElementById("popDialog");if(!i)return Promise.reject("popDialog element not found");const o=document.getElementById("dialogTitle"),l=document.getElementById("dialogDescription"),u=document.getElementById("dialogConfirm"),c=document.getElementById("dialogCancel");return!o||!l||!u||!c?Promise.reject("Dialog child elements not found"):new Promise((h,p)=>{o.textContent=n||"Notice",l.innerHTML=t||"",e?(u.innerHTML=e,u.style.display=""):u.style.display="none",a?(c.innerHTML=a,c.style.display=""):c.style.display="none",i.style.display="flex";const g=i.querySelector("div").offsetHeight+20;document.body.style.height=`${g}px`;const f=()=>{i.style.display="none",document.body.style.height="",u.removeEventListener("click",f),c.removeEventListener("click",m),typeof s=="function"&&s(),h(!0)},m=()=>{i.style.display="none",document.body.style.height="",u.removeEventListener("click",f),c.removeEventListener("click",m),h(!1)};u.addEventListener("click",f),c.addEventListener("click",m)})};function Pt(n){return n&&n.indexOf("file:")===0}async function Ot(){return chrome.extension.isAllowedFileSchemeAccess()}const $=(()=>{const n={},t={},e=(o,l,u)=>(o[l]===void 0&&(o[l]=u),o[l]);return{trigger:(o,l)=>{[n,t].forEach(u=>{e(u,o,[]).forEach(c=>c(l))}),t[o]=[]},on:(o,l)=>{e(n,o,[]).push(l)},off:(o,l)=>{const u=n[o];u&&(n[o]=u.filter(c=>c!==l))},oncePromise:o=>new Promise(l=>{e(t,o,[]).push(l)})}})(),J=(()=>{const n="CaptureCompleteListener";return{on:t=>$.on(n,t),off:t=>$.off(n,t),emit:t=>$.trigger(n,t),once:()=>$.oncePromise(n)}})();function tt(n){return n!=null}async function Rt(n,t,e,a,s){const r=f=>!f.url||f.url==="about:blank"||f.url.startsWith("about:blank#"),i=async(f,m)=>{const[b]=await chrome.scripting.executeScript({target:{tabId:f,frameIds:[m]},func:()=>{var y,C;return(((C=(y=document.body)==null?void 0:y.innerHTML)==null?void 0:C.trim())||"").length>50}});return(b==null?void 0:b.result)===!0},o=async f=>await chrome.scripting.executeScript({target:{tabId:f,allFrames:!0},func:()=>{var m,b;return[window.innerWidth,window.innerHeight,((b=(m=document.body)==null?void 0:m.innerHTML)==null?void 0:b.trim().length)>50]}}),l=(f,m,b,M)=>Math.abs(f-b)+Math.abs(m-M),c=n.filter(f=>f.url===t).find(f=>!r(f));if(c&&await i(e,c.frameId))return c;const h=Object.fromEntries(n.map(f=>[String(f.frameId),f])),g=(await o(e)).map(({frameId:f,result:m})=>{const b=h[f];if(!b||!m)return null;const[M,y,C]=m;return{frame:b,difference:l(a,s,M,y),hasContent:C,isEmpty:r(b)}}).filter(Boolean).sort((f,m)=>f.hasContent!==m.hasContent?f.hasContent?-1:1:f.isEmpty!==m.isEmpty?f.isEmpty?1:-1:f.difference-m.difference);return g.length>0?g[0].frame:null}const F=29800,et=9e3;class N{size(){return this.canvasObjs.length}isEmpty(){return this.canvasObjs.length===0}updateMetadata(t){this.metadata={...this.metadata,...t}}appendMetadataLinks(t){if(t){const e=[...this.metadata.links||[],...t];this.metadata={...this.metadata,links:e}}}sortLinks(){this.metadata.links&&this.metadata.links.sort((t,e)=>t.bounds[0].y===e.bounds[0].y?t.bounds[0].x-e.bounds[0].x:t.bounds[0].y-e.bounds[0].y)}setScaleMultiplier(t){this.scaleMultiplier=t}setObjs(t,e,a){this.totalWidth=t,this.totalHeight=e;let s,r,i,o,l,u=e>F||t>F||e*t>2592e5,c=t>e,h=u?c?F:et:t,p=u?c?et:F:e,v=Math.ceil(t/h),g=Math.ceil(e/p),f=0,m=[];for(s=0;s<g;s++)for(r=0;r<v;r++){i=document.createElement("canvas"),i.width=r==v-1&&t%h||h,i.height=s==g-1&&e%p||p;let b=i.getContext("2d");a&&(b.fillStyle=a,b.fillRect(0,0,i.width,i.height)),o=r*h,l=s*p,m.push({canvas:i,ctx:b,index:f,left:o,right:o+i.width,top:l,bottom:l+i.height,width:i.width,height:i.height}),f++}this.canvasObjs=m}toDataURLs(){if(this.size()>=2)return this.metadata.finalExt="jpg",this.canvasObjs.map(e=>e.canvas.toDataURL("image/jpeg",.9));{const t=this.exportFormat||"image/png";return this.metadata.finalExt=t.split("/")[1],this.canvasObjs.map(e=>e.canvas.toDataURL(t))}}toBlobs(){return Promise.all(this.canvasObjs.map(t=>_t(t.canvas,this.exportFormat)))}fillRect(t,e,a,s,r){this._filter(e,a,s,r).forEach(i=>{let o=this._shift(i,e,a);i.ctx.fillStyle=t,i.ctx.fillRect(o.x,o.y,s,r)})}strokeRect(t,e,a,s,r){this._filter(e,a,s,r).forEach(i=>{let o=this._shift(i,e,a);i.ctx.strokeStyle=t,i.ctx.strokeRect(o.x,o.y,s,r)})}drawImage(t,e,a,s,r,i,o){this._debugCounter++,this._filter(e,a,s,r).forEach(l=>{const u=this._shift(l,e,a),c=o?{...o,...this._shift(l,o.x,o.y)}:void 0,h=l.ctx;if(h.save(),c){const p=new Path2D,{x:v,y:g,width:f,height:m}=c,b=Math.floor(c.x),M=Math.floor(c.y);let y=Math.ceil(c.width),C=Math.ceil(c.height);b+y<v+f&&(y+=1),M+C<g+m&&(C+=1),p.rect(b,M,y,C),h.clip(p)}if(h.drawImage(t,u.x,u.y),h.restore(),i&&typeof i=="object"&&i.debug===!0){const p=o||{x:u.x,y:u.y,width:s,height:r};let v=Math.max(0,p.x),g=Math.max(0,p.y),f=p.x<0?p.width+p.x:p.width,m=p.y<0?p.height+p.y:p.height;h.save(),h.strokeStyle="#0F0",h.lineWidth=3,h.strokeRect(v,g,f,m);const b=15;h.font=`${b}px Arial`,h.textAlign="left",h.textBaseline="top";const M=`#${this._debugCounter}: ${this._str(i)}`,y=5,C=h.measureText(M).width;h.fillStyle="rgba(0, 0, 0, .4)",h.fillRect(v,g,C+2*y,b+2*y),h.fillStyle="#FFF",h.fillText(M,v+y,g+y)}})}_str(t){try{if(t.msg==="capture")return JSON.stringify({x:t.x,y:t.y,clip:t.clip,capture:t.capture})}catch{}try{return JSON.stringify(t)}catch{return`${t}`}}_filter(t,e,a,s){let r=t+a,i=e+s;return this.canvasObjs.filter(o=>t<o.right&&r>o.left&&e<o.bottom&&i>o.top)}_shift(t,e,a){return{x:Math.round(e-t.left),y:Math.round(a-t.top)}}_constrain(t,e,a,s,r){const i=this._shift(t,e,a),o=i.x,l=o+s,u=i.y,c=u+r,h=Math.max(0,o),p=Math.max(0,u);return{x:h,y:p,width:Math.min(t.height,l-h),height:Math.min(t.height,c-p)}}scale(t){return(t||0)*this.scaleMultiplier}scaleAll(t,e){e.forEach(a=>{if(a==="*")Object.keys(t).forEach(s=>t[s]=this.scale(t[s]));else{let s=a.indexOf(".");s===-1?t[a]=this.scale(t[a]):this.scaleAll(t[a.substring(0,s)],[a.substring(s+1)])}})}setBgRegions(t){this.bgRegions=t}applyBgRegions(){this.bgRegions.forEach(({sample:t,fill:e},a)=>{const s=new Map;this._filter(t.x,t.y,t.width,t.height).forEach(o=>{let l=this._constrain(o,t.x,t.y,t.width,t.height);if(l.width>0&&l.height>0){let u=document.createElement("canvas");u.width=l.width,u.height=l.height;let c,h=u.getContext("2d");h.drawImage(o.canvas,-l.x,-l.y);try{c=h.getImageData(0,0,l.width,l.height)}catch(p){__moduleManager.default.error(p)}c&&this._getHisto(c.data,s)}});let r=0,i=0;if(s.forEach((o,l)=>{o>r&&(r=o,i=l)}),i!==0){const o=`rgb(${this._toRgb(i).join(", ")})`;this.fillRect(o,e.x,e.y,e.width,e.height)}})}_getHisto(t,e){e=e||new Map;for(let a=0,s=t.length;a<s;a+=4)if(t[a+3]===255){const r=this._toInt(t[a],t[a+1],t[a+2]);e.set(r,(e.get(r)||0)+1)}return e}_toInt(t,e,a){return(t<<16)+(e<<8)+a}_toRgb(t){const e=255&t,a=255&(t>>=8);return[255&(t>>=8),a,e]}constructor(t){this.exportFormat=t,this.canvasObjs=[],this.bgRegions=[],this.scaleMultiplier=1,this.totalWidth=0,this.totalHeight=0,this._debugCounter=0,this.scaleMultiplier=1,this.totalWidth=0,this.totalHeight=0,this.metadata={},this._debugCounter=0}}async function At(n,t,e){const a=new N(e.fmt_details.canvas),s=n.id,r=n.windowId;try{let i=0,o=-1,l=0,u=0,c=0,h=0;try{const p=await chrome.scripting.executeScript({target:{tabId:s},func:()=>({scrollY:window.scrollY,innerHeight:window.innerHeight,scrollHeight:document.documentElement.scrollHeight,devicePixelRatio:window.devicePixelRatio})});if(p&&p[0]&&p[0].result){const v=p[0].result;u=v.scrollHeight,c=v.innerHeight,i=v.scrollY,a.updateMetadata({ww:n.width,wh:c,dpr:v.devicePixelRatio||1}),a.setObjs(n.width,u)}}catch{return await nt(r,e,a)}for(;i>o&&l<u;){o=i;const p=await chrome.tabs.captureVisibleTab(r,e.fmt_details.capture),{img:v,width:g,height:f}=await V(p);a.drawImage(v,0,i,g,f,e,{x:0,y:i,width:g,height:f}),l=i+c,t&&t(Math.min(.9,l/u));try{const m=await chrome.scripting.executeScript({target:{tabId:s},func:b=>(window.scrollBy(0,b),window.scrollY),args:[c]});if(m&&m[0])i=m[0].result;else break}catch{break}if(h++,h>50)break}return t&&t(1),a}catch{return await nt(r,e,a)}}async function nt(n,t,e){const a=await chrome.tabs.captureVisibleTab(n,t.fmt_details.capture),{img:s,width:r,height:i}=await V(a);return e.isEmpty()&&e.setObjs(r,i),await e.drawImage(s,0,0,r,i,t,{x:0,y:0,width:r,height:i}),e}const ut=function(n){const t=document.querySelectorAll(n);return{fadeIn:function(){return t.forEach(e=>{e.style.display="block",e.style.opacity="0",requestAnimationFrame(()=>{e.style.transition="opacity 0.3s ease",e.style.opacity="1"})}),this},hide:function(){return t.forEach(e=>{e.style.display="none"}),this},show:function(){return t.forEach(e=>{e.style.display="block"}),this},find:function(e){const a=[];return t.forEach(s=>{a.push(...s.querySelectorAll(e))}),ut(e)},text:function(e){var a;return e===void 0?((a=t[0])==null?void 0:a.textContent)||"":(t.forEach(s=>{s.textContent=e}),this)},html:function(e){var a;return e===void 0?((a=t[0])==null?void 0:a.innerHTML)||"":(t.forEach(s=>{s.innerHTML=e}),this)},css:function(e,a){return typeof e=="object"?Object.entries(e).forEach(([s,r])=>{t.forEach(i=>{i.style[s]=r})}):t.forEach(s=>{s.style[e]=a}),this},addClass:function(e){return t.forEach(a=>{a.classList.add(e)}),this},removeClass:function(e){return t.forEach(a=>{a.classList.remove(e)}),this},is:function(e){var a;return e===":visible"?((a=t[0])==null?void 0:a.style.display)!=="none":!1},outerHeight:function(){var e;return((e=t[0])==null?void 0:e.offsetHeight)||0}}},S=ut;function B(){const n=S("#popup"),t=S("#capture-status"),e=S("#progress-container"),a=200,s=t.is(":visible")?t.outerHeight():0,r=e.is(":visible")?e.outerHeight():0;n.css("height",`${a+s+r}px`)}function q(n,t=""){const e=S("#capture-status"),a=S("#status-warning"),s=S("#progress-container"),r=S("#progress-bar"),i=S("#progress-text");if(typeof n=="number"&&n>=0&&n<=1){s.show().addClass("visible");const o=Math.round(100*n);r.css("width",`${o}%`),i.text(`${o}%`),n===1&&ht(k("convertingHdSS")),B()}else if(n.startsWith("multiple_image:")){const o=parseInt(n.split(":")[1]);e.fadeIn().addClass("visible").find(".status-container").html(chrome.i18n.getMessage("fullpageTooLarge",[o])),o>10&&a.fadeIn().text(chrome.i18n.getMessage("fullpageTooLargeExtra")),B()}else n=="plain_status"&&(e.fadeIn().addClass("visible").find(".status-container").html("").html(t),B())}function at(){S("#progress-messages").html(""),S("#progress-container").hide().removeClass("visible"),S("#status-warning").hide(),S("#capture-status").hide().removeClass("visible").find(".status-container").text(""),B()}function ht(n){S("#capture-status").fadeIn().addClass("visible").find(".status-container").html(n),B()}const R={startCapture:"capture",captureComplete:"captureComplete",captureError:"captureError",captureFrame:"captureFrame"},st={UNKNOWN_MESSAGE:"UnknownMessage",TIMED_OUT:"TimedOut",CHROME_TABS:"ChromeTabsError",CHROME_SCRIPTING:"ChromeScriptingError",MISSING_BLOB:"MissingBlob",CONTENT_SCRIPT:"ContentScript"},Bt=async(n,t,e,a=null)=>{try{t(0);const s=await n;t(.5);const{img:r,width:i,height:o}=await V(s);t(1);const l=a||new N(e);return l.setObjs(i,o),l.drawImage(r,0,0,i,o),l}catch(s){throw s}};function Dt(n,t,e){t=t||function(){};let a=null;const s=n.url||"";if(s===""||s==="about:blank"||s.startsWith("about:blank#")?a=Promise.resolve().then(()=>{const o=document.createElement("canvas");o.width=n.width,o.height=n.height;const l=o.getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,o.width,o.height),a=Promise.resolve(o.toDataURL())}):s==="chrome://newtab/"||s==="chrome://apps/"||s==="edge://newtab/"||s==="edge://apps/"?a=chrome.tabs.captureVisibleTab(n.windowId,e.fmt_details.capture):s.startsWith("data:image/")&&(a=Promise.resolve(s)),a)return Bt(a,t,e.fmt_details.canvas)}async function Ut(n,t,e,a){const s=[];let r,i=[];return s.push(new N(a.fmt_details.canvas)),new Promise((o,l)=>{chrome.runtime.onMessage.addListener(function u(c,h,p){var v;try{if(r===void 0&&c.windowWidth!==void 0&&(r=c.windowWidth),c.complete!==void 0&&c.canvasId!==void 0&&s.length>1){const g=s.length,f=(g-c.canvasId-1)/g+c.complete/g;c.complete=f}switch(c.msg){case R.startCapture:{e&&e(c.complete);const g=c.canvasId;if(!tt(g)){const m=new Error(`Bad canvasId in capture request: ${g}`);return m.name="CaptureRequestError",l(m),!1}const f=i[g];if(f&&(c.clip.x+=f.left,c.clip.y+=f.top),g===0){const m={ww:c.windowWidth,wh:c.windowHeight,dpr:c.devicePixelRatio};s[g].updateMetadata(m)}return(v=c.links)!=null&&v.length&&s[g].appendMetadataLinks(c.links),Ht(n.windowId,c,r,s[g],e,c.isFrame?i:void 0).then(m=>{p(m||!0)}).catch(l),!0}case R.captureError:return j(st.CONTENT_SCRIPT,`${c.name}: ${c.message}`,k("btnOk"),null,()=>{l({name:st.CONTENT_SCRIPT,message:c.name+": "+c.message,stack:c.stack})}),!1;case R.captureFrame:{let g=s.length;s.push(new N(a.fmt_details.canvas));const f=["top","left","width","height","windowWidth"].filter(m=>!tt(c[m]));if(f.length){const m=new Error(`Bad props on ${R.captureFrame} request: ${f.join(", ")}`);return m.name="CaptureFrameRequestError",l(m),!1}return i[g]=c,async function(m,b,M,y,C,z,_,Y,se){const G=y.id;try{let O=await bt();if(!O){const E=document.getElementById("popDialog");O=await yt(E)}let P=null;if(O){const x=(await chrome.webNavigation.getAllFrames({tabId:G})).filter(I=>I.parentFrameId===0);x.length<=1?P=x[0]:P=await Rt(x,m,G,b,M)}let T=null;if(P){let E=!1;try{const x=await chrome.scripting.executeScript({target:{tabId:G,frameIds:[P.frameId]},func:()=>{const gt=document.body&&document.body.innerHTML?document.body.innerHTML.trim().length:0,wt=document.querySelectorAll('img, canvas, svg, video, iframe, [style*="background"]').length>0;return{contentLength:gt,hasVisibleElements:wt,url:window.location.href,title:document.title}}});if(x&&x[0]&&x[0].result){const I=x[0].result;E=I.contentLength>100||I.hasVisibleElements,P.url.startsWith("about:blank")}}catch{E=!0}if(E)try{T=await it(y,P.frameId,C,z,_,Y)}catch(x){if(!ft(x))throw x;T=null}}if(W.getItem("saveFramePermission").then(E=>{E||vt()}),!T||T.canvases.length===0)return p({skip:!0});const K=T.scaleMultiplier,U=i[_];T.canvases.forEach(E=>{["left","right"].forEach(x=>{if(E[x]+=U.left*K,isNaN(E[x])){const I=new Error(`attr isNaN: ${x}`);throw I.name="CanvasObjAttrError",I}}),["top","bottom"].forEach(x=>{if(E[x]+=U.top*K,isNaN(E[x])){const I=new Error(`attr isNaN: ${x}`);throw I.name="CanvasObjAttrError",I}})});const Q=s[_];(Q.metadata.links||[]).forEach(E=>{E.bounds.forEach(x=>{x.x+=U.left,x.y+=U.top})}),s[_-1].appendMetadataLinks(Q.metadata.links),i=T,p({width:T.pageWidth,height:T.pageHeight})}catch(O){l(O)}}(c.url,c.width,c.height,n,e,a,g,s[g],c.tagName),!0}case R.captureComplete:return chrome.runtime.onMessage.removeListener(u),s.forEach(g=>g.sortLinks()),o(s),c.canvasId==null&&j("Bad Request",`Missing canvasId: ${JSON.stringify(c)}`,k("btnOk")),J.emit(c),p(),!1;default:return!1}}catch(g){return l(g),!1}}),it(n,null,e,a,0,s[0],!0)})}async function Ht(n,t,e,a,s,r){if(r)return r.canvases.forEach(({canvas:y,left:C,top:z,width:_,height:Y})=>{a.drawImage(y,C,z,_,Y)}),t;let i="";for(;;)try{i=await chrome.tabs.captureVisibleTab(n,{format:"png"});break}catch(y){if(y.message&&y.message.includes("quota"))await Lt(50);else throw y}if(!i){const y=new Error("No dataURI generated for visible tab");throw y.name="APICaptureStepError",y}const{img:o,width:l,height:u}=await V(i);t.image={width:l,height:u};const c=e===l?1:l/e;a.setScaleMultiplier(c),c!==1&&a.scaleAll(t,["x","y","totalWidth","totalHeight","capture.*","clip.*"]),a.isEmpty()&&(a.setObjs(t.totalWidth,t.totalHeight,t.canvasBg),a.size()>1&&s&&s("multiple_image:"+a.size()),t.bgRegions&&(t.bgRegions.forEach(y=>a.scaleAll(y,["sample.*","fill.*"])),a.setBgRegions(t.bgRegions)));const h=t.x+t.capture.x,p=t.y+t.capture.y,v=t.clip.width,g=t.clip.height,f=h-t.clip.x,m=p-t.clip.y,b=t.image.width,M=t.image.height;return v===0||g===0||b===0||M===0||a.drawImage(o,f,m,b,M,t,{x:h,y:p,width:v,height:g}),t}async function $t(n,t,e,a,s={}){try{const r=await Ut(n,0,e,a);return s.add_url&&r.forEach(o=>{o.canvasObjs.forEach(({ctx:l,width:u,height:c})=>{const h=o.scaleMultiplier;l.scale(h,h),l.fillStyle="#00000055",l.fillRect(0,0,u/h,40),l.fillStyle="#fff",l.font="20px Arial",l.textBaseline="middle",l.fillText(n.url,20,20)})}),{dataURLs:r.flatMap(o=>o.toDataURLs()),scaleMultiplier:r[0].scaleMultiplier,metadata:r[0].metadata}}catch(r){throw r}}const Ft="checkExists",Wt="scrollPage";async function it(n,t,e,a,s,r,i){try{if(Pt(n.url)&&!await Ot()){chrome.runtime.sendMessage({type:"needFilePermsClick"});return}let o=!1;try{const l=await ot(chrome.tabs.sendMessage(n.id,{msg:Ft},{frameId:t}),50,"tabs.sendMessage.checkExists");l&&l.startTime&&l.script==="assets/page_index.js"&&(o=!0)}catch{}if(!o)try{await ot(jt(n,t,"assets/page_index.js"),6e3,"api._executeScript")}catch(l){if(i&&(ft(l)||s>0)){const u=await At(n,e,a);return rt(u)}throw l}return e(0),await chrome.tabs.sendMessage(n.id,{msg:Wt,canvasId:s,opts:a},{frameId:t||0}),await new Promise(l=>{const u=c=>{c.canvasId===s&&(J.off(u),r.applyBgRegions(),l(rt(r)))};J.on(u)})}catch(o){throw o}}async function jt(n,t,e){if((()=>{const s=chrome.runtime.getURL("");return n.url.startsWith(s)})()){const s=chrome.runtime.getURL(e);let r;try{r=chrome.extension.getViews({type:"tab",tabId:n.id})}catch{r=chrome.extension.getViews({type:"tab"})}const i=r.filter(o=>o.location.href===n.url);i.length,await Promise.all(i.map(o=>new Promise(l=>{const u=o.document.createElement("script");u.src=s,u.onload=l,o.document.body.appendChild(u)})))}else{const s={files:[e],target:{tabId:n.id,...typeof t=="number"?{frameIds:[t]}:{}}};await chrome.scripting.executeScript(s)}}async function ot(n,t,e){return new Promise((a,s)=>{const r=setTimeout(()=>{s(new Error(`Operation ${e} timed out after ${t}ms`))},t);n.then(i=>{clearTimeout(r),a(i)}).catch(i=>{clearTimeout(r),s(i)})})}function ft(n){return n&&n.message&&(n.message.includes("Cannot access contents of the page")||n.message.includes("Cannot access a chrome:// URL")||n.message.includes("Cannot access a chrome-extension:// URL"))}function rt(n){const t=n.canvasObjs,e=n.scaleMultiplier||1;return{canvases:t,pageWidth:n.totalWidth/e,pageHeight:n.totalHeight/e,scaleMultiplier:e}}async function ct(n,t,e,a,s){const r=[];for(const u of n)r.push({dataUrl:u,title:t,url:e,ext:a.finalExt});const i=await X.batchPut(r);if((await lt()).isNewUser){for(let u=0;u<i.length;u++){const c=i[u],h=u===i.length-1;await chrome.runtime.sendMessage({data:"handleQuickViewOpen",sId:c,activeTab:h})}s({type:"centerMessage",message:k("screenshotSaved"),duration:5500}),setTimeout(()=>{s({type:"close"})},2500)}else for(let u=0;u<i.length;u++){const c=i[u],h=u===i.length-1;await chrome.runtime.sendMessage({data:"handlePromoteAndOpenViewerById",sId:c,activeTab:h})}Math.random()>.9&&X.cleanupStaleDataUrls()}async function Nt(n){n({type:"working"});const t=e=>{q(e)};return new Promise((e,a)=>{chrome.tabs.query({active:!0,currentWindow:!0},async function(s){try{const r=s[0],i=`${r.title}.png`,l={fmt_details:{canvas:"image/png",capture:{format:"png",quality:100}}};let u;try{if(u=await Dt(r,t,l),u){const c=u.toDataURLs();await ct(c,r.title,r.url,u.metadata,n)}else try{const{dataURLs:c,scaleMultiplier:h,metadata:p}=await $t(r,i,t,l);at(),ht(k("preparingSsViewer")),await ct(c,r.title,r.url,p,n),at()}catch(c){if(!c.message.includes("message channel closed before a response was received")){const h=`<div style="font-size: 12px; color: #666; margin-top: 8px;">error details: ${c.message}</div>`;j(k("error"),k("captureError",[`${L}/feedback/`])+h,k("btnOk")),a(c);return}}}catch(c){if(!c.message.includes("message channel closed before a response was received")){const h=`<div style="font-size: 12px; color: #666; margin-top: 8px;">errer detail: ${c.message}</div>`;j(k("error"),k("captureError",[`${L}/feedback/`])+h,k("btnOk")),a(c);return}}n({type:"reset"}),e()}catch(r){a(r)}})})}const qt=async function(n,t){try{const e=await It(n),a=`pages/pdf-viewer.html?tabid=${t}#${e}`;xt({targetPage:a,activeTab:!0},()=>{}),await Tt(300)}catch{}},Vt=!0;async function D(){const n=await kt();if(!n)return!1;const t=n.isProUser||!1;return t&&n.proExpiryTime&&Date.now()>n.proExpiryTime?(await Et(),await dt({isProUser:!1,proExpiryTime:null}),!1):t}async function zt(n){const{isProUser:t,proExpiryTime:e,proToken:a}=n;return await dt({isProUser:t||!1,proExpiryTime:e||null,proToken:a||null,lastActiveTime:Date.now()})}async function Yt(n){return await D()}function mt(n,t){const e=document.createElement("div");e.className="DesignScope-pro-overlay",e.style.cssText=`
    position: fixed;
    z-index: 999998;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  `;const a=document.createElement("div");a.className="DesignScope-pro-prompt",a.style.cssText=`
    text-align: center;
    position: fixed;
    z-index: 999999;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    max-width: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,n==="feature"?a.innerHTML=`
      <div style="font-weight: 600; margin-bottom: 8px; color: #333;">${chrome.i18n.getMessage("proTitle")}</div>
      <div style="color: #666; margin-bottom: 12px;">${chrome.i18n.getMessage("proFeatureNotAvailable")}</div>
      <a href="${L}/getpro/" target="_blank" class="DesignScope-pro-upgrade-btn" style="
        background: #4285f4;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 14px;
        width: 100%;
        text-align: center;
        text-decoration: none;
      ">${chrome.i18n.getMessage("proUpgradeButton")}</a>
    `:n==="save"&&(a.innerHTML=`
      <div style="font-weight: 600; margin-bottom: 8px; color: #333;">${chrome.i18n.getMessage("proTitle")}</div>
      <div style="color: #666; margin-bottom: 12px;">${chrome.i18n.getMessage("proSaveRestricted")}</div>
      <a href="${L}/getpro/" target="_blank" class="DesignScope-pro-upgrade-btn" style="
        background: #4285f4;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 14px;
        width: 100%;
        text-align: center;
        text-decoration: none;
      ">${chrome.i18n.getMessage("proUpgradeButton")}</a>
    `);const s=document.createElement("div");s.style.cssText=`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 24px;
    height: 24px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #999;
    font-size: 16px;
    line-height: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
  `,s.textContent="×",a.appendChild(s),document.body.appendChild(e),document.body.appendChild(a);const r=()=>{a.remove(),e.remove(),document.removeEventListener("click",o)},i=a.querySelector(".DesignScope-pro-upgrade-btn");i&&i.addEventListener("click",()=>{r()}),s.addEventListener("click",()=>{r()});const o=l=>{a.contains(l.target)||r()};document.addEventListener("click",o)}async function Gt(){return await D()?!0:(mt("save"),!1)}function Jt(){chrome.runtime.onMessage.addListener((n,t,e)=>{if(["checkProStatus","updateProStatus","isProFeatureAllowed","handleProSave"].includes(n.action))return(async()=>{switch(n.action){case"checkProStatus":const s=await D();e({isPro:s,isProSystemEnabled:Vt});break;case"updateProStatus":const r=await zt(n.proData);e({success:!0,data:r});break;case"isProFeatureAllowed":const i=await Yt(n.featureType);e({isAllowed:i});break;case"handleProSave":const o=await Gt();e({canSave:o});break}})(),!0})}Jt();function Kt(){const n=navigator.userAgent.toLowerCase();let t="Unknown";return n.indexOf("chrome")>-1?n.indexOf("edge")>-1||n.indexOf("edg")>-1?t="Edge":n.indexOf("opr")>-1||n.indexOf("opera")>-1?t="Opera":t="Chrome":n.indexOf("safari")>-1?t="Safari":n.indexOf("firefox")>-1?t="Firefox":n.indexOf("edg")>-1&&(t="Edge"),t}function Qt(n){const t=Kt(),s=t==="Edge"?["edge://","https://microsoftedge.microsoft.com/addons"]:t==="Chrome"?["chrome://","https://chrome.google.com","https://chromewebstore.google.com"]:[];try{if(s.some(r=>n.includes(r)))return!0}catch{}}var d={_currentTab:null,getCurrentTab:async function(){if(d._currentTab)return d._currentTab;const n=await chrome.tabs.query({active:!0,currentWindow:!0});return d._currentTab=n[0],d._currentTab},disabled:!1,special:!1,userData:null,getSettings:async function(){return await Z.loadOption()},saveSettings:async function(n){await Z.saveOption(n)},initUserData:async function(){d.userData=await lt()},ready:async function(){H(!0),St(),d.sendMessage({data:"popup_open"}),d.initMessage(),d.initCtlArea(),await d.initUserData(),await d.initTabs(),await d.initAccordion(),await d.checkSupport(),!d.disabled&&(window.onblur=function(){d.sendMessage({data:"popup_closed"}),H(!0)})},initMessage:function(){Mt(Ct.POP_CALL,this.popCall)},initTabs:async function(){const n=w(".tab-button"),t=w(".tab-content");function e(i){w(".tabs").css("display","flex"),t.removeClass("active").hide(),n.removeClass("active"),w(`.tab-button[data-tab="${i}"]`).addClass("active"),w(`#${i}`).addClass("active").show()}const s=(await d.getSettings()).activeTab;let r="tab-capture";s&&w(`#${s}`).length>0&&(r=s),e(r),n.on("click",async function(){const i=w(this).data("tab");e(i);const o=await d.getSettings();o.activeTab=i,await d.saveSettings(o)})},initAccordion:async function(){const n=w(".accordion-header");n.on("click",async function(){const i=w(this),o=i.hasClass("active"),u=i.closest(".accordion-item").attr("id");if(n.removeClass("active"),o){const c=await d.getSettings();delete c.activeAccordion,await d.saveSettings(c)}else{i.addClass("active");const c=await d.getSettings();c.activeAccordion=u,await d.saveSettings(c)}});const e=(await d.getSettings()).activeAccordion;e&&w(`#${e}`).length>0?w(`#${e}`).find(".accordion-header").addClass("active"):n.length>0&&n.first().addClass("active"),w("#tab-ai-tools .accordion-button").on("click",ae);const a=document.querySelectorAll(".toggle-switch"),s=document.querySelectorAll(".toggle-checkbox");if(!await D())s.forEach(i=>{i.checked=!1});else{const i=await d.getSettings();s.forEach(o=>{const l=o.id;o.checked=i[l]||!1})}s.forEach(i=>{i.addEventListener("click",o=>{o.stopPropagation(),o.preventDefault()})}),a.forEach(i=>{i.addEventListener("click",async o=>{o.stopPropagation();const l=i.querySelector(".toggle-checkbox");if(!l)return;if(!await D()){mt("feature");return}l.checked=!l.checked;const c=await d.getSettings(),h=l.id;c[h]=l.checked,await d.saveSettings(c)})})},initCtlArea:function(){w("#ctlarea").css("display","flex"),w("#captureAll").on("click",d.captureAll),w("#pCaptV").on("click",d.captureVisible),w("#pSingle").on("click",d.genSinglefile),w(".pDesktop").on("click",d.desktopScreenshot),w("#pAreaCut").on("click",d.areaCut),w("#startRecorder").on("click",d.startDesignScopeRecorder)},checkSupport:async function(){const n=await d.getCurrentTab();await t(n);async function t(e){var a=e.url;const s=(a==null?void 0:a.startsWith("chrome://"))||(a==null?void 0:a.startsWith("chrome-extension://"))||(a==null?void 0:a.startsWith("ftp://"))||(a==null?void 0:a.startsWith("chrome-search://"))||(a==null?void 0:a.startsWith("edge://")),r=(a==null?void 0:a.startsWith("file:"))||(a==null?void 0:a.startsWith("data:"))||(a==null?void 0:a.startsWith("about:"));try{if(a&&Qt(a)&&(s?(d.special=!0,w(".browserlimit").hide()):d.disableScrollSupport()),r){let i=function(){d.disabled=!0,w(".top-bar").hide(),w(".tab-content").hide(),w("#disableRestrict h2").html(k("fileUrlsPermission")),w("#disableRestrict .disabled-desc").html(k("fileUrlsPermissionDesc")),w("#disableRestrict .disabled-actions").html(k("pFileUrl")).on("click",function(){chrome.tabs.create({url:"chrome://extensions?id="+chrome.runtime.id})}).css({cursor:"pointer",color:"blue",textDecoration:"underline"}),w("#disabled").addClass("active").show()};d.special=!0,w(".filepagelimit").hide();try{await chrome.extension.isAllowedFileSchemeAccess()||i()}catch{i()}}}catch{}}},disableScrollSupport:function(){d.disabled=!0,w(".top-bar").hide(),w(".tab-content").hide(),w("#disabled").addClass("active").show()},popCall:async function(n){switch(w(".top-bar").hide(),w(".tab-content").hide(),w("#working").fadeOut(),w("#message").fadeOut(),H(!0),n.type){case"working":H(!1),w("#working").fadeIn();break;case"message":w("#message").fadeIn().find(".message-container").text(n.message);break;case"centerMessage":d.centerMessage(n.message,n.duration);break;case"close":window.close();case"reset":await d.initTabs();break;default:}},centerMessage:function(n,t=3e3){const e=w("#centerMessage");e.find(".center-message-content").text(n),e.fadeIn(),setTimeout(()=>{e.fadeOut()},t)},desktopScreenshot:async function(){await d.clearAreaCutUI(),d.sendMessage({data:"getDesktopss"})},genSinglefile:async function(n){if(n&&(n.target.closest(".toggle-switch")||n.target.classList.contains("toggle-checkbox")||n.target.classList.contains("toggle-label")))return;await d.clearAreaCutUI(),d.popCall({type:"working"}),q("plain_status",k("analyzingPageForHTML"));const t=document.getElementById("pSingle"),e=t?t.querySelector(".toggle-checkbox"):null,a=e?e.checked:!1;d.sendMessageToTab({type:"genSigleFile",includeImages:a},function(s){d.popCall({type:"close"})})},captureVisible:async function(){await d.clearAreaCutUI(),await d.sendMessage({data:"captureVisible",special:d.special,isNewUser:d.userData.isNewUser}),window.close()},handleSitefixerOptions:async function(n){const t=await W.getItem("expandScrollableOn"),e=await W.getItem("hideFixedOn"),a=await W.getItem("preScrollOn");let s=!1;const r=await d.getCurrentTab();try{if(a&&(d.centerMessage(k("preScrollOn")+"("+k("canBeDisabled")+")"),await d.preScrollSite()),t||e){let i=[];t&&i.push(k("expandScrollableOn")),e&&i.push(k("hideFixedOn")),i.length>0&&d.centerMessage(i.join(", ")+`
(`+k("canBeDisabled")+")"),await d.patchSite(),s=!0}n&&await n(),s&&d.sendMessage({data:"scheduleRevertSitePatch",tabId:r.id})}catch{await n()}},captureAll:async function(){const n=Date.now();await d.handleSitefixerOptions(async()=>{await d.clearAreaCutUI(),chrome.runtime.sendMessage({action:"recusr",recAction:"captureAll",startTime:n,metadata:{timestamp:n,source:"popup"}}),await Nt(d.popCall)})},captureRegion:function(){d.sendMessage({data:"captureRegion"})},captureWebcam:function(){d.sendMessage({data:"captureWebcam"})},captureDesktop:function(){chrome.permissions.request({permissions:["desktopCapture"]},function(){d.sendMessage({data:"captureDesktop"})})},captureClipboard:function(){d.sendMessage({data:"captureClipboard"})},editContent:function(){d.sendMessage({data:"editContent"})},sendMessage:async function(n){if(n.data&&["captureVisible","getDesktopss","startAreaCut","genSigleFile"].includes(n.data)){const t=Date.now();return chrome.runtime.sendMessage({action:"recusr",recAction:n.data,startTime:t,metadata:{timestamp:t,source:"popup"}}),await chrome.runtime.sendMessage(n)}else return await chrome.runtime.sendMessage(n)},sendMessageToTab:async function(n,t=null){try{const e=await d.getCurrentTab(),a=await chrome.tabs.sendMessage(e.id,n);t&&t(a)}catch{}},areaCut:async function(){d.sendMessage({data:"startAreaCut"}),window.close()},clearAreaCutUI:async function(){await d.sendMessageToTab({action:"screenshotCancel"})},patchSite:async function(){const n=await d.getCurrentTab();return await d.sendMessage({data:"patchSite",tabId:n.id})},revertPatchSite:async function(){const n=await d.getCurrentTab();return await d.sendMessage({data:"revertSitePatch",tabId:n.id})},preScrollSite:async function(){const n=await d.getCurrentTab();return await d.sendMessage({data:"preScrollSite",tabId:n.id})},startDesignScopeRecorder:async function(){await d.clearAreaCutUI(),d.sendMessage({type:"startDesignScopeRecorder"}),d.popCall({type:"close"})}};function pt(){const n=document.getElementById("drawer-menu");return n&&n.classList.contains("active")}function Xt(){const n=document.getElementById("drawer-menu");n&&(pt()?n.classList.remove("active"):(n.classList.add("active"),n.offsetWidth))}function A(){const n=document.getElementById("drawer-menu");n&&n.classList.remove("active")}function Zt(){chrome.runtime.openOptionsPage()}function te(){const n=chrome.runtime.getURL("src/pages/history.html");chrome.tabs.create({url:n})}function ee(){window.open(`${L}/image-tools/`,"_blank")}function ne(){window.open(`${L}/faq.html`,"_blank")}w(d.ready);w(document).ready(()=>{var n,t,e,a,s,r,i;(n=document.getElementById("logo"))==null||n.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),Xt(),o.stopImmediatePropagation()}),(t=document.getElementById("close-drawer"))==null||t.addEventListener("click",A),(e=document.getElementById("open-settings"))==null||e.addEventListener("click",Zt),(a=document.getElementById("screenshot-history-link"))==null||a.addEventListener("click",o=>{o.preventDefault(),te(),A()}),(s=document.getElementById("image-tools-link"))==null||s.addEventListener("click",o=>{o.preventDefault(),ee(),A()}),(r=document.getElementById("help-feedback-link"))==null||r.addEventListener("click",o=>{o.preventDefault(),ne(),A()}),(i=document.getElementById("recorder-feedback-link"))==null||i.addEventListener("click",o=>{o.preventDefault(),window.open(`${L}/feedback/?recorder=true`,"_blank")}),document.addEventListener("click",o=>{const l=document.getElementById("drawer-menu"),u=document.getElementById("logo"),c=o.target===u||u.contains(o.target);pt()&&!l.contains(o.target)&&!c&&!o.target.closest("#drawer-menu")&&A()})});chrome.runtime.onMessage.addListener((n,t,e)=>{n.action==="triggerCaptureAll"&&d.captureAll()});const ae=async function(n){if(n.target.closest(".toggle-switch"))return;const t=n.target.closest(".accordion-button[data-id]");if(!t)return;const e=t.querySelector(".toggle-checkbox"),a=e?e.checked:!1,s=Date.now(),r=t.dataset.id;if(r)try{const[i]=await chrome.tabs.query({active:!0,currentWindow:!0});if(!i)return;switch(r){case"download_md":await d.handleSitefixerOptions(),await d.clearAreaCutUI(),d.popCall({type:"working"}),q("plain_status",k("analyzingPageForHTML")),chrome.runtime.sendMessage({action:"recusr",recAction:"download_md",startTime:s,metadata:{timestamp:new Date().toISOString(),source:"ai_tools"}}),d.sendMessageToTab({type:"genMdFile",includeImages:a},function(o){d.sendMessage({data:"scheduleRevertSitePatch",tabId:i.id}),d.popCall({type:"close"})});break;case"download_pdf":await d.handleSitefixerOptions(),await d.clearAreaCutUI(),d.popCall({type:"working"}),q("plain_status",k("analyzingPageForHTML")),chrome.runtime.sendMessage({action:"recusr",recAction:"download_pdf",startTime:s,metadata:{timestamp:new Date().toISOString(),source:"ai_tools"}}),d.sendMessageToTab({type:"genPdfFile",includeImages:a},async function(o){qt(o.htmlContent,i.id),d.sendMessage({data:"scheduleRevertSitePatch",tabId:i.id}),d.popCall({type:"close"})});break;default:}}catch{}};

(function installMergedDesignExtractor() {
  const PANEL_ID = "typeui-design-extractor-panel";
  const ACTION_ID = "typeui-design-extractor-action";
  let state = { mode: "design", markdown: "", filename: "", busy: false, result: null };
  let modulesPromise;

  function install() {
    const host = document.querySelector("#accordion-item-llm .accordion-content");
    if (!host || document.getElementById(ACTION_ID)) return;
    const action = document.createElement("button");
    action.id = ACTION_ID;
    action.type = "button";
    action.className = "accordion-button typeui-design-action";
    action.innerHTML = '<span style="font-size:18px;line-height:1">✦</span><span>Extract DESIGN.md / SKILL.md</span>';
    action.title = "Extract the active page design system for AI coding tools";
    action.addEventListener("click", openPanel);
    host.appendChild(action);
  }

  function getModules() {
    if (!modulesPromise) {
      const base = chrome.runtime.getURL("design-extractor/lib/");
      modulesPromise = Promise.all([
        import(base + "normalize.mjs"),
        import(base + "generate-design-md.mjs"),
        import(base + "generate-skill-md.mjs"),
        import(base + "validate.mjs")
      ]);
    }
    return modulesPromise;
  }

  function openPanel() {
    const activeTab = document.querySelector(".tab-content.active, .tab-content[style*='display: block']");
    state.previousView = activeTab && activeTab.id ? activeTab.id : "tab-ai-tools";
    document.querySelectorAll(".tab-content").forEach((element) => { element.style.display = "none"; });
    let panel = document.getElementById(PANEL_ID);
    if (!panel) panel = createPanel();
    panel.style.display = "block";
    runExtraction(panel).catch((error) => setPanelStatus(panel, errorMessage(error), true));
  }

  function createPanel() {
    const panel = document.createElement("section");
    panel.id = PANEL_ID;
    panel.className = "typeui-design-panel";
    panel.innerHTML = '<div class="typeui-design-panel-header"><button type="button" class="typeui-design-back">← AI Tools</button><span class="typeui-design-label">DESIGN EXTRACTOR</span></div><h2>Extract a page design system</h2><p class="typeui-design-intro">Turn the active page into implementation-ready DESIGN.md or SKILL.md guidance.</p><div class="typeui-design-modes"><button type="button" data-typeui-mode="design" class="is-active">DESIGN.md</button><button type="button" data-typeui-mode="skill">SKILL.md</button></div><div class="typeui-design-actions"><button type="button" class="typeui-design-primary" data-typeui-run>Extract active page</button><button type="button" data-typeui-copy disabled>Copy</button><button type="button" data-typeui-download disabled>Download</button></div><p class="typeui-design-status" data-typeui-status hidden></p><ul class="typeui-design-issues" data-typeui-issues hidden></ul><textarea class="typeui-design-preview" data-typeui-preview readonly spellcheck="false" placeholder="Generated markdown appears here..."></textarea><div class="typeui-design-details" data-typeui-details>The extractor samples visible elements, normalizes repeated tokens, and validates the output.</div>';
    document.body.appendChild(panel);
    panel.querySelector(".typeui-design-back").addEventListener("click", closePanel);
    panel.querySelector("[data-typeui-run]").addEventListener("click", () => runExtraction(panel).catch((error) => setPanelStatus(panel, errorMessage(error), true)));
    panel.querySelector("[data-typeui-copy]").addEventListener("click", () => copyMarkdown(panel).catch((error) => setPanelStatus(panel, errorMessage(error), true)));
    panel.querySelector("[data-typeui-download]").addEventListener("click", () => downloadMarkdown(panel).catch((error) => setPanelStatus(panel, errorMessage(error), true)));
    panel.querySelectorAll("[data-typeui-mode]").forEach((button) => button.addEventListener("click", () => {
      if (state.busy || button.dataset.typeuiMode === state.mode) return;
      state.mode = button.dataset.typeuiMode === "skill" ? "skill" : "design";
      panel.querySelectorAll("[data-typeui-mode]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
      if (state.result) regenerate(panel);
    }));
    return panel;
  }

  function closePanel() {
    const panel = document.getElementById(PANEL_ID);
    if (panel) panel.style.display = "none";
    const previous = document.getElementById(state.previousView || "tab-ai-tools");
    if (previous) previous.style.display = "block";
  }

  async function runExtraction(panel) {
    if (state.busy) return;
    state.busy = true;
    setPanelBusy(panel, true);
    setPanelStatus(panel, "Reading the active page...");
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab || !tab.id) throw new Error("No active tab is available.");
      if (/^(chrome|edge|about|opera):/i.test(String(tab.url || ""))) throw new Error("Browser-internal pages cannot be inspected. Open a regular website and try again.");
      await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["design-content-script.js"] });
      const response = await chrome.tabs.sendMessage(tab.id, { type: "TYPEUI_EXTRACT_STYLES" });
      if (!response || !response.ok) throw new Error(response && response.error ? response.error : "The page did not return extraction data.");
      const loaded = await getModules();
      const normalized = loaded[0].normalizeExtractedStyles(response.payload || {});
      const markdown = state.mode === "skill" ? loaded[2].generateSkillMarkdown({ normalized: normalized }) : loaded[1].generateDesignMarkdown({ normalized: normalized });
      const validation = loaded[3].validateMarkdownOutput(state.mode, markdown);
      state.result = { normalized: normalized, validation: validation };
      state.markdown = markdown;
      state.filename = state.mode === "skill" ? "SKILL.md" : "DESIGN.md";
      renderPanel(panel);
      setPanelStatus(panel, "Extracted the active page successfully.");
    } finally {
      state.busy = false;
      setPanelBusy(panel, false);
    }
  }

  async function regenerate(panel) {
    if (!state.result) return;
    const loaded = await getModules();
    const normalized = state.result.normalized;
    state.markdown = state.mode === "skill" ? loaded[2].generateSkillMarkdown({ normalized: normalized }) : loaded[1].generateDesignMarkdown({ normalized: normalized });
    state.result.validation = loaded[3].validateMarkdownOutput(state.mode, state.markdown);
    state.filename = state.mode === "skill" ? "SKILL.md" : "DESIGN.md";
    renderPanel(panel);
  }

  function renderPanel(panel) {
    panel.querySelector("[data-typeui-preview]").value = state.markdown;
    panel.querySelector("[data-typeui-copy]").disabled = !state.markdown;
    panel.querySelector("[data-typeui-download]").disabled = !state.markdown;
    const validation = state.result && state.result.validation ? state.result.validation : {};
    const problems = (validation.errors || []).concat(validation.warnings || []);
    const list = panel.querySelector("[data-typeui-issues]");
    list.innerHTML = "";
    list.hidden = problems.length === 0;
    problems.forEach((problem) => { const item = document.createElement("li"); item.textContent = problem; list.appendChild(item); });
    const normalized = state.result && state.result.normalized ? state.result.normalized : {};
    const checks = validation.checks || [];
    const passed = checks.filter((check) => check.ok).length;
    const profile = normalized.siteProfile || {};
    panel.querySelector("[data-typeui-details]").textContent = String(normalized.sampledElements || 0) + " visible elements sampled; " + String((normalized.colorPalette || []).length) + " color tokens, " + String((normalized.typographyScale || []).length) + " typography tokens, " + String((normalized.spacingScale || []).length) + " spacing tokens. Validation: " + passed + "/" + checks.length + " checks passed." + (profile.productSurface ? " Surface: " + profile.productSurface + "." : "");
  }

  async function copyMarkdown(panel) {
    await navigator.clipboard.writeText(state.markdown);
    setPanelStatus(panel, "Copied " + state.filename + " to the clipboard.");
  }

  function downloadMarkdown(panel) {
    const url = URL.createObjectURL(new Blob([state.markdown], { type: "text/markdown;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = state.filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setPanelStatus(panel, "Downloaded " + state.filename + ".");
  }

  function setPanelBusy(panel, busy) {
    const controls = panel.querySelectorAll("button");
    controls.forEach((button) => { if (!button.classList.contains("typeui-design-back")) button.disabled = busy; });
  }

  function setPanelStatus(panel, message, isError) {
    const element = panel.querySelector("[data-typeui-status]");
    element.hidden = !message;
    element.textContent = message || "";
    element.classList.toggle("is-error", Boolean(isError));
  }

  function errorMessage(error) { return error instanceof Error ? error.message : String(error || "Unknown error"); }

  const style = document.createElement("style");
  style.textContent = '.typeui-design-panel{padding:14px 16px;color:#172033;background:#fff}.typeui-design-panel-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}.typeui-design-back{border:0;padding:0;color:#2563eb;background:transparent;font-size:11px;font-weight:700;cursor:pointer}.typeui-design-label{color:#64748b;font-size:9px;font-weight:800;letter-spacing:.12em}.typeui-design-panel h2{margin:0;font-size:17px}.typeui-design-intro{margin:5px 0 12px;color:#64748b;font-size:11px;line-height:1.4}.typeui-design-modes{display:flex;gap:4px;padding:3px;border-radius:7px;background:#f1f5f9}.typeui-design-modes button{flex:1;border:0;border-radius:5px;padding:7px;color:#64748b;background:transparent;font-size:10px;font-weight:700;cursor:pointer}.typeui-design-modes button.is-active{color:#172033;background:#fff;box-shadow:0 1px 3px #0002}.typeui-design-actions{display:flex;gap:6px;margin:10px 0}.typeui-design-actions button{border:1px solid #dbe2ea;border-radius:6px;padding:7px 9px;color:#334155;background:#fff;font-size:10px;font-weight:700;cursor:pointer}.typeui-design-actions .typeui-design-primary{flex:1;border-color:#2f88ff;color:#fff;background:#2f88ff}.typeui-design-actions button:disabled{opacity:.5;cursor:wait}.typeui-design-status{margin:7px 0;padding:7px 8px;border-radius:5px;color:#334155;background:#f8fafc;font-size:10px}.typeui-design-status.is-error{color:#b42318;background:#fff1f0}.typeui-design-issues{margin:6px 0;padding:7px 8px 7px 23px;border-radius:5px;color:#92400e;background:#fffbeb;font-size:9px;line-height:1.4}.typeui-design-preview{display:block;width:100%;height:230px;resize:vertical;border:1px solid #dbe2ea;border-radius:6px;padding:8px;color:#334155;background:#fbfdff;font:10px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace}.typeui-design-details{margin-top:9px;color:#64748b;font-size:10px;line-height:1.4}.typeui-design-action{gap:8px!important}';
  document.head.appendChild(style);
  setTimeout(install, 0);
  document.addEventListener("click", (event) => {
    if (event.target && event.target.closest && event.target.closest(".tab-button")) {
      const panel = document.getElementById(PANEL_ID);
      if (panel && panel.style.display !== "none") panel.style.display = "none";
    }
  }, true);
})();

(function installDesignScopeTab() {
  function install() {
    const tabs = document.querySelector(".tabs");
    if (!tabs || document.getElementById("typeui-design-tab")) return;
    const button = document.createElement("button");
    button.id = "typeui-design-tab";
    button.type = "button";
    button.className = "tab-button";
    button.setAttribute("aria-label", "Design Extractor");
    button.title = "Design Extractor";
    button.innerHTML = '<span style="font-size:16px;line-height:1">✦</span><span>Design</span>';
    button.addEventListener("click", () => {
      const action = document.getElementById("typeui-design-extractor-action");
      if (action) action.click();
    });
    tabs.appendChild(button);
  }
  setTimeout(install, 0);
})();
