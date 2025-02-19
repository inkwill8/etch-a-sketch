const container = document.querySelector('.container');

function addDiv() {
    const newDiv = document.createElement('div');

    // append the newly created element to the container
    container.appendChild(newDiv);
}

// possibly will need a loop that will do this same thing 16 times for one row
   function singleRow() { 
    for (let i = 0; i < 16; i++) {
        addDiv();
   }
}
// another loop that will simply replicate the one row 16 times?
    function multipleRows() {
        for (let i = 0; i < 16; i++) {
            singleRow();
        }
    }

multipleRows();

// hover effects

const boxes = document.querySelectorAll('.container div');

function changeColor(e) {
    e.target.style.backgroundColor = 'orange';
}

for (let box of boxes) {
    box.addEventListener('mouseover', changeColor)
}