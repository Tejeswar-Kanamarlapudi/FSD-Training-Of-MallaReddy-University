function Person(name,age){
    this.name = name; //Person.name = name;
    this.age = age; // Person.age = age;
    this.say = function(){
        console.log(`Hi this is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
}

const person1 = new Person('ravi',100);
const person2 = new Person('kesav',26);
person1.say();
person2.say();