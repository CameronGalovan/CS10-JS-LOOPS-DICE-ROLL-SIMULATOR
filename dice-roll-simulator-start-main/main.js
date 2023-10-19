// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  let rolls = 0;
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL FIVE TIMES</h3>";

  while (rolls < 6) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;
    rolls++;

    //Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function rollNTimes() {
  // Display Menu Title

  let n = prompt("n = ?");

  if (n >= 0) {
    outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";
    let rolls = 0;
    // Display Menu Title
    outputEl.innerHTML = "<h3>ROLL FIVE TIMES</h3>";

    while (rolls < n) {
      let die1 = Math.floor(Math.random() * 6) + 1;
      let die2 = Math.floor(Math.random() * 6) + 1;
      let total = die1 + die2;
      rolls++;

      //Add Results to output element
      let pEl = document.createElement("p");
      pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
      outputEl.appendChild(pEl);
    }
  } else {
    alert("Please enter a valid number.");
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  while (true) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    //Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);

    if (total === 2) {
      break;
    }
  }
}
