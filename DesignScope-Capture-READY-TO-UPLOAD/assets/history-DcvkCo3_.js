import"./modulepreload-polyfill-B32Nu7ID.js";/* empty css               *//* empty css             */import{$ as n}from"./jquery-BbtLhie5.js";import{d as e}from"./db-Bnxp305x.js";import{H as r}from"./init-C7CqfD1Z.js";async function c(){n("#loading").show();const i=await e.getAll(),l=d(i);n("#list").html(l),n("#loading").hide(),n(".dlBtn").on("click",function(){const a=n(this).data("id");chrome.tabs.create({url:r+"src/pages/quick_view.html#ext?sid="+a})}),n(".card-img").on("click",function(){const a=n(this).closest(".card").find(".dlBtn").data("id");chrome.tabs.create({url:r+"src/pages/quick_view.html#ext?sid="+a})}),n(".delBtn").on("click",async function(){n("#loading").show();const a=n(this).data("id");await e.delById(a),c()})}function o(i,l){return typeof i!="string"?"":i.length>l?i.slice(0,l).trim()+"...":i}const d=function(i){let l="";for(let a=i.length-1;a>=0;a--){const t=i[a];if(!t)continue;let s="";typeof t.url=="string"&&t.url.match(/^https?:\/\//)?s=`<a href="${t.url}" target="_blank" style="color:#428bca;text-decoration:underline;word-break:break-all;">${o(t.url,40)}</a>`:s=`<span style="font-size:0.9em;color:#888;">${o(t.url,40)}</span>`,l+=`
      <div class="card">
        <img class="card-img" src="${t.dataUrl}" alt="screenshot" loading="lazy" />
        <div class="card-content">
          <div class="card-title">${o(t.title,40)}</div>
          <div>${s}</div>
          <div class="card-btns">
            <button data-id="${t.id}" class="dlBtn">Download</button>
            <button data-id="${t.id}" class="delBtn">Delete</button>
          </div>
        </div>
      </div>
    `}return l};c();
