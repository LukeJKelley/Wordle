import { words } from "./random-word-array.js";
import { getDefinition } from "./data-Utils.js";

let randWord = words[Math.floor(Math.random() * words.length)];

randWord = randWord.split("");

console.log(randWord);

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const btns = document.querySelectorAll(".letter");
const boxes = document.querySelectorAll(".grid-item");
const remove = document.querySelector("#remove");
const enter = document.querySelector("#enter");
const reset = document.querySelector("#reset");

let i = 0;
let j = 0;
let num = 0;
let yes = 0;
let guesses = 0;

const updateDefinition = async (id, name) => {
  randWord = randWord.join("");
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${randWord}`
  );
  const data = await response.json();
  name = getDefinition(data);
  id.textContent = name;
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    boxes[i].textContent = btn.value;
    boxes[i].value = btn.value;
    ++i;
  });
});

remove.addEventListener("click", () => {
  --i;
  boxes[i].textContent = " ";
  boxes[i].value = " ";
});

enter.addEventListener("click", () => {
  j = j + 5;

  for (let i = num * 5; i < j; ) {
    checkLetter(i % 5, i);
    i++;
    guesses = j / 5;
    if (j < 35) {
      checkWin(i % 5, i, j);
    } else if (win.textContent === "") {
      lose.textContent = "You Lose! \r\n";
      lose.textContent += "Word : " + randWord.join("");
      WordDefinition("Definition", lose, "definition--red");
      reloadPage(lose, "resetBtn--red");
    }
  }
  num++;
});

const checkWin = (index, box, guesses) => {
  guesses = guesses / 5;
  if (yes === 4) {
    win.textContent = "You Win! \r\n";
    win.textContent += "Number of Guesses: " + guesses + "\r\n";
    win.textContent += "Word: " + randWord.join("");
    WordDefinition("Definition", win, "definition--green");
    reloadPage(win, "resetBtn--green");
  } else if (randWord[index] === boxes[box].textContent) {
    yes++;
  } else {
    yes = 0;
  }
};

const checkLetter = (index, box) => {
  if (randWord[index] === boxes[box].textContent) {
    boxes[box].style.backgroundColor = "greenyellow";
  } else if (randWord.includes(boxes[box].textContent)) {
    boxes[box].style.backgroundColor = "gold";
  } else {
    boxes[box].style.backgroundColor = "lightcoral";
  }
};

const createElement = (element, text, parent, id) => {
  const newElement = document.createElement(element);
  newElement.setAttribute("id", id);
  const textNode = document.createTextNode(text);
  newElement.appendChild(textNode);
  parent.appendChild(newElement);
};

const reloadPage = (parent, id) => {
  createElement("button", "Try Again", parent, id);
  document.querySelector(`#${id}`).addEventListener("click", () => {
    location.reload(true);
  });
};

const WordDefinition = (text, parent, id) => {
  createElement("button", text, parent, id);
  document.querySelector(`#${id}`).addEventListener("click", () => {
    updateDefinition(parent, name);
  });
};
