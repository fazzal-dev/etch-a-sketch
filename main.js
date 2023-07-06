const gridContainer = document.getElementById("gridcontainer");

function genDivs(dimension) {
  gridContainer.style.gridTemplateColumns = `repeat(${dimension},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${dimension},1fr)`;

  for (let i = 0; i < dimension * dimension; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
}
genDivs(6);
