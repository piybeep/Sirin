import React from 'react';
import Preview from '../../components/Direction/Preview/Preview';
import List from '../../components/Direction/List/List'

// Img
import test1 from '../../public/svg/directions/1.svg'
import test2 from '../../public/svg/directions/2.svg'
import test3 from '../../public/svg/directions/3.svg'
import test4 from '../../public/svg/directions/4.svg'
import test5 from '../../public/svg/directions/5.svg'
import test6 from '../../public/svg/directions/6.svg'
import Head from 'next/head';

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
        },
        {
            id: 2,
            img: test3,
            title: 'Партерная гимнастика'
        },
        {
            id: 3,
            img: test4,
            title: 'Эстрадный танец'
        },
        {
            id: 4,
            img: test5,
            title: 'Акробатика'
        },
        {
            id: 5,
            img: test6,
            title: 'Ритмика'
        }
    ]

    return (
        <div>
            <Head>
                <title>Ансамбль Сирин - Направления обучения</title>
            </Head>
            <Preview title='направления' titleSpan='обучения' />
            <List info={data} text='ПОДРОБНЕЕ' />
        </div>
    );
};

export default direction;