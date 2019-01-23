import React from 'react';
import FadeIn from '../transitions/fade-in';

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} >
            <h1>Don't click the same cat twice!</h1>
        </FadeIn>
    </header>
)};

export default Header;