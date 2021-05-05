//ATIVIDADE DA TARDE//

//ATIVIDADE INTERPRETAÇÃO DE CÓDIGO

//QUESTÃO 1

/*
a- let array
   console.log('a. ', array) //o console irá ler como erro, pois não há array na variavel let


b- array = null
   console.log('b. ', array) // O console irá ler como null, pois o valor atribuido à array é null


c- array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
   console.log('c. ', array.length) // O valor de length será 11


d- let i = 0
   console.log('d. ', array[i]) // array = 3


e- array[i+1] = 19
   console.log('e. ', array) // array ficará [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

f- const valor = array[i+6]
   console.log('f. ', valor) //O valor será 9

*/


/*
//QUESTÃO 2

```
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

```

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

// O valor impresso será: "SUBI NUM ÔNIBUS EM MIRROCOS"

*/

//ATIVIDADE ESCRITA DE CÓDIGO

//QUESTÃO 1

/*
const nomeUsuario = prompt("Digite seu nome")
const emailUsuario = prompt("Digite seu email")
console.log("O E-mail ", emailUsuario, "foi cadastrado com sucesso. Seja bem-vindo(a) ", nomeUsuario)
*/

//QUESTÃO 2
/*
const comidasPreferidas = ["Pizza", "Lasanha", "Macarronada", "Hambúrguer", "Pizza denovo"]
console.log(` Essas são as minhas comidas preferidas:
${comidasPreferidas[0]} 
${comidasPreferidas[1]} 
${comidasPreferidas[2]} 
${comidasPreferidas[3]} 
${comidasPreferidas[4]} `

)


const comidaPreferidaUsuario = prompt("Qual sua comida favorita?")


console.log(
    
    `Essas são as minhas comidas preferidas agora:
${comidasPreferidas[0]} 
${comidasPreferidas[1]} 
${comidasPreferidas[2]} 
${comidasPreferidas[3]} 
${comidasPreferidas[4]}`

)
*/

//QUESTÃO 3


const listaDeTarefa =[]    
const tarefasUsuarioUm = prompt("Insira três atividade que você precisa realizar no dia de hoje, tarefa 1:")
const tarefasUsuarioDois = prompt("Insira três atividade que você precisa realizar no dia de hoje, tarefa 2:")
const tarefasUsuarioTres = prompt("Insira três atividade que você precisa realizar no dia de hoje, tarefa 3:")

listaDeTarefa.push(tarefasUsuarioUm, tarefasUsuarioDois, tarefasUsuarioTres)
console.log(listaDeTarefa)

const tarefaRealizada = prompt("Insira uma tarefa já realizada")
listaDeTarefa.splice(tarefasUsuarioDois)

console.log(listaDeTarefa)









