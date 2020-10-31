import React from 'react';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navigation></Navigation>
            <Main></Main>
        </div>
    );
};

export default Header;