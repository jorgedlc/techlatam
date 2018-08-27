import React, { Component } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import './css/materialize.min.css'
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      datos:null
    }

    this.pedirDatos=this.pedirDatos.bind(this);
    

    this.pedirDatos();
  }

  pedirDatos(){

    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then((response)=>{
       return response.json();
    }).then((json)=>{      
      this.setState({
        datos:json.feed.entry,
        datosCopia:json.feed.entry
      })
    });

  }

  renderCard=(x)=>{
  
    return <Card id={x.id.label} obj={x} />
  }

  onSearch=()=>{

  
    let busqueda=this.search.value;

    let otro=this.state.datosCopia.filter((obj)=>{          
      return obj.title.label.toLowerCase().indexOf(busqueda.toLocaleLowerCase())!==-1;
      
    });

    this.setState({
      datos:otro
    })

    

  }

  render() {
    return (
      <div className="App">    

        <Nav/>
        
        <div class="container">
          <div class="row">
              <div class="col s6">
                <input type="text" class="search" placeholder="Buscar cancion" onChange={this.onSearch} ref={input => {this.search=input;}}/>
              </div>
              <div class="col s12">
                <div class="results">
                  <p>{(this.state.datos!==null)?"Results "+this.state.datos.length:""}</p>
                </div>
              </div>
              
          </div>
        </div>

        <div class="music-cards container">                          
          {(this.state.datos!==null)?this.state.datos.slice(0,6).map(this.renderCard):'...Loading'}
        </div>
      </div>
    );
  }
}

export default App;
