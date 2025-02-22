// some vars
const container = document.querySelector('.container');
let gridSize = 16;

function addDiv() {
    const newDiv = document.createElement('div');

    // append the newly created element to the container
    container.appendChild(newDiv);
}

// possibly will need a loop that will do this same thing 16 times for one row
   function singleRow(size) { 
    for (let i = 0; i < size; i++) {
        addDiv();
   }
}
// another loop that will simply replicate the one row 16 times?
    function multipleRows(size) {
        for (let i = 0; i < size; i++) {
            singleRow(size);
        }
    }

multipleRows(gridSize);

// hover effects

const boxes = document.querySelectorAll('.container div');

function changeColor(e) {
    e.target.style.backgroundColor = 'orange';
}

for (let box of boxes) {
    box.addEventListener('mouseover', changeColor)
}

// button effects

const btn = document.getElementById('btn');

function getUserInput() {
    gridSize = prompt('Please input the new grid size.');
    
    if (gridSize > 100) {
        do {
            gridSize = prompt('Please define a size that is 100 or less.');
        } while (gridSize > 100); 
        
    } else {
        container.removeChild(div);
        multipleRows(gridSize);
    }
}

btn.addEventListener('click', getUserInput);




