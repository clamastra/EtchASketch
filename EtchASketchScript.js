const container = document.querySelector("#container");

let PixelCount = (960*960);
let SquareNumber = 8;

function MakeSquare() {
    /*
    while (document.getElementsByClassName("square").length > 0) {
        console.log("while function");
        $("#container .square").remove();
    }
    */

    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.remove();
    });

    console.log("while function over");
    for (i=0; i<(PixelCount/(SquareNumber**2)); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${SquareNumber}px`;
        div.style.height = `${SquareNumber}px`;
        div.style.backgroundColor = "white";
        container.appendChild(div);
    }
}

var result = document.getElementById("result");
var slideRange = document.getElementById("slideRange")

/*
function change() {
    if (960%slideRange.value === 0) {
        result.innerText = slideRange.value;
        SquareNumber = slideRange.value;
    }
}
*/

const eligibleSquares = [1,2,3,4,5,6,8,10,12,15,16,20,24,30,32,40,48,60,64,80,96];
const colorArray = ["#E6E6E6", "#CCCCCC", "#B3B3B3", "#999999", "#808080", "#666666", "#4D4D4D", "#333333", "#1A1A1A", "#000000"];

function change() {
    result.innerText = eligibleSquares[slideRange.value-1];
    SquareNumber = eligibleSquares[slideRange.value-1];
    console.log("change function");
    MakeSquare();
}

container.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "black";
});

MakeSquare();
result.innerText = eligibleSquares[slideRange.value-1];