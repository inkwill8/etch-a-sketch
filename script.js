const container = document.querySelector('.container');

function addDiv() {
    const newDiv = document.createElement('div');

    // append the newly created element to the container
    container.appendChild(newDiv);
}

// try an array

// possibly will need a loop that will do this same thing 16 times for one row
    for (let i = 0; i < 16; i++) {
        addDiv();
    }

// another loop that will simply replicate the one row 16 times? 