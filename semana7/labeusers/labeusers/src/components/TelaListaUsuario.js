import React from "react"

export default class TelaListaUsuario extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
                <h2>Lista de Usuários</h2>
            </div>
        )
    }
}