(()=>{"use strict";var t={426:(t,n,e)=>{e.d(n,{Z:()=>a});var o=e(645),r=e.n(o)()((function(t){return t[1]}));r.push([t.id,"* {\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\nbody {\n  background-color: rgb(29, 15, 83);\n  font-size: 16px;\n  color: white;\n}\n\nh1 {\n  letter-spacing: 2px;\n  text-align: center;\n}\n\n\n\n.btn__menu:hover {\n  background-color: rgb(153, 33, 33);\n}\n\n.btn__menu:active {\n  background-color: rgb(243, 9, 9)\n}\n\n\n\n.button__header {\n  width: 8rem;\n  height: 1.5rem;\n  background-color: rgb(7, 139, 18);\n  font-weight: 600;\n  letter-spacing: 2px;\n  color: white;\n  margin: 0 10px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.button__header:hover {\n  background-color: rgb(153, 33, 33);\n}\n\n.button__header:active {\n  background-color: rgb(243, 9, 9)\n}\n\n.btn {\n  background-color: rgb(9, 91, 198);\n  color: white;\n  border-radius: 5px;\n}\n\n.btn:hover {\n  background-color: rgb(153, 33, 33);\n}\n\n.btn:active {\n  background-color: rgb(243, 9, 9)\n}\n\n.header {\n  padding-bottom: 25px;\n}\n\n.menu__wrapper {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.menu__create {\n  padding-bottom: 15px;\n}\n\n.input__text {\n  width: 200px;\n  height: 1.3rem;\n}\n\n.input {\n  margin-left: 10px;\n}\n\n.btn__menu {\n  width: 85px;\n  height: 27px;\n  margin-left: 10px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n\n.btn__manag {\n  width: 107px;\n}\n\n.btn__cenerate {\n  width: 130px;\n}\n\n.place__race {\n  margin-left: 10px;\n}\n\n\n.wrapper__pagination {\n  margin: 10px 0 0 10px;\n}\n\n.btn__pagination {\n  width: 80px;\n  margin-right: 10px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n/* .btn__pagination:hover {\n  background-color: rgb(153, 33, 33);\n}\n\n\n.btn__pagination:active {\n  background-color: rgb(243, 9, 9)\n} */\n\n/*///  CREATE CAR  /////*/\n.header__trak {\n  display: flex\n}\n\n/* .road {\n  display: flex;\n  justify-content: space-between;\n} */\n\n.flag {\n  width: 50px;\n  height: 50px;\n  bottom: 0px;\n}\n\n/* .finish {\n  display: flex;\n  align-items: flex-end;\n  margin-right: 18%;\n} */\n\n.finish .flag {\n  align-self: flex-end;\n}\n\n.wrapper__car {\n  display: flex;\n  align-items: flex-end;\n}\n\n.wrapper__car .car {\n  align-self: flex-end;\n}\n\n\n.road {\n  border-bottom: 2px dashed white;\n  margin-bottom: 15px;\n}\n\n.car {\n  margin-bottom: -6px;\n}\n\n.btn__car {\n  height: 27px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n\n.btn__motor {\n  margin-top: 5px;\n  width: 45px;\n  height: 25px;\n}\n\n.btn__motor {\n  background-color: transparent;\n  /* box-sizing: border-box; */\n  border-radius: 8px;\n}\n\n.btn__start {\n  color: rgb(26, 246, 11);\n  border: rgb(15, 251, 15) 2px solid;\n}\n\n.btn__stop {\n  color: rgb(246, 31, 11);\n  border: rgb(246, 31, 11) 2px solid;\n}\n\n.disabled {\n  border-color: grey;\n  color: grey;\n  cursor: default;\n}\n\n\n.table__title {\n\n  border: 1px solid #0d6efd;\n  width: 200px;\n  height: 50px;\n}\n\n/*//////////////////////////////*/\n.section__car {\n  position: relative;\n}\n\n.finish {\n  position: absolute;\n  bottom: 0;\n  right: 150px;\n  max-width: 50px;\n}\n\n\n.btn__manag:disabled,\n.btn__car:disabled,\n.btn__create:disabled,\n.btn__cenerate:disabled {\n  color: #51395f;\n  background: #888888;\n  opacity: 0.5;\n  cursor: default;\n}\n\n.wrapper__winners {\n  margin-left: 10px;\n}\n\ntd {\n  padding: 10px 35px 10px 35px;\n  border: 1px solid #0d6efd;\n}\n",""]);const a=r},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var i=0;i<t.length;i++){var d=[].concat(t[i]);o&&r[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),n.push(d))}},n}},379:(t,n,e)=>{var o,r=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function c(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function i(t,n){for(var e={},o=[],r=0;r<t.length;r++){var i=t[r],d=n.base?i[0]+n.base:i[0],l=e[d]||0,s="".concat(d," ").concat(l);e[d]=l+1;var u=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:_(p,n),references:1}),o.push(s)}return o}function d(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var a=e.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var c=r(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var l,s=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function u(t,n,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=s(n,r);else{var a=document.createTextNode(r),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(a,c[n]):t.appendChild(a)}}function p(t,n,e){var o=e.css,r=e.media,a=e.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,h=0;function _(t,n){var e,o,r;if(n.singleton){var a=h++;e=m||(m=d(n)),o=u.bind(null,e,a,!1),r=u.bind(null,e,a,!0)}else e=d(n),o=p.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=i(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var r=c(e[o]);a[r].references--}for(var d=i(t,n),l=0;l<e.length;l++){var s=c(e[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=d}}}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return t[o](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{const t=["Acura","Audi","BMW","Bugatti","Buick","Bentley","Cadillac","Chrysler","Citroen","Ford","Ferrari","Honda","Hummer","Hyundai","Infiniti","Jaguar","Jeep","KIA","Lada","Lamborghini","Lexus","Maserati","Maybach","Mazda","Mercedes","Nissan","Opel","Porsche","Rolls-Royce","Skoda","Subaru","Toyota","Tesla","VW","UAZ"],n=["Grand Caravan","X5","X3","X6","X4","Duster","CR-V","Corolla","C1","C3","C4","Berlingo","Rapid","Largus","LS","RX","350","CX-5","CX-9","CX-3","Roadster","Phantom","Camry","Polo","Arkana","Sandero","Logan","Trafic","Captur","RAV4","Rio","Creta","Solaris"];function o(){let t="#";for(let n=0;n<6;n+=1)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}var r=function(t,n,e,o){return new(e||(e=Promise))((function(r,a){function c(t){try{d(o.next(t))}catch(t){a(t)}}function i(t){try{d(o.throw(t))}catch(t){a(t)}}function d(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,i)}d((o=o.apply(t,n||[])).next())}))};function a(){const n=document.querySelector(".input__creat-text"),e=document.querySelector(".input__creat-color");if(!n||!e)return;let o=n.value;const r=e.value;if(!o){const n=Math.floor(Math.random()*t.length);o=t[n]}const a=document.querySelector(".garage__wrapper");a&&a.remove(),v(o,r).then((()=>{E()})).catch((()=>{}))}function c(t){return function(t){m(this,void 0,void 0,(function*(){null===(yield fetch(`${b}?id=${t}&status=started`,{method:"PATCH"}).then((n=>m(this,void 0,void 0,(function*(){const e=yield n.json(),o=Number((e.distance/e.velocity/1e3).toFixed(2));!function(t,n){r(this,void 0,void 0,(function*(){const e=document.getElementById(`${t}`),o=e.querySelector(".car"),r=e.querySelector(".flag"),a=o.getBoundingClientRect(),c=r.getBoundingClientRect(),l=a.x,s=c.x+c.width,u=1e3*n;let p=null;const h=(s-l)/n;i=window.requestAnimationFrame((function t(n){p||(p=n);const e=n-p,r=e/1e3*h;o.style.transform=`translateX(${r}px)`,e<u&&(i=window.requestAnimationFrame(t))}));try{if(yield function(t){return m(this,void 0,void 0,(function*(){const n=yield fetch(`${b}?id=${t}&status=drive`,{method:"PATCH"});return(yield n.json()).success}))}(t),d.push(t),1===d.length){const e={id:parseInt(t),name:"",color:"",wins:1,time:parseFloat(n.toFixed(3))};yield function(t){return m(this,void 0,void 0,(function*(){return(yield fetch(`${f}`,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json()}))}(e)}}catch(n){y(t),i&&(window.cancelAnimationFrame(i),i=null)}}))}(String(t),o)})))).catch((t=>{throw t})))&&console.log("error in getting data")}))}(Number(t)),function(t){const n=document.querySelector(`[data-stop="${t}-stop"]`);n&&n.removeAttribute("disabled")}(t),function(t){const n=document.querySelector(`[data-start="${t}-start"]`);n&&n.setAttribute("disabled","disabled")}(t),Promise.resolve()}let i=null,d=[];function l(){return r(this,void 0,void 0,(function*(){const t=document.querySelector(".btn__reset"),n=document.querySelector(".btn__race");document.querySelectorAll(".btn__start").forEach((t=>r(this,void 0,void 0,(function*(){const n=t.getAttribute("data-car-id");n&&(yield c(n))})))),t&&setTimeout((()=>{t.removeAttribute("disabled")}),1e4),n&&n.setAttribute("disabled","disabled"),function(){const t=document.querySelector(".btn__create");null==t||t.setAttribute("disabled","disabled");const n=document.querySelector(".btn__cenerate");null==n||n.setAttribute("disabled","disabled"),document.querySelectorAll(".btn__car-menu").forEach((t=>{t.setAttribute("disabled","disabled")}))}(),d=[]}))}function s(){return r(this,void 0,void 0,(function*(){const t=document.querySelector(".btn__race"),n=document.querySelector(".btn__reset");document.querySelectorAll(".btn__stop").forEach((t=>r(this,void 0,void 0,(function*(){const n=t.getAttribute("data-car-id");n&&(yield u(n))})))),t&&t.removeAttribute("disabled"),n&&n.setAttribute("disabled","disabled"),function(){const t=document.querySelector(".btn__create");null==t||t.removeAttribute("disabled");const n=document.querySelector(".btn__cenerate");null==n||n.removeAttribute("disabled"),document.querySelectorAll(".btn__car-menu").forEach((t=>{t.removeAttribute("disabled")}))}()}))}function u(t){return r(this,void 0,void 0,(function*(){var n;i&&(window.cancelAnimationFrame(i),i=null),n=t,document.getElementById(`${n}`).querySelector(".car").style.transform="translateX(0)",y(t),function(t){const n=document.querySelector(`[data-start="${t}-start"]`);n&&n.removeAttribute("disabled")}(t),function(t){const n=document.querySelector(`[data-stop="${t}-stop"]`);n&&n.setAttribute("disabled","disabled")}(t)}))}function p(){const e=document.querySelector(".garage__wrapper");e&&e.remove();for(let e=0;e<10;e++){const r=Math.floor(Math.random()*t.length),a=Math.floor(Math.random()*n.length);v(`${t[r]} ${n[a]}`,o()).then((()=>{9===e&&E()}))}}var m=function(t,n,e,o){return new(e||(e=Promise))((function(r,a){function c(t){try{d(o.next(t))}catch(t){a(t)}}function i(t){try{d(o.throw(t))}catch(t){a(t)}}function d(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,i)}d((o=o.apply(t,n||[])).next())}))};const h="http://localhost:3000",_=`${h}/garage`,b=`${h}/engine`,f=`${h}/winners`;function g(){return m(this,void 0,void 0,(function*(){const t=yield fetch(_);return yield t.json()}))}function v(t,n){return m(this,void 0,void 0,(function*(){const e=yield fetch(`${_}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,color:n})});if(e.ok)return yield e.json();throw new Error("Произошла ошибка при добавлении новой машины")}))}function y(t){return m(this,void 0,void 0,(function*(){return(yield fetch(`${b}?id=${t}&status=stopped`,{method:"PATCH"})).json()}))}var C=function(t,n,e,o){return new(e||(e=Promise))((function(r,a){function c(t){try{d(o.next(t))}catch(t){a(t)}}function i(t){try{d(o.throw(t))}catch(t){a(t)}}function d(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,i)}d((o=o.apply(t,n||[])).next())}))};function x(){const{body:t}=document,n=document.createElement("div");n.classList.add("wrapper"),t.appendChild(n),n.appendChild(function(){const t=document.createElement("div");t.classList.add("header");const n=document.createElement("h1");n.textContent="Async-Race",n.classList.add("h1__text");const e=document.createElement("button");e.classList.add("button__header","button-garage"),e.textContent="GARAGE",e.addEventListener("click",(function(){const t=document.querySelector(".wrapper__winners");t instanceof Node&&t.parentNode&&t.parentNode.removeChild(t),document.querySelector(".garage__wrapper")||E()}));const o=document.createElement("button");return o.classList.add("button__header","button-winner"),o.textContent="WINNERS",o.addEventListener("click",(function(){const t=document.querySelector(".garage__wrapper");t instanceof Node&&t.parentNode&&t.parentNode.removeChild(t),document.querySelector(".wrapper__winners")||function(){const t=document.querySelector(".wrapper"),n=document.createElement("div");n.classList.add("wrapper__winners");const e=document.createElement("h2");e.classList.add("winnres__title"),e.textContent="Winners";const o=document.createElement("h3");o.classList.add("winners__page"),o.textContent="Page";const r=document.createElement("table");r.classList.add("table-winners");const a=document.createElement("tr"),c=document.createElement("th");c.classList.add("table__title"),c.textContent="Number";const i=document.createElement("th");i.classList.add("table__title"),i.textContent="Car";const d=document.createElement("th");d.classList.add("table__title"),d.textContent="Name";const l=document.createElement("th");l.classList.add("table__title"),l.textContent="Wins",l.setAttribute("data-sort-name","wins");const s=document.createElement("th");s.classList.add("table__title"),s.textContent="Time",s.setAttribute("data-sort-name","time"),a.appendChild(c),a.appendChild(i),a.appendChild(d),a.appendChild(l),a.appendChild(s),r.appendChild(a),null==n||n.appendChild(e),null==n||n.appendChild(o),null==n||n.appendChild(r),null==n||n.appendChild(w()),null==t||t.appendChild(n),function(){C(this,void 0,void 0,(function*(){try{!function(t){const n=document.querySelector(".table-winners");if(!n)return void console.error('Element with class "table-winners" not found.');n.innerHTML="";const e=document.createElement("tr"),o=document.createElement("th");o.classList.add("table__title"),o.textContent="Number";const r=document.createElement("th");r.classList.add("table__title"),r.textContent="Car";const a=document.createElement("th");a.classList.add("table__title"),a.textContent="Name";const c=document.createElement("th");c.classList.add("table__title"),c.textContent="Wins",c.setAttribute("data-sort-name","wins");const i=document.createElement("th");i.classList.add("table__title"),i.textContent="Time",i.setAttribute("data-sort-name","time"),e.appendChild(o),e.appendChild(r),e.appendChild(a),e.appendChild(c),e.appendChild(i),n.appendChild(e),t.forEach(((t,e)=>{if(t.car){const o=document.createElement("tr"),r=document.createElement("td");r.textContent=String(e+1);const a=document.createElement("td");a.innerHTML=L(t.car.color);const c=document.createElement("td");c.textContent=t.car.name;const i=document.createElement("td");i.textContent=t.wins.toString();const d=document.createElement("td");d.textContent=t.time.toString(),o.appendChild(r),o.appendChild(a),o.appendChild(c),o.appendChild(i),o.appendChild(d),n.appendChild(o)}}))}(yield function(){return m(this,void 0,void 0,(function*(){const t=yield fetch(_),n=yield fetch(f),e=yield t.json(),o=yield n.json();return e.map((t=>{if(!o)return{};for(let n=0;n<o.length;n++)if(t.id===o[n].id)return Object.assign(Object.assign({},o[n]),{car:Object.assign({},t)});return{}})).filter((t=>t.car))}))}())}catch(t){console.error("Error fetching winners:",t)}}))}()}()})),t.appendChild(n),t.appendChild(e),t.appendChild(o),t}()),E()}function E(){const n=document.querySelector(".wrapper"),e=document.createElement("div");e.classList.add("garage__wrapper");const o=document.createElement("div");o.classList.add("garage__menu"),null==n||n.append(e),e.append(o),o.appendChild(function(){const t=document.createElement("div");t.classList.add("menu__create","menu__wrapper");const n=document.createElement("input");n.type="text",n.classList.add("input","input__create","input__text","input__creat-text");const e=document.createElement("input");e.type="color",e.value="#00ff00",e.classList.add("input","input__create","input__color","input__creat-color");const o=document.createElement("button");return o.classList.add("btn__menu","btn","btn__create"),o.textContent="CREATE",o.addEventListener("click",a),t.append(n),t.append(e),t.append(o),t}()),o.appendChild(function(){const t=document.createElement("div");t.classList.add("container__btn-manag");const n=document.createElement("button");n.classList.add("btn__menu","btn__manag","btn","btn__race"),n.textContent="RACE",n.addEventListener("click",l);const e=document.createElement("button");e.classList.add("btn__menu","btn__manag","btn","btn__reset"),e.setAttribute("disabled","disabled"),e.textContent="RESET",e.addEventListener("click",s);const o=document.createElement("button");return o.classList.add("btn__menu","btn__cenerate","btn"),o.textContent="GENERATE CARS",o.addEventListener("click",p),t.appendChild(n),t.appendChild(e),t.appendChild(o),t}()),g().then((n=>{e.appendChild(function(n){const e=document.createElement("div");e.classList.add("place__race");const o=document.createElement("h2");o.classList.add("page__title"),o.textContent=`GARAGE (${n.length})`;const a=document.createElement("h3");a.classList.add("page__num"),a.textContent="page #1";const i=document.createElement("div");return i.classList.add("race__tracks"),e.appendChild(o),e.appendChild(a),e.appendChild(i),n.forEach((n=>{const e=function(n){const e=document.createElement("div");e.classList.add("section__car"),e.id=`${n.id}`;const o=document.createElement("div");o.classList.add("header__trak");const a=document.createElement("button");a.classList.add("btn__car","btn__select","btn","btn__car-menu"),a.setAttribute("data-select",`${n.id}-select`),a.textContent="SELECT";let i=!1;a.addEventListener("click",(()=>{if(!i){const n=function(){const t=document.createElement("div");t.classList.add("menu__update","menu__wrapper");const n=document.createElement("input");n.type="text",n.classList.add("input","input__update","input__text");const e=document.createElement("input");e.type="color",e.classList.add("input","input__update","input__color");const o=document.createElement("button");return o.classList.add("btn__menu","btn","btn__update"),o.textContent="UPDATE",t.append(n),t.append(e),t.append(o),t}();if(function(t,n){var e;r(this,void 0,void 0,(function*(){const o=t.querySelector(".input__text"),r=t.querySelector(".input__color"),a=parseInt((null===(e=n.getAttribute("data-select"))||void 0===e?void 0:e.split("-")[0])||"0",10);if(a){const t=yield function(t){return m(this,void 0,void 0,(function*(){const n=yield fetch(`${_}/${t}`);return yield n.json()}))}(a.toString());o.value=t.name,r.value=t.color}}))}(n,a),n){const c=n.querySelector(".btn__update");c&&c.addEventListener("click",function(n,e,o){return()=>r(this,void 0,void 0,(function*(){var r;try{const a=parseInt((null===(r=n.getAttribute("data-select"))||void 0===r?void 0:r.split("-")[0])||"0",10);if(a){const n=e.querySelector(".input__text"),r=e.querySelector(".input__color");let c=null==n?void 0:n.value;const i=null==r?void 0:r.value;if(!c||!i){const n=Math.floor(Math.random()*t.length);c=t[n]}const d={id:a,name:c,color:i},l=yield function(t,n){return m(this,void 0,void 0,(function*(){return(yield fetch(`${_}/${t}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json()}))}(a.toString(),d),s=o.querySelector(".name__car");s&&(s.textContent=l.name);const u=o.querySelector(".car");u&&(u.style.fill=l.color),document.querySelectorAll(".section__car").forEach((t=>{const n=t.querySelector(".car");n&&n.id===`${a}-User`&&(n.style.fill=l.color)})),e.remove();const p=document.querySelector(".garage__wrapper");p&&(p.remove(),E())}}catch(t){}}))}(a,n,e)),o.appendChild(n),i=!0}}}));const d=document.createElement("button");d.classList.add("btn__car","btn__remove","btn","btn__car-menu"),d.setAttribute("data-remove",`${n.id}-remove`),d.textContent="REMOVE",d.addEventListener("click",(()=>C(this,void 0,void 0,(function*(){yield function(t,n){return r(this,void 0,void 0,(function*(){try{yield function(t){return m(this,void 0,void 0,(function*(){yield fetch(`${_}/${t}`,{method:"DELETE"})}))}(t),n.remove();const e=g(),o=document.querySelector(".page__title");o instanceof HTMLHeadingElement&&e.then((t=>{o.textContent=`GARAGE (${t.length})`}))}catch(t){}}))}(n.id.toString(),e)}))));const l=document.createElement("div");l.classList.add("name__car"),l.textContent=n.name,o.appendChild(a),o.appendChild(d),o.appendChild(l);const s=document.createElement("div");s.classList.add("motor__trak");const p=document.createElement("button");p.classList.add("btn__start","btn__motor","btn__car"),p.setAttribute("data-start",`${n.id}-start`),p.setAttribute("data-car-id",`${n.id}`),p.textContent="A",p.addEventListener("click",(()=>{c(n.id.toString())}));const h=document.createElement("button");h.classList.add("btn__stop","btn__motor","btn__car"),h.setAttribute("data-stop",`${n.id}-stop`),h.setAttribute("data-car-id",`${n.id}`),h.setAttribute("disabled","disabled"),h.textContent="B",h.addEventListener("click",(()=>{u(n.id.toString())})),s.appendChild(p),s.appendChild(h);const b=document.createElement("div");b.classList.add("road");const f=function(t){const n=document.createElement("div");return n.classList.add("wrapper__car"),n.innerHTML=`<svg \n  id = "${t.id}-User"\n  class="car"\n  width="95"\n  height="90"\n  version="1.0" xmlns="http://www.w3.org/2000/svg"\n   width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"\n   preserveAspectRatio="xMidYMid meet">\n  <metadata>\n  Created by potrace 1.15, written by Peter Selinger 2001-2017\n  </metadata>\n  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"\n  fill=${t.color} stroke="#dae8ec">\n  <path d="M3780 5409 c-108 -13 -241 -53 -350 -106 -201 -99 -336 -288 -444\n  -618 -30 -93 -64 -224 -82 -312 -2 -12 -14 -28 -27 -34 -12 -6 -38 -26 -57\n  -44 l-35 -33 -180 -6 c-563 -21 -838 -78 -1200 -250 -440 -210 -760 -508\n  -1099 -1023 -37 -56 -118 -161 -181 -232 -62 -72 -117 -141 -120 -152 -4 -11\n  -4 -36 0 -55 10 -56 35 -60 139 -24 49 16 91 29 92 27 2 -1 -7 -36 -18 -77\n  -18 -63 -22 -102 -22 -250 0 -149 3 -186 21 -252 108 -385 413 -688 808 -803\n  332 -96 665 -65 976 91 174 87 362 258 460 418 l51 84 56 6 c31 3 111 6 177 7\n  l120 1 3 -56 c4 -66 -12 -59 187 -81 315 -33 338 -34 1730 -75 537 -16 998\n  -29 1350 -40 637 -20 1347 -30 2215 -32 856 -2 891 -1 1065 20 141 17 234 22\n  425 22 l245 -1 32 -47 c93 -136 270 -281 447 -367 490 -239 1075 -150 1451\n  219 45 44 108 118 139 163 56 80 59 83 97 83 44 0 46 5 22 54 -14 31 -15 41\n  -4 73 56 167 72 255 72 407 0 215 -65 420 -194 611 -99 147 -314 326 -481 401\n  -53 24 -68 36 -82 66 -29 65 -66 91 -133 96 l-59 4 -101 224 c-56 123 -101\n  230 -101 239 0 22 -39 101 -58 118 -36 30 -98 39 -437 57 -192 11 -433 24\n  -535 30 -102 6 -264 15 -360 20 -203 12 -446 26 -680 40 -91 6 -239 15 -330\n  20 -200 12 -434 27 -635 40 -263 17 -798 50 -853 53 l-53 2 -169 393 c-134\n  309 -168 397 -161 415 4 12 6 29 3 37 -15 47 -119 117 -245 165 -172 64 -837\n  168 -1407 219 -518 47 -1274 70 -1490 45z m1935 -805 c311 -25 693 -77 782\n  -105 70 -22 93 -107 93 -348 l0 -181 -199 0 c-232 0 -238 2 -203 73 18 36 19\n  49 11 89 -9 41 -15 48 -43 58 -18 6 -40 8 -48 5 -14 -5 -99 -100 -166 -184\n  l-19 -25 -199 12 c-399 25 -808 53 -812 57 -7 6 19 218 33 277 38 166 124 266\n  246 287 64 12 276 6 524 -15z m-4716 -2257 c141 -40 159 -61 45 -51 -60 5 -89\n  13 -121 33 -24 14 -43 32 -43 39 0 6 1 12 3 12 1 -1 53 -15 116 -33z m-102\n  -94 c2 -6 -3 -13 -12 -16 -10 -5 -15 0 -15 14 0 21 21 22 27 2z m218 -110 c6\n  -25 1 -34 -45 -74 -50 -46 -84 -59 -152 -59 -23 0 -29 6 -37 38 -18 64 -15 77\n  27 92 50 20 87 27 148 29 49 1 52 -1 59 -26z m691 -23 c60 -17 133 -40 163\n  -52 l53 -21 -6 -41 c-4 -22 -9 -42 -11 -44 -2 -3 -50 1 -107 8 -103 12 -112\n  16 -210 81 -8 5 -1 99 6 99 2 0 52 -14 112 -30z m-581 -130 c18 -20 18 -23 -5\n  -93 -17 -55 -37 -90 -83 -144 -33 -40 -63 -73 -66 -73 -10 0 -51 57 -51 70 0\n  6 12 51 26 99 26 87 27 88 83 124 66 42 72 43 96 17z m452 -52 c28 -29 76 -93\n  108 -142 l57 -89 -39 -39 -39 -39 -87 88 c-66 67 -93 103 -114 152 l-27 63 35\n  29 c18 16 39 29 44 29 6 0 34 -24 62 -52z m-680 -53 c-12 -36 -24 -65 -28 -65\n  -3 0 -18 26 -32 58 -30 65 -26 70 45 71 l36 1 -21 -65z m455 -30 c11 -42 17\n  -102 17 -198 l1 -138 -57 3 -58 3 -19 136 -19 136 24 62 c24 61 25 62 59 59\n  34 -3 36 -5 52 -63z m438 50 c94 -11 93 -10 69 -58 -32 -62 -59 -98 -70 -91\n  -11 6 -109 150 -109 159 0 4 12 4 28 1 15 -3 52 -8 82 -11z m-615 -264 c5 -66\n  4 -91 -4 -91 -14 0 -98 42 -124 62 -18 13 -15 19 45 89 73 87 71 88 83 -60z\n  m430 -52 c-7 -10 -132 -59 -153 -59 -15 0 -17 11 -14 117 l3 116 84 -83 c46\n  -46 82 -87 80 -91z m145 98 c0 -2 -17 -19 -37 -38 l-38 -34 34 38 c33 34 41\n  42 41 34z m9380 -202 l0 -75 -75 0 -75 0 0 70 0 69 73 4 c39 1 73 4 75 5 1 1\n  2 -32 2 -73z m198 36 l31 -39 -49 -21 c-27 -12 -62 -24 -77 -27 l-28 -6 3 66\n  4 66 42 0 c38 0 46 -5 74 -39z m132 24 c-7 -8 -18 -15 -25 -15 -7 0 -18 7 -25\n  15 -11 13 -7 15 25 15 32 0 36 -2 25 -15z m-765 -15 c-13 -15 -22 -17 -36 -10\n  -35 19 -31 30 12 30 41 0 42 0 24 -20z m215 1 c0 -10 -3 -38 -6 -63 -6 -45 -7\n  -45 -38 -38 -39 10 -126 41 -126 45 0 2 14 19 32 39 29 33 36 36 85 36 45 0\n  53 -3 53 -19z"/>\n  </g>\n  </svg>`,n}(n),v=document.createElement("div");v.classList.add("finish");const y=document.createElement("img");return y.classList.add("flag"),y.src="../assets/Flag.png",v.appendChild(y),b.appendChild(f),b.appendChild(v),e.appendChild(o),e.appendChild(s),e.appendChild(b),e}(n);i.appendChild(e)})),e}(n)),e.appendChild(w())})).catch((()=>{}))}function w(){const t=document.createElement("div");t.classList.add("wrapper__pagination");const n=document.createElement("button");n.classList.add("button__prev","btn__pagination","btn"),n.textContent="PREV";const e=document.createElement("button");return e.classList.add("button__next","btn__pagination","btn"),e.textContent="NEXT",t.appendChild(e),t.appendChild(n),t}const L=t=>`<svg \n  class="car"\n  width="55"\n  height="50"\n  version="1.0" xmlns="http://www.w3.org/2000/svg"\n   width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"\n   preserveAspectRatio="xMidYMid meet">\n  <metadata>\n  Created by potrace 1.15, written by Peter Selinger 2001-2017\n  </metadata>\n  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"\n  fill=${t} stroke="#dae8ec">\n  <path d="M3780 5409 c-108 -13 -241 -53 -350 -106 -201 -99 -336 -288 -444\n  -618 -30 -93 -64 -224 -82 -312 -2 -12 -14 -28 -27 -34 -12 -6 -38 -26 -57\n  -44 l-35 -33 -180 -6 c-563 -21 -838 -78 -1200 -250 -440 -210 -760 -508\n  -1099 -1023 -37 -56 -118 -161 -181 -232 -62 -72 -117 -141 -120 -152 -4 -11\n  -4 -36 0 -55 10 -56 35 -60 139 -24 49 16 91 29 92 27 2 -1 -7 -36 -18 -77\n  -18 -63 -22 -102 -22 -250 0 -149 3 -186 21 -252 108 -385 413 -688 808 -803\n  332 -96 665 -65 976 91 174 87 362 258 460 418 l51 84 56 6 c31 3 111 6 177 7\n  l120 1 3 -56 c4 -66 -12 -59 187 -81 315 -33 338 -34 1730 -75 537 -16 998\n  -29 1350 -40 637 -20 1347 -30 2215 -32 856 -2 891 -1 1065 20 141 17 234 22\n  425 22 l245 -1 32 -47 c93 -136 270 -281 447 -367 490 -239 1075 -150 1451\n  219 45 44 108 118 139 163 56 80 59 83 97 83 44 0 46 5 22 54 -14 31 -15 41\n  -4 73 56 167 72 255 72 407 0 215 -65 420 -194 611 -99 147 -314 326 -481 401\n  -53 24 -68 36 -82 66 -29 65 -66 91 -133 96 l-59 4 -101 224 c-56 123 -101\n  230 -101 239 0 22 -39 101 -58 118 -36 30 -98 39 -437 57 -192 11 -433 24\n  -535 30 -102 6 -264 15 -360 20 -203 12 -446 26 -680 40 -91 6 -239 15 -330\n  20 -200 12 -434 27 -635 40 -263 17 -798 50 -853 53 l-53 2 -169 393 c-134\n  309 -168 397 -161 415 4 12 6 29 3 37 -15 47 -119 117 -245 165 -172 64 -837\n  168 -1407 219 -518 47 -1274 70 -1490 45z m1935 -805 c311 -25 693 -77 782\n  -105 70 -22 93 -107 93 -348 l0 -181 -199 0 c-232 0 -238 2 -203 73 18 36 19\n  49 11 89 -9 41 -15 48 -43 58 -18 6 -40 8 -48 5 -14 -5 -99 -100 -166 -184\n  l-19 -25 -199 12 c-399 25 -808 53 -812 57 -7 6 19 218 33 277 38 166 124 266\n  246 287 64 12 276 6 524 -15z m-4716 -2257 c141 -40 159 -61 45 -51 -60 5 -89\n  13 -121 33 -24 14 -43 32 -43 39 0 6 1 12 3 12 1 -1 53 -15 116 -33z m-102\n  -94 c2 -6 -3 -13 -12 -16 -10 -5 -15 0 -15 14 0 21 21 22 27 2z m218 -110 c6\n  -25 1 -34 -45 -74 -50 -46 -84 -59 -152 -59 -23 0 -29 6 -37 38 -18 64 -15 77\n  27 92 50 20 87 27 148 29 49 1 52 -1 59 -26z m691 -23 c60 -17 133 -40 163\n  -52 l53 -21 -6 -41 c-4 -22 -9 -42 -11 -44 -2 -3 -50 1 -107 8 -103 12 -112\n  16 -210 81 -8 5 -1 99 6 99 2 0 52 -14 112 -30z m-581 -130 c18 -20 18 -23 -5\n  -93 -17 -55 -37 -90 -83 -144 -33 -40 -63 -73 -66 -73 -10 0 -51 57 -51 70 0\n  6 12 51 26 99 26 87 27 88 83 124 66 42 72 43 96 17z m452 -52 c28 -29 76 -93\n  108 -142 l57 -89 -39 -39 -39 -39 -87 88 c-66 67 -93 103 -114 152 l-27 63 35\n  29 c18 16 39 29 44 29 6 0 34 -24 62 -52z m-680 -53 c-12 -36 -24 -65 -28 -65\n  -3 0 -18 26 -32 58 -30 65 -26 70 45 71 l36 1 -21 -65z m455 -30 c11 -42 17\n  -102 17 -198 l1 -138 -57 3 -58 3 -19 136 -19 136 24 62 c24 61 25 62 59 59\n  34 -3 36 -5 52 -63z m438 50 c94 -11 93 -10 69 -58 -32 -62 -59 -98 -70 -91\n  -11 6 -109 150 -109 159 0 4 12 4 28 1 15 -3 52 -8 82 -11z m-615 -264 c5 -66\n  4 -91 -4 -91 -14 0 -98 42 -124 62 -18 13 -15 19 45 89 73 87 71 88 83 -60z\n  m430 -52 c-7 -10 -132 -59 -153 -59 -15 0 -17 11 -14 117 l3 116 84 -83 c46\n  -46 82 -87 80 -91z m145 98 c0 -2 -17 -19 -37 -38 l-38 -34 34 38 c33 34 41\n  42 41 34z m9380 -202 l0 -75 -75 0 -75 0 0 70 0 69 73 4 c39 1 73 4 75 5 1 1\n  2 -32 2 -73z m198 36 l31 -39 -49 -21 c-27 -12 -62 -24 -77 -27 l-28 -6 3 66\n  4 66 42 0 c38 0 46 -5 74 -39z m132 24 c-7 -8 -18 -15 -25 -15 -7 0 -18 7 -25\n  15 -11 13 -7 15 25 15 32 0 36 -2 25 -15z m-765 -15 c-13 -15 -22 -17 -36 -10\n  -35 19 -31 30 12 30 41 0 42 0 24 -20z m215 1 c0 -10 -3 -38 -6 -63 -6 -45 -7\n  -45 -38 -38 -39 10 -126 41 -126 45 0 2 14 19 32 39 29 33 36 36 85 36 45 0\n  53 -3 53 -19z"/>\n  </g>\n  </svg>`;var S=e(379),A=e.n(S),q=e(426);A()(q.Z,{insert:"head",singleton:!1}),q.Z.locals,function(){let t=!1;x(),t||(alert("Прошу прощение за это сообщение. Из-за того что не смог сделать пагинацию, генерация машинок вместо 100 сделал только 10 шт, чтобы не было много на одной странице. Победитель не выводиться на экран но записывается в баззу победителей, без подсчета количества побед. Так же при удалении машинки с гаража удаляется и в таблице победителей."),t=!0)}()})()})();