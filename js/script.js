document.getElementById('gridButton').addEventListener('click', generateGrid);

function generateGrid() {
    const gridContainer = document.getElementById('gridContainer');

    gridContainer.innerHTML = ''

for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'gridCell';
    cell.innerText = i;
    cell.addEventListener('click', function() {
        cell.classList.toggle('clean');
        console.log('Cella cliccata:', i);
    });
    gridContainer.append(cell);
    }
}

