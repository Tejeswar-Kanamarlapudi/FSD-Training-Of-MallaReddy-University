function hello(){ // function declaration
    console.log('Hello World');
}

hello(); // function call

// function with parameters
function birthday_greet(name){ // name is parameter
    // alert(`Happy birthday ${name}`);
    console.log(`Happy birthday ${name}`);
}

birthday_greet('eswar'); // value is argument

// return
function sum(a,b){
    console.log('before return');
    return a+b;
    console.log('after return');
}

console.log(sum(10,20));

// function expressions
const sub = function(a,b){
    return a-b;
}

console.log(sub(50,25));

// to declare variables we are using let,const
// in older version of js we have a keyword called var
function testVar(){
    if(true){
        var x = 20;
    }
    console.log(x)
}

testVar();

function testLet(){
    if(true){
        let x = 20;
    }
    console.log(x)
}

// testLet();

// Arrow Functions
const mul = (a,b) => {
    return a*b;
}
console.log(mul(10,10));

const divis = (a,b) => a/b;
console.log(divis(100,10));
const sqare = x => x*x;
console.log(sqare(4));

// callback functions
function greetUser(name,callback){
    console.log(`Username ${name}`);
    console.log(callback(name));
}

const sayHello = name => `Hello ${name}`;
const sayBye = name => `GoodBye ${name}`;

greetUser('teja',sayHello);
greetUser('eswar',sayBye);