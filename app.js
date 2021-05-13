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
        name: 'strawberry',
        img: '/assets/images/strawberry.jpg'
    },
    {
        name: 'watermelon',
        img: '/assets/images/watermelon.jpg'
    }
]

const grid = document.getElementsByClassName('grid') // or could have used document.querySelector('.grid')

// create the board
function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', '/assets/images/wizard.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard();

})