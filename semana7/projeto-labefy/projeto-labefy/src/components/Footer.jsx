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
`

export default class Footer extends React.Component{
    render() {
        return(
            <ContainerFooter>
                <ul>
                    <li>FACEBOOK</li>
                    <li>INSTAGRAM</li>
                    <li>GITHUB</li>
                </ul>

                <p>Desenvolvido por Roberth Felicíssimo. Todos os direitos reservados.</p>
            
            </ContainerFooter>
        )
    }
}