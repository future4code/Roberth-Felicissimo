import React from "react"


export default class Body extends React.Component{
    rende() {
        return(
            <div>
                <input
                    placeholder="Nome da Playlist"
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <button onClick={this.cadastrarPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}