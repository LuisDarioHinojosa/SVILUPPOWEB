let stuff = [];
stuff[0] = "emilia";
stuff[40] = "anakin"
// this way you can manipulate the size of an array and fill it with
// a bunch of NULL values
stuff[28] = 28;
stuff.length = 100;
for(let i = 0; i < stuff.length; i++){
    console.log(stuff[i]);
}
// you can cut the array using the len
let array = [1,2,3,4,5,6,7];
array.length = 4;
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// fill an array from user input
/*
let junk = [];
while(true){
    let input = prompt("Add Something");
    if(input === "q" || input === null){
        break;
    }
    junk.push(input);
}

console.log("Print input array");
for(let i = 0; i < junk.length; i++){
    console.log(junk[i]);
}
*/
// cool array methods

let a1 = [2,3,5,4,43,5,345,4,23,4,53,245];
a1.sort();


function printArray(array){
    // for each method
    /*
    array.forEach(function(element){console.log(element)});
    */
    for(let i = 0; let < array.length ; i++){
        console.log(array[i]);
    }
}

// Some other cool array methods.
grades = [2,4,5];
gradesb = [1,2,3];
console.log("concat");
// takes arrays an return a new array with both arrays´ elements
let c = grades.concat(gradesb);
printArray(c);

// bolean and tells if the element exist
grades.includes(22);
// returns either the index or -1
grades.indexOf(334);

// returns a string -> usefull for csv files.
grades.join(",");



