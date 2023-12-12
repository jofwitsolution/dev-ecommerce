class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = CustomAPIError;

// Object Oriented Programming
// class Human {
//   person = "kunmi";

//   constructor(person) {
//     this.person = person;
//   }

//   getPerson() {
//     console.log(this.person);
//   }
// }

// class Animal extends Human {
//   anim = "";
//   constructor(anim) {
//     super(person);
//     this.anim = anim;
//   }

//   getAnimal() {
//     return this.anim;
//   }
// }

// // instantiate
// const person1 = new Human("Shamsudeen");
// const person2 = new Human("Femi");
// const animal1 = new Animal("Lion");

// console.log(animal1.anim);
