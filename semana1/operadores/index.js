//EXERCICIO DA TARDE

/*QUESTÃO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

a - let resultado = bool1 && bool2
    console.log("a. ", resultado) 
// resultado = false


b - resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 
// resultado = false


c - resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)
    console.log("d. ", typeof resultado)
//O resultado é True, e o typeof do resultado é string
*/

/*QUESTÃO 2 e 3

```jsx
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
```

a soma não deu certo porque todo resultado de um prompt é lido como string e não como number segue abaixo
o cod correto:

const  primeiroNumero = Number (prompt ("Digite um numero!"))
const  segundoNumero = Number (prompt ("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//ATIVIDADE PRATICA

/* QUESTÃO 1

const suaIdade = Number(prompt("Qual sua Idade?"))
const idadeAmigo = Number(prompt("Qual a idade do seu amigo?"))
console.log("Sua idade é", suaIdade, "Sua idade é maior que a do seu amigo", idadeAmigo)

console.log (suaIdade > idadeAmigo)
console.log (suaIdade - idadeAmigo)

*/


// QUESTÃO 2

/*const numeroPar = Number(prompt("Insira um número par, por gentileza"))
console.log(numeroPar % 2)*/

//O resultado sempre será zero, pois todo número par é divisivél por 2 sem sobras

//QUESTÃO 3

/*
const idadeAno = Number(prompt("Insira sua idade em anos"))
console.log(idadeAno * 12)
console.log(idadeAno * 365)
console.log(idadeAno * 8760)
*/

//QUESTÃO 4

const resultadoDivisao = 0
const resultadoDivisao2 = 0

const primeiroNumero = Number(prompt("Insira um número qualquer, por favor"))
const segundoNumero  = Number(prompt("Insira um segundo número qualquer, por favor"))
console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual que o segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)




