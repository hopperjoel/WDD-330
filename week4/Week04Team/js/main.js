
let player1Turn = true;
let player2Turn = false;
const winArray = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]
const xArray = [0, 4, 8];
const oArray = [];

// document.querySelector('#addPlayers').addEventListener('click', addPlayers());

function addPlayers() {
    const player1 = document.querySelector('#player1name').value;
    const player2 = document.querySelector('#player2name').value;
};

/*function checkWin(array) {
    for (let i=2; i<array.length; i++) {
        testArray = [array[i-2], array[i-1], array[i]];
        winArray.forEach
        if (testArray.sort())
        if (array.length = 4 & i > 2){ 
            testArray2 = [array[i-2],  array[i-1], array[i+1]];
        }
        if (array.length =5){
            testArray3 = [array[i]]
        }
    includes(index);
    alert("Game Over");
}*/

function addMark(event) {
    let square = event.target
    let index = square.getAttribute('id');

    if (player1Turn) {
        square.innerText = 'X';
        player1Turn = false;
        player2Turn = true;
        xArray.push(index);
    }
    else if (player2Turn) {
        square.innerText = 'O';
        player2Turn = false;
        player1Turn = true;
        oArray.push(index);
    };

    /*if (xArray.length >= 3){
        checkWin(xArray)
    }
    else if (oArray.length >= 3){
        checkWin(oArray)
    }*/
};

function resetBoard() {
   const tdList = document.querySelectorAll("td");
   for (let i=0; i < tdList.length; i++) {
       tdList[i].textContent = '';
   };
   player1Turn = true;
   player2Turn = false;
};
document.querySelectorAll('.square').forEach(square => square.addEventListener('click', addMark));

