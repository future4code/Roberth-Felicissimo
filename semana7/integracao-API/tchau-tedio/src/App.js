import React from "react";
import axios from "axios"
import styled from "styled-components"

const Container = styled.div`
  display:flex;
  flex-direction: column;
  text-align:flex-start;
  border: 1px solid black;
  background-color: #f0f8ff;
  width: 400px;
  justify-self: center;

  h2{
    display:flex;
    align-self: center;
  }
  button{
    display:flex;
    width: 90px;
    justify-content: center;
    align-self: center;
    
  }
  h3{
    display: flex;
    align-self: center;
  }
`




export default class App extends React.Component {
  state = {
    activity: {}
  }

  getActivity = () => {
    const url = "http://www.boredapi.com/api/activity/"
    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container>
        <h2>Pandemia ligou o tédio por ai?</h2>
        <button onClick={this.getActivity}>Clique Aqui!</button>
        <hr/>
        <h3>Atividade</h3>
        <p>Nome: {this.state.activity.activity}</p>
        <p>Tipo: {this.state.activity.type}</p>
        <p>Participantes:{this.state.activity.participants} </p>
        <p>Preço: ${this.state.activity.price}</p>
      </Container>
    );
  }
}

