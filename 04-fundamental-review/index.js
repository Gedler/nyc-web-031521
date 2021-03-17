// ***** Question 1 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 1", "color: red") 
let counter = 1
counter = 2
counter += 5

// console.log(counter) 
// // => 2
// console.log("%c----------", "color: red") 


// ***** Question 2 *****
// *** Uncomment the lines below to test
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running
// console.log("%cQuestion 2", "color: red") 

const name = "Raffy"

// console.log(name)
// => "Raffy"
// name = "Not Raffy" 
// => TypeError
// console.log("%c----------", "color: red") 



// ***** Question 3 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 3", "color: red") 

function drinkWater(thirstLevel){
  console.log("Man I sure am thirsty")
  let returnValue = thirstLevel - 1
  console.log("Ahh that hits the spot")
  return returnValue
}

// Defining Arrow Functions
let drinkWater2 = (thirstLevel) => {
  console.log("Man I sure am thirsty")
  let returnValue = thirstLevel - 1
  console.log("Ahh that hits the spot")
  return returnValue
}


// Whenever you console.log the execution of a function, you're logging to the console the return value


// let whateverTheFunctionReturns = drinkWater(12)
// console.log(whateverTheFunctionReturns)

// // => "Man I sure am thirsty"
// // => "Ahh that hits the spot"
// // => 11
// console.log("%c----------", "color: red") 



// ***** Question 4 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 4", "color: red") 

let sameSameButDifferent = (first, second) => {
  if (first === second){
    // They have to be of the same data type
    return "same same"
  } else if (first == second){
    // They can be different data types, but we'll still try to check for equality
      // Coercion 
    return "same same (but different)"
  } else {
    return "different"
  }
}

// console.log(sameSameButDifferent(5, 5)) 
// // => "same same"

// console.log(sameSameButDifferent(123, "123")) 
// // => "same same (but different)"

// console.log(sameSameButDifferent(5, 7)) 
// // => "different"

// console.log(sameSameButDifferent(123, "122")) 
// // => "different"
// console.log("%c----------", "color: red") 



// ***** Question 5 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 5", "color: red")
const student1 = { name: "Duane", grade: 88 }

// Team Arrow
let updateGrade = (student, newGrade) => {
  // student["grade"] = newGrade
  student.grade = newGrade
}

// Team Baseless 
function updateGrade2(student, newGrade){
  // student["grade"] = newGrade
  student.grade = newGrade
}


updateGrade(student1, 92)
// console.log(student1)
// // => { name: "Duane", grade: 92 }
// console.log("%c----------", "color: red")



// ***** Question 6 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 6", "color: red")

const users = [ 
  { 
    name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
    name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
  }
]


function printNameAndPhonesSolution(users){

  // Whenever you use forEach, singular element should be the first parameter
    // This function takes a callback -> function(){}
    // This function takes a callback -> () => {}

  users.forEach(function(user){
    console.log(user.name)
    console.log(user.phones.cell)
    console.log(user.phones.office)
  })
  
}





function printNameAndPhones(users){
  console.log("BASELESS");

  users.forEach(function(user){
    console.log(user.name)
    console.log(user.phones.cell)
    console.log(user.phones.office)
  })

  console.log("ARROW");

  users.forEach((user) => {
    console.log(user.name)
    console.log(user.phones.cell)
    console.log(user.phones.office)
  })

}



let printNameAndPhones2 = (users) => {
  console.log("BASELESS");

  users.forEach(function(user){
    console.log(user.name)
    console.log(user.phones.cell)
    console.log(user.phones.office)
  })

  console.log("ARROW");

  users.forEach((user) => {
    console.log(user.name)
    console.log(user.phones.cell)
    console.log(user.phones.office)
  })
} 



// printNameAndPhones(users)
// // => "Duane"
// => "Cell: 555-123-4567"
// => "Office: 555-456-7890"
// => "Liza"
// => "Cell: 555-234-5678"
// => "Office: 555-567-1234"
// console.log("%c----------", "color: red") 


// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****

// *** Uncomment the lines below to test
// console.log("%cCallbacks - Question 1", "color: red")

function triple(num){
  return num * 3
}

// console.log(myMap([1,2,3,4,5], triple)) 

// console.log(myMap([1,2,3,4,5], function(num){
//   return num * 5
// })) 

// // => [3,6,9,12,15]

// console.log(myMap([2,4,6,8], triple))   
// // => [6,12,18,24]
// console.log("%c----------", "color: red") 




// ***** Callbacks - Question 2 *****
// *** Uncomment the lines below to test
// console.log("%cCallbacks - Question 2", "color: red")

function greet(name){
  return `Hi, ${name}!`
}

// console.log(myMap(["Raffy", "Chase"], greet)) 

// console.log(myMap(["Raffy", "Chase"], function(name){
//   return `Bye, ${name}!`
// })) 

// // => ["Hi, Raffy!", "Hi, Chase!"]
// console.log("%c----------", "color: red") 



// ***** Scope & Closures *****

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const line = []

// ***** Scope & Closures - Question 1 *****


// *** Uncomment the lines below to test
// console.log("%cScope & Closures - Question 1", "color: red")

let number = 0

function takeATicketNumber(lineArr){
  number += 1
  lineArr.push(number)
  return `Welcome, you are ticket number ${number}.`
}


// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 1`

// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 2`

// console.log(nowServing(line))
// // => `Currently serving 1.`

// console.log(nowServing(line))
// // => `Currently serving 2.`

// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 3`

// console.log("%c----------", "color: red") 

// ***** Scope & Closures - Question 2 *****
// *** Uncomment the lines below to test
// console.log("%cScope & Closures - Question 2", "color: red")


function ticketNumberGeneratorFunc(){
  let insideNum = 0 

  return function returnFunc(line){
    // insideNum is available here because scope
    insideNum += 1
    line.push(insideNum)
    return `Welcome, you are ticket number ${insideNum}.`
  }
    // insideNum is available here because scope
}



 // insideNum is NOT available here because scope

const newLine = []
const takeATicketNumberFunc = ticketNumberGeneratorFunc()
console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// // => `Currently serving 1.`

console.log(nowServing(newLine))
// // => `Currently serving 2.`

console.log(takeATicketNumberFunc(newLine))
// // => `Welcome. You are ticket number 3`

// console.log("%c----------", "color: red") 