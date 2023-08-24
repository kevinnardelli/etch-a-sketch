const container = document.createElement('div')
container.classList.add('container')

const body = document.querySelector('body')
body.appendChild(container)

const numberOfGridsButton = document.querySelector('#number-of-grids')
numberOfGridsButton.addEventListener('click', setGrid)

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clearGrid)

let grids = []

function setGrid() {
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

  enableGrid()
}

function clearGrid() {
  if(grids.length > 0) {
    grids.forEach( (grid) => {
      grid.classList.remove('painted-grid')
    })

    enableGrid()
  }
}

function enableGrid() {
  grids.forEach( (grid) => {
    grid.addEventListener('mouseover', () => {
      grid.classList.add('painted-grid')
    })
  })
}