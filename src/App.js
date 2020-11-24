import React, { Component } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';



class App extends Component {  
  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url2 = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-24&sortBy=publishedAt&apiKey=b637103430f94e60951453ff1b21c905`;    
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=b637103430f94e60951453ff1b21c905`;


    const respuesta = await fetch(url);
    const noticiass = await respuesta.json();
    this.setState({
      noticias : noticiass.articles
    });
    
  }

  render() {
    return (
      <div>
          <Header titulo = "📰 Noticias con React" />
          <Formulario consultarNoticias={this.consultarNoticias}/>
          <ListaNoticias noticias={this.state.noticias} /> 
      </div> 
    );
  }
}

export default App;
