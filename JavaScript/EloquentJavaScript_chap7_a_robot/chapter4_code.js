//Ex1 range() and sum(arr)

// Your code here.
const range = function() {
    let a = arguments[0];
     let b = arguments[1];
     let step=0;
   if (a<b) {step = 1;}
   else {step = -1;}
 
 if (arguments[2] !== undefined) {
   step = arguments[2]
 }
 console.log(`step is`, step);
 let outputArray=[];
 
 for (let i=0;i<Math.abs((a-b)/step)+1;i++){
   if (a+i*step <= b) {
   outputArray.push(a+i*step); }
 }
 
 return outputArray;
}

const sum = function(arr){
    let sumResult = 0;
    for (let i=0;i<arr.length;i++) {
        sumResult += arr[i];
    }
    return sumResult;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
//console.log(sum(range(1, 10)));
// → 55

// Ex2 Reverse

const reverseArray = function(arr) {
    let newArr = [];
    for (let elem of arr) {
        newArr.unshift(elem);
    }
    return newArr;
}
  
const reverseArrayInPlace = function(arr) {
    let newArr = [];
    let arrLen = arr.length;
    for (let i=0;i<arrLen;i++) {
        newArr.push(arr.pop());
    }
    // arr = newArr.slice(0);
    for (let i=0;i<arrLen;i++) {
        arr.unshift(newArr.pop());
    }  
    // arr = 1;
}
  
  
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


//Ex3 List
// Your code here.
const arrayToList = function(arr) {
    let newList = {};
    let currentList = newList;
    for (let i=0; i<arr.length; i++) {
        currentList["value"] = arr[i];
        currentList["rest"] = {};
        currentList = currentList.rest;
    }
    return newList;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20