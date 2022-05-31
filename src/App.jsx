import React, { useEffect, useState} from 'react';

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
      <div className="App">
        <ListaPersonajes>
            {
              listPersonajes.map((personajes, index) => {
                return(
                  <li key={index}>
                    <TarjetaPersonajes
                      nombre={personajes.name}
                      homeworld={personajes.homeworld}
                    />
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
