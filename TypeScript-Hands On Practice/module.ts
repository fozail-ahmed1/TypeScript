import {Car} from './cars'
// class Car {
//     brand:string;
//     model:string;
//     color:string;
//     year:string;

//     constructor(brand:string,model:string,color:string,year:string){
//         this.brand=brand;
//         this.model=model;
//         this.color=color;
//         this.year=year;
//     }

//     years(){
//         console.log(this.year);
//     }
// }

let car= new Car('Cadillac','2X','red','2001');
console.log(car.brand+''+car.year);



//Inheritance

class Person{
    save(){
        console.log('Saved!');
    }
}

class Employee extends Person{
    salary(){
        console.log('Salary recieved')
    }
}

let person = new Person;
person.save;

let employee = new Employee;
employee.salary;
employee.save;