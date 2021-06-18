import React from "react"
import TelaDeCadastro from "./components/TelaDeCadastro"
import TelaDePlaylists from "./components/TelaDePlaylists"


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
        {this.escolheTela()}
      </div>
    )
  }

}



