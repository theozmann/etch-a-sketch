const DEFAULT_COLOR = '#333'
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector(".grid");
const gridElement = document.querySelector(".grid-element");
const blackBtn = document.querySelector(".black-btn");
const gradualBtn = document.querySelector(".gradual-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const secretBtn = document.querySelector(".secret-btn");

let gridSizeDisplay = document.querySelector(".grid-size-display");
let gridSize = document.getElementById("grid-slider");

gridSizeDisplay.textContent = gridSize.value;
gridSize.oninput = function () {
    gridSizeDisplay.textContent = this.value;
    setCurrentSize(this.value);
    clearGrid();
    createGrid(currentSize);
}


function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function clearGrid() {
    grid.innerHTML = '';
}


function createGrid(currentSize) {
  grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
  for (i = 0; i < currentSize * currentSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.addEventListener ('mouseover', () => {
        gridElement.style.backgroundColor = "black";
    })
    grid.appendChild(gridElement);
  }
}

createGrid(currentSize);


