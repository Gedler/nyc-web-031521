const url = "https://dog.ceo/api/breeds/image/random"

// fetch("URL", {})
  // fetch always returns a promise (because of asynchronicity) that has the response in it
  // When the Promise resolves (when the courier returns), execute the callback

  // The return value of the callback in .then becomes the thing inside the IOU
  // The .then afterwards receives it as the first argument of the callback

  // 94% - After a fetch, write a .then to return the res.json() and then call a second .then()

// let promiseIOU = fetch("https://dog.ceo/api/breeds/image/random")
// let secondIOU = promiseIOU.then(function callback1(response){
//   return response.json()
// })
// secondIOU.then(function callback2(dogResponse){
//   console.log(dogResponse)
// })









// STABLE ELEMENTS UP AT THE TOP
let dogButton = document.querySelector("button#hello-button")
let dogsUl = document.querySelector("ul#dogs")


// ELEMENT.addEventListener("EVENT TYPE", function(evt){
//   MAYBE GRAB SOME VARIABLES

//   fetch("URL", {})
//     .then(res => res.json())
//     .then(function(response){
//       DO SOMETHING WITH RESPONSE TO THE DOM
//     })
// })


dogButton.addEventListener("click", function(evt){

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(function(dogResponse){
      // Do the DOM Manipulation here based on the response
      // <li><img src="" alt="" /><li>

      let blankLi = document.createElement("li")
      let blankImg = document.createElement("img")

        blankImg.src = dogResponse.message
        blankImg.alt = "dog"

      blankLi.append(blankImg)
      dogsUl.append(blankLi)

    })

})


