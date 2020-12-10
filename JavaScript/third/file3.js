// this is the string version
let name = "Luis";
// this is the object version
let nameObject = String(name);
console.log(typeof (name));
console.log(typeof (nameObject));
alert(nameObject.valueOf());

// function
function fun() {
    alert("function");
}

function greeting() {
    let name = prompt("What is your name?");
    let result = "Hello " + name;
    console.log(result);
}

greeting();

function sumNum(num1, num2) {
    console.log(num1 + num1);
}

function greetingInput(name) {
    let result = "Hellloooo " + name;
    console.log(result);

}

sumNum(2, 3);

greetingInput("Emilia");