






let cardNumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  
  let randomCardIndex = Math.floor(Math.random() * cardNumber.length);
  
  let randomCard = cardNumber[randomCardIndex];
  
  const card = document.querySelector(".number").innerHTML = randomCard;












  let suits = ["heart", "diamond", "club", "spade"];

let randomSuitIndex = Math.floor(Math.random() * suits.length);

let randomSuit = suits[randomSuitIndex];

let nick = document.querySelectorAll(".suit").forEach(function (e) {
  e.className += " " + randomSuit;
});









