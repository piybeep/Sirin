import React from 'react';
// component
import Preview from '../../components/Educator/Preview/Preview';
import Info from '../../components/Educator/Info/Info';
import Slider from '../../components/Educator/Slider/Slider'

const id = () => {
    return (
        <div>
            <Preview/>
            <Info/>
            <Slider/>
        </div>
    );
};

export default id;