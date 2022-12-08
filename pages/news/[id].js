import React from 'react';
// Component
import Info from '../../components/NewsItem/Info/Info';
import Slider from '../../components/NewsItem/Slider/Slider';
import AllNews from '../../components/NewsItem/AllNews/AllNews';

// Style
import s from './idMedia.module.scss'
const id = () => {
    return (
        <div>
            <Info />
            <div className={s.hidden}>
                <Slider />
            </div>
            <AllNews/>
        </div>
    );
};

export default id;