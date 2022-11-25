import React from 'react';

// Components
import Header from './Header/Header';
import Preview from './Preview/Preview';
import About from './About/About';
import Advantages from './Advantages/Advantages';
import Rules from './Rules/Rules';
import Video from './Video/Video';
import Team from './Team/Team';
import Reviews from './Reviews/Reviews';

// Style
import s from './Main.module.scss'
import Contact from './Contacts/Contact';
import Footer from '../../Footer/Footer';

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
            <Reviews/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Main;