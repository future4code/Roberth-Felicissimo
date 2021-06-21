import axios from "axios"
import React from "react"
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display:flex;
    justify-content: space-between;
`

export default class TelaListaUsuario extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "roberth-felicissimo-molina"
            }
        })
            .then((res) => {
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    deletaUsuario = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {headers:{
            Authorization: "roberth-felicissimo-molina"
        }
    })
    .then((res) =>{
       alert("Usuário(a) deletado(a) com sucesso!")
       this.pegarUsuarios()
    })
    .catch((err) =>{
        alert("Ocorreu um erro! Tente novamente.")
    })
    }

    render() {

        const listaUsuarios = this.state.playlists.map((playlist) => {
            return <CardUsuario key={user.id}>
                {playlist.name}
                <button onClick={() => this.deletaUsuario(playlist.id)}>X</button>
                </CardUsuario>
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}