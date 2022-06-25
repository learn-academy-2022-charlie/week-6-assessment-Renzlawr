// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Create a test with a describe, it, and 1 expect
// Fail test

describe("aboutPerson", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(aboutPerson(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// RED
// FAIL  ./code-challenges.test.js
// aboutPerson
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
// ● aboutPerson › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
//   ReferenceError: aboutPerson is not defined

// b) Create the function that makes the test pass.

// Create a function aboutPerson that takes in an array of objects as its parameter
// Iterate through the array so we have access to each person
  // Create a local variable named upperName that takes an objects name key and splits it at spaces
    // Iterate through the split names
    // Take the first character and uppercase it, add the remaining letters of the name back to the end
  // join the names back together with spaces
// Return string interpolation of the local variable upperName with the persons occupation
// Pass Test

const aboutPerson = (arr) => {
   return arr.map(person => {
    const upperName = person.name.split(" ").map(personNames => {
      return personNames.charAt(0).toUpperCase() + personNames.slice(1)
    }).join(" ")
    return `${upperName} is ${person.occupation}.`
  })
}

// GREEN
// PASS  ./code-challenges.test.js
// aboutPerson
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Create a test with a describe, it, and 2 expect
// Fail test

describe("onlyRemainders", () => {
  it("that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// RED
// FAIL  ./code-challenges.test.js
// onlyRemainders
//   ✕ that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// ● onlyRemainders › that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//   ReferenceError: onlyRemainders is not defined

// b) Create the function that makes the test pass.

// Create a function named onlyRemainders that takes in an array of mixed values as its parameter
// iterate through the array and filter out any value that is not a number
// iterate through the array of numbers and return the number modulo 3
// pass test

const onlyRemainders1 = (mixedArr) => {
  numArr = mixedArr.filter(value => {
    return typeof value === "number"
  })
  return numArr.map(num => {
    return num % 3
  })
}

// GREEN
// PASS  ./code-challenges.test.js
// onlyRemainders
//   ✓ that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// REFACTOR 

const onlyRemainders = (mixedArr) => {
  return mixedArr.filter(value => {
    return typeof value === "number"
  }).map(num => {
    return num % 3
  })
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// Create a test with a describe, it, and 2 expect
// Fail test

describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// RED
// FAIL  ./code-challenges.test.js
// sumCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed. (10 ms)
// ● sumCubed › takes in an array of numbers and returns the sum of all the numbers cubed.
//   ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// Create a function named sumCubed that takes in an array of numbers
// Iterate through the array and cube each number
// Return the sum of all the new numbers in the array
// Pass test

const sumCubed1 = (numArr) => {
  cubed = numArr.map(num => {
    return num ** 3
  })
  return cubed.reduce((prev, curr) => {
    return prev + curr
  })
}

// GREEN
// PASS  ./code-challenges.test.js
// sumCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed.

// REFACTOR 

const sumCubed = (numArr) => {
  return numArr.map(num => {
    return num ** 3
  }).reduce((prev, curr) => {
    return prev + curr
  })
}