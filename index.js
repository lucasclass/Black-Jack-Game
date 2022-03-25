/* let age = 22
console.log(age)

if (age >= 21){
  console.log("Pode entrar pae")
} else {
  console.log("Vaza rapa!!!")
}

let age2 = 100

if (age2 < 100) {
    console.log("Não legítimo")
} else if (age2 === 100) {
    console.log("Aqui o seu cartão de aniversário do Rei!")
} else {
    console.log("Não legítimo, você já tem um cartão")
} */

let firstCard = 10
let secondCard = 11
let soma = firstCard + secondCard + 9
let hasBlackJack = false
let isAlive = true

console.log(soma)

if (soma < 21) {
  console.log("Quer uma nova quarta? 🤔 ")
} else if (soma === 21) {
  console.log("Tu é brabo, ganhou! 😎 ")
  hasBlackJack = true
} else {
  console.log("Perdeu padrin 😢 ")
  isAlive = false
}

console.log(isAlive)