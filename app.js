/* Global Object */

/* setTimeout(() => {
  console.log('3 seconds have passed');
}, 3000);
 */

/* let time = 0;

const timer = setInterval(() => {
  time += 2;
  console.log(`${time} seconds have passed`);
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000); */

// console.log(__dirname);
// console.log(__filename);

/* Function Expression */

//  Normal function statement

/* function sayHi() {
  console.log('Hi');
}

sayHi(); */

//  Function  expression

/* const sayBye = function () {
    console.log('Bye');
  }; */

//  Function in function

/* const callFunction = (fun) => {
  fun();
};

const sayBye = function () {
  console.log('Bye');
};

callFunction(sayBye); */

/* Modules and Require- require() funciton from another file */

/* const counterFromOutside = require('./stuff');

console.log(counterFromOutside(['JS', 'NodeJS', 'React JS'])); */

/* Module Patterns--- import functions from module (counter, adder, pi) */

/* const stuff = require('./stuff');

console.log(stuff.counter(['JS', 'NodeJS', 'React JS']));
console.log(stuff.adder(2, 3));
console.log(stuff.adder(stuff.pi, 5)); */
