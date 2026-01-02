import"./main-BPvdXTXr.js";const a=["rock","paper","scissors"];function u(){const e=Math.floor(Math.random()*a.length);return a[e]}function p(e,t){return e===t?"draw":e==="rock"&&t==="scissors"||e==="paper"&&t==="rock"||e==="scissors"&&t==="paper"?"win":"lose"}const i=document.getElementById("result-title"),d=document.getElementById("result-message"),c=document.getElementById("history-list");function m(e,t,n){if(!i||!d)return;let s="",r=`You chose ${t.toUpperCase()}, Computer chose ${n.toUpperCase()}`,o="";switch(e){case"win":s="YOU WIN! 🎉",o="#4ADE80";break;case"lose":s="YOU LOSE 😢",o="#F87171";break;case"draw":s="IT'S A DRAW 🤝",o="#FBBF24";break}i.textContent=s,i.style.color=o,d.textContent=r}function f(e,t,n){var l;if(!c)return;const s=document.createElement("li");s.className="history-item";const r={rock:"👊",paper:"🤚",scissors:"✌️"},o=e==="win"?"🏆":e==="lose"?"❌":"🤝";s.innerHTML=`
        <div class="flex items-center gap-2">
            <span class="text-xl">${o}</span>
            <span class="font-bold text-${e==="win"?"green":e==="lose"?"red":"yellow"}-600">${e.toUpperCase()}</span>
        </div>
        <div class="text-sm text-gray-600 font-medium">
            ${r[t]} vs ${r[n]}
        </div>
    `,c.prepend(s),c.children.length>10&&((l=c.lastElementChild)==null||l.remove())}const g=document.querySelectorAll(".rps-btn");g.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-choice");if(!t)return;const n=u(),s=p(t,n);m(s,t,n),f(s,t,n)})});
