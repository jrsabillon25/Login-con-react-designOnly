import React, {Component} from 'react';
import './search.css';

class Search extends Component {
  render(){
    return(
      <div className="Buscador">
        <label for="txtBuscar">Identidad del cliente</label><br/>
        <input type="text" id="txtBuscar"></input>
      </div>
    )
  }
}

export default Search;
