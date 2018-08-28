import React, { Component } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import Detail from './components/Detail';
import logo from './img/techlatam.jpg';
import './css/materialize.min.css';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      datos:null,
      showDetail:false,
      obj:null,
      currentPage:1,
      pageNumbers:[],
      startIndex:0,
      endIndex:6
    }

    this.pedirDatos=this.pedirDatos.bind(this);
    this.returnToList=this.returnToList.bind(this);
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

  showDetails=(event)=>{
    let id=event.target.id;
    let objMostrar=this.state.datos.find((obj)=>{
      return obj.id.attributes['im:id']===id;
    });
    this.setState({
      showDetail:!this.state.showDetails,
      obj:objMostrar,
      pageNumbers:[]
    })

  }

  returnToList=(event)=>{

    event.preventDefault();
    this.setState({
      showDetail:!this.state.showDetail,
      pageNumbers:[]
    })

  }   


  changePage=(event)=>{
    event.preventDefault();
    let idPage=parseInt(event.target.id);
    let final=(idPage*6);
    let inicio=(final-6);

    this.setState({
      startIndex:inicio,
      endIndex:final,
      currentPage:idPage,
      pageNumbers:[]
      
    })


  }

  renderButtonPage=(x)=>{
    return <li className="waves-effect"><a href="#!">2</a></li>;
  }

  renderCard=(x)=>{  
    return <Card key={x.id.label} fnDetail={this.showDetails} obj={x} />
  }


  onSearch=()=>{

    let busqueda=this.search.value;

    let otro=this.state.datosCopia.filter((obj)=>{          
      return obj.title.label.toLowerCase().indexOf(busqueda.toLocaleLowerCase())!==-1;      
    });
    this.setState({
      showDetail:false,
      datos:otro,
      pageNumbers:[],
      startIndex:0,
      endIndex:6,
      currentPage:1
    })
  }

  render() {

    if(this.state.datos!==null){
      for(let i=1;i<=Math.ceil(this.state.datos.length/6);i++){
        this.state.pageNumbers.push(i);
      }
    }
    

    return (
      <div className="App">    
        <Nav logo={logo}/>      
        <div className="container">
          <div className="row">
              <div className="col s6">
                <input type="text" className="search" placeholder="Search" onChange={this.onSearch} ref={input => {this.search=input;}}/>
              </div>
              <div className="col s12">
                <div className="results">
                  <p>{(this.state.datos!==null)?"Results "+this.state.datos.length:""}</p>
                </div>
              </div>              
          </div>
        </div>

        {(!this.state.showDetail)?
          <div>
            <div className="container">     
                  <ul className="pagination">
                  <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    {this.state.pageNumbers.map((number)=>{
                      return(
                        <li className={this.state.currentPage===number?'active waves-effect pagination-number':'pagination-number'} key={number}><a id={number} onClick={this.changePage} href="#!">{number}</a></li>
                      )
                    })}
                  <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
            <div className="music-cards container">                                      
              {(this.state.datos!==null)?this.state.datos.slice(this.state.startIndex,this.state.endIndex).map(this.renderCard):'...Loading'}
            </div>          
          </div>
          :''
        }
        

        

          {(this.state.showDetail)?<Detail obj={this.state.obj} fnReturnList={this.returnToList}/>:''}
      
      </div>
    );
  }
}

export default App;
