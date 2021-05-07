// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   const baseRetangulo = Number (prompt("Insira o valor da base"))
   const alturaRetangulo = Number (prompt("Insira o valor da altura"))
   
   console.log(baseRetangulo * alturaRetangulo)
}


//Exercício 2

function imprimeIdade() {
   const anoAtual = Number(prompt("Insira o ano atual"))
   const anoDeNascimento = Number(prompt("Insira o ano atual"))
   
   console.log(anoAtual - anoDeNascimento)
}

//Exercício 3

function calculaIMC(peso, altura) {
   return peso / (altura * altura)

}
calculaIMC(90, 1,75)
//Exercício 4

function imprimeInformacoesUsuario() {
   const nome = prompt("Insira seu nome")
   const idade = Number(prompt("Insira sua idade"))
   const email = prompt("Insira seu e-mail")
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   const corFavoritaUm = prompt("Insira sua primeira cor favorita")
   const corFavoritaDois = prompt("Insira sua segunda cor favorita")
   const corFavoritaTres = prompt("Insira sua terceira cor favorita")
   const coresFavotiras = [corFavoritaUm, corFavoritaDois, corFavoritaTres]

   console.log(coresFavotiras)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {

  return `${string.toUpperCase()}`

}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {

   return custo / valorIngresso
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  
   return string1 >= string2
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   
   return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   
   return array[array.length - 1]
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {

   array.replaceAll("array[0]","[array.length -1]"), array.replaceAll("[array.length -1]","array[0]")
   return array
}



// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
    const stringLowLetter = string1.toLowerCase("ola") 
    const stringLowLetterTwo = string2.toLowerCase("ola") 

    
    return stringLowLetter === stringLowLetterTwo
}

// Exercício 13

function checaRenovacaoRG() {
   
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
}