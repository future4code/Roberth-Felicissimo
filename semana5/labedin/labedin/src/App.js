import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQG1PcZF6Ds21A/profile-displayphoto-shrink_800_800/0/1622570632739?e=1628121600&v=beta&t=iQ0tmeVRWiWgxVvZTa9paIaPUr96VberCQFtFS1DbrA" 
          nome="Roberth Felicíssimo" 
          descricao="Oi, eu sou o Roberth Felicíssimo. Administrador formado pela Faculdade Adelmar Rosado, e atualmente estudante da área de Desenvolvimento na escola digital Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <h2>Contato</h2>
          <CardPequeno
            nome="Email"
            descricao="Bob.Moura@bob.com.br"
          />
            

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Access Sollutions"
          descricao="Atuei como Gerente de vendas durante doze meses, resposável por gerrir todo o processo relacionado ao setor, desde o atendimento ao cliente até o fechamento do contrato." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Atêlie Geek Store" 
          descricao="No Atêlie, sou responsável por toda a gestão do negócio, por ser dono e único funcionário." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
