import React from 'react';
import './style.css';

import Header from '../../containers/Header/Header';


function Contacto() {
  return (
    <>
        <Header />
        <div className="formulario">
            <div className="contenido">
                <h2>Contacta conmigo</h2>
                <p>Rellena el siguiente formulario si deseas ponerte en contacto conmigo</p>
                <form action="https://formsubmit.co/girelagarcia.javier29@gmail.com" method="POST">
                    <input type="text" name="nombre" placeholder="Nombre y Apellidos*" required />
                    <input type="email" name="email" placeholder="Correo*" required />
                    <textarea name="mensaje" cols="30" rows="10" placeholder="Escribe tu mensaje aqui"></textarea>
                    <input className="boton" type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    </>
  );
}

export default Contacto;
