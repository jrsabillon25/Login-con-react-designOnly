import React, { Component } from 'react';
import './clientes.css';

class Cliente extends Component {
  render() {
    const {Nombre, Identidad, Problema} = this.props;
    return (
      <div className="Clientes">
        <h2>Cliente</h2>
        <p>{Identidad||""}</p>
        <p>{Nombre||""}</p>
        <p>{Problema||""}</p>
        <input type="submit" value="Detalles" id="btnDetalles"></input>
      </div>
    );
  }
}

export default Cliente;
