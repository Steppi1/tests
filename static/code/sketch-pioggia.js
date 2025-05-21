
const canvas = document.getElementById('pioggia-canvas');
const ctx = canvas.getContext('2d');
let drops = Array(300).fill().map(() => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height }));

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00f';
  drops.forEach(drop => {
    ctx.beginPath();
    ctx.arc(drop.x, drop.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
    drop.y += 2;
    if (drop.y > canvas.height) drop.y = 0;
  });
  requestAnimationFrame(draw);
}

draw();
