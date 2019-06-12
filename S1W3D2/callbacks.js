// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', "yo-yo"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr)
}

function firstItem(item) {
  return item[0]
}
console.log(getLength(items, firstItem))




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr)
}

function lastItem(item) {
  return item[item.length-1]
}
console.log(last(items, lastItem))



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y)
}

function add(x, y){
  return x + y
}

function remainder(x, y) {
  return x % y
}
console.log(sumNums(1, 2, add))




function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y)
}

const multiply = function(x, y) {
  return x * y
}
console.log(multiply(10, 10, multiply))





function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

contains('Bats', items, function(flag) {
  console.log(flag); // should be false
});

contains('Notebook', items, function(flag) {
  console.log(flag); // should be true
});




// const present = function(item, list) {
//   for(let i = 0; i < list.length; i++){
//     if(list[i] === item){
//       return true
//     } else {
//       return false
//     }
//   }
// }
// console.log(present('yo', items))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
}

console.log(removeDuplicates())


function removeDuplicates(arr, cb) {
  const seen = {};// a map of the keys. This will hold the values as a bool if 'seen' in the given array.
  for (let i = 0; i < arr.length; i++) { // loop over array list and assign the object a 'key' of the given item w/ a value of 'true'
    seen[arr[i]] = true; // this will set the key/value pair of each item found in the array to `true`. 
    // It will not duplicate the item because Objects can only have one key of of each 'like' so. `yo-yo` will only be added 1 time etc. 
  }
  cb(Object.keys(seen));// Object.keys generates a list as an array of each key in the object passed to it.
  // Could do the same of each value with `Object.values` :) 
}

removeDuplicates(items, function(dupeFreeArray) { 
  console.log(dupeFreeArray);
});

//Basic callBack Tutorials

const elements = [1, 2, 3, 4];


const newForEach = (list, callBack) => {
for(let i =  0; i < list.length; i++){
  console.log(list[i], i)
  }
}