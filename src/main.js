import './style.css'

// Configuración de partículas
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#00f5ff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00f5ff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}

// Cursor personalizado
function initCustomCursor() {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    followerX += (mouseX - followerX) * 0.05;
    followerY += (mouseY - followerY) * 0.05;

    if (cursor) {
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
    }
    
    if (follower) {
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
    }

    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();

  // Efectos hover en elementos interactivos
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .contact-item');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursor) cursor.style.transform = 'scale(1.5)';
      if (follower) follower.style.transform = 'scale(2)';
    });
    
    el.addEventListener('mouseleave', () => {
      if (cursor) cursor.style.transform = 'scale(1)';
      if (follower) follower.style.transform = 'scale(1)';
    });
  });
}

// Efecto de escritura y borrado
function initTypingEffect() {
  const names = ['Silver', 'Developer', 'Designer', 'Creator'];
  const fonts = ['Orbitron', 'Poppins', 'Fira Code', 'Orbitron'];
  const typingElement = document.getElementById('typing-text');
  
  if (!typingElement) return;
  
  let nameIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isWaiting = false;

  function typeEffect() {
    const currentName = names[nameIndex];
    const currentFont = fonts[nameIndex];
    
    typingElement.style.fontFamily = currentFont;
    
    if (isWaiting) {
      setTimeout(() => {
        isWaiting = false;
        typeEffect();
      }, 2000);
      return;
    }

    if (isDeleting) {
      typingElement.textContent = currentName.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        setTimeout(typeEffect, 500);
        return;
      }
    } else {
      typingElement.textContent = currentName.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentName.length) {
        isDeleting = true;
        isWaiting = true;
      }
    }

    const speed = isDeleting ? 100 : 150;
    setTimeout(typeEffect, speed);
  }

  typeEffect();
}

// Navegación suave
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Animaciones al hacer scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Animar barras de progreso
        if (entry.target.classList.contains('skill-item')) {
          const progressBar = entry.target.querySelector('.skill-progress');
          const width = progressBar.getAttribute('data-width');
          setTimeout(() => {
            progressBar.style.width = width + '%';
          }, 300);
        }
        
        // Animar contadores
        if (entry.target.classList.contains('stat-number')) {
          animateCounter(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observar elementos animables
  const animatedElements = document.querySelectorAll(
    '.skill-item, .project-card, .stat-item, .contact-item, ' +
    '.about-intro, .description-item, .about-skills-preview, ' +
    '.featured-project, .card-header, .card-content'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// Animación de contadores
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Cambio de navbar al hacer scroll
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(10, 10, 10, 0.98)';
      navbar.style.borderBottom = '1px solid #00f5ff';
    } else {
      navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      navbar.style.borderBottom = '1px solid #333333';
    }
  });
}

// Menú móvil
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// Formulario de contacto
function initContactForm() {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;
      
      // Simular envío
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
        submitBtn.style.background = '#4ecdc4';
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          form.reset();
        }, 2000);
      }, 2000);
    });
  }
}

// Efectos de hover en proyectos
function initProjectHovers() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotateX(0)';
    });
  });
}

// Parallax effect para el hero
function initParallax() {
  const heroImage = document.querySelector('.hero-image');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    if (heroImage) {
      heroImage.style.transform = `translateY(${parallax}px)`;
    }
  });
}

// Loader de página
function initPageLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-text">Silver</div>
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
    </div>
  `;
  
  // Agregar estilos del loader
  const loaderStyles = `
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
  `;
  
  const style = document.createElement('style');
  style.textContent = loaderStyles;
  document.head.appendChild(style);
  document.body.appendChild(loader);
  
  // Remover loader después de 3 segundos
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.remove();
      style.remove();
    }, 500);
  }, 3000);
}

// Easter eggs
function initEasterEggs() {
  let konamiCode = [];
  const correctCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  
  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > correctCode.length) {
      konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(correctCode)) {
      triggerEasterEgg();
      konamiCode = [];
    }
  });
}

function triggerEasterEgg() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
  
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: fall 3s linear forwards;
      `;
      
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 3000);
    }, i * 100);
  }
  
  // Añadir animación de caída
  if (!document.querySelector('#confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Funcionalidad de copiar email
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  
  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Feedback visual
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.color = '#4caf50';
        
        setTimeout(() => {
          btn.innerHTML = originalIcon;
          btn.style.color = '';
        }, 2000);
        
        // Mostrar notificación
        showNotification('¡Email copiado al portapapeles!', 'success');
      } catch (err) {
        showNotification('Error al copiar email', 'error');
      }
    });
  });
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  // Estilos de notificación
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4caf50' : '#f44336'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

/*
=======================================================
NOTA DE IMPLEMENTACIÓN: ENVÍO DE EMAIL REAL
=======================================================

Para hacer funcionar el envío de emails real a fedfericogrisalesh@gmail.com, 
puedes usar uno de estos servicios:

1. EmailJS (Recomendado - Fácil y Gratis):
   - Registro en https://emailjs.com
   - Configurar servicio con Gmail
   - Reemplazar la simulación en initEnhancedContactForm() con:
   
   emailjs.send('service_id', 'template_id', {
     to_email: 'fedfericogrisalesh@gmail.com',
     from_name: formData.get('name'),
     from_email: formData.get('email'),
     project_type: formData.get('project'),
     budget: formData.get('budget'),
     message: formData.get('message')
   }).then(() => { ... });

2. Formspree:
   - Configurar endpoint en https://formspree.io
   - Cambiar action del form a la URL de Formspree

3. Netlify Forms (si host es Netlify):
   - Agregar data-netlify="true" al form
   - Configurar acción en panel de Netlify

4. Backend propio:
   - Crear API endpoint para envío de emails
   - Usar nodemailer o similar

Por ahora funciona con simulación visual.
=======================================================
*/

// Mejorar formulario de contacto
function initEnhancedContactForm() {
  const form = document.querySelector('.contact-form-new');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('.submit-btn');
      const formData = new FormData(form);
      
      // Animación de carga
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      
      // Preparar datos para enviar por email
      const emailData = {
        to: 'fedfericogrisalesh@gmail.com',
        subject: `Nuevo proyecto: ${formData.get('project')} - ${formData.get('name')}`,
        body: `
Nuevo mensaje de contacto del portfolio:

👤 Nombre: ${formData.get('name')}
📧 Email: ${formData.get('email')}
🎯 Tipo de Proyecto: ${formData.get('project')}
💰 Presupuesto: ${formData.get('budget')}

📝 Descripción:
${formData.get('message')}

---
Enviado desde: Portfolio Silver
Fecha: ${new Date().toLocaleString('es-CO')}
        `
      };
      
      try {
        // Simular envío de email (para producción, integrar con servicio como EmailJS, Formspree, etc.)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Éxito
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje Enviado!';
        submitBtn.style.background = '#4caf50';
        
        showNotification('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success');
        
        // Reset después de 3 segundos
        setTimeout(() => {
          form.reset();
          submitBtn.classList.remove('success');
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span class="btn-text">Enviar Mensaje</span>
            <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
            <div class="btn-loading"><i class="fas fa-spinner fa-spin"></i></div>
          `;
          submitBtn.style.background = '';
        }, 3000);
        
      } catch (error) {
        // Error
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        showNotification('Error al enviar mensaje. Intenta por Discord.', 'error');
      }
    });
    
    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });
    });
  }
}

// Validación de campos
function validateField(field) {
  const value = field.value.trim();
  
  // Remover clases previas
  field.classList.remove('valid', 'invalid');
  
  let isValid = true;
  
  if (field.required && !value) {
    isValid = false;
  }
  
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailRegex.test(value);
  }
  
  // Aplicar estilos
  field.classList.add(isValid ? 'valid' : 'invalid');
}

// Animaciones de entrada para elementos de contacto
function initContactAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        if (element.classList.contains('contact-method')) {
          const delay = Array.from(element.parentNode.children).indexOf(element) * 200;
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          }, delay);
        }
        
        if (element.classList.contains('floating-elements')) {
          element.style.opacity = '1';
        }
      }
    });
  }, observerOptions);

  // Observar elementos
  const contactMethods = document.querySelectorAll('.contact-method');
  const floatingElements = document.querySelector('.floating-elements');
  
  contactMethods.forEach(method => {
    method.style.opacity = '0';
    method.style.transform = 'translateX(-30px)';
    method.style.transition = 'all 0.6s ease';
    observer.observe(method);
  });
  
  if (floatingElements) {
    floatingElements.style.opacity = '0';
    floatingElements.style.transition = 'opacity 1s ease';
    observer.observe(floatingElements);
  }
}

// Agregar estilos de animación
function addContactStyles() {
  const style = document.createElement('style');
  style.textContent = `
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
  `;
  document.head.appendChild(style);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initParticles();
  initCustomCursor();
  initTypingEffect();
  initSmoothScrolling();
  initScrollAnimations();
  initNavbarScroll();
  initMobileMenu();
  initContactForm();
  initProjectHovers();
  initParallax();
  initEasterEggs();
  initCopyEmail();
  addContactStyles();
  initEnhancedContactForm();
  initContactAnimations();
  
  console.log('🚀 Portfolio Silver cargado exitosamente!');
  console.log('💡 Tip: Prueba el código Konami para una sorpresa...');
});

// Exportar funciones para uso externo
export {
  initParticles,
  initTypingEffect,
  initScrollAnimations
};
