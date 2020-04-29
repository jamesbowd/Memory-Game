// Selectors
const matches = document.querySelector("#matches");
const message = document.querySelector("#message");
const grid = document.querySelector(".grid");
const turns = document.querySelector("#turns");
const difficulty = document.querySelectorAll('.btn');

let cardArray = [];
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

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
  {
    name: "sandwich",
    img: "images/sandwich.png",
  },
  {
    name: "taco",
    img: "images/taco.png",
  },
];

for (const button of difficulty) {
  button.addEventListener('click', setDifficulty)
}

function init () {
  grid.innerHTML = '';
  cardArray = [];
  message.textContent = 'Good Luck!';
  turns.textContent = '0';
  matches.textContent = '0';
}

function setDifficulty () {
  init();
  if (this.getAttribute('id') == 'six') {
    setCardArray(6);
  }
  if (this.getAttribute('id') == 'eight') {
    setCardArray(8);
  }
  if (this.getAttribute('id') == 'ten') {
    setCardArray(10);
  }
}

function setCardArray(num) {
  for (let i = 0; i < num; i++) {
    cardArray.push(possibleCards[i]);
    cardArray.push(possibleCards[i]);
  }
  cardArray.sort(() => 0.5 - Math.random());
  createBoard();
}

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