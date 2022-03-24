let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard


if (sum < 21) {
    console.log("Quer uma nova carta?")
} else if (sum === 21) {
    console.log("weeeeah porra, ganhou!")
} else {
    console.log("perdeu padrin :(")
}

let age = 22

let welcomeEl = document.getElementById("welcome-el")

let nome = "Lucas Class"
let saudação = "Bem vindo "

welcomeEl.innerText = saudação + nome