

// animal1 
// function Animal(name, speed, limitAge, prototype) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;
//   this.prototype = prototype;

//   this.info = function () {
//     return {
//       name,
//       speed,
//       limitAge,
//       prototype,
//     };
//   };
// }

// let animal1 = new Animal("Dog", 50, 10, "nma u");
// console.log(animal1.info());





//student2

// function Student(name, course, years, university, prototype) {
//   this.name = name;
//   this.course = course;
//   this.years = years;
//   this.university = university;
//   this.prototype = prototype;

//   this.leftYears = function () {
//     return years > course ? 0 : course - years;
//   };
// }

// let student1 = new Student(
//   "Xoliyorov Asilbek",
//   4,
//   2,
//   "Example University",
//   "Computer Science"
// );
// console.log(student1.leftYears());

// person  3

// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;

//   this.getBirthYear = function () {
//     return name, currentYear - age;
//   };
// }

// let person = new Person("Xoliyorov Asilbek", 22, 2024);

// console.log(person.getBirthYear());




// employee 4
// function Employee(name, salary, workName) {
//   this.name = name;
//   this.salary = salary;
//   this.workName = workName;
// }

// Employee.prototype.increaseSalary = function (percent) {
//   if (typeof percent === "number" && percent > 0) {
//     this.salary += (this.salary * percent) / 100;
//     return this.salary;
//   } else {
//     return this.salary;
//   }
// };

// const employee = new Employee("Xoliyorov Asilbek", 50000, "Web Developer");

// console.log(employee.salary);

// employee.increaseSalary(10);
// console.log(employee.salary);