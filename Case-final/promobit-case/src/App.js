import React from "react";
import Router from "./routes/Router";
import styled from "styled-components";
import Header from "./components/Header/Header";


const Wrapper = styled.section`
  margin: 0;
  padding: 0;
`



function App() {
  return (
    <Wrapper>
      <Router/>
    </Wrapper>
   
  )
}

export default App;
