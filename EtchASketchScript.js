const container = document.querySelector("#container");
const BlackWhiteButton = document.querySelector("#BlackWhiteButton");
const ShadeButton = document.querySelector("#ShadeButton");
const RainbowButton = document.querySelector("#RainbowButton");
const ClearButton = document.querySelector("#ClearButton");

let PixelCount = (960*960);
let SquareNumber = 8;
let CurrentColor = "BlackandWhite";

BlackWhiteButton.addEventListener("click", function() {
    CurrentColor = "BlackandWhite";
});
ShadeButton.addEventListener("click", function() {
    CurrentColor = "Shading";
});
RainbowButton.addEventListener("click", function() {
    CurrentColor = "Rainbow";
});
ClearButton.addEventListener("click", function() {
    change();

});

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

    for (i=0; i<(PixelCount/(SquareNumber**2)); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${SquareNumber}px`;
        div.style.height = `${SquareNumber}px`;
        div.style.backgroundColor = "white";
        div.setAttribute("id","0");
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
const colorArray = ["#FFFFFF", "#E6E6E6", "#CCCCCC", "#B3B3B3", "#999999", "#808080", "#666666", "#4D4D4D", "#333333", "#1A1A1A", "#000000"];

function change() {
    result.innerText = eligibleSquares[slideRange.value-1];
    SquareNumber = eligibleSquares[slideRange.value-1];
    MakeSquare();
}

container.addEventListener("mouseover", function(e) {
    if (CurrentColor === "BlackandWhite") {
        e.target.style.backgroundColor = "black";
    } else if (CurrentColor === "Shading") {
        var ShadeID = e.target.getAttribute("id");
        var NumShadeID = Number(ShadeID);
        if (NumShadeID === 10) {}
        else {
            e.target.style.backgroundColor = colorArray[NumShadeID+1]
            e.target.removeAttribute("id");
            e.target.setAttribute("id",(NumShadeID+1).toString());
        }
    } else if (CurrentColor === "Rainbow") {
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});


/*
container.addEventListener("mouseover", function(e) {
    if (CurrentColor === "BlackandWhite") {
        e.target.style.backgroundColor = "black";
    } else if (CurrentColor === "Shading") {
        if (e.target.getAttribute("id") === "0") {
            e.target.style.backgroundColor = colorArray[1];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","1");
        } else if (e.target.getAttribute("id") === "1") {
            e.target.style.backgroundColor = colorArray[2];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","2");
        } else if (e.target.getAttribute("id") === "2") {
            e.target.style.backgroundColor = colorArray[3];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","3");
        } else if (e.target.getAttribute("id") === "3") {
            e.target.style.backgroundColor = colorArray[4];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","4");
        } else if (e.target.getAttribute("id") === "4") {
            e.target.style.backgroundColor = colorArray[5];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","5");
        } else if (e.target.getAttribute("id") === "5") {
            e.target.style.backgroundColor = colorArray[6];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","6");
        } else if (e.target.getAttribute("id") === "6") {
            e.target.style.backgroundColor = colorArray[7];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","7");
        } else if (e.target.getAttribute("id") === "7") {
            e.target.style.backgroundColor = colorArray[8];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","8");
        } else if (e.target.getAttribute("id") === "8") {
            e.target.style.backgroundColor = colorArray[9];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","9");
        }  else if (e.target.getAttribute("id") === "9") {
            e.target.style.backgroundColor = colorArray[10];
            e.target.removeAttribute("id");
            e.target.setAttribute("id","10");
        }
    } else if (CurrentColor === "Rainbow") {
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});
*/
MakeSquare();
result.innerText = eligibleSquares[slideRange.value-1];