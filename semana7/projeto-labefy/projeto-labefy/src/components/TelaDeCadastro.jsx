import React from "react"
import axios from "axios"
import styled from "styled-components"

const Body = styled.div`
    background-color: #5c1f5c;
    width: 100%;
    height: 460px;
    color: black;

a{
    text-decoration: none;
    color: white;
    
}
`
const ContainerSejaPremium = styled.div`
    padding: 10px 0 0 10px;
    display: flex; 
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
#premium{
    font-size: 76px;
}
`
const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-items: center;
    margin-top: 150px;
    margin-left: 36px;
    display: inline-block;
h3{
    display: flex;
    margin-left: 50px;
}
input{
    margin: 8px 4px 0 0px;
    height: 1.5rem;
    border-radius: 10px;
    border: none;
}
button{
    background-color: black;
    cursor: pointer;
    color: white;
    height: 26px;
    width: 8rem;
    border-radius: 20px;
    border: none;
}
`

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
            this.setState({ nome: "" })
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return (
            <Body>
                <ContainerSejaPremium>
                    <h1 id="premium">Seja Premium</h1>
                    <h3>E curta a maior biblioteca musical do mundo!</h3>
                    <h4>Ouça suas musicas preferidas em qualquer lugar e quando quiser</h4>
                    <a href="#"><h1 className="planos">Nossos Planos</h1></a>
                </ContainerSejaPremium>

                <ContainerInput>
                    <h2>Crie Playlists Personaizadas</h2>
                    <h3>Experimente agora!!!</h3>
                    <input
                        placeholder="Nome da Playlist"
                        value={this.state.nome}
                        onChange={this.handleNome}
                    />
                    <button onClick={this.cadastrarPlaylist}>Criar Playlist</button>
                </ContainerInput>

            </Body>
        )
    }
}