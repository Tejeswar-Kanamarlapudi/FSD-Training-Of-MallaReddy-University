// // creating an array
// // let arr = new Array();
// let arr= [];

let fruits = ['apple','orange','pears']
fruits[3] = 'banana';
alert(fruits);

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits.length);
// console.log(fruits.at(-1));
// console.log(fruits.at(-2));
// console.log(fruits.at(1));

// // push,pop,shift,unshift
// fruits.push('Mango');
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.unshift('Mango');
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// // looping in array
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// console.log('-------------------------');
// for (let number of numbers) {
//     console.log(number)
// }

// console.log('-------------------------');
// for (let num in numbers) {
//     console.log(numbers[num]);
// }

// products = ['Smartphone','Telivision','Laptop'];
// products.forEach((prod,indx) => {
//     console.log(`Index ${indx}: ${prod}`);
// });

// find
let numbers2 = [10,20,30,40,50,60];
const val = numbers2.find(num => num<40);
console.log(val);

// filter
const val2 = numbers2.filter(num => num>40);
console.log(val2);

// map
const square_numbers = numbers2.map(num=> num*num);
console.log(square_numbers);

// reduce
const sumOfNumbers = numbers2.reduce((sum,num)=>sum+num,0);
console.log(sumOfNumbers);
const mulOfNumbers = numbers2.reduce((mul,num)=>mul*num,1);
console.log(mulOfNumbers);

// Spread operator [...]
// copy array
// const arr1 = [1,2,3,4];
// const arr2 = [...arr1];
// console.log(arr2);

// //adding values
// const arr3 = [100,200]
// const arr4 = [...arr3,300,400]
// console.log(arr4);

// // merging arrays
// const arr5 = [...arr1,...arr3];
// console.log(arr5);

