import styled from "styled-components";
import fondo from "../../assets/img/fondo-tarjeta.jpg";

const TarjetaPersonajesContainer = styled.div`
    position: relative;
    width: 200px;
    min-height: 320px;
    background: url(${fondo}) no-repeat center center;
    background-size: cover;
    background-attachment: scroll;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
    border-radius: 12px;

    div.personaje{
        margin-top: 20px;
        width: 160px;
        min-height: 230px;
        img{
            border-radius: 9px;
            border: solid 4px white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
    }

    div.planetas{
        position: absolute;
        z-index: 4;
        width: 70px;
        min-height: 70px;
        top: 57%;
        right: 5%;
        img{
            min-width: 70px;
            min-height: 70px;
            border-radius: 50%;
            border: solid 4px white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
    }

    .nombre{
        font-family: 'SW';
        margin: 10px 20px 20px 20px;
        font-size: 22px;
        text-align: center;
        font-weight: lighter;
        color:white;
        border:none;
    }
`;

export default TarjetaPersonajesContainer;