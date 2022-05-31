import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { Link } from "react-router-dom";

import Header from './containers/Header/Header';
import ListaPersonajes from './containers/ListaPersonajes/ListaPersonajes';
import TarjetaPersonajes from './components/TarjetaPersonajes/TarjetaPersonajes';

import {usePersonajes} from './services/swapi/sw-services';

function App() {
  const servicioPersonajes = usePersonajes();
  const [listPersonajes, setListPersonajes] = useState([]);
  const [searchedPersonaje, setSearchedPersonaje] = useState([]);

  const searchBar = useRef(null);

  useEffect(() => {
    const getListPersonajes = async () => {
      const personajes = await servicioPersonajes.getPersonajes();
      const {results} = await personajes.data;
      setSearchedPersonaje(results);
      setListPersonajes(results);
    }
    
    getListPersonajes();
  },[]);

  const handleSearch = () => {
    const searchedValue = searchBar.current.value.toLowerCase();
    const filteredPersonaje = listPersonajes.filter(personaje => personaje.name.toLowerCase().includes(searchedValue));
    setSearchedPersonaje(filteredPersonaje);
  }

  return (
    <>
      <Header />
      <div className="contenido">
        <div className="buscador">
          <input 
            ref={searchBar} 
            type="text" 
            placeholder="Buscar personaje"
            onChange={(e) => handleSearch(e)}
            />
        </div>
        <ListaPersonajes>
          {
            searchedPersonaje.map((personajes, index) => {
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
