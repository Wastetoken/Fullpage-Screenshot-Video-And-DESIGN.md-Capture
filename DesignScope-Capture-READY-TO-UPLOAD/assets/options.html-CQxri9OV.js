const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/framePermissions-K0LJi7pR.js","assets/tools-Ct9qgDMU.js","assets/ConfigManager-DO4kPkt2.js","assets/framePermissions-BbR4MS9w.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B32Nu7ID.js";/* empty css               */import{requestFramePermissions as C,removeFramePermissions as F}from"./framePermissions-K0LJi7pR.js";import{$ as E}from"./jquery-BbtLhie5.js";import{D as y,C as l}from"./ConfigManager-DO4kPkt2.js";import{c as I}from"./tools-Ct9qgDMU.js";const A="modulepreload",O=function(c){return"/"+c},k={},S=function(f,m,P){let r=Promise.resolve();if(m&&m.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),t=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.allSettled(m.map(e=>{if(e=O(e),e in k)return;k[e]=!0;const s=e.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":A,s||(o.as="script"),o.crossOrigin="",o.href=e,t&&o.setAttribute("nonce",t),document.head.appendChild(o),s)return new Promise((a,d)=>{o.addEventListener("load",a),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})}))}function h(n){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=n,window.dispatchEvent(t),!t.defaultPrevented)throw n}return r.then(n=>{for(const t of n||[])t.status==="rejected"&&h(t.reason);return f().catch(h)})};async function $(c){return chrome.permissions.request(c)}async function _(c){return chrome.permissions.remove(c)}function b(){return{downloads:{permissions:["downloads"],origins:[]},webNavigation:{permissions:["webNavigation"],origins:[]},desktopCapture:{permissions:["desktopCapture"],origins:[]},tabs:{permissions:["tabs"],origins:[]},tabCapture:{permissions:["tabCapture"],origins:[]},allUrls:{permissions:[],origins:["<all_urls>"]},fileUrls:{permissions:[],origins:["file://*/*"]}}}const u=E;u(document).ready(async()=>{I();const c=u("#loading");function f(){c.show()}function m(){c.hide()}f();try{const t=b(),e=await chrome.permissions.getAll();for(const s in y)if(Object.hasOwnProperty.call(y,s)&&y[s].userVisible){const i=u(`#${s}`);if(i.length)if(s.includes("Permission")){let o=!1;if(s==="saveFramePermission"){const{checkFramePermissions:a}=await S(async()=>{const{checkFramePermissions:d}=await import("./framePermissions-K0LJi7pR.js");return{checkFramePermissions:d}},__vite__mapDeps([0,1,2,3]));o=await a()}else{const a=s.replace("Permission",""),d=a.charAt(0).toLowerCase()+a.slice(1);if(t[d]){const p=t[d],v=p.permissions.every(g=>e.permissions.includes(g));let w=!0;if(p.origins&&p.origins.length>0){for(const g of p.origins)if(w=e.origins.includes(g),!w)break}o=v&&w}}await l.setItem(s,o),i.prop("checked",o)}else{const o=await l.getItem(s);i.is(":checkbox")?i.prop("checked",o):(i.is("select"),i.val(o))}}}catch{}finally{m()}async function P(t){const e=u(t.target);f();const s=e.is(":checked");try{s?await C()?await l.setItem("saveFramePermission",!0):(e.prop("checked",!1),await l.setItem("saveFramePermission",!1)):(await F(),await l.setItem("saveFramePermission",!1))}catch{e.prop("checked",!s),alert("An error occurred while updating permissions. Please try again.")}finally{m()}}async function r(t){const e=u(t.target);f();const s=e.is(":checked"),i=e.attr("name"),o=b();try{const a=i.replace("Permission",""),d=a.charAt(0).toLowerCase()+a.slice(1),p=o[d];if(!p){e.prop("checked",!s);return}if(s)await $(p)?await l.setItem(i,!0):(e.prop("checked",!1),await l.setItem(i,!1));else{const v=await _(p);await l.setItem(i,!1)}}catch{e.prop("checked",!s),alert(`An error occurred while updating ${i}. Please try again.`)}finally{m()}}async function h(t){const e=u(t.target);f();const s=e.is(":checked"),i=e.attr("name");try{await l.setItem(i,s)}catch{e.prop("checked",!s),alert(`An error occurred while updating ${i}. Please try again.`)}finally{m()}}const n={saveFramePermission:P,downloadsPermission:r,webNavigationPermission:r,desktopCapturePermission:r,tabsPermission:r,tabCapturePermission:r,allUrlsPermission:r,fileUrlsPermission:r,expandScrollableOn:h,hideFixedOn:h,preScrollOn:h};u(document).on("click","[data-DesignScopectl]",async function(t){const e=u(this).data("DesignScopectl");n[e]&&typeof n[e]=="function"&&await n[e](t)})});

(function designScopeBranding() {
  const legacyName = ["Co", "co", "Shot"].join("");
  const legacyNamePattern = new RegExp(legacyName, "gi");
  const legacyDomain = ["coco", "shot", ".net"].join("");
  const repositoryUrl = "https://github.com/Wastetoken/Fullpage-Screenshot-Video-And-DESIGN.md-Capture";
  const replaceBrand = (value) => String(value).replace(legacyNamePattern, "DesignScope");
  const applyBrand = () => {
    if (document.title) document.title = replaceBrand(document.title);
    if (!document.body) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (legacyNamePattern.test(node.nodeValue || "")) {
        legacyNamePattern.lastIndex = 0;
        node.nodeValue = replaceBrand(node.nodeValue);
      }
    }
    document.querySelectorAll("[title], [aria-label], [placeholder]").forEach((element) => {
      ["title", "aria-label", "placeholder"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) element.setAttribute(attribute, replaceBrand(element.getAttribute(attribute)));
      });
    });
    document.querySelectorAll("a[href]").forEach((link) => {
      if (String(link.href).toLowerCase().includes(legacyDomain)) link.href = repositoryUrl;
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", applyBrand, { once: true }); else applyBrand();
  new MutationObserver(applyBrand).observe(document.documentElement, { childList: true, subtree: true });
})();
