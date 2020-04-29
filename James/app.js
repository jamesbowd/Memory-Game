//card options
const cardArray = [
  {
    name: "burger",
    img: "images/burger.png",
  },
  {
    name: "burger",
    img: "images/burger.png",
  },
  {
    name: "cupcake",
    img: "images/cupcake.png",
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
    name: "fried-egg",
    img: "images/fried-egg.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
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
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "popcorn",
    img: "images/popcorn.png",
  },
  {
    name: "popcorn",
    img: "images/popcorn.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
const message = document.querySelector('#message');

var card = document.querySelectorAll('img');
console.log(card);  

var cardsChosen = [];
var cardsChosenId = [];
const cardsWon = [];

// create board

for (const cards of card) {
  cards.addEventListener('click', flipcard);
}


//function createBoard() {
  //for (let i = 0; i < cardArray.length; i++) {
    

    
    //card.setAttribute("src", "images/blank.png");
    //card.setAttribute("data-id", i);
    //card.addEventListener("click", flipcard);
    //grid.appendChild(card);
  //}
//}

// createBoard();

// check for card
function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    // alert("You found a match");
    message.textContent = "You found a match";
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    //alert("Sorry, try again!");
    message.textContent = "Sorry, try again!";
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations, You found them all!";
  }
}

// flip card
function flipcard() {
  var cardId = card.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  card.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
