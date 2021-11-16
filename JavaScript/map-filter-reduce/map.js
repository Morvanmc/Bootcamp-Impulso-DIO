const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map((item) => {
       return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log(mapComThis(nums, apple));

const array = [1, 2, 3, 4];

function mapSemThis(arr) {
    return arr.map((item) => {
        return item *2;
    });
}

console.log(mapSemThis(array))