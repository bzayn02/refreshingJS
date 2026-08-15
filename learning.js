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
