document.getElementById('openBtn').addEventListener('click', function() {
  let container = document.getElementById('imageContainer');
  container.classList.remove('hidden');
  
  let emojiContainer = document.getElementById('emojiContainer');

  // Удаляем старые эмодзи, если они есть
  emojiContainer.innerHTML = '';

  // Количество эмодзи
  let emojiCount = 10;

  // Создание новых эмодзи и их анимация
  for (let i = 0; i < emojiCount; i++) {
    let emojiElement = document.createElement('span');
    emojiElement.classList.add('emoji');
    emojiElement.textContent = Math.random() > 0.5 ? '❤️‍🔥' : '❤️'; // случайно выбираем эмодзи
    emojiElement.style.left = `${Math.random() * 80}%`; // случайное горизонтальное положение в пределах контейнера
    emojiElement.style.top = `${Math.random() * 80}%`; // случайное вертикальное положение в пределах контейнера
    emojiElement.style.animationDuration = `${Math.random() * 5 + 5}s`; // случайная продолжительность анимации
    emojiElement.style.animationDelay = `${Math.random() * 2}s`; // случайная задержка анимации
    emojiContainer.appendChild(emojiElement);
  }
});
