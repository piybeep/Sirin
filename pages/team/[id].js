import React from 'react';
import { useRouter } from 'next/router';
// component
import Preview from '../../components/Educator/Preview/Preview';
import Info from '../../components/Educator/Info/Info';
import Slider from '../../components/Educator/Slider/Slider'

const id = () => {
    return (
        <>
            <Preview />
            <Info />
            <Slider />
        </>
    );
};

export default id;