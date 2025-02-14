const field = document.querySelector(".footbal__field");
const ball = document.querySelector(".footbal__ball");

field.addEventListener("click", (event) => {
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    let targetX = event.clientX - fieldRect.left - ballRect.width / 2;
    let targetY = event.clientY - fieldRect.top - ballRect.height / 2;
    targetX = Math.max(0, Math.min(targetX, fieldRect.width - ballRect.width));
    targetY = Math.max(0, Math.min(targetY, fieldRect.height - ballRect.height));

    ball.style.transition = "transform 0.5s linear";
    ball.style.transform = `translate(${targetX}px, ${targetY}px)`;
});
