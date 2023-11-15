const cells = document.querySelectorAll('#myTable td');
const resultParagraph = document.getElementById('result');

function countActiveCells() {
  let count = 0;
  cells.forEach(cell => {
    if (cell.classList.contains('active')) {
      count++;
    }
  });
  resultParagraph.textContent = `Number of active cells: ${count}`;
}

cells.forEach(cell => {
  cell.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

function resetCells() {
  cells.forEach(cell => {
    cell.classList.remove('active');
  });
  resultParagraph.textContent = '';
}
