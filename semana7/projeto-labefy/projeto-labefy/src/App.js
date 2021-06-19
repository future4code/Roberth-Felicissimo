import React from "react"
import TelaDeCadastro from "./components/TelaDeCadastro.jsx"
import TelaDePlaylists from "./components/TelaDePlaylists.jsx"
import Header from "./components/Header.jsx"
import {createGlobalStyle} from 'styled-components'
import Footer from "./components/Footer.jsx"


const EstilosGlobais = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
  

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }


  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaDeCadastro irParaLista={this.irParaLista} />
      case "playlist":
        return <TelaDePlaylists irParaCadastro={this.irParaCadastro} />    
      default:
        return <div>Página Não Encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "playlist"})
  }
  

  



  render() {
    return (
      <div className="App">
        <EstilosGlobais/>
        <Header irParaLista={this.irParaLista} irParaCadastro={this.irParaCadastro}/>
        {this.escolheTela()}

        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    )
  }

}



