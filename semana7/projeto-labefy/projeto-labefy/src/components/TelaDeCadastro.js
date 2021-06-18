import React from "react"
import axios from "axios"


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

export default class TelaDeCadastro extends React.Component {
    state = {
        nome: ""
    }

    handleNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    cadastrarPlaylist = () => {
        const body = {
            "name": this.state.nome,
        }
        axios.post(url, body, {
            headers: {
                Authorization: "roberth-felicissimo-molina"
            }
        }).then((response) => {
            console.log(response)
            alert("Playlist cadastrada com sucesso!")
            this.setState({nome: ""})
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return (
            <div>
                <h1>Labefy</h1>
                <input
                    placeholder="Nome da Playlist"
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <button onClick={this.cadastrarPlaylist}>Criar Playlist</button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={this.props.irParaLista} >Ir para Playlists</button>

            </div>
        )
    }
}