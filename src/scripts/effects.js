// Inicialización de GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animaciones de entrada para elementos
function initAnimations() {
    // Animación del hero
    gsap.from(".hero-content", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out"
    });

    // Animaciones al hacer scroll
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 50,
            opacity: 0
        });
    });

    // Efecto parallax para el fondo
    gsap.to(".background-video", {
        scrollTrigger: {
            scrub: true
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initAnimations);
