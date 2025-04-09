
const button = document.getElementById('openBtn');
const images = document.getElementById('imageContainer');

button.addEventListener('click', () => {
  images.classList.remove('hidden');
  startHeartAnimation();
  button.style.display = 'none';
});

function startHeartAnimation() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.backgroundColor = getRandomColor();
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 200);
}

function getRandomColor() {
  const colors = ['#ff4da6', '#ff6666', '#ffcc00', '#66ff99', '#66b3ff', '#c266ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const text = "Ты делаешь этот мир красивее...";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
setTimeout(typeWriter, 1000);
