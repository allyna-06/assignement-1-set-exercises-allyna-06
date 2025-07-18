// Grab key parts of the page that we’ll need to update
const rgbDisplay = document.getElementById('rgb-display');
const message = document.getElementById('message');
const colorOptions = document.getElementById('color-options');
const scoreSpan = document.getElementById('score');
const livesSpan = document.getElementById('lives');
const restartBtn = document.getElementById('restart-btn');

// Keep track of how well the player is doing
let score = 0;
let lives = 5;

// Start the first round as soon as the page loads
startRound();

// If the player clicks “Play Again”, reset everything and start fresh
restartBtn.addEventListener('click', () => {
  score = 0;
  lives = 5;
  scoreSpan.textContent = score;
  livesSpan.textContent = lives;
  restartBtn.classList.add('hidden');
  message.textContent = 'Pick a colour below:';
  startRound();
});

// This function sets up a single round of the game
function startRound() {
  // Clear any previous color choices
  colorOptions.innerHTML = '';

  // Pick a random RGB color that the player will have to guess
  const correctColor = getRandomRGB();

  // Show the RGB value on the screen
  rgbDisplay.textContent = correctColor;

  // Randomly pick one of the 3 boxes to be the correct answer
  const correctIndex = Math.floor(Math.random() * 3);

  // Create 3 colored boxes for the user to choose from
  for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.classList.add('option');

    if (i === correctIndex) {
      // This is the correct color
      div.style.backgroundColor = correctColor;
      div.addEventListener('click', () => handleGuess(true));
    } else {
      // This is a wrong color (but still looks legit)
      const wrongColor = getRandomRGB();
      div.style.backgroundColor = wrongColor;
      div.addEventListener('click', () => handleGuess(false));
    }

    // Add the color box to the page
    colorOptions.appendChild(div);
  }
}

// This function runs when a player picks a color box
function handleGuess(isCorrect) {
  if (isCorrect) {
    // Yay! They got it right
    message.textContent = '✅ Correct! Nice job!';
    score++;
    scoreSpan.textContent = score;
  } else {
    // Oops! Wrong guess
    message.textContent = '❌ Nope! Try again.';
    lives--;
    livesSpan.textContent = lives;
  }

  // If the player ran out of lives, end the game
  if (lives <= 0) {
    message.textContent = `🎮 Game over! Final Score: ${score}`;
    restartBtn.classList.remove('hidden');
    colorOptions.innerHTML = ''; // Clear color choices
  } else {
    // Otherwise, keep the game going after a short pause
    setTimeout(startRound, 1000);
  }
}

// This gives us a random RGB color string, like "rgb(255, 0, 153)"
function getRandomRGB() {
  const r = randomNum();
  const g = randomNum();
  const b = randomNum();
  return `rgb(${r}, ${g}, ${b})`;
}

// Just a helper to get a random number between 0 and 255
function randomNum() {
  return Math.floor(Math.random() * 256);
}
