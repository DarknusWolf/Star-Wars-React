import React, { useEffect, useState} from 'react';
import './App.css';
import { Link } from "react-router-dom";

import Header from './containers/Header/Header';
import ListaPersonajes from './containers/ListaPersonajes/ListaPersonajes';
import TarjetaPersonajes from './components/TarjetaPersonajes/TarjetaPersonajes';

import {usePersonajes} from './services/swapi/sw-services';

function App() {
  const servicioPersonajes = usePersonajes();
  const [listPersonajes, setListPersonajes] = useState([]);

  useEffect(() => {
    const getListPersonajes = async () => {
      const personajes = await servicioPersonajes.getPersonajes();
      const {results} = await personajes.data;
      setListPersonajes(results);
    }
    
    getListPersonajes();
  },[]);

  return (
    <>
      <Header />
      <div className="contenido">
        <ListaPersonajes>
            {
              listPersonajes.map((personajes, index) => {
                return(
                  <li key={index}>
                    <Link to={`/personaje/${personajes.name}`}>
                      <TarjetaPersonajes
                        nombre={personajes.name}
                        homeworld={personajes.homeworld}
                      />
                    </Link>
                  </li>
                );
              })
            }
          </ListaPersonajes>
      </div>
    </>
  );
}

export default App;
