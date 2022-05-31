import React from 'react';
import Logo from '../../assets/img/Logo2';
import HeaderContainer from './Header-style';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Link to="/">Home</Link>
            <Link to="/personajes">Persojes</Link>
            <Link to="/contacto">Contacto</Link>
        </HeaderContainer>
    );
};

export default Header;