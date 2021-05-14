//----------EXERCICIO LEITURA DE CÓDIGO ------------

//-------- QUESTÃO 1 ------


//a) 
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
    //  console.log(item, index, array)
  })
  */
  //R: O console imprimirá 3 objetos contendo nome e apelido de cada usuário.
//b) 
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  //R: Será impresso no console uma nova array contendo apenas os nomes dos usuários.
  */
 //c)
/*
 const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  */
 //R: Será impresso uma nova array contendo nome e apelidos que forem diferentes de "Chijo"

 //----------EXERCICIO ESCRITA DE CÓDIGO ------------
// ------------- QUESTÃO 1 --------------

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a)
//  const nomePets = pets.map((item) =>{
//      return item.nome
//  })
//  console.log(nomePets)

// //b)
 
//  const cachorrosSalsicha = pets.filter((item, index) =>{
//      return item.raca === "Salsicha"
//  })
// console.log(cachorrosSalsicha)

// //c)
// const cachorroPoodle = pets.filter((item, index) =>{
//     return item.raca === "Poodle"
// })
// const listaDesconto = cachorroPoodle.map((item, index) =>{
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })
// console.log(listaDesconto)

// ------------- QUESTÃO 2 --------------

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)

//  const nomeProdutos = produtos.map((item, index, array) =>{
//      return item.nome
//  })
//  console.log(nomeProdutos)

//  //b)
//  const descontoProduto = produtos.map((item, index, array) =>{

//     let valorDesconto = item.preco * 0.05
//     item.preco = item.preco - valorDesconto

//     return {nome: item.nome, preco: item.preco.toFixed(2)}
//  })
// console.log(descontoProduto)

//c)
// const bebidas = produtos.filter((item, categoria, array) =>{
//     return item.categoria === "Bebidas"
// })

// console.log(bebidas)

//d)
// const produtoYpe = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// })
// console.log(produtoYpe)

//e)
// const produtoYpe = produtos.filter((item, preco)=>{
//     return item.nome.includes("Ypê")
// })
// console.log(produtoYpe)

// const compreProdutoYpe = produtoYpe.map((item, preco) =>{
//     return `Compre ${item.nome} por ${item.preco}`
// })
// console.log(compreProdutoYpe)