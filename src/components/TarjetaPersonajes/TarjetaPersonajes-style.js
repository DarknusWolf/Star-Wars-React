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
        min-height: 210px;
        img{
            min-width: 160px;
            height: 210px;
            border-radius: 9px;
            border: solid 4px white;
            background-color: black;
            // object-fit: contain;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
    }

    div.planetas{
        position: absolute;
        z-index: 4;
        width: 70px;
        min-height: 70px;
        top: 55%;
        right: 5%;
        img{
            min-width: 70px;
            min-height: 70px;
            border-radius: 50%;
            border: solid 4px white;
        }
    }

    .nombre{
        font-family: 'SW';
        margin: 30px 20px 20px 20px;
        font-size: 22px;
        text-align: center;
        font-weight: lighter;
        text-shadow: 0 0 5px #FF0000, 0 0 9px #0000FF;
        color:white;
        border:none;
    }
`;

export default TarjetaPersonajesContainer;