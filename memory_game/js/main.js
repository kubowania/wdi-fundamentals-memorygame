console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
function checkForMatch() {
//if (cardsInPlay.length === 2 &&
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match"); 
} else {
	console.log("Sorry, try again");
}
}

function flipCard(cardId) {
if (cardsInPlay.length ===2) {
	checkForMatch ();
}
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);
checkForMatch();




