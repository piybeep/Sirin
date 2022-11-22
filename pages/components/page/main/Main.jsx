import React from 'react';

// Components
import Header from './Header/Header';
import Preview from './Preview/Preview';
import About from './About/About';

// Style
import s from './Main.module.scss'
import Advantages from './Advantages/Advantages';
import Rules from './Rules/Rules';

const Main = () => {
    return (
        <div className={s.main}>
            <Header/>
            <Preview/>
            <About/>
            <Advantages/>
            <Rules/>
        </div>
    );
};

export default Main;