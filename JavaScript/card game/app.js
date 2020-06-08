var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');
var message = document.getElementById('game-message');
var isCardFlipped = false;
function flipCard(userPick) {
    if (!isCardFlipped) {
        var kingNumber = Math.ceil(Math.random() * 3);
        if (kingNumber == 1) {
            img1.src = './images/king.png';
            img2.src = './images/joker.jpg';
            img3.src = './images/joker.jpg';
        }
        else if (kingNumber == 2) {
            img1.src = './images/joker.jpg';
            img2.src = './images/king.png';
            img3.src = './images/joker.jpg';
        }
        else if (kingNumber == 3) {
            img1.src = './images/joker.jpg';
            img2.src = './images/joker.jpg';
            img3.src = './images/king.png';
        }
        isCardFlipped = true;

        if (kingNumber == userPick) {
            message.innerHTML = 'You won the game.';
        }
        else {
            message.innerHTML = 'You loss the game.';
        }
    }
}
function cardReset() {
    img1.src = './images/cardback.jpg';
    img2.src = './images/cardback.jpg';
    img3.src = './images/cardback.jpg';
    isCardFlipped = false;
}