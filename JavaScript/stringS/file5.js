var food = "pizza";
// concatenations
console.log(food.concat(" is italian"));

// substring -> absolute indices range
let girl = "Emilia Antunez Marchetti";
console.log(girl.substring(6, 11));

// substr -> total or characters to include
console.log(girl.substr(2, 4));

//toUpperCase and lowerCase

let lower = girl.toUpperCase();
let high = girl.toLowerCase();

console.log(lower);
console.log(high);

let trimp = "           " + girl;
console.log(trimp);
console.log(trimp.trimStart());


// split method -> splits just like the python one
// They are splitted into an array
let content = "Mi piacerebbe rivederla"
console.log(content.split(" "));