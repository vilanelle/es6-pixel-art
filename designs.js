
// Select color input
const colorInput = document.getElementById('color-picker');
let color = '#000';
// assign user input color to variable
const assignColor = () => {
  color = colorInput.value;
}

colorInput.addEventListener('input', assignColor);

// painting function
let cells;

const makeArt = (e) => {
  e.target.style.backgroundColor = color;
}
// select table cells into array
const selectCells = () =>{
   cells = Array(...document.querySelectorAll('td'));
}
const addCellListeners = () => {
  cells.map(cell => cell.addEventListener('click', makeArt));
  cells.map(cell => cell.addEventListener('mouseover', (e) => {
    e.preventDefault();
    if(e.buttons == 1){
      makeArt(e);
    }
  }))
}

// Select size inputs, canvas
const canvas = document.getElementById('pixel-canvas');
const heightInput = document.getElementById('input-height');
const widthInput = document.getElementById('input-width');
const sizePicker = document.getElementById('size-picker');
let height = 1,
width = 1;


// make grid & helper functions
const makeRow = (w) => {
  let tableData = '';
  let i = 0;
  while(i < w){
    tableData+= '<td></td>';
    i++;
  }
  return `<tr>${tableData}</tr>`;
}

const makeRows = (h) => {
  let tableRows = '';
  let i = 0;
  while(i < h){
    let row = makeRow(width);
    tableRows+= row;
    i++;
  }
  return `<table>${tableRows}</table>`;
}

const makeGrid = (e) => {
  e.preventDefault();
  height = heightInput.value;
  width = widthInput.value;
  const table = makeRows(height);
  canvas.innerHTML = table;
  selectCells();
  addCellListeners();
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);
