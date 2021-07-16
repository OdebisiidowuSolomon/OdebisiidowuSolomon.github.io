const squares = document.querySelectorAll(".grid div");
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("span");
const startBtn = document.querySelector(".start");
const controlBtn = document.querySelectorAll(".btn button");

const width = 10;
let currentIndex = 0; // first div in the grid
let appleIndex = 0; // first div in the grid
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;

// start
function startGame() {
  currentSnake.forEach((index) => squares[index].classList.remove("snake"));
  squares[appleIndex].classList.remove("apple");
  clearInterval(interval);
  score = 0;
  randomApple();
  direction = 1;
  scoreDisplay.innerText = score;
  intervalTime = 1000;
  currentSnake = [2, 1, 0];
  currentIndex = 0;
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
  interval = setInterval(moveOutcome, intervalTime);
}

//   deals with snake hitting border and snake hitting itself
function moveOutcome() {
  if (
    (currentSnake[0] + width >= width * width && direction === width) ||
    //   deals with snake hitting bottom
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    //   deals with snake hitting right
    (currentSnake[0] % width === 0 && direction === -1) ||
    //   deals with snake hitting left
    (currentSnake[0] - width < 0 && direction === -width) ||
    //   deals with snake hitting top
    squares[currentSnake[0] + direction].classList.contains("snake")
    //   deals with snake hitting itself
  ) {
    return clearInterval(interval);
  }

  const tail = currentSnake.pop();
  squares[tail].classList.remove("snake");
  currentSnake.unshift(currentSnake[0] + direction);

  //   snake eating d apple
  if (squares[currentSnake[0]].classList.contains("apple")) {
    squares[currentSnake[0]].classList.remove("apple");
    squares[tail].classList.add("snake");
    currentSnake.push(tail);
    randomApple();
    score++;
    scoreDisplay.textContent = score;
    clearInterval(interval);
    intervalTime = intervalTime * speed;
    interval = setInterval(moveOutcome, intervalTime);
  }
  squares[currentSnake[0]].classList.add("snake");
}

// generate new apple once apple is eaten

function randomApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  {
    squares[appleIndex].classList.add("apple");
  }
}

startBtn.addEventListener("click", startGame);

controlBtn.forEach((btn, i) =>
  btn.addEventListener("click", (e) => {
    squares[currentIndex].classList.remove("snake");

    if (i === 2) {
      direction = 1; //right
    } else if (i === 0) {
      direction = -width; //top
    } else if (i === 1) {
      direction = -1; //left
    } else if (i === 3) {
      direction = width; // down
    }
  })
);

// asssign functions to keycode
function control(e) {
  squares[currentIndex].classList.remove("snake");

  if (e.keyCode === 39) {
    direction = 1; //right
  } else if (e.keyCode === 38) {
    direction = -width; //top
  } else if (e.keyCode === 37) {
    direction = -1; //left
  } else if (e.keyCode === 40) {
    direction = width; // down
  }
}

document.addEventListener("keyup", control);
