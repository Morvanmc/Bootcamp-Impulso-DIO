function filterPair(arr) {
    return arr.filter((item) => {
        return item % 2 === 0;
    });
}

const array = [1, 2, 3, 4, 5, 6];

console.log(filterPair(array));