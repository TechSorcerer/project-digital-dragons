(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.getElementById("myButton"),r=document.getElementById("myModal"),d=document.getElementById("closeBtn"),u=document.querySelectorAll(".mob-tab-link");l.addEventListener("click",function(){r.className="mob-tab is-open"});d.addEventListener("click",function(){r.className="mob-tab"});u.forEach(s=>s.addEventListener("click",function(){r.classList.toggle("is-open")}));
//# sourceMappingURL=commonHelpers.js.map
