/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

// Se declaran las constantes
// 1*
const who = ["The dog", "My grandma", "His turtle", "My bird"];
// 2*
const action = ["ate", "peed", "crushed", "broke"];
// 3*
const what = ["my homework", "the keys", "the car", "the computer"];
// 4*
const when = [
  "before the class",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateExcuse() {
  const whoItem = getItem(who);
  const actionItem = getItem(action);
  const whatItem = getItem(what);
  const whenItem = getItem(when);

  return whoItem + " " + actionItem + " " + whatItem + " " + whenItem;
}
