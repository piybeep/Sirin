import React from 'react';

// Components
import Header from './Header/Header';
import Preview from './Preview/Preview';
import About from './About/About';
import Advantages from './Advantages/Advantages';
import Rules from './Rules/Rules';
import Video from './Video/Video';
import Team from './Team/Team';

// Style
import s from './Main.module.scss'

const Main = () => {
    return (
        <div className={s.main}>
            <Header/>
            <Preview/>
            <About/>
            <Advantages/>
            <Rules/>
            <Video/>
            <Team/>
        </div>
    );
};

export default Main;