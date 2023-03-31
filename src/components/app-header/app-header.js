import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import { Link } from 'react-router-dom';


import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            
            <Link className="header__link" to="/">Menu</Link>
              
            <Link className="header__link" src={cartIcon} alt="cart" to="/cart"> Total: {total} $</Link>
           
        </header>
    )
};



export default AppHeader;