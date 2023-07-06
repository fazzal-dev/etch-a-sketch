DEFAULT_SIZE = 16;
DEFAULT_MODE = "color";
DEFAULT_COLOR = "#333333";

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setColor(color) {
  currentColor = color;
}

function setMode(mode) {
  currentMode = mode;
}

function setSize(size) {
  currentSize = size;
}

const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.getElementById("colorBtn");
const erasorBtn = document.getElementById("erasorBtn");
const clearBtn = document.getElementById("clearBtn");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const gridContainer = document.getElementById("gridcontainer");

colorPicker.oninput = (e) => setColor(e.target.value);
colorBtn.onclick = () => setMode("color");
erasorBtn.onclick = () => setMode("erasor");
sizeSlider.onmousemove = (e) => updateSize(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
  setSize(value);
  updateSize(value);
  resetGrid();
}

function updateSize(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function resetGrid() {
  clearGrid();
  genDivs(currentSize);
}

function clearGrid() {
  gridContainer.innerHTML = "";
}

function genDivs(dimension) {
  gridContainer.style.gridTemplateColumns = `repeat(${dimension},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${dimension},1fr)`;

  for (let i = 0; i < dimension * dimension; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", changeColor);

    gridContainer.appendChild(cell);
  }
}

function changeColor(e) {
  if (currentMode === "color") e.target.style.backgroundColor = currentColor;
  else if (currentMode == "erasor")
    e.target.style.backgroundColor = "whitesmoke";
}

window.onload = () => {
  genDivs(DEFAULT_SIZE);
};
