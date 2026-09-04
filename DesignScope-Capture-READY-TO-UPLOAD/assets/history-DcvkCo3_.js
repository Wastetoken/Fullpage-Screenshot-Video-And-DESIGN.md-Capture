import"./modulepreload-polyfill-B32Nu7ID.js";/* empty css               *//* empty css             */import{$ as n}from"./jquery-BbtLhie5.js";import{d as e}from"./db-Bnxp305x.js";import{H as r}from"./init-C7CqfD1Z.js";async function c(){n("#loading").show();const i=await e.getAll(),l=d(i);n("#list").html(l),n("#loading").hide(),n(".dlBtn").on("click",function(){const a=n(this).data("id");chrome.tabs.create({url:r+"/pages/viewer.html#ext?sid="+a})}),n(".card-img").on("click",function(){const a=n(this).closest(".card").find(".dlBtn").data("id");chrome.tabs.create({url:r+"/pages/viewer.html#ext?sid="+a})}),n(".delBtn").on("click",async function(){n("#loading").show();const a=n(this).data("id");await e.delById(a),c()})}function o(i,l){return typeof i!="string"?"":i.length>l?i.slice(0,l).trim()+"...":i}const d=function(i){let l="";for(let a=i.length-1;a>=0;a--){const t=i[a];if(!t)continue;let s="";typeof t.url=="string"&&t.url.match(/^https?:\/\//)?s=`<a href="${t.url}" target="_blank" style="color:#428bca;text-decoration:underline;word-break:break-all;">${o(t.url,40)}</a>`:s=`<span style="font-size:0.9em;color:#888;">${o(t.url,40)}</span>`,l+=`
      <div class="card">
        <img class="card-img" src="${t.dataUrl}" alt="screenshot" loading="lazy" />
        <div class="card-content">
          <div class="card-title">${o(t.title,40)}</div>
          <div>${s}</div>
          <div class="card-btns">
            <button data-id="${t.id}" class="dlBtn">下载</button>
            <button data-id="${t.id}" class="delBtn">删除</button>
          </div>
        </div>
      </div>
    `}return l};c();

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
