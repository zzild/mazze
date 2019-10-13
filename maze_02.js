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

let passages =  [
    [4, 14, 8, 2, 6, 8, 2, 6, 8, 3],
    [4, 11, 4, 15, 13, 12, 13, 9, 6, 9],
    [2, 3, 6, 11, 6, 12, 8, 2, 3, 2],
    [5, 11, 1, 5, 15, 8, 6, 9, 3, 3],
    [4, 11, 4, 12, 15, 14, 13, 8, 3, 3],
    [2, 3, 4, 14, 9, 5, 8, 6, 13, 9],
    [5, 13, 12, 13, 10, 2, 2, 7, 14, 8],
    [6, 8, 4, 14, 13, 9, 3, 3, 5, 10],
    [5, 10, 4, 15, 10, 6, 13, 13, 8, 1],
    [4, 13, 12, 9, 5, 13, 12, 12, 12, 8]
];

printMaze(passages);

