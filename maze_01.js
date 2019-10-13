'use strict';

//  passage directions:
//
//    top    == 1
//    bottom == 2
//    right  == 4
//    left   == 8
//
//  combination examples:
//
//    14 == left | right | bottom
//    12 == left | right
//     7 == right | bottom | top
//    ..

// here comes the maze,
// each cell codes the possible passages from this cell to it's neighbors
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
function teste1(s,x){
    for(let counter3 = 0; counter3 < s[x].length; counter3++){
        
        
        if (x > 0){
            if (s[x-1][counter3]&8){
                process.stdout.write(" ")
    
            }   else{
                process.stdout.write("|")
            } 
        }  else{
            process.stdout.write(" ")    
        }
        if (s[x][counter3]&1){
                process.stdout.write("  ")
        
        }   else{
                process.stdout.write("__")
        }    
    }
    if (x > 0){
        if (s[x][s[x].length - 1]&4){
            process.stdout.write(" ")

        }   else{
            process.stdout.write("|")
        }
    }
}
function letztes(s, x){
    for(let counter3 = 0; counter3 < s[x].length; counter3++){
    
    if (s[x][counter3]&8){
        process.stdout.write(" ")

    }   else{
        process.stdout.write("|")
    }
    if (s[x][counter3]&2){
        process.stdout.write("  ")

    }   else{
        process.stdout.write("__")
    }
}
if (s[x][s[x].length - 1]&4){
    process.stdout.write(" ")

}   else{
    process.stdout.write("|")
}
}
// print the maze on console
function print(s) {
    
   let reapet = s.length
   for(let counter = 0; counter < reapet; counter +=1 ){
       console.log("")
        teste1(s, counter)
        
        
  //  let reapet2 = s[counter].length  
    //for(let counter2 = 0; counter2 < reapet2; counter2 +=1){
      //  process.stdout.write("" + s[counter][counter2])    
    }
    console.log("")
    letztes(s, reapet - 1)
   }
  


print(passages);

/* the console log should look like this:
 __ __ __ __ __ __ __ __ __
|__    __|  |   __|  |   __|  |
|__   |__    __ __ __ __|   __|
|  |  |     |   __ __|  |  |  |
|__   |__|__    __|   __|  |  |
|__   |__ __       __ __|  |  |
|  |  |__    __|__ __|   __ __|
|__ __ __ __   |  |  |      __|
|   __|__    __ __|  |  |__   |
|__   |__      |   __ __ __|__|
|__ __ __ __|__ __ __ __ __ __|
 */
