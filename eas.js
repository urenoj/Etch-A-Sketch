function genGrid(x) {
    for(let i = 0; i < x; i++) {
        let sketchpad = document.querySelector('.sketchpad');
        console.log(i);
        let row = document.createElement('tr');
        row.className = 'row';
        for(let j = 0; j < x; j++) {
            let column = document.createElement('td');
            column.className = 'column';
            //column.style.display = 'inline-block';//
            //column.style.cssFloat="left";//
            row.appendChild(column);
        }
        sketchpad.appendChild(row);
    }
}

function defaultGrid() {
    genGrid(16);
}

defaultGrid();