'use strict';

// A maze is a two dimensional array of cells.
// Each cell describes which passage is possible.
// Each passage direction is encoded by a numeric value.
//  passage directions:

const top    = 1;
const bottom = 2;
const right  = 4;
const left   = 8;

//  combination examples, these ways are possible:
//
//    14 == bottom | right | left
//    12 == right | left
//     7 == top | bottom | right

// print '   ' if cell has no top wall, else print ' __'
function printTop(cell) {
    if (cell & top) {
        process.stdout.write('   ');
    } else {
        process.stdout.write(' __');
    }
}

// print '|' if cell has left wall and '__' if it has a bottom wall
function printLeftBottom(cell) {
    if (cell & left) {
        process.stdout.write(' ');
    } else {
        process.stdout.write('|');
    }
    if (cell & bottom) {
        process.stdout.write('  ');
    } else {
        process.stdout.write('__');
    }
}

// print '|' if cell has right wall, else print ' '
function printRight(cell) {
    if (cell & right) {
        process.stdout.write(' ');
    } else {
        process.stdout.write('|');
    }
}

// print maze described by passages on console
function printMaze(s) {
    // print top walls of top row
    for (let j = 0; j < s[0].length; j++) {
        printTop(s[0][j]);
    }
    process.stdout.write("\n");

    // iterate over each row
    for (let i = 0; i < s.length; i++ ) {
        // print left and bottom wall for each cell of current row
        for (let j = 0; j < s[i].length; j++) {
            printLeftBottom(s[i][j]);
        }

        // print right wall for last cell of row
        printRight(s[i][s[i].length - 1]);
        process.stdout.write("\n");
    }
}

// initialize maze with walls at every cell
function initializeMaze(rows, columns) {
var s = [];
for (let z = 0; z < columns; z++){
    var t = [];
    for(let x = 0; x < rows; x++){
               t.push(0)

    }
s.push(t)
}
    return s
}

// starting with cell s[i][j] carve a passage to s[i + 1][j] if possible
function carveBottom(s, i, j) {
    if (i + 1 < (s.length)){
        s[i][j] = s[i][j] + bottom
        if (i != s.length - 1){
        s[i+1][j] = s[i+1][j] + top    
        
        
    }
    }
}

// starting with cell s[i][j] carve a passage to s[i][j + 1] if possible
function carveRight(s, i, j) {
if (j + 1 < (s[i].length)){
    s[i][j] = s[i][j] + right
    if (j != s[i].length - 1){
    s[i][j+1] = s[i][j+1] + left    
    
    
}
}
}


// create maze by randomly carving passages for each cell
function createBinaryTreeMaze(rows, columns) {
    let s = initializeMaze(rows, columns);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let randomized  = Math.floor((Math.random() + 0.5))
            if (randomized === 1){
            carveBottom(s, i, j)
            } else {
            carveRight(s, i, j)
            } 
        }
    }
    return s;
}




let maze = createBinaryTreeMaze(10, 10);
printMaze(maze);
