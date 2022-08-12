const grid = document.querySelector(".grid");
let gridSize = document.getElementById("grid-slider").value;
const gridElement = document.querySelector(".grid-element");

function createGrid(gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.addEventListener ('mouseover', () => {
        gridElement.style.backgroundColor = "black";
    })
    grid.appendChild(gridElement);
  }
}


createGrid(16);

