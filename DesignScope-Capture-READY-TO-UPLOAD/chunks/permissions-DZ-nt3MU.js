import{d as u,r as f,o as v,a as h,b as _,e as w,i as g}from"./runtime-dom.esm-bundler-C_wc0fXG.js";import{g as c,s as r,e as y}from"./mediaStreamManager-C9gBpfdC.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b={id:"coco-shot-permissions-container",style:{display:"none"}},k=u({__name:"DesignScopePermissions",emits:["permissionsChecked"],setup(P,{emit:S}){const i=f([]),a=o=>{o.type==="coco-shot-get-permissions"&&d()},t=o=>{typeof window<"u"&&window.parent&&window.parent.postMessage(o,"*")},d=async()=>{let o=!1,s=!1;try{const e=await c({audio:!0,video:!1});r(e),o=!0}catch(e){console.warn("Microphone permission denied or unavailable:",e)}try{const e=await c({video:!0,audio:!1});r(e),s=!0}catch(e){console.warn("Camera permission denied or unavailable:",e)}if(!o&&!s){t({type:"coco-shot-permissions",success:!1,error:"permission-denied"});return}const n=await y(),m=n.filter(e=>e.kind==="audioinput").map(e=>({deviceId:e.deviceId,label:e.label})),p=n.filter(e=>e.kind==="audiooutput").map(e=>({deviceId:e.deviceId,label:e.label})),l=n.filter(e=>e.kind==="videoinput").map(e=>({deviceId:e.deviceId,label:e.label}));t({type:"coco-shot-permissions",success:!0,audioinput:m,audiooutput:p,videoinput:l,cameraPermission:s,microphonePermission:o})};return v(()=>{window.addEventListener("message",a),t({type:"coco-shot-permissions-loaded"})}),h(()=>{window.removeEventListener("message",a),i.value.forEach(o=>{o.onchange=null}),i.value=[]}),(o,s)=>(w(),_("div",b))}}),E=I(k,[["__scopeId","data-v-d1bd1231"]]),C=g(E),M=document.getElementById("app")||document.getElementById("app-container")||document.getElementById("coco-shot-permissions-container");C.mount(M);

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
