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

console.log(randWord);

randWord = randWord.split("");

console.log(randWord);

let userGuess = "a";

//If user input matches the letter in an array and the position in the array then true - turns green
// If value of input matches a letter in the array then true - eventually turn yellow

//function that takes a letter and postion and outputs a colour

//set values instead of storing them. similar to setText.. set.style.background-color.

//avoid over storing things.

const btns = document.querySelectorAll(".letter");
console.log(btns);

const boxes = document.querySelectorAll(".grid-item");

const remove = document.querySelector("#remove");

const enter = document.querySelector("#enter");

console.log(boxes);

let i = 0;

// boxes[i].style.backgroundColor = "lightcoral";
// boxes[i].style.backgroundColor = "greenyellow";

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

let j = 0;

// i = grid-box position
// J increases by 5 everytime I click the enter button
// to check the next 5 boxes
// once I check the first 5 elements
// I need to check the next 5 elements
// therefore I need to increase i by 5 to check from i (5) to j (10). and so on.
// This for loop resets after it hits the desired condition of i (0 incremented by 1) is less than j (5)
// When i click enter the second time i starts from 0 and increments until it hits the desired condition is than j (5 now incremented by 5 equalling 10)
// This means the box I'm checking for a correct letter in is the first set of 5 not the second set of 5
enter.addEventListener("click", () => {
  j = j + 5;
  for (let i = 0; i < j; ) {
    checkLetter(i, i);
    i++;
    console.log("letters in array", i);
    console.log("box letter", i);
  }
});

const checkLetter = (index, box) => {
  if (randWord[index] === boxes[box].textContent) {
    boxes[box].style.backgroundColor = "greenyellow";
  } else if (randWord.includes(boxes[box].textContent)) {
    boxes[box].style.backgroundColor = "gold";
  } else {
    boxes[box].style.backgroundColor = "lightcoral";
  }
};

// const createElement = (elementType, text, parent) => {
//   const newElement = document.createElement(elementType);

//   const textNode = document.createTextNode(text);

//   newElement.appendChild(textNode);

//   parent.appendChild(newElement);
// };

const arr = ["h", "e", "l", "l", "o"];
console.log(arr);

let input = ["h", "e", "l", "l", "o"];
console.log(input);

arr.map(i);

input.map(i);

if (arr[i].every() == input[i].every()) {
  console.log("correct");
} else {
  console.log("incorrect");
}
