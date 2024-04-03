(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const e=document.querySelector("#calculator__display"),o=document.querySelector(".calc-app"),x=document.querySelectorAll(".main-buttons"),T=document.querySelectorAll(".scientific-button"),S=new Date,p=S.getHours();if(!o||!x||!T)throw new Error("issue with selectors");p>19&&e!=null&&(o.style.backgroundColor="#2a3439",e.style.boxShadow="3px 4px 4px #2a3439",x.forEach(t=>{t.style.boxShadow="3px 4px 4px #2a3439"}),T.forEach(t=>{t.style.boxShadow="3px 4px 4px #2a3439"}));const a=document.querySelectorAll(".main-buttons__number"),u=document.querySelector(".main-buttons__decimal"),h=document.querySelectorAll(".main-buttons__symbol"),g=document.querySelector("#main-buttons__clear"),f=document.querySelector("#main-buttons__plus-minus"),d=document.querySelector("#main-buttons__percentage"),m=document.querySelector("#main-buttons__equals");if(!e||!g||!u||!a||!h)throw new Error("issue with selectors");if(!d||!f||!m)throw new Error("issue with selectors");a.forEach(t=>{t.addEventListener("click",()=>{if(e.innerText==="0")e.innerText=t.getAttribute("id");else if(e.innerText.length>=12)e.innerText=e.innerText;else if(e.innerText.charAt(e.innerText.length-1)==="+"||e.innerText.charAt(e.innerText.length-1)==="-"||e.innerText.charAt(e.innerText.length-1)==="*"||e.innerText.charAt(e.innerText.length-1)==="/")e.innerText=e.innerText+" "+t.getAttribute("id");else if(e.innerText.slice(-3)==="+ 0"||e.innerText.slice(-3)==="- 0"||e.innerText.slice(-3)==="/ 0"||e.innerText.slice(-3)==="* 0"){let r=e.innerText.split(" ").reverse().slice(1);e.innerText=r.reverse().join(" ")+" "+t.getAttribute("id")}else e.innerText=e.innerText+t.getAttribute("id")})});h.forEach(t=>{t.addEventListener("click",()=>{e.innerText==="0"||e.innerText.charAt(e.innerText.length-1)==="+"||e.innerText.charAt(e.innerText.length-1)==="-"||e.innerText.charAt(e.innerText.length-1)==="*"||e.innerText.charAt(e.innerText.length-1)==="/"||e.innerText.length>=12?e.innerText=e.innerText:(t.getAttribute("id")==="+"||t.getAttribute("id")==="-"||t.getAttribute("id")==="/"||t.getAttribute("id")==="*")&&(e.innerText=e.innerText+" "+t.getAttribute("id")+" ")})});const A=()=>{e.innerText="0"},b=()=>{let t=e.innerText.split(" ").reverse(),n=t[0];if(console.log(n),e.innerText==="0")e.innerText="0";else if(e.innerText.length>=12)e.innerText=e.innerText;else if(e.innerText.charAt(e.innerText.length-1)==="+"||e.innerText.charAt(e.innerText.length-1)==="*"||e.innerText.charAt(e.innerText.length-1)==="/")e.innerText=e.innerText;else if(n.charAt(0)!=="-"){n="-"+n;let r=t.slice(1).reverse();e.innerText=r.join(" ")+" "+n}else if(n.charAt(0)==="-"){n=n.slice(1);let r=t.slice(1).reverse();e.innerText=r.join(" ")+" "+n}},y=()=>{let t=e.innerText.split(" ").reverse(),n=t[0];if(e.innerText==="0")e.innerText="0";else if(e.innerText.length>=12)e.innerText=e.innerText;else if(e.innerText.charAt(e.innerText.length-1)==="+"||e.innerText.charAt(e.innerText.length-1)==="*"||e.innerText.charAt(e.innerText.length-1)==="/"||e.innerText.charAt(e.innerText.length-1)==="-")e.innerText=e.innerText;else{n=Number(n)/100;let r=t.slice(1).reverse();e.innerText=r.join(" ")+" "+n}},E=()=>{e.innerText==="0"?e.innerText=" 0.":e.innerText.charAt(e.innerText.length-1)==="."?e.innerText=e.innerText:e.innerText.charAt(e.innerText.length-1)==="+"||e.innerText.charAt(e.innerText.length-1)==="-"||e.innerText.charAt(e.innerText.length-1)==="*"||e.innerText.charAt(e.innerText.length-1)==="/"?e.innerText=e.innerText+" 0.":e.innerText=e.innerText+"."},w=()=>{let t=e.innerText.split(" "),n=Number(t[0]),r=t[1],s=Number(t[2]),i=t[3],l=Number(t[4]);r==="+"&&t.length==3?e.innerText=String(n+s).slice(0,11):r==="-"&&t.length==3?e.innerText=String(n-s).slice(0,11):r==="*"&&t.length==3?e.innerText=String(n*s).slice(0,11):r==="/"&&t.length==3?e.innerText=String(n/s).slice(0,11):r==="+"&&t.length==5&&i==="+"?e.innerText=String(n+s+l).slice(0,11):r==="+"&&t.length==5&&i==="-"?e.innerText=String(n-s-l).slice(0,11):r==="+"&&t.length==5&&i==="/"?e.innerText=String(n+s/l).slice(0,11):r==="+"&&t.length==5&&i==="*"?e.innerText=String(n+s*l).slice(0,11):r==="-"&&t.length==5&&i==="+"?e.innerText=String(n-s+l).slice(0,11):r==="-"&&t.length==5&&i==="-"?e.innerText=String(n-s-l).slice(0,11):r==="-"&&t.length==5&&i==="/"?e.innerText=String(n-s/l).slice(0,11):r==="-"&&t.length==5&&i==="*"?e.innerText=String(n-s*l).slice(0,11):r==="/"&&t.length==5&&i==="+"?e.innerText=String(n/s+l).slice(0,11):r==="/"&&t.length==5&&i==="-"?e.innerText=String(n/s-l).slice(0,11):r==="/"&&t.length==5&&i==="/"?e.innerText=String(n/s/l).slice(0,11):r==="/"&&t.length==5&&i==="*"?e.innerText=String(n/s*l).slice(0,11):r==="*"&&t.length==5&&i==="+"?e.innerText=String(n*s+l).slice(0,11):r==="*"&&t.length==5&&i==="-"?e.innerText=String(n*s-l).slice(0,11):r==="*"&&t.length==5&&i==="/"?e.innerText=String(n*s/l).slice(0,11):r==="*"&&t.length==5&&i==="*"&&(e.innerText=String(n*s*l).slice(0,11))};g.addEventListener("click",A);u.addEventListener("click",E);f.addEventListener("click",b);m.addEventListener("click",w);d.addEventListener("click",y);