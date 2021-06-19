import React from "react"
import axios from "axios"
import styled from "styled-components"


const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display:flex;
    justify-content: space-between;
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

export default class TelaDePlaylists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.catchPlaylists()
    }

    catchPlaylists = () => {

        axios.get(url,
            {
                headers: {
                    Authorization: "roberth-felicissimo-molina"
                }
            }).then((res) => {
                this.setState({ playlists: res.data.result.list })
            }).catch((err) => {
                alert("Error: " + err.message)
            })
    }

    deletaPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "roberth-felicissimo-molina"
            }
        })
            .then((id) => {
                
                alert("Playlist deletada com sucesso!")
                this.catchPlaylists()
            })
            .catch((err) => {
                alert("Ocorreu um erro! Tente novamente.")
            })
    }

    render() {

        const AllPlaylists = this.state.playlists.map((playlist) => {
            return <CardUsuario key={playlist.id}>
                {playlist.name}
                <button onClick={() => this.deletaPlaylist(playlist.id)}>X</button>
            </CardUsuario>
        })

        return (
            <div>
                <h1>Playlists</h1>
                {AllPlaylists}

                <button onClick={this.props.irParaCadastro}>home</button>

            </div>
        )
    }
}