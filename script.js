let output = document.getElementById("output")
let input = document.getElementById("input")
let submit = document.getElementById("submit")


submit.addEventListener("click", () => {
    let inputValue = input.value;
    let userText = document.createElement("p")
    userText.innerHTML = "User: " + inputValue

    
    output.appendChild(userText)

    if (inputValue == "Rickroll Me") {
        console.log(inputValue)

        let botText = document.createElement("p")
        botText.innerHTML = "Bot: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        output.appendChild(botText)
    } else if (inputValue == "potato") {
        console.log(inputValue)
        let botText = document.createElement("p")
        let potatoImg = document.createElement("img")
        potatoImg.src = "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg"
        botText.innerHTML = "Bot: "
        output.appendChild(botText)
        output.appendChild(potatoImg)
     //else if () {

    // } else {

    }






    input.value = null
})

