// object literal
// let user = new Object();
// let user1 = {}

// properties
const car = {
    car_name : "Maruti",
    brand : "Swift"
}

console.log(car.car_name);
console.log(car.brand);


// methods
const car1 = {
    start : function() {
        console.log("Car is Started");
    },
    break : function(){
        console.log("Car is Stopped");
    }
}
car1.start();
car1.break();

// new Object()
const car2 = new Object();
car2.car_name = "Honda";
car2.start = function(){
    console.log('Honda car started');
}

console.log(car2.car_name);
car2.start();
console.log(typeof car2);

// this
const student = {
    student_name : "ravi",
    s_id : "420",
    display_info : function(){
        // console.log(`${student.student_name} id is ${student.s_id}`);
        console.log(`${this.student_name} id is ${this.s_id}`);

    }
}
student.display_info();

console.log(this); 
// we aren't using in obj,that's why its showing window

// Object destructing

const person = {name1:"kesav",age:25}
// let name1 = person.name1;
// let age = person.age;
let {name1,age} = person;
console.log(name1);
console.log(age);

// CONSTRUCTOR FUNCTIONS

