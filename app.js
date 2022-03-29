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

    var u = 0

    alert(`Your turn`)

    do {

        u = u + a

        alert(`You rolled ${a}, new score: ${u}`)

        var userPrompt = prompt(`Would you like to roll again? type "1" to stop`)

    } while (userPrompt != "1")

    return u
}

// ^

// Computer function

function com(b) {

    var c = 0

    alert(`Computer turn`)

    do {

        c = c + b

        alert(`Computer rolled ${b}, computer score: ${c}`)

    } while (c < 16)

    return c
}


// ^

// Comparing function

    function compare(a, b) {
        if (a <= 20) {

        } else if (b <= 20) {

        } else if (a > 20) {
            alert(`Computer got over 20 with ${a}... Game over`)
        } else if (b > 20) {
            alert(`You got over 20 with ${a}... Game over`)
        } else {
            alert('error')
        }
    }

// ^

// Game function

function finalScore(a, b) {
    alert(`Your score: ${a} Computer score: ${b}`)
}


function program() {

    greeting(askName())
    com(ranNum())
    user(ranNum())

    var pa = prompt("play again? type `1`")

    if (pa == "1") {
        program()
    } else {
        alert(`Thank you for playing!`)
        finalScore(user(), com())
    }

}

// ^

program()