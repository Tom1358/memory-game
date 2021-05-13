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

const grid = document.getElementsByClassName('grid'); // or could have used document.querySelector('.grid')
const cardsChosen = [];

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

// flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
}

createBoard();

})