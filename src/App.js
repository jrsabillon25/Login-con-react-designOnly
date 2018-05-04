import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Cliente from './clientes.js';
import Search from './search.js';
import path from 'path';
import {obtenerClientes} from './api.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      clientes: [],
      clienteRender: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    obtenerClientes((err, data)=>{
      if(err){
        console.log(err);
      }
      this.setState({"clientes":data, "isLoading":false});
    });
  }

  render() {
    if(this.state.isLoading) return (<div>Cargando...</div>)
    const renderClientes = this.state.clientes.map((item, i)=>{
          return (<Cliente key={i} Identidad={item.idClient} Nombre={item.clientName} Problema={item.serviceDesc.problem} />)
        });
    return (
    <body>
        <Header />
        <Search />
        {renderClientes}
    </body>
    );
  }
}

export default App;
