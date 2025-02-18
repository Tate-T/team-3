const dino = document.querySelector('.dinosaur__dino');
const obstacle = document.querySelector('.dinosaur__obstacle');
const startButton = document.querySelector('.dinosaur__start-button');
let isJumping = false;
let isGameOver = false;

startButton.addEventListener('click', () => {
  obstacle.style.animation = 'moveObstacle 2s infinite linear';
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !isJumping) {
    isJumping = true;
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
      isJumping = false;
    }, 600);
  }
});

setInterval(() => {
  const dinoRect = dino.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  if (
    dinoRect.right > obstacleRect.left &&
    dinoRect.left < obstacleRect.right &&
    dinoRect.bottom > obstacleRect.top
  ) {
    alert('Програли!');
    obstacle.style.animation = 'none';
  }
}, 100);
