let $start = document.querySelector('#start')
let $game = document.querySelector('#game')

$start.addEventListener('click', startGame) 
$game.addEventListener('click', boxClick)

function startGame() {
    $start.classList.add('hide')
    $game.style.backgroundColor = '#fff'

    renderBox()
}

function renderBox() {
    let smallBox = document.createElement('div')

    smallBox.style.height = smallBox.style.width = '30px'
    smallBox.style.backgroundColor = 'red'
    smallBox.style.position = 'absolute'
    smallBox.style.cursor = 'pointer'
    smallBox.style.top = '50px'
    smallBox.style.left = '75px'

    $game.insertAdjacentElement("afterbegin", smallBox)
}

function boxClick(event) {
    
}