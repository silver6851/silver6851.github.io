const canvas = document.getElementById('cityCanvas');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Dibujar edificios
function drawBuildings() {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(50, canvas.height - 200, 100, 200); // Edificio 1
    ctx.fillRect(200, canvas.height - 300, 150, 300); // Edificio 2
    ctx.fillRect(400, canvas.height - 250, 120, 250); // Edificio 3
    ctx.fillRect(600, canvas.height - 350, 180, 350); // Edificio 4
}

// Dibujar luces de sirenas
let sirenX = 0;
function drawSirens() {
    const gradient = ctx.createLinearGradient(sirenX, 0, sirenX + 200, 0);
    gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 255, 0.5)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    sirenX += 5;
    if (sirenX > canvas.width) sirenX = -200;
}

// Animar el fondo
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSirens();
    drawBuildings();
    requestAnimationFrame(animate);
}

animate();