class Employee{
    constructor(name,id,work_days){
        this.name = name;
        this.id = id;
        this.work_days = work_days;
    }

    display_info(){
    console.log(`A Employee:${this.name} working with id:${this.id}`);
    }

    salary(){
    console.log(`Salary of an employee is ${this.work_days*600}`); 
    }
}

const emp1 = new Employee('kesav',18,15);
emp1.display_info();
emp1.salary();
const emp2 = new Employee('ravi',21,9);
emp2.display_info();
emp2.salary();