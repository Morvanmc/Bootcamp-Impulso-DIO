function debAndError(arr, number) {
    try {
        if (!arr && !number) throw new ReferenceError("Envie os parâmetros");
        if (typeof arr !== 'object' || typeof number !== 'number') throw new TypeError("Tipo de dado inválido!");
        if (arr.length != number) throw new RangeError("Array de tamanho diferente!");
        
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log("Esse erro é uma ReferenceError!");
            console.log(e.message);
        }else if(e instanceof TypeError) {
            console.log("Esse erro é uma TypeError!");
            console.log(e.message);
        }else if(e instanceof RangeError) {
            console.log("Esse erro é uma RangeError!");
            console.log(e.message);
        }
    }
}

debAndError();
debAndError([1, 2, 3], '3');
debAndError([1, 2, 3], 4);