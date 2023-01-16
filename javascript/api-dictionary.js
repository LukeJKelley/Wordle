import { getDefinition } './data-Utils.js';

const UpdateDefinition = async () => {
  const response = await fetch('https:dictionaryapi.dev/');
  const data = await response.json();
  const definition = getDefinition(data);
};

fetch("https://dictionaryapi.dev/").then(response => response.json()).then(data => console.log(data))