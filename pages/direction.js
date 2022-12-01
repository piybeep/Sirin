import React from 'react';
import Preview from '../components/Team-Direction/Preview/Preview';
import List from '../components/Team-Direction/List/List'

// Img
import test1 from '../public/images/direction/1.png'
import test2 from '../public/images/direction/2.png'

const direction = () => {

    const data = [
        {
            id: 0,
            img: test1,
            title: 'Основы классического танца'
        },
        {
            id: 1,
            img: test2,
            title: 'Народно-сценический танец'
        }
    ]

    return (
        <div>
            <Preview title='направления' titleSpan='обучения'/>
            <List info={data} text='ПОДРОБНЕЕ'/>
        </div>
    );
};

export default direction;