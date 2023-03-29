import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            
            <Link className="header__link" to="/">Menu</Link>
              
            <Link className="header__link" src={cartIcon} alt="cart" to="/cart"> Total: {total} $</Link>
           
        </header>
    )
};

export default AppHeader;