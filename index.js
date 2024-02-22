/*
//1 ?????????????????????????

function camelize(str) {
    let arr = str.split('-');
    arr.map((item, index) => item[0].toUpperCase() + item.slice(1));
    console.log(arr.join(''));
}
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

//2 
function filterRange(arr, a, b){
    let array = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=a && arr[i]<=b){
             array.push(arr[i]);
        } 
    }
    return array;
}
let arr = [2, 1, 8, 3];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); 

//3
function filterRangeInPlace(arr, a, b){
    for(let i=0;i<arr.length;i++){
        if(a<=arr[i] && arr[i]<=b){
            continue;
            
        } else {
            arr.splice([i], 1);
        }
    }
}
let arr = [5, 3, 8, 1, 2, 3];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]


//4 
let arr = [5, 2, 1, -10, 8];
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  arr.sort(compareNumeric);
  alert(arr);  



//5?????????????????
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    arr.toSorted( (a, b) => a.localeCompare(b));
}

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

//7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item=>item.name);

alert( names ); // Вася, Петя, Маша

//10
let ages = 0;
let count = 0;
function getAverageAge(users){
    users.forEach(item => {
        ages= ages + Number(item.age);
        count++;
    });
    return ages/count;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


function unique(arr) {
    let array = [];
    for(let str of arr){
        if(!array.includes(str)){
            array.push(str);
        }
    }
    return array;
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O
  */


//1 
const colors = ['red', 'green', 'blue'];
 console.log(colors.length);


//2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length-1]);



//3
const numbers = [5, 43, 63, 23, 90, 10, 43, 3, 5];
const count = numbers.length;
for(let i = 0;i<count;i++){
    //numbers.pop();
    numbers.shift();
}
console.log(numbers);



//4 
const students = ['Polina', 'Dasha', 'Masha'];

students.splice(students.length-1, 1, 'Borya');
students.splice(students[0], 1, 'Andrey');
console.log(students);


//5
const cats = ['Gachito', 'Tom', 'Batman'];
for(let i=0;i<cats.length;i++){
    console.log(cats[i]);
}
for(let cat of cats){
    console.log(cat);
}



//6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
let arr = evenNumbers.concat(oddNumbers);

console.log(arr);
console.log(arr.indexOf(8));



//7
const binary = [0, 0, 0, 0]
console.log(binary.join('1'));


//8
function checkPal(number){
    let str = String(number);
    let array = str.split('');
    array.reverse();
    let newStr = array.join('');
    if(str === newStr){
        console.log('ПРАВДА');
    } else console.log('LIE');
}
checkPal(32323);



//9
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
    ]
//let avg = 0;
//let count = 0;
//for(let arr of matrix){
 //   for(let number of arr){
 //       avg = avg +number;
   //     count++;
//}
//}
//avg = avg/count;
//console.log(avg);
let result = 0;
let length = 0;
for(let arr of matrix){
    result = result + arr.reduce((sum, item) => sum + item, 0);
    length =  length +arr.length;
}
console.log(result/length);


//10
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let positive = [];
let notPos = [];
for(let number of mixedNumbers){
    if(number>=0){
        positive.push(number);
    } else {
        notPos.push(number);
    }
}

//let positive = mixedNumbers.filter(item => item>=0);
//let notPos = mixedNumbers.filter(item => item<0);
console.log(positive);
console.log(notPos);



//11
function cube(array) {
    let arr = [];
    if(array.length<5){
        alert('МАЛО СИМВОЛОВ');
    } else {
        for (let number of array){
            number = number**3;
            arr.push(number);
        }
    }
    console.log(array);
    console.log(arr);
}
cube([2, 4, 5, 6, 2, 1, 0, -2]);
