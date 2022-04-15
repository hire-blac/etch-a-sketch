const container = document.querySelector('.container');
let chosenColor = 'black';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// function to create grid boxes
function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    // add click event listener to cell
    cell.addEventListener('click', () => sketch(cell))
    container.appendChild(cell).className = "grid-item"
  }
}

// function to change the color of a cell
function sketch(cell){
  let cellColor;

  if(chosenColor === 'rainbow') {
    cellColor = rainbowColor();
  } else {
    cellColor = chosenColor;
  }

  // set cell background color
  cell.style.background = cellColor;
  console.log("edek");
}

// set color to use
function setColor(color){
    chosenColor = color;
}

// select a random color
function rainbowColor(){
  let index = Math.floor(Math.random() * 10) % 7;
  return colors[index];
}

// clear grid
function clearGrid(){
  console.log('clear');
  const allCells = document.querySelectorAll('.grid-item');
  allCells.forEach(cell => {
    cell.style.background = 'white';
  })
}

makeGrid(100,100);