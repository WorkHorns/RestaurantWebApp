import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Routes, Route} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat fixed`}} className="app">
            <AppHeader total={1000}/>
            <Routes>
                <Route path='/' Component={MainPage}/>
                <Route path='/cart' Component={CartPage}/>
            </Routes>
        </div>
    )
}





export default App;