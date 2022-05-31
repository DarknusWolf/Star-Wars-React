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
            <div className='enlaces'>
                <Link to="/">Personajes</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
        </HeaderContainer>
    );
};

export default Header;