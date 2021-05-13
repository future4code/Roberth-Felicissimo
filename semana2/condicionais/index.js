//------------EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO-----------------

//-------- QUESTÃO 1 --------

//a)
// ```const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }```

//R: O código acima pede para que o usuário digite um número, e caso ele o resto de sua divisão seja igual a 0 a resposta do console ser que ele "Passou no teste", caso contrario será de "Não passou no teste"


//b) //R: Ele imprime "passou no teste" para números divisíveis por 2
//c) //R: Ele imprime "não passou no teste" para números que divididos deixam resto de divisão

//--------- QUESTÃO 2 -------

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
//a) 

//R: O codigo acima serve para retornar no nosso console o valor da fruta que o cliente escolher

//b) 

//R: O preço da fruta  Maçã  é  R$  2.25

//c)

//R: O preço da fruta  Pêra  é  R$  5

//--------- QUESTÃO 3 -------
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

*/
//a) 

//R: a primeira está solicitando que o usuario digite um numero

//b)

//R: caso o usuario insira o valor 10 a mensagem impressa será: "Esse número passou no teste"
//   caso a resposta seja -10 aparecerá uma mensagem de erro pois não existe uma outra condição a ser analisada

//c) a mensagem de erro que aparecerá no console sera de Undefined pois o console.log está fora do escopo, não podendo assim acessar as informações do mesmo.

////------------EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO-----------------



//--------- QUESTÃO 1 -------

// const idadeUsuario = Number(prompt("Insira sua idade"))

// if(idadeUsuario > 18){
//     console.log("Você pode dirigir")

// } else{
//     console.log("Você não pode dirigir")
// }


// //--------- QUESTÃO 2 -------
// const turnoDeEstudo = prompt("Insira em qual turno você estuda: (M) para matutino, (V) para Vespertino, (N) para noite.")

// if(turnoDeEstudo === "M"){
//     console.log("Bom dia!")
// } else if(turnoDeEstudo === "V"){
//     console.log("Boa Tarde!")
// }else{
//     console.log("Boa Noite!")
// }

// //--------- QUESTÃO 3 -------
// const turnoDeEstudo = prompt("Insira em qual turno você estuda: (M) para matutino, (V) para Vespertino, (N) para noite.")

// switch(turnoDeEstudo){

//     case "M": 
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break;    
//     default: 
//     console.log("Por favor, insira um das opções acima.")
// }




// //--------- QUESTÃO 4 -------

// const generoFilme = prompt("Qual o gênero do filme?")
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

// if(generoFilme === "fantasia" && valorIngresso <= 15){
//     console.log("Bom Filme")
// }else{
//     console.log("Escolha outro filme :(")
// }


// ------------------------- DESAFIO 1 --------------------

const generoFilme = prompt("Qual o gênero do filme?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
const lanchinho = prompt("Qual o lanche que você irá pedir?")

if(generoFilme === "fantasia" && valorIngresso <= 15){

    console.log(`Bom Filme e aproveite o/a ${lanchinho}`)
}else{
    console.log("Escolha outro filme :(")
}

// ------------------------- DESAFIO 2 --------------------
const valorASerPago = () => { 

const name = prompt("Insira seu nome")
const gameType = prompt (`Que tipo de jogo voce deseja assistir Sr(a)${nome}: (IN) para internacional, (DO) para doméstico`)
const gameFase = prompt("Qual etapa do jogo que você deseja assistir: (SF) para semi-final, (DT) para disputa de terceiro lugar e (FI) para final")
const categoryTicket = Number(prompt("Qual a categoria que voce deseja entre 1 e 4, sendo 1 o mais caro e 4 o mais barato"))
const numberOfTickets = Number("Quantos ingressos voce deseja?")
const dollar = 4.10
let finalValue = 0

switch(gameFase){
    case "SF":

        switch (categoryTicket) {
            case 1:
                finalValue = 1320
                break
            case 2:
                finalValue = 880
                break
            case 3:
                finalValue = 550
                break
            case 4:
                finalValue = 220
                break
            default: "insira um dos valores solicitados"
        }
switch(gameFase){
    case "DT":

        switch (categoryTicket) {


    }
        
        
}
