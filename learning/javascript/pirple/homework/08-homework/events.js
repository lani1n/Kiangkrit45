let canAddCross = true;

const topLeft = document.getElementById("top-left").querySelector("span"),
    topMiddle = document.getElementById("top-middle").querySelector("span"),
    topRight = document.getElementById("top-right").querySelector("span"),
    centerLeft = document.getElementById("center-left").querySelector("span"),
    centerMiddle = document.getElementById("center-middle").querySelector("span"),
    centerRight = document.getElementById("center-right").querySelector("span"),
    bottomLeft = document.getElementById("bottom-left").querySelector("span"),
    bottomMiddle = document.getElementById("bottom-middle").querySelector("span"),
    bottomRight = document.getElementById("bottom-right").querySelector("span");

const resetGame = () => {
    topLeft.innerText = ".";
    topMiddle.innerText = ".";
    topRight.innerText = ".";
    centerLeft.innerText = ".";
    centerMiddle.innerText = ".";
    centerRight.innerText = ".";
    bottomLeft.innerText = ".";
    bottomMiddle.innerText = ".";
    bottomRight.innerText = ".";
  
    topLeft.classList.remove("cross", "circle");
    topMiddle.classList.remove("cross", "circle");
    topRight.classList.remove("cross", "circle");
    centerLeft.classList.remove("cross", "circle");
    centerMiddle.classList.remove("cross", "circle");
    centerRight.classList.remove("cross", "circle");
    bottomLeft.classList.remove("cross", "circle");
    bottomMiddle.classList.remove("cross", "circle");
    bottomRight.classList.remove("cross", "circle");
    
    canAddCross = true;
}  

const announceWinner = (player) => {
    alert(player + " has won!");
    resetGame();
}

const announceNoWinners = () => {
    alert("Cats game!");
    resetGame();
}

const checkAllCompleted = () => {
    const topLeftText = topLeft.innerText,
        topMiddleText = topMiddle.innerText,
        topRightText = topRight.innerText,
        centerLeftText = centerLeft.innerText,
        centerMiddleText = centerMiddle.innerText,
        centerRightText = centerRight.innerText,
        bottomLeftText = bottomLeft.innerText,
        bottomMiddleText = bottomMiddle.innerText,
        bottomRightText = bottomRight.innerText;
    
    if (topLeftText !== "." &&
        topMiddleText !== "." &&
        topRightText !== "." &&
        centerLeftText !== "." &&
        centerMiddleText !== "." &&
        centerRightText !== "." &&
        bottomLeftText !== "." &&
        bottomMiddleText !== "." &&
        bottomRightText !== ".")
        {
            announceNoWinners();
        }
}

const checkWinner = () => {
    const topLeftText = topLeft.innerText,
        topMiddleText = topMiddle.innerText,
        topRightText = topRight.innerText,
        centerLeftText = centerLeft.innerText,
        centerMiddleText = centerMiddle.innerText,
        centerRightText = centerRight.innerText,
        bottomLeftText = bottomLeft.innerText,
        bottomMiddleText = bottomMiddle.innerText,
        bottomRightText = bottomRight.innerText;
    
    if (topLeftText === topMiddleText &&
        topMiddleText === topRightText &&
        topLeftText === topRightText &&
        topLeftText !== ".") {
        announceWinner(topLeftText);
        return;
    }
    
    if (centerLeftText === centerMiddleText &&
        centerMiddleText === centerRightText &&
        centerLeftText === centerRightText &&
        centerLeftText !== ".") {
        announceWinner(centerLeftText);
        return;
    }
    
    if (bottomLeftText === bottomMiddleText &&
        bottomMiddleText === bottomRightText &&
        bottomLeftText === bottomRightText &&
        bottomLeftText !== ".") {
        announceWinner(bottomLeftText);
        return;
    }
    
    if (topLeftText === centerLeftText &&
        centerLeftText === bottomLeftText && 
        topLeftText === bottomLeftText &&
        topLeftText !== ".") {
        announceWinner(topLeftText);
        return;
    }
    
    if (topMiddleText === centerMiddleText &&
        centerMiddleText === bottomMiddleText &&
        topMiddleText === bottomMiddleText &&
        topMiddleText !== ".") {
        announceWinner(topMiddleText);
        return;
    }
    
    if (topRightText === centerRightText &&
        centerRightText === bottomRightText &&
        topRightText === bottomRightText &&
        topRightText !== ".") {
        announceWinner(topRightText);
        return;
    }
    
    if (topLeftText === centerMiddleText &&
        centerMiddleText === bottomRightText &&
        topLeftText === bottomRightText &&
        topLeftText !== ".") {
        announceWinner(topLeftText);
        return;
    }
    
    if (topRightText === centerMiddleText &&
        centerMiddleText === bottomLeftText &&
        topRightText === bottomLeftText &&
        topRightText !== ".") {
        announceWinner(topRightText);
        return;
    }

    checkAllCompleted();
}

const addPlayerMark = (e) => {
    const boxTarget = e.target;
    if (boxTarget.innerText !== ".") return;

    boxTarget.classList.remove("cross");
    boxTarget.classList.remove("circle");

    if (canAddCross) {
        boxTarget.innerText = "X";
        boxTarget.classList.add("cross");
        canAddCross = false;
    }
    else {
        boxTarget.innerText = "O";
        boxTarget.classList.add("circle")
        canAddCross = true;
    }

    setTimeout(checkWinner, 100)
}

const board = document.getElementById("game-board");
const allSpans = board.querySelectorAll("span");
for (const item of allSpans) {
    item.addEventListener("click", addPlayerMark);
}