const dino = document.querySelector('.dinosaur__dino');
const obstacle = document.querySelector('.dinosaur__obstacle');
let isJumping = false;
let isGameOver = false;

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !isJumping && !isGameOver) {
    isJumping = true;
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
      isJumping = false;
    }, 600);
  }
});
obstacle.style.animation = 'moveObstacle 2s infinite linear';
function checkCollision() {
  if (isGameOver){
     return; 
  }
  const dinoRect = dino.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();
  if (
    dinoRect.right > obstacleRect.left &&
    dinoRect.left < obstacleRect.right &&
    dinoRect.bottom > obstacleRect.top &&
    dinoRect.top < obstacleRect.bottom
  ) {
    isGameOver = true; 
    alert("Програли!");
    obstacle.style.animation = 'none'; 
  }
}
setInterval(checkCollision, 10);
