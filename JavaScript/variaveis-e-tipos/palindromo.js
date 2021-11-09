//Solução 1
function palindromo(str) {
    if(!str) return;

    return str.split('').reverse().join('') === str ? "É palindromo!" : "Não é palindromo!"
}

console.log(palindromo('ana'));

//SOlução 2
function palindromo2(str) {
    if(!str) return;

    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindromo2('ana'))