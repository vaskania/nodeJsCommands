const counter = (arr) => {
  return `There are ${arr.length} elements in this array`;
};

// ADD more function to module

const adder = (a, b) => {
  return `The sum of 2 numbers is ${a + b}`;
};

const pi = 3.142;

//module.exports = counter;  exports only one function

/* module.exports.counter = counter;
   module.exports.adder = adder;
   module.exports.pi = pi; 
   
or we can add 
              module.exports.counter
              module.exports.adder
              module.exports.pi
   when declaring variable

or we cand export declared variables with

*/

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
