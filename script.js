const buttonContainer = document.querySelector('.buttonContainer');

const gridSizeButton = document.createElement('button');
gridSizeButton.setAttribute('class','gridSizeButton');
gridSizeButton.textContent = 'Grid Size';
buttonContainer.appendChild(gridSizeButton);

const container = document.querySelector('.container');

gridSizeButton.addEventListener('click', function(event) {
    let gridSize = prompt('Select Grid Size');

    if(gridSize < 1 && gridSize > 100) {
        alert('Type a number between 1 and 100')

        return;
    }

    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    for (i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement('div');

        grid.classList.add('grid');

        container.appendChild(grid);

        let gridWidth = 100 / gridSize;

        grid.style.flex = `${gridWidth}% 0 1`;
    }

})

container.addEventListener('mouseover', function(event) {
    if (Number(event.target.style.opacity) < 1) {
        event.target.style.opacity = Number(event.target.style.opacity) + 0.1
    }
    event.target.style.background = `rgb(0,0,0)`;
});

/* Paint with random colors
container.addEventListener('mouseover', function(event) {
    switch (Math.floor(Math.random()*10)) {
        case 1:
            gridColor = "lime"
            break;
        case 2:
            gridColor = "blue"
            break;
        case 3:
            gridColor = "aqua"
            break;
        case 4:
            gridColor = "yellow"
            break;
        case 5:
            gridColor = "magenta"
            break;
        case 6:
            gridColor = "springgreen"
            break;
        case 7:
            gridColor = "red"
            break;
        case 8:
            gridColor = "tomato"
            break;
        case 9:
            gridColor = "purple"
            break;
    }
    event.target.style.background = gridColor;
});
*/