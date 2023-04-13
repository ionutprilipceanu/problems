// class User {
//     email: string
//     name: string
//     constructor(email:string, name:string) {
//         this.email = email;
//         this.name = name;
//     }

//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
// }

// class Admin extends User {
//     deleteUser(user:any) {
//         users = users.filter(u => {
//             return u.email != user.email
//         })
//     }
// }

// let userOne = new User('john@mail.com', 'cevas');
// let userTwo = new User('assda@tesasd.com', 'John')
// let admin = new Admin('jn@mail.com', 'shawn')

// let users = [userOne, userTwo, admin]

// admin.deleteUser(userOne);

// console.log(users)

// admin.login()

//-------------------------- OOP - Encapsulation
// encapsulate all the fields into one class

// class User {
//   email: string;
//   name: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }

//   login() {
//     console.log(this.email, "just logged in");
//     return this;
//   }
//   logout() {
//     console.log(this.email, "just logged out");
//     return this;
//   }
// }

// let userOne = new User("john@mail.com", "cevas");
// userOne.login()

//-------------------------- OOP - Inhertance
// inherit property field of one class to other
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getName = () => {
//     return this.name;
//   };

//   getAge = () => {
//     return this.age;
//   };
// }

// class Programmer extends Person {
//   company: string;
//   experience: number;
//   constructor(company: string, experience: number, name: string, age: number) {
//     super(name, age);
//     this.company = company;
//     this.experience = experience;
//   }
//   sayHi = () => {
//     console.log(
//       `My neam is ${this.getName()}, and I'm ${this.getAge()} years old. I'm a programmer and I work for ${
//         this.company
//       } and I'm ${this.experience} years experiences.`
//     );
//   };
// }

// let programmer = new Programmer("GggClobal", 5, "John", 5);
// programmer.sayHi();

//-------------------------- OOP - Polymorphism
// having a class that contain properth that's can be extends to other classes
// class Person {
//   name: string;
//   age: number;
//   gender: string;

//   constructor(name: string, age: number, gender: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// class Photographer extends Person {
//   cameraBrand: string;
//   eventType: string;

//   constructor(
//     cameraBrand: string,
//     eventType: string,
//     name: string,
//     age: number,
//     gender: string
//   ) {
//     super(name, age, gender);
//     this.cameraBrand = cameraBrand;
//     this.eventType = eventType;
//   }
//   getPhotographer = () => {
//     return console.log(
//       `My name is ${this.name} and I'm ${this.age} years old and I'm ${this.gender}, my passion is photohraphy that's I have a ${this.cameraBrand} camera witch I do ${this.eventType} photography.`
//     );
//   };
// }

// class Teacher extends Person {
//   domain: string;
//   year: number;

//   constructor(
//     domain: string,
//     year: number,
//     name: string,
//     age: number,
//     gender: string
//   ) {
//     super(name, age, gender);
//     this.domain = domain;
//     this.year = year;
//   }

//   getTeacher = () => {
//     return console.log(
//       `My name is ${this.name} and I'm ${this.age} years old and I'm ${this.gender}, love kids that's why I'm ${this.domain} and I teach from ${this.year} years.`
//     );
//   };
// }

// let personeOne = new Photographer("Nikon", "Wedding", "Hong", 25, "male");
// personeOne.getPhotographer();

// let personeTwo = new Teacher("teacher", 3, "Jane", 35, "woman");
// personeTwo.getTeacher();

//-----------------------------------------PROMISE
let promise = new Promise((resolve, reject) => {
  let calc = 1 + 1;
  calc === 3 ? resolve("Success!") : reject("Failed!");
});

promise
  .then((message) => {
    console.log("Hurray, ", message);
  })
  .catch((message) => {
    console.log("Upss...", message);
  });
