let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");
let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;


const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
const restartgame = () => {
    turnO = true;
    enbleboxs();
    msgcontainer.classList.add("hide");


}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "o"
            turnO = false;
        } else {
            box.innerText = "x",
                turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });

})
const disabledboxs = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enbleboxs = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerHTML = `Winner Winner chicken dinner ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxs();


}
const checkwinner = () => {
    for (let pattern of winpatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText,);
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                showwinner(posval1);
            }
        }
    }
}

newgame.addEventListener("click", restartgame);
restart.addEventListener("click", restartgame);