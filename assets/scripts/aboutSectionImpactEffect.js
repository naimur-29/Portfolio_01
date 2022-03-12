// SETTING UP THE CANVAS
const mainCanvas = document.querySelector(".about__canvas");
const ctxMain = mainCanvas.getContext("2d");

mainCanvas.width = mainCanvas.clientWidth;
mainCanvas.height = mainCanvas.clientHeight;

window.addEventListener("resize", () => {
  mainCanvas.width = mainCanvas.clientWidth;
  mainCanvas.height = mainCanvas.clientHeight;
});

// GLOBAL VARIABLES ClASSES FUNCTIONS
const impacts = [];
let count = 0;

class ImpactParticle {
  constructor() {
    this.x = mainCanvas.width / 2;
    this.y = mainCanvas.height * 1.1;
    this.size = 1;
    this.speed = 10;
    this.color = `rgba(255, 226, 89, 1)`;
  }

  draw() {
    ctxMain.strokeStyle = this.color;
    ctxMain.lineWidth = 50;
    ctxMain.beginPath();
    ctxMain.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctxMain.stroke();
    ctxMain.closePath();
  }

  update() {
    this.size += this.speed;
  }
}

function updateImpactParticles() {
  for (let i = 0; i < impacts.length; i++) {
    impacts[i].draw();
    impacts[i].update();

    // REMOVE IMPACT
    if (impacts[i].size >= 2000) {
      impacts.splice(i, 1);
      i--;
    }
  }
}

// MOUSE POSITION
const mouse = {
  x: null,
  y: null,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

// ANIMATE

function animate() {
  ctxMain.fillStyle = "rgba(255, 255, 255, 0.02)";
  ctxMain.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

  updateImpactParticles();
  if (count % 180 === 0) impacts.push(new ImpactParticle());
  if (count >= 100000) count = 0;
  count++;

  requestAnimationFrame(animate);
}
animate();
