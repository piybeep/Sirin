import React from 'react';
// Component
import Info from '../../components/NewsItem/Info/Info';
import Slider from '../../components/NewsItem/Slider/Slider';
import AllNews from '../../components/NewsItem/AllNews/AllNews';

const id = () => {
    return (
        <div>
            <Info/>
            <Slider/>
            <AllNews/>
        </div>
    );
};

export default id;