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

function user() {

    var u = 0
    

    alert(`Your turn`)

    do {
        var a = ranNum()

        u = u + a

        var userPrompt = prompt(`Would you like to roll? type "1" to stop`)

        alert(`You rolled ${a}, new score: ${u}`)


    } while ((userPrompt != "1") && (u < 20))

    return u
}

// ^

// Computer function

function com() {

    
    var c = 0

    alert(`Computer turn`)

    do {
        var b = ranNum()

        c = c + b

        alert(`Computer rolled ${b}, computer score: ${c}`)

    } while (c < 16)

    return c
}


// ^

// Comparing function

function compare(a, b) {
    if (a <= 20, b <= 20) {
        
    if (b > a) {
        cs = cs + 1
        alert(`The computer beat you.. computer current score: ${cs} your current score: ${us}`)
    } else if (a > b) {
        us = us + 1
        alert(`You won! computer current score: ${cs} your current score: ${us}`)
    } else if (b == a) {
        cs = cs + 1
        us = us + 1
        alert(`draw!!!?!?!? computer current score: ${cs} your current score: ${us} `)
    } else {
        alert('error')
    }
    
    
    
    } else if (b > 20) {
        cs = cs + 1
        alert(`Computer got over 20... Game over. computer current score: ${cs} your current score: ${us}`)
    } else if (a > 20) {
        us = us + 1
        alert(`You got over 20... Game over. computer current score: ${cs} your current score: ${us}`)
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

    var x = user()
    var y = com()
    compare(x, y)

    var pa = prompt("play again? type `1` to play again!")

    if (pa == "1") {
        program()
    } else {
        alert(`Thank you for playing!`)
        finalScore(us, cs)
    }

}

// ^

var cs = 0
var us = 0

greeting(askName())

program()