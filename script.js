let gameBoard = new Array(9).fill("_");
console.log(gameBoard[8]);

function displayBoard(array) {
    console.log(`        ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}\n
        ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}\n
        ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}\n`)
}

displayBoard(gameBoard);