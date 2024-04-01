const buttonContainer = document.querySelector(".buttonContainer");

const sizeButton = document.createElement("button");
sizeButton.setAttribute("class","sizeButton");
sizeButton.textContent = "Grid Size";
buttonContainer.appendChild(sizeButton);

const container = document.querySelector(".container");

sizeButton.addEventListener("click", function (e){
    let gridSize = prompt("Select Grid Size");
    if (gridSize >= 1 && gridSize <=100) {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
          }
        for (i = 0; i < gridSize*gridSize; i++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
            let gridWidth = (100/gridSize)
            grid.style.flex = `${gridWidth}% 0 1`;
        }
    } else {
        alert("Type a number between 1 and 100")
    }
})

container.addEventListener('mouseover', function(event) {
    event.target.style.background = "black";
});