(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();(()=>{const e={closeModalBtn:document.querySelector("[data-close-modal]"),closeModal:document.querySelector("[data-close-modal-button]"),modal:document.querySelector("[data-modal]")};e.closeModalBtn.addEventListener("click",t),e.closeModal.addEventListener("click",t);function t(o){o.preventDefault(),e.modal.classList.toggle("is-hidden")}})();const m=document.querySelector(".header__img");m.addEventListener("click",e=>{const t=m.src,o=document.querySelectorAll("*"),r=document.querySelectorAll("input");t.includes("light-switch.webp")?(m.src="../img/dark-switch.webp",document.body.style.backgroundColor="#3a3a3a",o.forEach(n=>{n.style.color="white"}),r.forEach(n=>{n.style.color="black"})):(m.src="../img/light-switch.webp",document.body.style.backgroundColor="white",o.forEach(n=>{n.style.color="black"}),r.forEach(n=>{n.style.color="white"}))});const w=document.querySelector("#yearInput"),x=document.querySelector("#yearBtn"),y=document.querySelector("#yearResult");function C(e){return e%4===0&&e%100!==0||e%400===0}x.addEventListener("click",()=>{const e=parseInt(w.value,10);!isNaN(e)&&e>0&&(C(e)?(y.textContent="Ви народилися у високосний рік!",y.style.color="green"):(y.textContent="Ви народилися не у високосний рік!",y.style.color="red"))});const b=Math.floor(Math.random()*100)+1;function B(){const e=Number(document.querySelector(".guess__input").value),t=document.querySelector(".guess__text");e===b?(t.textContent=`Вітаю, ви вгадали число! (${b})`,t.style.color="green"):(t.textContent=`Ви програли, комп’ютер загадав (${b})`,t.style.color="red")}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".guess__button").addEventListener("click",B)});const $=document.querySelector("#user-score"),N=document.querySelector("#computer-score");document.querySelectorAll(".game__button");const S=document.querySelector("#resultText"),D=document.querySelector("#computerVarient"),M=["rock","scissors","paper"];let f={user:0,computer:0};document.querySelectorAll(".game__button").forEach((e,t)=>{e.addEventListener("click",()=>A(M[t]))});function A(e){const t=M[Math.floor(Math.random()*3)];let o="Нічия!";e==="rock"&&t==="scissors"||e==="scissors"&&t==="paper"||e==="paper"&&t==="rock"?(o="Ви виграли раунд!",f.user++,S.style.color="green"):e!==t&&(o="Комп'ютер виграв раунд!",f.computer++,S.style.color="red"),D.textContent=`Комп'ютер вибрав: ${t}`,S.textContent=o,N.textContent=`Комп'ютер - ${f.computer}`,$.textContent=`Ви - ${f.user}`}const H=document.querySelector("#first"),T=document.querySelector("#second"),R=document.querySelector("#three"),I=document.querySelector("#plus"),O=document.querySelector("#multiply"),P=document.querySelector("#minus"),G=document.querySelector("#divide"),W=document.querySelector("#result");let u=null;function F(e,t){return e+t}function K(e,t){return e*t}function Y(e,t){return e-t}function j(e,t){return t===0?(alert("Ділення на 0 неможливо"),null):e/t}I.addEventListener("click",()=>{u=F});O.addEventListener("click",()=>{u=K});P.addEventListener("click",()=>{u=Y});G.addEventListener("click",()=>{u=j});W.addEventListener("click",()=>{const e=parseFloat(H.value),t=parseFloat(T.value),o=u(e,t);o!==null&&(R.value=o)});const J=document.querySelector("#time-input"),V=document.querySelector("#time-button"),E=document.querySelector("#time-text");V.addEventListener("click",()=>{let e=parseInt(J.value,10);if(isNaN(e)||e<0){E.textContent="Введіть число";return}const t=Math.floor(e/(3600*24)),o=Math.floor(e%(3600*24)/3600),r=Math.floor(e%3600/60),n=e%60;E.textContent=`${t} дн. ${o} год. ${r} хв. ${n} сек.`});const _=document.querySelector(".dinosaur__dino"),v=document.querySelector(".dinosaur__obstacle"),X=document.querySelector(".dinosaur__start-button");let L=!1;X.addEventListener("click",()=>{v.style.animation="moveObstacle 2s infinite linear"});document.addEventListener("keydown",e=>{e.code==="Space"&&!L&&(L=!0,_.classList.add("jump"),setTimeout(()=>{_.classList.remove("jump"),L=!1},600))});setInterval(()=>{const e=_.getBoundingClientRect(),t=v.getBoundingClientRect();e.right>t.left&&e.left<t.right&&e.bottom>t.top&&(alert("Програли!"),v.style.animation="none")},100);const k=document.querySelector(".footbal__field"),q=document.querySelector(".footbal__ball");k.addEventListener("click",e=>{const t=k.getBoundingClientRect(),o=q.getBoundingClientRect();let r=e.clientX-t.left-o.width/2,n=e.clientY-t.top-o.height/2;r=Math.max(0,Math.min(r,t.width-o.width)),n=Math.max(0,Math.min(n,t.height-o.height)),q.style.transition="transform 0.5s linear",q.style.transform=`translate(${r}px, ${n}px)`});const z=document.querySelector("#button-arrow-left"),Q=document.querySelector("#button-arrow-right"),d=document.querySelector(".team__img"),p=document.querySelector(".team__subtitle"),g=document.querySelector(".team__text"),l=document.querySelector("#first-element"),i=document.querySelector("#second-element");z.addEventListener("click",()=>{d.src.endsWith("photo1.webp"),d.src="../img/photo1.webp",p.innerHTML="Кіріл Присакар",g.innerHTML="Скром-майстер, виконував такі секції як: Hero, перевір в який рік народився, камінь-ножиці-папір, обидва калькулятори, наша команда та частково обери вченого",l.style.width="60px",l.style.backgroundColor="#797979",i.style.width="36px",i.style.backgroundColor="#D9D9D9"});Q.addEventListener("click",()=>{d.src.endsWith("photo1.webp"),d.src="../img/photo2.webp",p.innerHTML="Іван Довгаль",g.innerHTML="Робив такі секції як: header, вгадай число, google динозаврика, футбол, footer введіть 3 числа та частково обери вченого",i.style.width="60px",i.style.backgroundColor="#797979",l.style.width="36px",l.style.backgroundColor="#D9D9D9"});const c=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],U=document.querySelectorAll(".scientists__element"),Z=document.querySelectorAll("button");Z.forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".scientists__element").forEach(o=>{o.classList.add("rotate"),o.addEventListener("e",()=>{o.classList.remove("rotate")})})})});function a(e){U.forEach((t,o)=>{e[o]?(t.innerHTML=`<p>${e[o].name} ${e[o].surname}</p>`,t.style.display="flex"):t.style.display="none"})}document.querySelector(".scientists__century").addEventListener("click",()=>{a(c.filter(e=>e.born>=1801&&e.born<=1900))});document.querySelector(".scientists__sort-alpha").addEventListener("click",()=>{a([...c].sort((e,t)=>e.surname.localeCompare(t.surname)))});document.querySelector(".scientists__sort-age").addEventListener("click",()=>{a([...c].sort((e,t)=>{const o=e.dead-e.born;return t.dead-t.born-o}))});document.querySelector(".scientists__latest").addEventListener("click",()=>{let e=c[0];for(const t of c)t.born>e.born&&(e=t);a([e])});document.querySelector(".scientists__einstein").addEventListener("click",()=>{const e=c.find(t=>t.name==="Albert"&&t.surname==="Einstein");e&&alert(`Альберт Ейнштейн народився у ${e.born} році.`)});document.querySelector(".scientists__surname-c").addEventListener("click",()=>{a(c.filter(e=>e.surname.startsWith("C")))});document.querySelector(".scientists__delete-a").addEventListener("click",()=>{a(c.filter(e=>!e.name.startsWith("A")))});document.querySelector(".scientists__longest-shortest").addEventListener("click",()=>{let e=c[0],t=c[0];for(const o of c){const r=o.dead-o.born;r>e.dead-e.born&&(e=o),r<t.dead-t.born&&(t=o)}alert(`Найдовше прожив ${e.name} ${e.surname} (${e.dead-e.born} років).
    Найменше прожив ${t.name} ${t.surname} (${t.dead-t.born} років).`)});document.querySelector(".scientists__buttons").addEventListener("click",()=>{a(c.filter(e=>e.name[0]===e.surname[0]))});a(c);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModal:document.querySelector("[data-close-modalka]"),modalka:document.querySelector("[data-modalka]")};e.openModalBtn.addEventListener("click",t),e.closeModal.addEventListener("click",t);function t(){e.modalka.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();
//# sourceMappingURL=commonHelpers.js.map
