import React from 'react';
import './App.css';

const axios = require('axios');

class App extends React.Component {



  constructor(props){
    super(props);
    this.state={consultarApi:false};
  }
  handleClick(){
    var nombre=this.state.nombre;
  axios.get('https://www.amiiboapi.com/api/amiibo/?name=' + nombre)
  .then(function(response){
  console.log(response.data);
  this.setState(()=>{return{consultarApi:true,data:'Usted eligio a '+ response.data.amiibo[0].name +
  ' de la serie de ' + response.data.amiibo[0].amiiboSeries  }});
  }.bind(this))
  .catch(function(error) {
    console.log('error');
  })
}




handeChange(event){
  
  this.setState({nombre:event.target.value});

}

render(){
  var resultado;
  if(this.state.consultarApi){
     resultado=(
      <div>  
        <p> {this.state.data} </p> 
        </div>
      
     );
  }else{resultado=<div></div>}

  return (
    <div className='App'>
      <div><h1>Consutlar API</h1></div>
      <div>
      <input type="text" placeholder="introduza nombre" onChange={this.handeChange.bind(this)
      
      }></input>
      </div>
      <div>
        <button onClick={this.handleClick.bind(this)} className="btn btn-primary" type='button'>
         ENVIAR
        </button>
      </div>
  
    <div>{resultado}</div>
   
    </div>
  );
};}

export default App;
