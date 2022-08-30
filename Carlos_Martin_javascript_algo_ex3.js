var array_number = new Array(9);
array_number[0]= "427351986"; 
array_number[1]= "983762514"; 
array_number[2]= "156894723"; 
array_number[3]= "239185467"; 
array_number[4]= "741639258"; 
array_number[5]= "568247139"; 
array_number[6]= "872913645"; 
array_number[7]= "395426871"; 
array_number[8]= "614578396";

var numSelected = null;
var tileSelected = null;

var board = [
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------"
]

var solution = [
    array_number[0],
    array_number[1],
    array_number[2],
    array_number[3],
    array_number[4],
    array_number[5],
    array_number[6],
    array_number[7],
    array_number[8]
]

window.onload = function() {
    F21();
}

function F21() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", F11);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function F11() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
            return console.log(true);
        }
        else {
            return console.log(false);
        }
    }
}
// The column function.
function F32(board, row, col, value) {
    // j represents on row
   for (let i = 0; i < 8; i++) {
       // check if the current row matches the passed in row
       if (i !== row) {
           if (board[i][col] === value) {
               return false; 
           }
       }
   }
   
   return true;
}

//Display table.
function oneSetValidSudoku(board) {
    let set = new Set()
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const value = board[i][j]
            if (value !== ".") {
                const row = `${value} at row ${i}`
                const column = `${value} at column ${j}`
                const box = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`
                console.log(`${row}, ${column}, ${box}`)
                if (set.has(row) || set.has(column) || set.has(box)) {
                    return false
                } else {
                    set.add(row)
                    set.add(column)
                    set.add(box)
                }
            }
        }
    }

    return true
}