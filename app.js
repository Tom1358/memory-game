document.addEventListener('DOMContentLoaded', () => {

// card options - 6x images, all 100px x 100px in size, with array below holding 2x each image


const cardArray = [
    {
        name: 'apple',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/apple.jpg'
    },
    {
        name: 'apple',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/apple.jpg'
    },
    {
        name: 'bananas',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/bananas.jpg?raw=true'
    },
    {
        name: 'bananas',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/bananas.jpg?raw=true'
    },
    {
        name: 'cherries',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/cherries.jpg?raw=true'
    },
    {
        name: 'cherries',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/cherries.jpg?raw=true'
    },
    {
        name: 'grapes',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/grapes.jpg?raw=true'
    },
    {
        name: 'grapes',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/grapes.jpg?raw=true'
    },
    {
        name: 'lemon',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/lemon.jpg?raw=true'
    },
    {
        name: 'lemon',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/lemon.jpg?raw=true'
    },
    {
        name: 'strawberry',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/strawberry.jpg?raw=true'
    },
    {
        name: 'strawberry',
        img: 'https://github.com/Tom1358/memory-game/blob/master/assets/images/strawberry.jpg?raw=true'
    },
]

cardArray.sort(() => 0.5 - Math.random()) //allows to refresh game with new card positions

const grid = document.getElementsByClassName('grid'); // or could have used document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = []; // had to change from const to let, as lines 91 and 92 weren't resetting the array with error message 'assignment to constant variable, checkForMatch line 91 

// create the board
function createBoard() {
    for (let i=0; i < cardArray.length; i++) { // loops over card array
        let card = document.createElement('img'); // for each card, image element created, called 'card'
        card.setAttribute('src', '/assets/images/skeleton.png'); // sets attribute, linking it to the skeleton png image
        card.setAttribute('data-id', i); // also sets attribute of data to loop for each card ('i' - iterable)
        card.addEventListener('click', flipCard) // listens if card has been flipped, then invokes function on linev102
        grid[0].appendChild(card); // puts into grid (n.b. need index position[0] because used 'getElementsByClassName' on line 59, which returns an array even if in this case it's an array of one index))
    }
};

// check for matches
function checkForMatch() { // currently we have 2x values in our cardsChosen array, and 2x values in our cardsChosenId array, at this point. 
    let cards = document.querySelectorAll('img'); //picks up all images created in createBoard function, line 68
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("You've found a match!  Your stomach is that little bit fuller...");
        cards[optionOneId].setAttribute('src', '/assets/images/wizard.png');
        cards[optionTwoId].setAttribute('src', '/assets/images/wizard.png');
        cardsWon.push(cardsChosen); // pushes selected cards into cardsWon array (line 63) so that they are effectively out of the game
    } else {
        cards[optionOneId].setAttribute('src', '/assets/images/skeleton.png'); // resets to skeleton if incorrect
        cards[optionTwoId].setAttribute('src', '/assets/images/skeleton.png');
        alert("Thwarted once again!  Your stomach rumbles at your failure...");
    }
    cardsChosen = []; // resets array to clear
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length; // shows one point for every matched pair
    if (cardsWon.length === cardArray.length/2) { // we know that we have collected every pair of cards in the cards array
        resultDisplay.textContent = '';
        document.getElementById('score').textContent = 'Congratulations, you are stuffed!  You vanquished evil, and ate heartily.';
    }
}

// flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id'); // gets data-id attribute created in createBoard function, line 70, and applies it to whatever card turned over
    cardsChosen.push(cardArray[cardId].name); // push from cardArray based on that card ID, e.g. if card array is [4], it will match the 5th card in that array. Once located, will get its name, and push TO cardsChosen array, line 61
    cardsChosenId.push(cardId); // Same done in line above for cardId, just need the ID
    this.setAttribute('src', cardArray[cardId].img); // because flipCard is already in a function, we already have a card picked. this.setAttribute allows an image to be added to the square based on the image it holds...
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 250); // ...will invoke checkForMatch function when 2 cards are selected
    }
}

createBoard();

})