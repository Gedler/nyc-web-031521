// let and const are block-scoped 
    // They exist in the {} that they are defined in
    // *** You can reassign let ***
    // You cannot resassign const

// var is function-scoped
    // They exist in the function that they are defined in 



// PRIMITIVES

// Strings
    // Text - "" '' ``

let chickenVariable = "chicken sandwiches"
const anotherVariable = 'cauliflower and spaghetti'

// String Interpolation - `` + ${}
let sentence = `Eric likes "${chickenVariable}" and ${anotherVariable}`



// Numbers 
let five = 5
let sixpointtwo = 6.2

console.log(five + sixpointtwo)


// Booleans - true or false
    // && (AND -> all must be true)
    // || (OR -> at least one is true)


// Undefined -> More natural part of JS 
undefined

// Null -> Intentional with programmers
null 






// NON-PRIMITIVES

    // POJO - Plain old JavaScript Object {}
let cohort031521 = {
    name: "NYC Web 031521 SE",
    population: 23,
    date: 31521,
    teachers: [{name: "Rianna", height: 72}, {name: "Eric", height: 48}],
    school: {
        name: "Flatiron School",
        teachers: 23
    }
}


// READ values from an object
// Dot notation - More used 
console.log("The name is: ", cohort031521.name)
console.log("The population is: ", cohort031521.population)
// Bracket notation - More flexible than dot notation
console.log("The date is: ", cohort031521["date"])

// cohort031521.school.teachers





// Arrays - Indexing begins at 0
let arrayOfGrades = [65, 72, 78, 91]
// 0 -> 65
// 1 -> 72
// ...

// READ values from an array
let failingGrade = arrayOfGrades[0]

let rianna = cohort031521.teachers[0]
console.log(rianna)
console.log(rianna.name)

let mystery = cohort031521.teachers[1].height
console.log(mystery)





// FUNCTION - Processes 

function nameOfFunction(){

}


// Definition - function 
    // Does not care about number of arguments

// Functions implicitly return undefined
function addOneToNumber(number){
    let answer = number + 1
    console.log("Hello")
    console.log(number)
    console.log(answer)
    return `${answer} is what will get returned`
}

// Definition
addOneToNumber





// Invocation/Execution/Call - ()

// Too many arguments - It just grabs the first n that it cares about
addOneToNumber(67, 92, 107, "Hello")

// Too few arguments - it passes in `undefined`
addOneToNumber()

// Just perfect
addOneToNumber(45)

