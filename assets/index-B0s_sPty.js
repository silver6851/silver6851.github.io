(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function f(){typeof particlesJS<"u"&&particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#00f5ff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#00f5ff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}function m(){const e=document.querySelector(".cursor"),t=document.querySelector(".cursor-follower");let n=0,r=0,o=0,s=0,a=0,i=0;document.addEventListener("mousemove",l=>{n=l.clientX,r=l.clientY});function c(){o+=(n-o)*.1,s+=(r-s)*.1,a+=(n-a)*.05,i+=(r-i)*.05,e&&(e.style.left=o+"px",e.style.top=s+"px"),t&&(t.style.left=a+"px",t.style.top=i+"px"),requestAnimationFrame(c)}c(),document.querySelectorAll("a, button, .project-card, .skill-item, .contact-item").forEach(l=>{l.addEventListener("mouseenter",()=>{e&&(e.style.transform="scale(1.5)"),t&&(t.style.transform="scale(2)")}),l.addEventListener("mouseleave",()=>{e&&(e.style.transform="scale(1)"),t&&(t.style.transform="scale(1)")})})}function p(){const e=["Silver","Developer","Designer","Creator"],t=["Orbitron","Poppins","Fira Code","Orbitron"],n=document.getElementById("typing-text");if(!n)return;let r=0,o=0,s=!1,a=!1;function i(){const c=e[r],u=t[r];if(n.style.fontFamily=u,a){setTimeout(()=>{a=!1,i()},2e3);return}if(s){if(n.textContent=c.substring(0,o-1),o--,o===0){s=!1,r=(r+1)%e.length,setTimeout(i,500);return}}else n.textContent=c.substring(0,o+1),o++,o===c.length&&(s=!0,a=!0);setTimeout(i,s?100:150)}i()}function g(){document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();const r=t.getAttribute("href"),o=document.querySelector(r);if(o){const s=o.offsetTop-80;window.scrollTo({top:s,behavior:"smooth"})}})})}function y(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(r=>{r.forEach(o=>{if(o.isIntersecting){if(o.target.style.opacity="1",o.target.style.transform="translateY(0)",o.target.classList.contains("skill-item")){const s=o.target.querySelector(".skill-progress"),a=s.getAttribute("data-width");setTimeout(()=>{s.style.width=a+"%"},300)}o.target.classList.contains("stat-number")&&v(o.target)}})},e);document.querySelectorAll(".skill-item, .project-card, .stat-item, .contact-item, .about-text, .about-image").forEach(r=>{r.style.opacity="0",r.style.transform="translateY(30px)",r.style.transition="all 0.6s ease",t.observe(r)})}function v(e){const t=parseInt(e.getAttribute("data-target")),r=t/(2e3/16);let o=0;const s=setInterval(()=>{o+=r,o>=t&&(o=t,clearInterval(s)),e.textContent=Math.floor(o)},16)}function b(){const e=document.querySelector(".navbar");window.addEventListener("scroll",()=>{window.scrollY>100?(e.style.background="rgba(10, 10, 10, 0.98)",e.style.borderBottom="1px solid #00f5ff"):(e.style.background="rgba(10, 10, 10, 0.95)",e.style.borderBottom="1px solid #333333")})}function h(){const e=document.querySelector(".hamburger"),t=document.querySelector(".nav-menu");e&&t&&(e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(r=>{r.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("active")})}))}function x(){const e=document.querySelector(".contact-form");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=e.querySelector('button[type="submit"]'),r=n.innerHTML;n.innerHTML='<i class="fas fa-spinner fa-spin"></i> Enviando...',n.disabled=!0,setTimeout(()=>{n.innerHTML='<i class="fas fa-check"></i> ¡Enviado!',n.style.background="#4ecdc4",setTimeout(()=>{n.innerHTML=r,n.disabled=!1,n.style.background="",e.reset()},2e3)},2e3)})}function E(){document.querySelectorAll(".project-card").forEach(t=>{t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-10px) rotateX(5deg)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0) rotateX(0)"})})}function L(){const e=document.querySelector(".hero-image");window.addEventListener("scroll",()=>{const n=window.pageYOffset*.5;e&&(e.style.transform=`translateY(${n}px)`)})}function w(){const e=document.createElement("div");e.className="page-loader",e.innerHTML=`
    <div class="loader-content">
      <div class="loader-text">Silver</div>
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
    </div>
  `;const t=`
    .page-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0a0a0a;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      transition: opacity 0.5s ease;
    }
    
    .loader-content {
      text-align: center;
    }
    
    .loader-text {
      font-family: 'Orbitron', monospace;
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(135deg, #00f5ff 0%, #4ecdc4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 2rem;
      animation: pulse 2s ease-in-out infinite;
    }
    
    .loader-bar {
      width: 300px;
      height: 4px;
      background: #1a1a1a;
      border-radius: 2px;
      overflow: hidden;
    }
    
    .loader-progress {
      height: 100%;
      background: linear-gradient(135deg, #00f5ff 0%, #4ecdc4 100%);
      border-radius: 2px;
      animation: loading 3s ease-in-out;
    }
    
    @keyframes loading {
      0% { width: 0%; }
      100% { width: 100%; }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `,n=document.createElement("style");n.textContent=t,document.head.appendChild(n),document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>{e.remove(),n.remove()},500)},3e3)}function k(){let e=[];const t=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];document.addEventListener("keydown",n=>{e.push(n.code),e.length>t.length&&e.shift(),JSON.stringify(e)===JSON.stringify(t)&&(S(),e=[])})}function S(){const e=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#ffeaa7","#dda0dd"];for(let t=0;t<50;t++)setTimeout(()=>{const n=document.createElement("div");n.style.cssText=`
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${e[Math.floor(Math.random()*e.length)]};
        left: ${Math.random()*100}vw;
        top: -10px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: fall 3s linear forwards;
      `,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)},t*100);if(!document.querySelector("#confetti-style")){const t=document.createElement("style");t.id="confetti-style",t.textContent=`
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `,document.head.appendChild(t)}}function T(){document.querySelectorAll(".copy-btn").forEach(t=>{t.addEventListener("click",async n=>{n.preventDefault();const r=t.getAttribute("data-copy");try{await navigator.clipboard.writeText(r);const o=t.innerHTML;t.innerHTML='<i class="fas fa-check"></i>',t.style.color="#4caf50",setTimeout(()=>{t.innerHTML=o,t.style.color=""},2e3),d("¡Email copiado al portapapeles!","success")}catch{d("Error al copiar email","error")}})})}function d(e,t="info"){const n=document.createElement("div");n.className=`notification ${t}`,n.innerHTML=`
    <div class="notification-content">
      <i class="fas ${t==="success"?"fa-check-circle":"fa-exclamation-circle"}"></i>
      <span>${e}</span>
    </div>
  `,n.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${t==="success"?"#4caf50":"#f44336"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `,document.body.appendChild(n),setTimeout(()=>{n.style.animation="slideOut 0.3s ease",setTimeout(()=>n.remove(),300)},3e3)}function C(){const e=document.querySelector(".contact-form-new");e&&(e.addEventListener("submit",async n=>{n.preventDefault();const r=e.querySelector(".submit-btn"),o=new FormData(e);r.classList.add("loading"),r.disabled=!0,`${o.get("project")}${o.get("name")}`,`${o.get("name")}${o.get("email")}${o.get("project")}${o.get("budget")}${o.get("message")}${new Date().toLocaleString("es-CO")}`;try{await new Promise(s=>setTimeout(s,2e3)),r.classList.remove("loading"),r.classList.add("success"),r.innerHTML='<i class="fas fa-check"></i> ¡Mensaje Enviado!',r.style.background="#4caf50",d("¡Mensaje enviado exitosamente! Te contactaré pronto.","success"),setTimeout(()=>{e.reset(),r.classList.remove("success"),r.disabled=!1,r.innerHTML=`
            <span class="btn-text">Enviar Mensaje</span>
            <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
            <div class="btn-loading"><i class="fas fa-spinner fa-spin"></i></div>
          `,r.style.background=""},3e3)}catch{r.classList.remove("loading"),r.disabled=!1,d("Error al enviar mensaje. Intenta por Discord.","error")}}),e.querySelectorAll("input, select, textarea").forEach(n=>{n.addEventListener("blur",()=>{A(n)})}))}function A(e){const t=e.value.trim();e.classList.remove("valid","invalid");let n=!0;e.required&&!t&&(n=!1),e.type==="email"&&t&&(n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)),e.classList.add(n?"valid":"invalid")}function M(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(o=>{o.forEach(s=>{if(s.isIntersecting){const a=s.target;if(a.classList.contains("contact-method")){const i=Array.from(a.parentNode.children).indexOf(a)*200;setTimeout(()=>{a.style.opacity="1",a.style.transform="translateX(0)"},i)}a.classList.contains("floating-elements")&&(a.style.opacity="1")}})},e),n=document.querySelectorAll(".contact-method"),r=document.querySelector(".floating-elements");n.forEach(o=>{o.style.opacity="0",o.style.transform="translateX(-30px)",o.style.transition="all 0.6s ease",t.observe(o)}),r&&(r.style.opacity="0",r.style.transition="opacity 1s ease",t.observe(r))}function q(){const e=document.createElement("style");e.textContent=`
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    .form-group input.valid,
    .form-group select.valid,
    .form-group textarea.valid {
      border-color: #4caf50;
    }
    
    .form-group input.invalid,
    .form-group select.invalid,
    .form-group textarea.invalid {
      border-color: #f44336;
    }
    
    .notification-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `,document.head.appendChild(e)}document.addEventListener("DOMContentLoaded",()=>{w(),f(),m(),p(),g(),y(),b(),h(),x(),E(),L(),k(),T(),q(),C(),M(),console.log("🚀 Portfolio Silver cargado exitosamente!"),console.log("💡 Tip: Prueba el código Konami para una sorpresa...")});
