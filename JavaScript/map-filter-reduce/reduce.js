const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somaNum(arr) {
    return arr.reduce((item, nextItem) => {
        console.log(`prev: ${item} /n current: ${nextItem}`);
        return item + nextItem;
    });
}

console.log(somaNum(array));

const lista = [
    {
        name: 'sabao',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 10
    },
    {
        name: 'toalha',
        preco: 30,
    }
];

const saldo = 100;

function compras(saldo, lista) {
    return lista.reduce((prev, current) => {
        return prev - current.preco;
    }, saldo);
};

console.log(compras(saldo, lista));