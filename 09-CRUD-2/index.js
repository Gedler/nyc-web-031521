// Defer guarantees that the page has loaded before fetching

// document.addEventListener("DOMContentLoaded", function(){
    // WHAT YOU DO HERE GUARANTEES THAT THE PAGE HAS LOADED
// })

// Unstable elements (created in JS, usually after a fetch)
    // They'll need to get their evt listeners in the same scope they are created in

// Stable elements (Found in the index.html) can exist at the top
let groceryOl = document.querySelector("ol#grocery-list")
let newGroceryForm = document.querySelector("form#new-food")






fetch("http://localhost:3000/foods")
    .then(res => res.json())
    .then(function(foodsArr){
        // foodsArr -> [{}, {}]
        foodsArr.forEach(function(foodObjParameter){
            turnFoodObjToLi(foodObjParameter)
        })
    })






// {id: 1, name: "Chicken", count: 4} -> <HTML evtListener/>

function turnFoodObjToLi(foodObj){
    // 1) Get a blank sheet of paper
    // 2) Razzmatazz
    // 3) Slap it on the DOM
    // 4) Find the elements that you just created
    // 5) Add event listeners
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
        
    deleteButton.addEventListener("click", function(evt){

        fetch(`http://localhost:3000/foods/${foodObj.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(function(emptyObj){
                groceryLi.remove()
            })
    })

    // Update in 3 places
        // Backend (using Fetch)
        // DOM (Using DOM Manipulation)
        // Object (Using POJO && JS logic)
    incrementButton.addEventListener("click", function(){
        
        // Update Backend
        fetch(`http://localhost:3000/foods/${foodObj.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                count: foodObj.count + 1
            }) 
        })
            .then(res => res.json())
            .then(function(updatedFoodObj){
                // Update Obj
                foodObj = updatedFoodObj
                // Update DOM
                foodCountSpan.innerText = updatedFood.count
            })
    })

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
