// Event Listening - 
    // 1) Find the appropriate HTML Element
    // 2) Add an event listener to the Element found in step 1
    // 3) Write out the logic in the callback of addEventListener
    
// Your stable elements (elements on the index.html) can go outside
let tacoButton = document.querySelector("#taco")
let emojisUl = document.querySelector("ul#blobs")


tacoButton.addEventListener("click", function(evt){
    // CREATE A EMOJI TO THE LIST
 
    // 1) Get a blank sheet of paper
    // 2) Razzmatazz
    // 3) Find the appropriate place to add to the DOM
    
    let tacoLi = document.createElement("li")
    tacoLi.innerText = "🌮"
    tacoLi.classList.add("taco")
    emojisUl.append(tacoLi)

    tacoLi.addEventListener("click", function(evt){
        // evt.target.remove()
        tacoLi.remove()
    })

})





let tacoForm = document.querySelector("form#emoji-form")

tacoForm.addEventListener("submit", function(evt){
    // Stops the default behavior of an event
        // Form wants to refresh the page
    evt.preventDefault()

    // evt.target -> Which HTML Element is the recipient of the event
    // If the evt.target is a form, you can chain input's name or ID after it to get the Input

    let theForm = evt.target
    let theInput = theForm.emoji //(Because of the input's name)
    let theThingThatTheUserTyped = theInput.value

    // let theThingThatTheUserTyped = evt.target.emoji.value


    let blankLi = document.createElement("li")
    blankLi.innerText = theThingThatTheUserTyped
    emojisUl.append(blankLi)


    blankLi.addEventListener("click", function(){
        blankLi.remove()
    })

    
})