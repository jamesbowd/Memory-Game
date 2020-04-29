// Selectors
const matches = document.querySelector("#matches");
const message = document.querySelector("#message");
const grid = document.querySelector(".grid");
const turns = document.querySelector("#turns");

const possibleCards = [
  {
    name: "burger",
    img: "images/burger.png",
  },
  {
    name: "cupcake",
    img: "images/cupcake.png",
  },
  {
    name: "fried-egg",
    img: "images/fried-egg.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "popcorn",
    img: "images/popcorn.png",
  },
  {
    name: "shake",
    img: "images/shake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray = [];

function setCardArray(num) {
  for (let i = 0; i < num; i++) {
    cardArray.push(possibleCards[i]);
    cardArray.push(possibleCards[i]);
  }
}

setCardArray(6);

cardArray.sort(() => 0.5 - Math.random());

let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.setAttribute("class", "card-back");
    card.addEventListener("click", flipcard);
    grid.appendChild(card);
  }
}

createBoard();

// check for card
function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    message.textContent = "You found a match";
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    cards[optionOneId].setAttribute("class", "card-back");
    cards[optionTwoId].setAttribute("class", "card-back");
    message.textContent = "Sorry, try again!";
  }
  cardsChosen = [];
  cardsChosenId = [];
  matches.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    message.textContent = "Congratulations, You found them all!";
  }
  turns.textContent++;
}

// flip card
function flipcard() {
  var cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  this.setAttribute("class", "card-front");
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
