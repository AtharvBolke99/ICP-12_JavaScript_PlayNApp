 const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const box = 20; // size of snake parts
    let snake = [{ x: 9 * box, y: 10 * box }];
    let direction;
    let food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box
    };
    let score = 0;

    document.addEventListener("keydown", setDirection);

    function setDirection(event) {
      if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
      else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
      else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
      else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    }

    function drawGame() {
      // Draw background
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw snake
      for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "lime" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "#2d3436";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
      }

      // Draw food
      ctx.fillStyle = "red";
      ctx.fillRect(food.x, food.y, box, box);

      // Old head position
      let snakeX = snake[0].x;
      let snakeY = snake[0].y;

      // Direction
      if (direction === "LEFT") snakeX -= box;
      if (direction === "UP") snakeY -= box;
      if (direction === "RIGHT") snakeX += box;
      if (direction === "DOWN") snakeY += box;

      // Check if snake eats food
      if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
          x: Math.floor(Math.random() * 19 + 1) * box,
          y: Math.floor(Math.random() * 19 + 1) * box
        };
      } else {
        snake.pop(); // remove tail
      }

      // Add new head
      const newHead = { x: snakeX, y: snakeY };

      // Game over conditions
      if (
        snakeX < 0 || snakeY < 0 ||
        snakeX >= canvas.width || snakeY >= canvas.height ||
        collision(newHead, snake)
      ) {
        clearInterval(game);
        alert("Game Over! Your Score: " + score);
      }

      snake.unshift(newHead);

      // Score
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText("Score: " + score, box, box);
    }

    function collision(head, array) {
      for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
          return true;
        }
      }
      return false;
    }

    let game = setInterval(drawGame, 100);