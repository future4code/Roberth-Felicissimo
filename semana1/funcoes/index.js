// EXERCICIO DA TARDE AULA 06

//QUESTÃO 1
//A
/*
function minhaFuncao(variavel) {

    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/

//R: O QUE SERA IMPRESSO NO CONSOLE SERÁ 10 E 50 RESPECTIVAMENTE

//B
/*
function minhaFuncao(variavel) {
    return variavel * 5
}
minhaFuncao1(variavel, 2)
minhaFuncao2(variavel, 10)
//R: O que será impresso no console.log será "variavel is not defined"
*/

// QUESTÃO 2
//A
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/
//R: A função primeiro altera todo o texto insero para caixa baixa, logo após com o ".includes" verifica se no texto inserido contém a palava "cenoura" nos retornando no console caso tenha a palavra desejada como TRUE, casao não tenha como FALSE.

//B
/*
     i.   Eu gosto de cenoura // true
     ii.  CENOURA é bom pra vista // true
     iii. Cenouras crescem na terra // true
*/

// EXERCICIO DE ESCRITA DE CÓDIGO

// QUESTÃO 1
/*
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string),
   a idade (number), a cidade (string) e uma profissão (string). 
   Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
   Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]


*/
//A

function euMesmo1() {
    console.log("Eu sou Roberth, tenho 29 anos, Moro em Teresina e sou Estudante")

}
euMesmo1()

//B


function euMesmo1 () {

    const nome = ("Roberth")
    const idade = (Number(29))
    const cidade = ("Teresina")
    const profissao = ("Estudante")


    console.log(`Eu sou ${nome} tenho, ${idade} anos, moro em ${cidade} e sou ${profissao}`)


}
euMesmo1()

