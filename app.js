// These functions as for your name and greet you

function askName() {
    var name = prompt(`Enter your name:`)
    return name
}

function greeting(a) {
    alert(`Welcome, ${a}!`)
}

// ^

// Generates random number

function ranNum() {
    var rN = Math.floor(Math.random() * 10) + 1
    return rN
}

// ^

// User function

function user(a) {
    do {


        var userPrompt = prompt(`Would you like to roll again?`)

    } while (userPrompt == "1")
}

// ^

// Computer function



// ^

// Comparing function



// ^

// Game function

function program() {

    greeting(askName())
    user(ranNum())

    var pa = prompt("play again? type `1`")

    if (pa == "1") {
        program()
    } else {
        alert(`Thank you for playing!`)
        finalScore()
    }

}

// ^