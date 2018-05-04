import path from 'path';
import axios from 'axios';

const UrlClientes = "http://localhost:3000/api";

//Cargar informacion completa de los servicios brindado a los clientes
export const obtenerClientes = (handler) =>{
  const url = UrlClientes + '/showservices';
  axios.get(url)
        .then((resp)=>{
          handler(null, resp.data);
        })
        .catch((err)=>{
          handler(err,null);
        }
      );
}; //obtenerClientes
