document.addEventListener('DOMContentLoaded', () => {
    // Animación de contador para estadísticas
    const stats = document.querySelectorAll('.stat-value');
    
    stats.forEach(stat => {
        const finalValue = stat.innerText;
        const isNumber = !isNaN(parseInt(finalValue));
        
        if (isNumber) {
            let startValue = 0;
            const duration = 2000;
            const increment = parseInt(finalValue) / (duration / 16);
            
            const counter = setInterval(() => {
                startValue += increment;
                if (startValue >= parseInt(finalValue)) {
                    stat.innerText = finalValue;
                    clearInterval(counter);
                } else {
                    stat.innerText = Math.floor(startValue);
                }
            }, 16);
        }
    });

    // Efecto de aparición progresiva para los bento boxes
    const bentoBoxes = document.querySelectorAll('.bento-box');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1 }
    );

    bentoBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(50px)';
        box.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(box);
    });

    // Populate roles section with more detailed information
    const rolesGrid = document.querySelector('.roles-grid');
    availableRoles[0].forEach(role => {
        rolesGrid.innerHTML += `
            <div class="role-card">
                <div class="role-icon">${role.icon}</div>
                <h3 class="role-name">${role.name}</h3>
                <p class="role-desc">${role.desc}</p>
                <ul class="role-details">
                    <li><strong>Habilidades:</strong> ${role.skills || 'N/A'}</li>
                    <li><strong>Requisitos:</strong> ${role.requirements || 'Ninguno'}</li>
                    <li><strong>Beneficios:</strong> ${role.benefits || 'N/A'}</li>
                    <li><strong>Horario:</strong> ${role.schedule || 'Flexible'}</li>
                    <li><strong>Riesgos:</strong> ${role.risks || 'Moderado'}</li>
                </ul>
            </div>
        `;
    });

    // Populate team section
    const teamCarousel = document.getElementById('teamCarousel');
    staffMembers.forEach(member => {
        teamCarousel.innerHTML += `
            <div class="team-member">
                <div class="staff-avatar">${member.icon}</div>
                <h4>${member.role}</h4>
                <p>${member.desc}</p>
            </div>
        `;
    });

    initSliders();
    initRolesCarousel();
});

// Datos de eventos
const eventos = [
    { 
        hora: 'HOY 20:00', 
        titulo: '🎬 Premiere en Hollywood', 
        desc: '¡Red carpet con celebrities! ✨', 
        tag: '🌟 Premium',
        categoria: 'Evento Social'
    },
    { 
        hora: 'MAÑANA 22:00', 
        titulo: '🏎️ Night Racing', 
        desc: '¡Carreras nocturnas! 🌃', 
        tag: '🔥 Exclusivo',
        categoria: 'Acción'
    },
    { 
        hora: 'SÁBADO 21:00', 
        titulo: '👮‍♂️ LAPD Operation', 
        desc: '¡Mega operativo! 🚨', 
        tag: '🎖️ Oficial',
        categoria: 'Policial'
    },
    { 
        hora: 'DOMINGO 19:00', 
        titulo: '🎭 Beverly Hills Gala', 
        desc: '¡Evento de lujo! 💎', 
        tag: '💫 VIP',
        categoria: 'Elite'
    }
];

// Datos del staff
const staffMembers = [
    { 
        role: 'Director', 
        badge: 'Fundador', 
        icon: '👑',
        color: '#FFD700',
        emoji: '⭐',
        desc: 'Líder del Proyecto',
        status: 'online'
    },
    { 
        role: 'Administración', 
        badge: 'Admin Team', 
        icon: '⚡',
        color: '#FF6B6B',
        emoji: '💫',
        desc: 'Control y Gestión',
        status: 'online'
    },
    { 
        role: 'Desarrollo', 
        badge: 'Tech Team', 
        icon: '💻',
        color: '#4ECDC4',
        emoji: '🚀',
        desc: 'Innovación Continua',
        status: 'online'
    }
];

// Datos de roles disponibles
const availableRoles = [
    // Set 1
    [
        { 
            name: 'LAPD', 
            icon: '👮‍♂️', 
            desc: 'Mantén el orden en la ciudad', 
            skills: 'Investigación, manejo de armas, trabajo en equipo', 
            requirements: 'Licencia de armas, entrenamiento policial', 
            benefits: 'Salario estable, respeto de la comunidad'
        },
        { 
            name: 'LAFD', 
            icon: '🚒', 
            desc: 'Salva vidas, combate incendios', 
            skills: 'Primeros auxilios, manejo de equipo pesado', 
            requirements: 'Certificación de bombero', 
            benefits: 'Satisfacción personal, salario competitivo'
        },
        { 
            name: 'Actor', 
            icon: '🎬', 
            desc: 'Brilla en Hollywood', 
            skills: 'Actuación, improvisación, carisma', 
            requirements: 'Portafolio de actuación', 
            benefits: 'Fama, oportunidades de networking'
        },
        { 
            name: 'Empresario', 
            icon: '💼', 
            desc: 'Construye tu imperio', 
            skills: 'Gestión, liderazgo, visión estratégica', 
            requirements: 'Capital inicial', 
            benefits: 'Altos ingresos, independencia'
        }
    ],
    // Set 2
    [
        { 
            name: 'Médico', 
            icon: '⚕️', 
            desc: 'Salva vidas en el hospital', 
            skills: 'Conocimientos médicos, empatía', 
            requirements: 'Licencia médica', 
            benefits: 'Salario alto, respeto profesional'
        },
        { 
            name: 'Mecánico', 
            icon: '🔧', 
            desc: 'Experto en vehículos', 
            skills: 'Reparación de motores, diagnóstico técnico', 
            requirements: 'Certificación técnica', 
            benefits: 'Ingresos constantes, trabajo práctico'
        },
        { 
            name: 'Criminal', 
            icon: '🦹', 
            desc: 'Domina el bajo mundo', 
            skills: 'Sigilo, estrategia, manejo de armas', 
            requirements: 'Red de contactos', 
            benefits: 'Altos ingresos, emoción constante'
        },
        { 
            name: 'Abogado', 
            icon: '⚖️', 
            desc: 'Defiende la justicia', 
            skills: 'Oratoria, análisis legal', 
            requirements: 'Licencia de abogado', 
            benefits: 'Prestigio, ingresos altos'
        }
    ],
    // Set 3
    [
        { 
            name: 'Detective', 
            icon: '🔍', 
            desc: 'Resuelve casos', 
            skills: 'Investigación, análisis crítico', 
            requirements: 'Experiencia policial', 
            benefits: 'Satisfacción personal, salario competitivo'
        },
        { 
            name: 'Taxista', 
            icon: '🚕', 
            desc: 'Conoce la ciudad', 
            skills: 'Conducción, conocimiento de rutas', 
            requirements: 'Licencia de conducir', 
            benefits: 'Ingresos flexibles, interacción social'
        },
        { 
            name: 'Reportero', 
            icon: '📰', 
            desc: 'Cubre las noticias', 
            skills: 'Escritura, investigación, comunicación', 
            requirements: 'Portafolio de artículos', 
            benefits: 'Reconocimiento público, acceso a eventos'
        },
        { 
            name: 'DJ', 
            icon: '🎧', 
            desc: 'Anima la noche', 
            skills: 'Mezcla de música, creatividad', 
            requirements: 'Equipo de DJ', 
            benefits: 'Fama, ingresos por eventos'
        }
    ]
];

function initSliders() {
    // Inicializar slider de eventos
    const eventsSlider = document.getElementById('eventsSlider');
    let currentEventIndex = 0;

    function updateEventSlide() {
        const evento = eventos[currentEventIndex];
        eventsSlider.innerHTML = `
            <div class="event-slide active">
                <span class="event-category">${evento.categoria}</span>
                <div class="event-date">
                    <span>${evento.hora}</span>
                </div>
                <div class="event-info">
                    <h4>${evento.titulo}</h4>
                    <p>${evento.desc}</p>
                </div>
                <div class="event-actions">
                    <span class="event-tag">${evento.tag}</span>
                </div>
            </div>
        `;
        currentEventIndex = (currentEventIndex + 1) % eventos.length;
    }

    // Inicializar slider de staff
    const staffCarousel = document.getElementById('staffCarousel');
    let currentStaffIndex = 0;

    function updateStaffSlide() {
        const staff = staffMembers[currentStaffIndex];
        staffCarousel.innerHTML = `
            <div class="staff-slide active" style="--staff-color: ${staff.color}">
                <div class="staff-member">
                    <div class="staff-avatar">${staff.icon}</div>
                    <div class="staff-info">
                        <h4>${staff.emoji} ${staff.role}</h4>
                        <span class="staff-badge">${staff.badge}</span>
                        <p class="staff-desc">${staff.desc}</p>
                    </div>
                </div>
            </div>
        `;
        currentStaffIndex = (currentStaffIndex + 1) % staffMembers.length;
    }

    // Iniciar los sliders
    updateEventSlide();
    updateStaffSlide();

    // Configurar intervalos
    setInterval(updateEventSlide, 5000);  // Cambiar evento cada 5 segundos
    setInterval(updateStaffSlide, 3000);  // Cambiar staff cada 3 segundos
}

function initRolesCarousel() {
    const rolesGrid = document.querySelector('.roles-grid');
    let currentSet = 0;

    function updateRoles() {
        const roles = availableRoles[currentSet];
        rolesGrid.innerHTML = roles.map(role => `
            <div class="role-card">
                <div class="role-icon">${role.icon}</div>
                <h3 class="role-name">${role.name}</h3>
                <p class="role-desc">${role.desc}</p>
            </div>
        `).join('');

        // Agregar animación a las cards
        const cards = rolesGrid.querySelectorAll('.role-card');
        cards.forEach((card, index) => {
            card.style.animation = `fadeInRole 0.5s ease forwards ${index * 0.1}s`;
        });

        currentSet = (currentSet + 1) % availableRoles.length;
    }

    updateRoles();
    setInterval(updateRoles, 5000);
}

function showRoleModal() {
    const modal = document.getElementById('roleModal');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Redirigir después de 2 segundos
    setTimeout(() => {
        window.location.href = "https://discord.gg/7HkTjwGApB";
    }, 2000);
}

function closeModal() {
    const modal = document.getElementById('roleModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Cerrar modal si se hace clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('roleModal');
    if (event.target === modal) {
        closeModal();
    }
}

let currentPosition = 0;
const itemsPerView = 3;
const slideWidth = 410; // 380px card width + 30px gap

function moveCarousel(direction) {
    const container = document.getElementById('eventsGrid');
    const cards = container.children;
    const maxPosition = cards.length - itemsPerView;

    currentPosition = Math.max(0, Math.min(currentPosition + direction, maxPosition));
    const offset = currentPosition * -slideWidth;
    
    container.style.transform = `translateX(${offset}px)`;
    
    // Actualizar visibilidad de los botones
    document.querySelector('.prev').style.opacity = currentPosition === 0 ? '0.5' : '1';
    document.querySelector('.next').style.opacity = 
        currentPosition >= maxPosition ? '0.5' : '1';
}

// Auto-scroll cada 5 segundos
setInterval(() => {
    const container = document.getElementById('eventsGrid');
    const cards = container.children;
    const maxPosition = cards.length - itemsPerView;
    
    if (currentPosition >= maxPosition) {
        currentPosition = 0;
    } else {
        currentPosition++;
    }
    
    const offset = currentPosition * -slideWidth;
    container.style.transform = `translateX(${offset}px)`;
}, 5000);