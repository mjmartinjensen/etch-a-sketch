const container = document.querySelector(".container");

let j = 16;

for (i = 0; i < j*j; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
}

container.addEventListener('mouseover', function(event) {
    event.target.style.background = "black";
});