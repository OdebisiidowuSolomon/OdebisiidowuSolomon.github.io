const squares = document.querySelectorAll(".grid div");
const resultDisplay = document.querySelector("#result");
const controBtn = document.querySelectorAll(".c_btn button");
let width = 15;
let currentShooterIndex = 202;
let currentInvaderIndex = 0;
let alienInvaderTakenDown = [];
let result = 0;
let direction = 1;
let invaderId;

const alienInvader = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
];

alienInvader.forEach((invader) =>
  squares[currentInvaderIndex + invader].classList.add("invader")
);

squares.forEach((square, i) => (square.textContent = i));

squares[currentShooterIndex].classList.add("shooter");
// controls buttons
function moveShooter(e) {
  squares[currentShooterIndex].classList.remove("shooter");
  switch (e.keyCode) {
    case 37:
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
      break;
    case 39:
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
      break;
  }
  squares[currentShooterIndex].classList.add("shooter");
}

document.addEventListener("keydown", moveShooter);

function moveInvader() {
  const leftEdge = alienInvader[0] % width === 0;
  const rightEdge = alienInvader[alienInvader.length - 1] % width === width - 1;

  if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
    direction = width;
  } else if (direction === width) {
    if (leftEdge) direction = 1;
    else direction = -1;
  }
  for (let i = 0; i <= alienInvader.length - 1; i++) {
    squares[alienInvader[i]].classList.remove("invader");
  }
  for (let i = 0; i <= alienInvader.length - 1; i++) {
    alienInvader[i] += direction;
  }
  for (let i = 0; i <= alienInvader.length - 1; i++) {
    if (!alienInvaderTakenDown.includes(i)) {
      squares[alienInvader[i]].classList.add("invader");
    }
  }
  // game over logic
  if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
    resultDisplay.textContent = "Game Over";
    squares[currentShooterIndex].classList.add("boom");
    clearInterval(invaderId);
  }

  for (let i = 0; i <= alienInvader.length - 1; i++) {
    if (alienInvader[i] > squares.length - (width - 1)) {
      resultDisplay.textContent = "Game Over";
      clearInterval(invaderId);
    }
  }

  if (alienInvaderTakenDown.length === alienInvader.length) {
    resultDisplay.textContent = "You Win";
    clearInterval(invaderId);
  }
}

invaderId = setInterval(moveInvader, 500);

function shoot(e) {
  let laserId;
  let currentLaserIndex = currentShooterIndex;
  // move laser from shooter to invader
  function moveLaser() {
    squares[currentLaserIndex].classList.remove("laser");
    currentLaserIndex -= width;
    squares[currentLaserIndex].classList.add("laser");
    if (squares[currentLaserIndex].classList.contains("invader")) {
      squares[currentLaserIndex].classList.remove("laser");
      squares[currentLaserIndex].classList.remove("invader");
      squares[currentLaserIndex].classList.add("boom");

      setTimeout(
        () => squares[currentLaserIndex].classList.remove("boom"),
        250
      );
      clearInterval(laserId);

      const alienTakenDown = alienInvader.indexOf(currentLaserIndex);
      alienInvaderTakenDown.push(alienTakenDown);
      result++;
      resultDisplay.textContent = result;
    }
    if (currentLaserIndex < width) {
      clearInterval(laserId);
      setTimeout(
        () => squares[currentLaserIndex].classList.remove("laser"),
        100
      );
    }
  }

  switch (e.keyCode) {
    case 32:
      laserId = setInterval(moveLaser, 100);
      break;
  }
}

document.addEventListener("keyup", shoot);
// controBtn.forEach((btn, i) =>
//   btn.addEventListener("click", () => {
//     if (i === 2) {
//       shoot();
//     }
//   })
// );
