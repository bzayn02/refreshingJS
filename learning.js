// let x=10;

// function test(){
//     console.log(x);
//     var x = 20;
// }

// test()

// -----
// greet()
// function greet() {
//     sayHi();

//     function sayHi(){
//         console.log("hi!!!")
//     }
// }

// console.log(sayBye()); // ❌ this would break

// const sayBye = function() {
//   return "bye!";
// };

// function describeVariable(flag=true){
//     console.log(data)

//     if(flag){
//         let data="loaded"

//     }
//     console.log(data)
// }

// describeVariable()

// console.log(typeof foo);
// console.log(typeof bar);
// var foo = "hello";
// let bar = "world";

// console.log(a);
// var a = 5;
// console.log(a);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// function checkAccess(isAdmin) {
//   console.log(role); // trying to access here
//   if (isAdmin=false) {
//     let role = "admin";
//   } else {
//     let role = "guest";
//   }
// }

// checkAccess()

// function outer(){
//     let count=0;

//     function inner(){
//         count=count+1;
//         console.log(count)
//     }
//     return inner;
// }

// const increment = outer();

// increment()
// increment()
// increment()

// function outer(){
//     let count=0;

//     function inner(){
//         count=count+1;
//         console.log(count)
//     }
//     return inner;
// }

// const increment1 = outer();
// const increment2 = outer();

// increment1()
// increment1()
// increment1()
// increment2()
// increment2()

// function createBankAccount(initialBalance) {
//    let balance = initialBalance;

//    function deposit(amount) {
//       if (amount <= 0) {
//          return 'Negative and 0 amount cannot be deposited.';
//       } else {
//          balance = balance + amount;
//          return balance;
//       }
//    }

//    function withdraw(amount) {
//       if (amount <= 0) {
//          return "Amount can't be 0 or negative.";
//       } else if (amount > balance) {
//          return "Can't process withdraw as withdraw amt is bigger than balance";
//       } else {
//          balance = balance - amount;

//          return balance;
//       }
//    }
//    return {
//       deposit,
//       withdraw,
//    };
// }

// const account = createBankAccount(5000);
// console.log(account.deposit(0));
// console.log(account.withdraw(30));

// function createCounters() {
//    let counters = [];
//    for (var i = 0; i < 3; i++) {
//       counters.push(function () {
//          console.log(i);
//       });
//    }
//    return counters;
// }

// const myCounters = createCounters();
// myCounters[0]();
// myCounters[1]();
// myCounters[2]();

// const user = {
//    name: 'Alice',
//    greet: function () {
//       console.log("Hi, I'm " + this.name);
//    },
// };

// user.greet();

// const team = {
//    name: 'Team Alpha',
//    players: ['Sam, John'],
//    showTeam: function () {
//       console.log('Team: ' + this.name);

//       function listPlayers() {
//          console.log('Players of ' + this.name);
//       }
//       listPlayers();
//    },
// };

// team.showTeam();

// const team = {
//    name: 'Team Alpha',
//    showTeam: function () {
//       console.log('Team: ' + this.name);
//       const listPlayers = () => {
//          console.log('Players of ' + this.name);
//       };
//       listPlayers();
//    },
// };

// team.showTeam();

// const user = {
//    name: 'Alice',
//    greet: () => {
//       console.log("Hi, I'm " + this.name);
//    },
// };
// user.greet();

// class Timer {
//    constructor() {
//       this.seconds = 0;
//    }

//    start() {
//       setInterval(() => {
//          this.seconds++;
//          console.log(this.seconds);
//       }, 1000);
//    }
// }

// const timer = {
//    seconds: 0,
//    start: function () {
//       setInterval(() => {
//          this.seconds++;
//          console.log(this.seconds);
//       }, 1000);
//    },
// };

// timer.start();

// const timer = {
//    seconds: 0,
//    start: function () {
//       setInterval(function () {
//          this.seconds++;
//          console.log(this.seconds);
//       }, 1000);
//    },
// };

// timer.start();

// const user = {
//    name: 'Alice',
//    greet: () => {
//       console.log("Hi, I'm " + this.name);
//    },
// };

// user.greet();

// call
// function introduce(greeting) {
//    console.log(greeting + ", I'm " + this.name);
// }

// const person1 = {
//    name: 'Hari',
// };

// const person2 = {
//    name: 'Shyam',
// };

// introduce.call(person1, 'Hello');
// introduce.call(person2, 'Hey');

// // apply
// function introduce(greeting, punctuation) {
//    console.log(greeting + ", I'm " + this.name + punctuation);
// }

// const person1 = { name: 'Sam' };

// introduce.apply(person1, ['Hello', '!']);

// function introduce(greeting) {
//    console.log(greeting + ", I'm " + this.name);
// }
// const person1 = { name: 'Sam' };

// const boundIntroduce = introduce.bind(person1);

// boundIntroduce('Hello');
// boundIntroduce('Hi there!');

// const animal = {
//    eats: true,
// };

// const rabbit = Object.create(animal);

// rabbit.eats = false;

// console.log(rabbit.eats);
// console.log(animal.eats);

// const vehiclePrototype = {
//    describe: function () {
//       console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
//    },
// };

// function createVehicle(type, wheels) {
//    const vehicle = Object.create(vehiclePrototype);
//    vehicle.type = type;
//    vehicle.wheels = wheels;
//    return vehicle;
// }

// const car = createVehicle('car', 4);
// const motorcycle = createVehicle('motorcycle', 2);

// car.describe = function () {
//    console.log('Custom!');
// };

// car.describe();
// motorcycle.describe();

// console.log(y);
// let y = 'Hello';

// const obj = { val: 5, show: () => console.log(this.val) };
// obj.show();

// const a = { greet: 'hi' };
// const b = Object.create(a);
// b.greet = 'hello';
// console.log(a.greet);

// class Vehicle {
//    constructor(type, wheels) {
//       this.type = type;
//       this.wheels = wheels;
//    }
//    describe() {
//       console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
//    }
// }

// const car = new Vehicle('car', 4);
// const motorcycle = new Vehicle('motorcycle', 2);

// car.describe();
// motorcycle.describe();

// console.log(car.describe === motorcycle.describe);

// class Vehicle {
//    constructor(type, wheels) {
//       this.type = type;
//       this.wheels = wheels;
//    }

//    describe() {
//       console.log(`This is a ${this.type} with ${this.wheels} wheels`);
//    }
// }

// class Car extends Vehicle {
//    constructor(brand) {
//       super('car', 4);
//       this.brand = brand;
//    }
//    honk() {
//       console.log(`${this.brand} says honk honk!`);
//    }
// }

// const myCar = new Car('Toyota');
// // myCar.describe();
// const detachedDescribe = myCar.describe;
// myCar.honk();
// detachedDescribe();

// TypeError: Cannot read property 'type' of undefined
//     at describe (/Users/bzay_n02/Desktop/SelfLearning Folder/Self Learning/learning.js:341:37)
//     at Object.<anonymous> (/Users/bzay_n02/Desktop/SelfLearning Folder/Self Learning/learning.js:359:1)

// class OperatingSystem {
//    constructor(OS, RAM) {
//       this.OS = OS;
//       this.RAM = RAM;
//       console.log('New OS created!');
//    }
//    describe() {
//       console.log(`This is a ${this.OS} processor with ${this.RAM} gb of RAM.`);
//    }
// }

// class Mac extends OperatingSystem {
//    constructor(brand) {
//       super('M5', 24);
//       this.brand = brand;
//    }
//    yell() {
//       console.log(`This is a ${this.brand} which is super fast.`);
//    }
// }

// const myMac = new Mac('Macbook');

// myMac.describe();
// myMac.yell();

// console.log('Start');

// try {
//    console.log('Inside try');
//    null.someProperty;
//    console.log('This line after crash.');
// } catch (error) {
//    console.log('Caught an error!');
// }
// console.log('End');

// function riskyDivide(a, b) {
//    try {
//       if (b === 0) {
//          throw new Error('Cannot divide by 0!');
//       }
//       console.log(a / b);
//    } catch (error) {
//       console.log('Error caught: ' + error.message);
//    } finally {
//       console.log('Division attempt finished');
//    }
// }

// riskyDivide(10, 2);
// riskyDivide(10, 0);

// function test() {
//    try {
//       return 'from try';
//    } finally {
//       console.log('finally ran');
//       return 'from finally';
//    }
// }

// console.log(test());

// let user = { name: 'Alice' };
// let user2 = user;

// user = null;

// console.log(user2.name);

//MUTATING (changes the original
// push, pop, shift, unshift, splice, sort, reverse)

// NON MUTAING (creates a new one
// map, filter, slice, concat, spreat(...), Object.assign)

// const original = [1, 2, 3];
// const copy = original;

// copy.push(4);

// console.log(original);
// console.log(copy);

// const original = [1, 2, 3];
// const copy = [...original];

// copy.push(4);

// console.log(original);
// console.log(copy);
// const user = { name: 'Alice', age: 25, city: 'NYC' };
// const updates = { age: 26 };

// function updateUserProfile(user, updates) {
//    const updatedUser = { ...user, ...updates };
//    return updatedUser;
// }

// const updated = updateUserProfile(user, updates);

// console.log(user);
// console.log(updated);
