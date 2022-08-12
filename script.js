const DEFAULT_COLOR = 'black'
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector(".grid");
const gridElement = document.querySelector(".grid-element");
const blackBtn = document.querySelector(".black-btn");
const gradualBtn = document.querySelector(".gradual-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const clearBtn = document.querySelector(".clear-grid-btn");
const secretBtn = document.querySelector(".secret-btn");

let secretFart = new Audio('./audio/2HourFartLong.mp3');
let fart19 = new Audio('./audio/19.m4a');
let fart14 = new Audio('./audio/14.m4a');


let gridSizeDisplay = document.querySelector(".grid-size-display");
let gridSize = document.getElementById("grid-slider");

gridSizeDisplay.textContent = gridSize.value;
gridSize.oninput = function () {
    gridSizeDisplay.textContent = this.value;
    setCurrentSize(this.value);
    clearGrid();
    createGrid(currentSize);
}
clearBtn.onclick = () => {
    clearGrid()
    createGrid(currentSize);
};
blackBtn.onclick = () => {
    setCurrentColor('black');
}
gradualBtn.onclick = () => {
    fart14.play();
    alert('This feature has not yet been implemented')
}
rainbowBtn.onclick = () => {
    fart19.play();
    alert('This feature has not yet been implemented')
}
secretBtn.onclick = () => {
    secretFart.play();
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
        gridElement.style.backgroundColor = currentColor;
    })
    grid.appendChild(gridElement);
  }
}

createGrid(currentSize);


