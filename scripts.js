const container = document.createElement('div')
container.classList.add('container')

const body = document.querySelector('body')
body.appendChild(container)

const grids = []

for (let i = 0; i < 256; i++) {
  grids[i] = document.createElement('div')
  grids[i].classList.add('grid')
  container.appendChild(grids[i])
}

grids.forEach( (grid) => {
  grid.addEventListener('mouseover', () => {
    grid.classList.add('painted-grid')
  })
})