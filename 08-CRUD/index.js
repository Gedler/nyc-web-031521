// Defer guarantees that the page has loaded before fetching

// document.addEventListener("DOMContentLoaded", function(){
    // WHAT YOU DO HERE GUARANTEES THAT THE PAGE HAS LOADED
// })
let groceryOl = document.querySelector("ol#grocery-list")
let newGroceryForm = document.querySelector("form#new-food")

fetch("http://localhost:3000/foods")
    .then(res => res.json())
    .then(function(foodsArr){
        // foodsArr -> [{}, {}]
        foodsArr.forEach(function(foodObj){
            turnFoodObjToLi(foodObj)
        })
    })

// {} -> <HTML/>
function turnFoodObjToLi(foodObj){
    // 1) Get a blank sheet of paper
    // 2) Razzmatazz
    // 3) Slap it on the DOM
    let groceryLi = document.createElement("li")
        groceryLi.classList.add("item")

    let foodNameP = document.createElement("p")
        foodNameP.innerText = `${foodObj.name} - `
        foodNameP.className = "js-food middle aligned content"

    let foodCountSpan = document.createElement("span")
        foodCountSpan.innerText = foodObj.count

    let incrementButton = document.createElement("button")
        incrementButton.innerText = "Increment"

    let deleteButton = document.createElement("button")
        deleteButton.className = "delete-button"
        deleteButton.innerText = "X"

    foodNameP.append(foodCountSpan)
    groceryLi.append(foodNameP, incrementButton, deleteButton)
   
    // Slap it on the DOM
    groceryOl.append(groceryLi)
}




newGroceryForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    // Form -> Input (Name/ID) -> Value
    let whatUserTyped = evt.target.food_name.value
    // let whatUserTyped = newGroceryForm.food_name.value

    // method is the VERB(capitalized)
    // headers is an object (content-type: application/json)
    // body is JSON.stringify({attributes of backend})
    
    fetch("http://localhost:3000/foods", {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: whatUserTyped,
            count: 0
        })
    })
        .then(res => res.json())
        .then(function(newlyCreatedFood){
            // {} -> <HTML/>
            turnFoodObjToLi(newlyCreatedFood)
        })



})
