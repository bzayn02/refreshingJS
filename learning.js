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

// let count = 0;

// export function increment() {
//    count++;
//    return count;
// }

// console.log('Order placed');

// setTimeout(() => {
//    console.log('Food ready! (buzzer went off!)');
// }, 5000);

// console.log('Sitting down, chatting with friends.');

// const orderFood = new Promise((resolve, reject) => {
//    const success = true;

//    setTimeout(() => {
//       if (success) {
//          resolve('Your food is ready!');
//       } else {
//          reject('Kitchen ran out of ingredients!');
//       }
//    }, 2000);
// });

// orderFood
//    .then((result) => console.log('Success: ', result))
//    .catch((error) => console.log('Failed:', error));

// console.log('Start');

// const promise = new Promise((resolve, reject) => {
//    console.log('Inside promise executor');
//    resolve('Done!');
// });

// promise.then((result) => console.log('Result: ', result));

// console.log('End');

// function delay(ms) {
//    return new Promise((resolve) =>
//       setTimeout(() => resolve('done waiting'), ms),
//    );
// }

// async function run() {
//    console.log('A');
//    const result = await delay(1000);
//    console.log('B', result);
//    console.log('C');
// }

// run();
// console.log('D');

// async function getUserData(username) {
//    try {
//       const result = await loginUser(username);

//       const profile = await fetchProfile(result.id);

//       const orders = await fetchOrders(profile.profileId);

//       return orders;
//    } catch (error) {
//       console.log(error);
//    }
// }

// // getUserData('Alice').then((orders) => console.log(orders));

// async function main() {
//    const getOrders = await getUserData('Alice');
//    console.log(getOrders);
// }

// main();

// function loginUser(username) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve({ id: 1, username }), 500);
//    });
// }

// function fetchProfile(userId) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve({ profileId: 101, bio: 'Hi there!' }, 500));
//    });
// }

// function fetchOrders(profileId) {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve(['Order #1', 'Order #2'], 500));
//    });
// }

// async function getUserData(username) {
//    try {
//       const result = await loginUser(username);
//       const profile = await fetchProfile(result.id);
//       const orders = await fetchOrders(profile.profileId);
//       return orders;
//    } catch (error) {
//       console.log(error);
//    }
// }

// // async function main() {
// //    const getOrders = await getUserData('Alice');
// //    console.log(getOrders);
// // }

// // main();

// getUserData('Alice').then((getOrders) => {
//    console.log(getOrders);
// });

// let someArray;
// someArray.map((banana) => banana * 2);

// function task(name, ms) {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          console.log(`${name} done`);
//          resolve(name);
//       }, ms);
//    });
// }

// async function sequential() {
//    console.time('sequential');
//    await task('A', 1000);
//    await task('B', 1000);
//    await task('C', 1000);
//    console.timeEnd('sequential');
// }

// async function parallel() {
//    console.time('parallel');
//    await Promise.all([task('A', 1000), task('B', 1000), task('C', 1000)]);
//    console.timeEnd('parallel');
// }

// Promise.all([task('A', 1000), Promise.reject('B failed!'), task('C', 3000)])
//    .then((results) => console.log(results))
//    .catch((error) => console.log('Caught:', error));

// parallel();

// sequential();

// async function getPostWithComments(postId) {
//    try {
//       const response1 = await fetch(
//          `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       );
//       const post = await response1.json();
//       const response2 = await fetch(
//          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
//       );
//       const comments = await response2.json();
//       console.log({ post, comments });
//    } catch (error) {
//       console.log(error);
//    }
// }

// getPostWithComments(1);

// async function getPostWithComments(postId) {
//    try {
//       const fetch1 = fetch(
//          `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       );
//       const fetch2 = fetch(
//          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
//       );
//       const [response1, response2] = await Promise.all([fetch1, fetch2]);
//       const [post, comments] = await Promise.all([
//          response1.json(),
//          response2.json(),
//       ]);
//       console.log({ post, comments });
//    } catch (error) {
//       console.log(error);
//    }
// }

// getPostWithComments(10);

// function* countUp() {
//    console.log('Starting');
//    yield 1;
//    console.log('Resumed after first yield');
//    yield 2;
//    console.log('Finished');
// }

// const gen = countUp();

// console.log('Before first next()');
// console.log(gen.next());
// console.log('Before second next()');
// console.log(gen.next());
// console.log('Before third next()');
// console.log(gen.next());

// function findMax(arr) {
//    let max = arr[0];
//    for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//          max = arr[i];
//       }
//    }
//    console.log(max);
// }

// findMax([5, 1, 2, 3, 4]);

// Time Complexity O(n) & Space Complexity O(1)

// function hasDuplicates(arr) {
//    for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//          if (i !== j && arr[i] === arr[j]) {
//             return true;
//          }
//       }
//    }
//    return false;
// }

// hasDuplicates([1, 2, 2, 3, 4]);

// function hasDuplicateFast(arr) {
//    const seen = new Set();
//    for (let i = 0; i < arr.length; i++) {
//       if (seen.has(arr[i])) {
//          return true;
//       }
//       seen.add(arr[i]);
//    }

//    return false;
// }
// hasDuplicateFast([1, 2, 2, 3, 5]);

// function twoSumSorted(arr, target) {
//    let left = 0;
//    let right = arr.length - 1;
//    while (left < right) {
//       const sum = arr[left] + arr[right];
//       if (sum === target) {
//          return [left, right];
//       } else if (sum < target) {
//          left++;
//       } else {
//          right--;
//       }
//    }
//    return null;
// }
// console.log(twoSumSorted([2, 7, 11, 15], 9));
// sortedness required
//Time Complexity O(n) & Space Complexity O(1)

//Max Sum Subarray
// function maxSumSubarray(arr, k) {
//    let windowSum = 0;
//    for (let i = 0; i < k; i++) {
//       windowSum += arr[i];
//    }

//    let maxSum = windowSum;
//    for (let i = k; i < arr.length; i++) {
//       windowSum = windowSum - arr[i - k] + arr[i];
//       maxSum = Math.max(maxSum, windowSum);
//    }
//    return maxSum;
// }
// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
// //Time Complexity O(n) & Space Complexity O(1)

// Hash Map
// const map = new Map();

// map.set('apple', 3);
// map.set('banana', 5);
// console.log(map.get('apple'));

// function twoSumUnsorted(arr, target) {
//    const seen = new Map();

//    for (let i = 0; i < arr.length; i++) {
//       const complement = target - arr[i];

//       if (seen.has(complement)) {
//          return [seen.get(complement), i];
//       }
//       seen.set(arr[i], i);
//    }
//    return null;
// }

// console.log(twoSumUnsorted([2, 7, 11, 15], 9));

// function factorial(n) {
//    if (n === 0) {
//       return 1;
//    }
//    return n * factorial(n - 1);
// }
// console.log(factorial(4));

// function factorial(n) {
//    if (n < 0) {
//       throw new Error('factorial is not defined for negative numbers.');
//    }
//    if (n === 0) {
//       return 1;
//    }
//    return n * factorial(n - 1);
// }

// console.log(factorial(-7));

// function subsets(nums) {
//    const result = [];

//    function backtrack(start, current) {
//       result.push([...current]);

//       for (let i = start; i < nums.length; i++) {
//          current.push(nums[i]);
//          backtrack(i + 1, current);
//          current.pop();
//       }
//    }
//    backtrack(0, []);
//    return result;
// }

// console.log(subsets([1, 2]));

// const stack = [];
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack);

// const queue = [];
// queue.push('A');
// queue.push('B');
// queue.push('C');
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue);

// class Node {
//    constructor(value) {
//       this.value = value;
//       this.next = null;
//    }
// }

// const first = new Node(1);
// const second = new Node(2);
// const third = new Node(3);

// const firstNode = new Node(0);

// first.next = second;
// second.next = third;
// firstNode.next = first;

// console.log(first.next.next.value);
// console.log(firstNode.value);

// class Node {
//    constructor(value) {
//       this.value = value;
//       this.next = null;
//    }
// }

// const first = new Node(1);
// const second = new Node(2);
// const third = new Node(3);
// const zero = new Node(0);

// first.next = second;
// second.next = third;
// zero.next = first;

// console.log(first.next.next.value);
// console.log(first.value);
// console.log(zero.value);

// Trees
// class TreeNode {
//    constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//    }
// }

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// function preOrder(node) {
//    if (node === null) {
//       return;
//    }
//    console.log(node.value);
//    preOrder(node.left);
//    preOrder(node.right);
// }

// preOrder(root);

// Adjacency List — most common: each node lists its direct connections
// const graph = {
//    A: ['B', 'D'],
//    B: ['A', 'C'],
//    C: ['B', 'D'],
//    D: ['A', 'C'],
// };
// function dfs(graph, start, visited = new Set()) {
//    if (visited.has(start)) {
//       return;
//    }
//    visited.add(start);
//    console.log(start);

//    for (const neighbor of graph[start]) {
//       dfs(graph, neighbor, visited);
//    }
// }

// dfs(graph, 'A');

// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].children[0]);

// console.log(document.getElementById('container'));
// console.log(document.querySelector('.title'));
// console.log(document.querySelectorAll('.title'));

// const items = document.querySelectorAll('.title');
// console.log(items.length);
// console.log(items[0]);

// items.forEach((item) => {
//    console.log(item.textContent);
// });

const itemsArray = [...document.querySelectorAll('.title')];
console.log(itemsArray);
itemsArray.map((item) => console.log(item.textContent.toUpperCase()));
