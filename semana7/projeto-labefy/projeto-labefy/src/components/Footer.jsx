import React from "react"
import styled from "styled-components"

const ContainerFooter = styled.div`
    background-color: black;
    height: 100px;
    color: white;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
ul{
    margin-top: 40px;
   
}
li{
    display: inline;
    margin: 10px;
}
a{
    text-decoration: none;
    cursor: pointer;
    color: white;
}
`

export default class Footer extends React.Component{
    render() {
        return(
            <ContainerFooter>
                <ul>
                    <a href="https://www.facebook.com/"><li>FACEBOOK</li></a>
                    <a href="https://www.instagram.com/ateliegeekstore/"><li>INSTAGRAM</li></a>
                    <a href="https://github.com/future4code/Roberth-Felicissimo"><li>GITHUB</li></a>
                </ul>

                <p>Desenvolvido por Roberth Felicíssimo. Todos os direitos reservados.</p>
            
            </ContainerFooter>
        )
    }
}