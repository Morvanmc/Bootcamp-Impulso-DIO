/*Escopo Global*/
var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João') {
    var firstName = 'Pedro';
    /*Escopo Bloco */
    let lastName = 'Silva';
}

console.log(firstName, lastName);

const FIRST_NAME = 'Morvan';

console.log(FIRST_NAME);

/* String */

let name = "Morvan";
let last_name = "Marques";

let fullName = name.concat(last_name);

console.log(typeof fullName);

/* Numbers */

let num1 = 5;
let num2 = 3;

let by = num1 / num2;

console.log(Math.ceil(by));
console.log(Math.floor(by));

/* Boolean */

let verifica = 3 === 0;

console.log(!verifica);