const container = document.getElementById('container')

const setGridButton = document.querySelector('#number-of-grids')
setGridButton.addEventListener('click', setGrid)

const clearGridButton = document.getElementById('clear')
clearGridButton.addEventListener('click', clearGrid)

const blackAndWhiteButton = document.getElementById('black-and-white')
blackAndWhiteButton.addEventListener('click', toBWMode)

const rainbowButton = document.getElementById('rainbow')
rainbowButton.addEventListener('click', toRainbowMode)

const darkeningButton = document.getElementById('darkening')
darkeningButton.addEventListener('click', toDarkeningMode)

const eraserButton = document.getElementById('eraser')
eraserButton.addEventListener('click', toEraserMode)

let modeButtons = 
[blackAndWhiteButton, rainbowButton, darkeningButton, eraserButton]

let grids = []

function setGrid() {
  removePressedButton()
  if (grids.length > 0) {
    grids.forEach((grid) => {
      container.removeChild(grid)
    })
  }

  grids = []
  let numberOfGrids
  
  do {
    numberOfGrids = 
    window.prompt('Insert number of square per side (max value: 100)')  
  } while (numberOfGrids > 100);

  for (let i = 0; i < numberOfGrids*numberOfGrids ; i++) {
    grids[i] = document.createElement('div')
    grids[i].classList.add('grid')
    grids[i].setAttribute('style', `width: ${(1/numberOfGrids)*100}%; 
    height: ${(1/numberOfGrids)*100}%`)
    container.appendChild(grids[i])
  }
}

function clearGrid() {
  if(grids.length > 0) {
    grids.forEach( (grid) => {
      grid.style.backgroundColor = 'rgb(255 255 255)'
    })
  }
}

function toBWMode() {
  removePressedButton()
  setEventColor(0, 0, 0)
  pressedButton(0)
}

function toRainbowMode() {
  removePressedButton()
  let randomizeValue = () => Math.floor(Math.random() * 255);
  grids.forEach( (grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 
      `rgb(${randomizeValue()}, ${randomizeValue()}, ${randomizeValue()})`
    })
  })
  pressedButton(1)
}

function toDarkeningMode() {
  
}

function toEraserMode() {
  removePressedButton()
  setEventColor(255, 255, 255)
  pressedButton(3)
}


function setEventColor(r, g, b) {
  grids.forEach( (grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
  })
}

function removePressedButton() {
  modeButtons.forEach((button) => {
    button.classList.remove('pressed-button')
  })
}

function pressedButton(button) {
  if(grids[0] !== undefined) {
    modeButtons[button].classList.add('pressed-button')
  }
}