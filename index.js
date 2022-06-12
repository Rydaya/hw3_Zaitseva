//Hw1

let num = +prompt('Enter number');

function getSumOfNum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i ** 2;
    }
    return sum;
}

console.log(getSumOfNum(num));

//Hw2

let arr = [3, 5, 12, 9, 23, 93, 17];
let arrFilter = arr.filter(num => num > 2 && num < 20);
let arrSum = arrFilter.reduce((sum, currentNum) => sum + currentNum);
console.log(arrSum);


//Hw3

let arr2 = [[1, 6, 3, '6'], [10, 15, 13, '10']];

function getArrSumOfNum(arr) {
    let sum = 0;
    for (let subArr of arr) {
        for (let elem of subArr) {
            if (elem % 2 === 0 && typeof elem === 'number') {
                sum += elem;
            }
        }
    }
    return sum;
}

console.log(getArrSumOfNum(arr2));

//Hw4

let key = prompt('Enter key');
let value = prompt('Enter value');

let obj = {};
function addProperty(key, value, obj) {
    for (let ownKey in obj) {
        if (ownKey === key) {
            return 'This property already exists.';
        }
    }
    return obj[key] = value;
}

console.log(addProperty(key, value, obj));
console.log(obj);

//Hw5

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log('FizBuz');
    } else if (i % 2 === 0) {
        console.log('Fiz');
    } else {
        console.log('Buz');
    }
}

//Hw6

function getFactorial(num) {
    if (num <= 0) {
        return 1;
    } else {
        return num * getFactorial(num - 1);
    }
}

console.log(getFactorial(7));

//Hw7

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

function getReamPapers(sheetsInReamPaper, consumptionPerWeek, weeksAmount) {
    let totalSheets = consumptionPerWeek * weeksAmount;
    if (Number.isInteger(totalSheets / sheetsInReamPaper)) {
        return totalSheets / sheetsInReamPaper;
    }
    let result = (totalSheets / sheetsInReamPaper) + 1;
    return result.toFixed(0);
}

console.log(getReamPapers(sheetsInReamPaper, consumptionPerWeek, weeksAmount));