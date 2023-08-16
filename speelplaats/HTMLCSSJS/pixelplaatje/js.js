class Particle {
    constructor(x, y, color) {
        this.originalX = x;
        this.originalY = y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.color = color;
        this.speed = 0.25; 
    }

    move() {
        const dx = this.originalX - this.x;
        const dy = this.originalY - this.y;
        this.x += dx * this.speed;
        this.y += dy * this.speed;
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let particles = [];

const image = new Image();
image.crossOrigin = "anonymous"; 
image.src = '750-1.jpg';
image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0, image.width, image.height);

    const imageData = ctx.getImageData(0, 0, image.width, image.height);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < image.height; y++) {
        for (let x = 0; x < image.width; x++) {
            const index = (y * 4) * image.width + x * 4;
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];
            const a = imageData.data[index + 3];

            const particleColor = `rgba(${r}, ${g}, ${b}, ${a})`;

            if (a > 128) {
                particles.push(new Particle(x, y, particleColor));
            }
        }
    }
}

function drawParticles() {
    for (const particle of particles) {
        particle.move();

        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x, particle.y, 1, 1);
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawParticles();
    requestAnimationFrame(animate);
}

animate();