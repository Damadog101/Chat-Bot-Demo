let output = document.getElementById("output")
let input = document.getElementById("input")
let submit = document.getElementById("submit")


submit.addEventListener("click", () => {
    let inputValue = input.value;
    let userText = document.createElement("p")
    userText.innerHTML = "User: " + inputValue

    
    output.appendChild(userText)
    let botText = document.createElement("p")

    if (inputValue == "Rickroll Me") {
        console.log(inputValue)

        botText.innerHTML = "Bot: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        output.appendChild(botText)
    } else if (inputValue == "potato") {
        console.log(inputValue)
        let potatoImg = document.createElement("img")
        potatoImg.src = "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg"
        botText.innerHTML = "Bot: "
        output.appendChild(botText)
        output.appendChild(potatoImg)
    } else if (inputValue == "death") {
        botText.innerHTML = "Bot: Yours will be soon"
        output.appendChild(botText)
    } else if (inputValue == "you bad") {
botText.innerHTML = "Bot: So are you!"
output.appendChild(botText)
} else {
        let num = Math.ceil(Math.random() * 12)

        switch(num) {
            case 1:
                botText.innerHTML = "Bot: Hello! I am dumb."
                output.appendChild(botText)
                break
            case 2:
                botText.innerHTML = "Bot: 2 + 2 is fish"
                output.appendChild(botText)
                break
            case 3:
                botText.innerHTML = "Bot: You're bad"
                output.appendChild(botText)
                break
            case 4:
                botText.innerHTML = "Bot: no"
                output.appendChild(botText)
                break
            case 5:
                botText.innerHTML = "Bot: yes"
                output.appendChild(botText)
                break
            case 6:
                botText.innerHTML = "Bot: merry christmss"
                output.appendChild(botText)
                break
            case 7:
                botText.innerHTML = "Bot: aw hail naw"
                output.appendChild(botText)
                break
            case 8:
                botText.innerHTML = "Bot: Maybe"
                output.appendChild(botText)
                break
            case 9:
                botText.innerHTML = "Bot: tomato"
                output.appendChild(botText)
                break

            case 10: 
                botText.innerHTML = "Bot: ask again later"
                break

            case 11: 
                botText.innerHTML = "Bot: we'll see"
                break

            case 12: 
                botText.innerHTML = "Bot: god please no"
                break        }


    }






    input.value = null
})

