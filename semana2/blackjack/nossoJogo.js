/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const newGame = () => { 
   if(confirm("Quer iniciar uma nova rodada?")){
   console.log("Bem Vindo ao jogo de BlackJack!")

   } else{
      console.log("O jogo Acabou!")
   }

}
newGame()

const game = () =>{
   let player1Card1 = comprarCarta()
   let player1Card2 = comprarCarta()

   let player2Card1 = comprarCarta()
   let player2Card2 = comprarCarta()

   const somaplayer1 = player1Card1.valor + player1Card2.valor
   const somaPlayer2 = player2Card1.valor + player2Card2.valor
   
      console.log(`Usuário - carta: ${player1Card1.texto}, ${player1Card2.texto} - Pontuação: ${somaplayer1}`)
      console.log(`Computador - carta: ${player2Card1.texto}, ${player2Card2.texto} - Pontuação: ${somaPlayer2}`)

    if(somaplayer1 > somaPlayer2){
      console.log("O usuário ganhou!")
   } if(somaPlayer2 > somaplayer1){
      console.log("O computador ganhou!")
   } else{
      console.log("Empate!")
   }
}
game()