import React from 'react';
import logo from '../../assets/img/Logo2.png';
import HeaderContainer from './Header-style';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
                <img src={logo} alt="Logo Star Wars" />
            </Link>
            {/* <Link to="/">Home</Link>
            <Link to="/personajes">Persojes</Link>
            <Link to="/contacto">Contacto</Link> */}
        </HeaderContainer>
    );
};

export default Header;