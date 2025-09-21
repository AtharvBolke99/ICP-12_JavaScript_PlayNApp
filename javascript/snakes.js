  const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const box = 20;
    let snake = [];
    let direction = "RIGHT";
    let food = {};
    let score = 0;
    let gameInterval;

    function initGame() {
      snake = [{ x: 9 * box, y: 9 * box }];
      direction = "RIGHT";
      score = 0;
      generateFood();
      clearInterval(gameInterval);
      gameInterval = setInterval(draw, 100);
    }

    function generateFood() {
      food = {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box,
      };
    }

    document.addEventListener("keydown", (e) => {
      const key = e.key;
      if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
      else if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
      else if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
      else if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    });

    function draw() {
      // Clear
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw snake
      for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "lime" : "#fff";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "#111";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
      }

      // Draw food
      ctx.fillStyle = "red";
      ctx.fillRect(food.x, food.y, box, box);

      // Move snake
      let headX = snake[0].x;
      let headY = snake[0].y;

      if (direction === "LEFT") headX -= box;
      else if (direction === "RIGHT") headX += box;
      else if (direction === "UP") headY -= box;
      else if (direction === "DOWN") headY += box;

      // Game over
      if (
        headX < 0 || headY < 0 ||
        headX >= canvas.width || headY >= canvas.height ||
        collision(headX, headY, snake)
      ) {
        clearInterval(gameInterval);
        alert("💀 Game Over! Your score: " + score);
        return;
      }

      // Check food
      if (headX === food.x && headY === food.y) {
        score++;
        generateFood();
      } else {
        snake.pop();
      }

      const newHead = { x: headX, y: headY };
      snake.unshift(newHead);
      document.getElementById("score").innerText = "Score: " + score;
    }

    function collision(x, y, array) {
      return array.some(cell => cell.x === x && cell.y === y);
    }

    function resetGame() {
      initGame();
    }

    // Start game
    initGame();