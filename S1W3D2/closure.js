// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const addTo = function(passed) {
  const add = function(inner){
    return passed + inner;
  }
  return add;
}

const addThree = new addTo(3)
const addTen = new addTo(10)

console.log(addTen(100))

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return () => (++count)
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count)
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const moreOrLess = counterFactory();
console.log(moreOrLess.increment());
console.log(moreOrLess.increment());
console.log(moreOrLess.increment());
console.log(moreOrLess.increment());
console.log(moreOrLess.decrement());
console.log(moreOrLess.decrement());
console.log(moreOrLess.decrement());
console.log(moreOrLess.decrement());


//counter again simplified
const myCounter = () => {
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  }
};

const myNewCounter = myCounter();

console.log(myNewCounter())
console.log(myNewCounter())
console.log(myNewCounter())
console.log(myNewCounter())