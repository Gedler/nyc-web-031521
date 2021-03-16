// Function Definition
    // - Parameter

function takesThreeParameters(param1, param2, param3){
    console.log("First Param:", param1)
    console.log("Second Param:", param2)
    console.log("Third Param:", param3)

    return "This is the return value"
}

// Function Execution ()
    // - Argument

let returnValue = takesThreeParameters("Eric", 2, [], "Rianna", 14, {})
// console.log(returnValue)
// -> "This is the return value"


let returnValue2 = takesThreeParameters("Eric", 2, [])
// console.log(returnValue2)
// -> "This is the return value"


let returnValue3 = takesThreeParameters()
// console.log(returnValue3)
// -> "This is the return value"


// Function Definition
takesThreeParameters





// Callbacks - A function definition(funcDef) being passed into a function invocation(forEach)
    // The function invocation(forEach) decides how to invoke the function definition(funcDef)
    // Callbacks are at the mercy of the function receiving it 

let arrayOfGrades = [65, 70, 75, 80, 90, 100]

function funcDef(element, index, originalArray){
    console.log(element)
    console.log(index)
    console.log(originalArray)
}

let returnValue4 = arrayOfGrades.forEach( takesThreeParameters )
// console.log(returnValue4)

// Anonymous Callback -> No named function definition
arrayOfGrades.forEach(function(element){
    console.log("THE GRADE IS:", element)
})


setTimeout(function(){
    // setTimeout takes a callback
        // that callback doesn't take any arguments (undefined)
    console.log("After 4 seconds, this will show up")
}, 4000)






// SCOPE - Variables can go outside-in but not inside-out {}
let globalVariable = "Hello"

function iteratesThroughAnArrayAndAddsOne(arrayOfNumbers){
    let numberToAdd = 1

    arrayOfNumbers.forEach(function(num){
        // Yes access to num 
        // Yes access to numberToAdd
        // Yes access to globalVariable
        console.log(num + numberToAdd)
    })

    // No access to num
    // Yes access to numberToAdd
    // Yes access to globalVariable
}

// No access to num
// No access to numberToAdd
// Yes access to globalVariable


