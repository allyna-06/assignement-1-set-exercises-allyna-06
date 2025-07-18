// List of sound samples with their names and filenames
const samples = [
  { name: "Aha!", file: "aha.mp3" },
  { name: "Back of the Net", file: "back_of_the_net.mp3" },
  { name: "Dan!", file: "dan.mp3" },
  { name: "Smell My Cheese", file: "smell_my_cheese.mp3" },
  // Add more here if needed
];

// Get the soundboard container from the HTML
const board = document.getElementById("soundboard");

// For each sample, create a button on the page
samples.forEach(sample => {
  // Make a new button element
  const btn = document.createElement("button");
  btn.className = "sound-button";     // Add styling class
  btn.textContent = sample.name;      // Show the sample name

  // When the button is clicked, play the sound
  btn.addEventListener("click", () => {
    const audio = new Audio(`audio/${sample.file}`);
    audio.play();
  });

  // Add the button to the page
  board.appendChild(btn);
});
