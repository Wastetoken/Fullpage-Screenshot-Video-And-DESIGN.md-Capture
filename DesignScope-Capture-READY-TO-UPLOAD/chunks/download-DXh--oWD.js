import{d as w,o as u,m,b as R,e as U,i as y}from"./runtime-dom.esm-bundler-C_wc0fXG.js";import{c as i,l as L}from"./localforage-B-570RBo.js";import"./_commonjsHelpers-CE1G-McA.js";const v=w({__name:"Download",setup(k){const b=t=>{const s=/^data:(.*?);base64,/,c=t.match(s);if(c!==null){const r=c[1],o=atob(t.slice(c[0].length)),e=new Uint8Array(o.length);for(let n=0;n<o.length;n++)e[n]=o.charCodeAt(n);return new Blob([e],{type:r})}else{const r=atob(t),o=new Uint8Array(r.length);for(let e=0;e<r.length;e++)o[e]=r.charCodeAt(e);return new Blob([o],{type:"video/webm"})}},d=(t,s,c)=>{if(t.type==="download-video"){const r=t.base64,o=b(r),e=t.title.replace(/[\/\\:?~<>|*"]/g,"_"),n=URL.createObjectURL(o);chrome.downloads.download({url:n,filename:e,saveAs:!0}).then(()=>{URL.revokeObjectURL(n),window.close()}).catch(a=>{console.error("Download failed:",a),URL.revokeObjectURL(n)})}else if(t.type==="recover-indexed-db"){const r=[];i.iterate(o=>{r.push(o.chunk)}).then(()=>{const o=new Blob(r,{type:"video/webm"}),e=URL.createObjectURL(o);chrome.downloads.download({url:e,filename:"recovered-video.webm",saveAs:!0}).then(()=>{URL.revokeObjectURL(e),window.close()}).catch(n=>{console.error("Recovery download failed:",n),URL.revokeObjectURL(e)})}).catch(o=>{console.error("Failed to iterate chunks:",o)})}else if(t.type==="download-indexed-db"){const r={chunks:{},localDirectory:{}},o=(e,n)=>{const a=JSON.stringify(e,null,2),h=new Blob([a],{type:"application/json"}),l=URL.createObjectURL(h);chrome.downloads.download({url:l,filename:n,saveAs:!0}).then(()=>{URL.revokeObjectURL(l),window.close()}).catch(p=>{console.error("IndexedDB download failed:",p),URL.revokeObjectURL(l)})};i.iterate((e,n)=>{r.chunks[n]=e}).then(()=>L.iterate((e,n)=>{r.localDirectory[n]=e})).then(()=>{o(r,"DesignScope-indexed-db-backup.json")}).catch(e=>{console.error("Failed to download IndexedDB data:",e)})}};return u(()=>{chrome.runtime.onMessage.addListener((t,s,c)=>{d(t)})}),m(()=>{chrome.runtime.onMessage.removeListener((t,s,c)=>{d(t)})}),(t,s)=>(U(),R("div"))}}),f=y(v);f.mount("#app-container");

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
