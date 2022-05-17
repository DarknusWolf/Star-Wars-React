import React from "react";

import TarjetaPersonajesContainer from "./TarjetaPersonajes-style";

const TarjetaPersonaje = ({name, imgPersonaje, namePlaneta}) => {
    let imgPlanetas = "../../assets/img/planetas/"+{namePlaneta}+".png";
    return(
        <TarjetaPersonajesContainer>
            <div class="personaje">
                <img src={imgPersonaje}/>
            </div>
            <div class="planetas">
                <img src={imgPlanetas}/>
            </div>
            <h2 class="nombre">{name}</h2>
        </TarjetaPersonajesContainer>
    );
}

export default TarjetaPersonaje;