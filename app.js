document.addEventListener('DOMContentLoaded', () => {

// card options

const cardArray = [
    {
        name: 'apple',
        img: '/assets/images/apple.jpg'
    },
    {
        name: 'bananas',
        img: '/assets/images/bananas.jpg'
    },
    {
        name: 'cherries',
        img: '/assets/images/cherries.jpg'
    },
    {
        name: 'dragon_fruit',
        img: '/assets/images/dragon_fruit.jpg'
    },
    {
        name: 'grapes',
        img: '/assets/images/grapes.jpg'
    },
    {
        name: 'lemon',
        img: '/assets/images/lemon.jpg'
    },
    {
        name: 'orange',
        img: '/assets/images/orange.jpg'
    },
    {
        name: 'pineapple',
        img: '/assets/images/pineapple.jpg'
    },
    {
        name: 'star_fruit',
        img: '/assets/images/star_fruit.jpg'
    },
    {
        name: 'strawberry',
        img: '/assets/images/strawberry.jpg'
    },
    {
        name: 'tomato',
        img: '/assets/images/tomato.jpg'
    },
    {
        name: 'watermelon',
        img: '/assets/images/watermelon.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.getElementsByClassName('grid'); // or could have used document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
const cardsChosen = [];
const cardsChosenId = [];
const cardsWon = [];

// create the board
function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', '/assets/images/skeleton.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid[0].appendChild(card);
       
    }
};

// check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("You've found a match!  Your stomach is that little bit fuller...")
        cards[optionOneId].setAttribute('src', '/assets/images/wizard.png')
        cards[optionTwoId].setAttribute('src', '/assets/images/wizard.png')
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', '/assets/images/skeleton.png')
        cards[optionTwoId].setAttribute('src', '/assets/images/skeleton.png')
        alert("Thwarted once again!  Your stomach rumbles at your failure...")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations, you are stuffed!  You vanquished evil, and ate heartily.'
    }
}

// flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 1000)
    }
}

createBoard();

})