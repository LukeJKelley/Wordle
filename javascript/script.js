const words = [
  "other",
  "there",
  "which",
  "their",
  "about",
  "write",
  "would",
  "these",
  "thing",
  "could",
  "sound",
  "water",
  "first",
  "place",
  "where",
  "after",
  "round",
  "every",
  "under",
  "great",
  "think",
  "cause",
  "right",
  "three",
  "small",
  "large",
  "spell",
  "light",
  "house",
  "again",
  "point",
  "world",
  "build",
  "earth",
  "stand",
  "found",
  "study",
  "still",
  "learn",
  "plant",
  "cover",
  "state",
  "never",
  "cross",
  "start",
  "might",
  "story",
  "while",
  "press",
  "close",
  "night",
  "north",
  "white",
  "begin",
  "paper",
  "group",
  "music",
  "those",
  "often",
  "until",
  "river",
  "carry",
  "began",
  "horse",
  "watch",
  "color",
  "plain",
  "usual",
  "young",
  "ready",
  "above",
  "leave",
  "black",
  "short",
  "class",
  "order",
  "south",
  "piece",
  "since",
  "whole",
  "space",
  "heard",
  "early",
  "reach",
  "table",
  "vowel",
  "money",
  "serve",
  "voice",
  "power",
  "field",
  "pound",
  "drive",
  "stood",
  "front",
  "teach",
  "final",
  "green",
  "quick",
  "ocean",
  "clear",
  "wheel",
  "force",
  "plane",
  "stead",
  "laugh",
  "check",
  "shape",
  "bring",
  "paint",
  "among",
  "grand",
  "heart",
  "heavy",
  "dance",
  "speak",
  "count",
  "store",
  "train",
  "sleep",
  "prove",
  "catch",
  "mount",
  "board",
  "glass",
  "grass",
  "visit",
  "month",
  "happy",
  "eight",
  "raise",
  "solve",
  "metal",
  "seven",
  "third",
  "shall",
  "floor",
  "coast",
  "value",
  "fight",
  "sense",
  "quite",
  "broke",
  "scale",
  "child",
  "speed",
  "organ",
  "dress",
  "cloud",
  "quiet",
  "stone",
  "climb",
  "stick",
  "smile",
  "trade",
  "mouth",
  "exact",
  "least",
  "shout",
  "wrote",
  "clean",
  "break",
  "blood",
  "touch",
  "brown",
  "equal",
  "woman",
  "whose",
  "radio",
  "spoke",
  "human",
  "party",
  "agree",
  "chair",
  "fruit",
  "thick",
  "guess",
  "sharp",
  "crowd",
  "sight",
  "hurry",
  "chief",
  "clock",
  "enter",
  "major",
  "fresh",
  "allow",
  "print",
  "block",
  "chart",
  "event",
  "quart",
  "truck",
  "noise",
  "level",
  "throw",
  "shine",
  "wrong",
  "broad",
  "anger",
  "claim",
  "sugar",
  "death",
  "skill",
  "women",
  "thank",
  "match",
  "steel",
  "guide",
  "score",
  "apple",
  "pitch",
  "dream",
  "total",
  "basic",
  "smell",
  "track",
  "shore",
  "sheet",
  "favor",
  "spend",
  "chord",
  "share",
  "bread",
  "offer",
  "slave",
  "chick",
  "enemy",
  "reply",
  "drink",
  "occur",
  "range",
  "steam",
  "meant",
  "teeth",
  "shell",
];

let randWord = words[Math.floor(Math.random() * words.length)];

randWord = randWord.split("");

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
      reloadPage("resetBtn--red");
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
    reloadPage("resetBtn--green"); // fix css
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

const reloadPage = (id) => {
  createElement("button", "Try Again", lose, id);
  document.querySelector(`#${id}`).addEventListener("click", () => {
    location.reload(true);
  });
};
