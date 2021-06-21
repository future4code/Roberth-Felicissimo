import React from "react"
import axios from "axios"
import styled from "styled-components"

const Input = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2px;
    justify-content: center;

h1{
    margin-left: 14px;
}
input{
    text-align: center;
    height: 20px;
    margin-left: 4px;
}
`


export default class AddMusica extends React.Component {
    state = {
        nomeMusica: "",
        nomeArtista: "",
        urlMusica: ""
    }
    addMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = { "name": this.state.nomeMusica, "artist": this.state.nomeArtista, "url": this.state.urlMusica }
        axios.post(url, body, {
            headers: { Authorization: "roberth-felicissimo-molina" }
        }).then((response) => {
            console.log(response)
            alert("Música cadastrada com sucesso!")
            this.setState({ nomeMusica: "", nomeArtista: "", urlMusica: "" })
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }
    handleNomeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }

    handleNomeArtista = (event) => {
        this.setState({ nomeArtista: event.target.value })
    }

    handleUrlMusica = (event) => {
        this.setState({ urlMusica: event.target.value })
    }

    render() {
        return (
            <div>
                <Input>
                    <h1>Adicione músicas às suas playlists</h1>
                    <input
                        placeholder="Nome da Música"
                        value={this.state.nomeMusica}
                        onChange={this.handleNomeMusica}
                    />
                    <input
                        placeholder="Nome do Artista"
                        value={this.state.nomeArtista}
                        onChange={this.handleNomeArtista}
                    />
                    <input
                        placeholder="Url da Música"
                        value={this.state.urlMusica}
                        onChange={this.handleUrlMusica}
                    />
                    <button onClick={this.addMusica}>Adicionar Música</button>
                </Input>
            </div>
        )
    }
}