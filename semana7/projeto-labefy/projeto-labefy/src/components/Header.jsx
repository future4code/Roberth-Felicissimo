import React from "react"
import styled from "styled-components"
import Footer from "./Footer"
const ContainerHeader = styled.div`
    background-color: #1a001a ;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

ul{
    display: flex;
    padding: 10px;

}
li{
    padding: 10px;
    margin: 18px;
    list-style: none;
}
button{
    color:white;
    background-color: none; 
}
a:hover{
    cursor: pointer;
    background-color:#913091;
    
}

h1{
    margin: 24px;
    cursor: pointer;
}
`


export default class Header extends React.Component{
    render() {
        return(
            <ContainerHeader>
                
                <h1 onClick={this.props.irParaCadastro}>Labefy</h1>
                <ul>
                    
                    <a onClick={this.props.irParaLista}><li>Playlists</li></a>
                    <a onClick={<Footer/>}><li>Sobre Nós</li></a>
                    <a onClick={"#"}><li>Seja Premium</li></a>
                </ul>
            </ContainerHeader>
        )
    }
}