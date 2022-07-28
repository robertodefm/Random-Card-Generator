/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pints = ["♦", "♥", "♠", "♣"];
  var numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Q",
    "K",
    "J",
    "A"
  ];

  let getPint = Math.floor(Math.random() * 4);
  let getNumber = Math.floor(Math.random() * 13);

  let randomPint = pints[getPint];
  let randomNumber = numbers[getNumber];

  let PintTopDOM = document.querySelector(".PintTop");
  PintTopDOM.innerHTML = randomPint;

  let cardNumberDOM = document.querySelector(".cardNumber");
  cardNumberDOM.innerHTML = randomNumber;

  let PintBottomDOM = document.querySelector(".PintBottom");
  PintBottomDOM.innerHTML = randomPint;

  let cardDOM = document.querySelector(".card");

  if (randomPint == "♦") {
    cardDOM.className += " diamonds";
  } else if (randomPint == "♥") {
    cardDOM.className += " hearts";
  } else if (randomPint == "♠") {
    cardDOM.className += " spades";
  } else if (randomPint == "♣") {
    cardDOM.className += " clubs";
  }

  // Styles
  if (randomPint == "♦" || randomPint == "♥") {
    PintBottomDOM.style.color = "red";
    PintTopDOM.style.color = "red";
  }

  let bodyDOM = document.querySelector("body");
  bodyDOM.style.display = "flex";
  bodyDOM.style.justifyContent = "center";
  bodyDOM.style.background = "green";

  cardDOM.style.display = "flex";
  cardDOM.style.width = "300px";
  cardDOM.style.height = "400px";
  cardDOM.style.marginTop = "20px";
  cardDOM.style.padding = "20px";
  cardDOM.style.borderRadius = "15px";

  PintTopDOM.style.fontSize = "80px";
  PintTopDOM.style.marginTop = "-37px";

  cardNumberDOM.style.fontSize = "80px";
  cardNumberDOM.style.fontWeight = "bold";
  cardNumberDOM.style.display = "flex";
  cardNumberDOM.style.justifyContent = "center";
  cardNumberDOM.style.alignItems = "center";
  cardNumberDOM.style.marginTop = "38px";

  PintBottomDOM.style.fontSize = "80px";
  PintBottomDOM.style.marginTop = "30px";
  PintBottomDOM.style.transform = "rotate(180deg)";
};
