let sketchpad = document.querySelector('.sketchpad');

function genGrid(x) {
    for(let i = 0; i < x; i++) {        
        let row = document.createElement('tr');
        row.className = 'row';
        row.style.padding = 0;
        for(let j = 0; j < x; j++) {
            let column = document.createElement('td');
            column.className = 'column';
            column.style.padding = 0;
            row.appendChild(column);
        }
        sketchpad.appendChild(row);
    }
}

function defaultGrid() {
    genGrid(24);
}

defaultGrid();

let squares = document.querySelectorAll('td');

for(let j = 0; j < squares.length; j++) {
    squares[j].addEventListener('mouseenter', function() {
        squares[j].style.backgroundColor = colorpicker.value;
    });
}

function colorSolid() {
    for(let j = 0; j < squares.length; j++) {
        let colorpicker = document.querySelector('#colorpicker');

        squares[j].addEventListener('mouseenter', function() {
                squares[j].style.backgroundColor = colorpicker.value;
        });
    }
}

function colorRGB() {
    for(let j = 0; j < squares.length; j++) {
        squares[j].addEventListener('mouseenter', function() {
            squares[j].style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        });
    }
}

function erase() { 
    for(let j = 0; j < squares.length; j++) {
        squares[j].addEventListener('mouseenter', function() {
            squares[j].style.backgroundColor = "";
        });
    }
}

function clearGrid() {
    for(let j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = "";
    }
}

function newGrid() {
    let rows = document.querySelectorAll('tr');
    for(let i = 0; i < rows.length; i++) {
        sketchpad.deleteRow(0);
    }

    let input = prompt('Enter the size of your grid: ', '24');
    num = Number(input);
    genGrid(num);
    squares = document.querySelectorAll('td');
    colorSolid();
}