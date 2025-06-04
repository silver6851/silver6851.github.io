gsap.registerPlugin(ScrollTrigger);

function initStaffAnimations() {
    // Hero section animations
    gsap.from(".glowing-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });

    gsap.from(".staff-apply-btn", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)"
    });
}

function openStaffModal() {
    const modal = document.querySelector('.staff-modal');
    modal.style.visibility = 'visible';
    
    gsap.to(modal, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
    });

    // Animate steps sequentially
    gsap.from('.step-panel.active', {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', initStaffAnimations);
