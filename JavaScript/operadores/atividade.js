function comparison(num1, num2) {
    let soma = num1 + num2;

    console.log(`Os números ${num1} e ${num2} são ${num1 === num2 ? 'iguais' : 'diferentes'}. 
    Sua soma é ${soma}, que é ${soma > 10 ? 'maior' : 'menor'} que 10 e ${soma > 20 ? 'maior' : 'menor'} que 20.`)
}

comparison(11, 10)