// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//  the nested function can access the variable internal because of it's lexical scope. nestedFunction is nested inside of myFunction, therefore has access to the variables inside of myFunction along with functions on the global scale, though myFunction does not have access to any variables inside of nestedFunction if it did have any

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(int){
  let total = 0;
  for(let i = 0; i <= int; i++){
    total = i + total;
  }
  return total;
}

console.log(sumation(4));