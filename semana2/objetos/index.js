//EXERCICIO DA TARDE 10/05 AULA 07 OBJETOS

//QUESTÃO 1
//a)
/*
```
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
```
*/
/*
O que será impresso no console será: 
Matheus Nachtergaele 
Virginia Cavendish 
{canal: "Globo", horario: "14h"}
*/

//QUESTÃO 2
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/
//a)
/*
O que será impresso no console será:
cachorro nome: Juca idade: 3 raca: SRD
gato nome: Juba idade: 3 raca: SRD
tartaruga nome: Jubo idade: 3 raca: SRD
*/

//b)
//A sintaxe "..." serve para copiar os dados de um Objeto para um novo Objeto, podendo assim alterar os dados sem precisar alterar os dados do objeto original.


//QUESTÃO 3
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
*/

//a) O que será impresso no console será:
// False
// Undefined


//b)o motivo do valor ter sido impresso como undefined foi devido ao fato de não nenhum dado no objeto com esse valor definido

//-------EXERCICIO DE ESCRITA DE CODIGO-------------------

//QUESTÃO 1
//a)
function euMesmo (pessoa, apelidos) {
    return pessoa

}

const pessoa = {
    nome: "Roberth",
    apelidos:["Bob", "Cabeção", "felicissimo"],
}

euMesmo ()

console.log("Eu sou ", pessoa.nome, "mas pode me chamar de: ", pessoa.apelidos)

//b)

const novosApelidos = {...pessoa, apelidos: ["Willa", "robertWilla", "papaizinho Lindo"]}

euMesmo(novosApelidos)
    
    console.log("Eu sou ", novosApelidos.nome, "mas pode me chamar de: ", novosApelidos.apelidos)

//QUESTÃO 2

//a)



