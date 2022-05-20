import React from "react";
import TarjetaPersonajesContainer from "./TarjetaPersonajes-style";

const TarjetaPersonaje = ({name, imgPersonaje, namePlaneta}) => {
    let imgPlanetas = `/planetas/${namePlaneta}.png`;
    return(
        <TarjetaPersonajesContainer>
            <div class="personaje">
                <img src={imgPersonaje} alt=""/>
            </div>
            <div class="planetas">
                {/* incluir imagenes locales dinamicas */}
                <img src={process.env.PUBLIC_URL + imgPlanetas} alt=""/> 
            </div>
            <h2 class="nombre">{name}</h2>
        </TarjetaPersonajesContainer>
    );
}

export default TarjetaPersonaje;