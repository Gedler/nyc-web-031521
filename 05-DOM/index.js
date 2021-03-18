console.log("Javascript is cool!")
// MAKE SURE TO DEFER YOUR SCRIPT TAGS IN THE HTML

// READ -
// querySelector(SELECTOR) -> HTML Element
// querySelectorAll(SELECTOR) -> NodeList (array-like)

let anotherWayToGrabUl = document.querySelector(".blobs")



// CREATE
    // 1) Get a blank sheet of paper (document.createElement)
let blankLi = document.createElement("li")

    // 2) Razzmatazz 

// blankLi.setAttribute("key", "value")
blankLi.id = "taco"
blankLi.className = "grandma"
blankLi.innerText = "🌮"

// 3) Slap it on the DOM 

let myEmojisUl = document.querySelector("#blobs")
    myEmojisUl.append(blankLi) // -> Make blankLi the last child of myEmojisUl
    // prepend -> Makes it the first child
    // insertAdjacentHTML -> 
    


// UPDATE

    // 1) Find the element on the DOM
let h1Object = document.querySelector("h1")

    // 2) Razzmatazz
h1Object.innerText = "Here is a nice list, granny!"
    h1Object.className = "edited"
    // h1Object.classList.add("className1")





// DELETE

    // 1) Find the element you want to delete
let firstLi = anotherWayToGrabUl.querySelector(".bad")

    // 2) Remove it
firstLi.remove()




let allTheRestOfTheBadEmojis = anotherWayToGrabUl.querySelectorAll(".bad")
// allTheRestOfTheBadEmojis -> [<li.bad>, <li.bad>, <li.bad>]

allTheRestOfTheBadEmojis.forEach(function(badLi){
    console.log(badLi)
    badLi.remove()
})