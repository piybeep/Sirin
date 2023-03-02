import React from 'react';
import Preview from '../../components/Direction/Preview/Preview';
import List from '../../components/Direction/List/List'

// Img
import test1 from '../../public/images/direction/1.png'
import test2 from '../../public/images/direction/2.png'
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
            img: test1,
            title: 'Основы классического танца'
        },
        {
            id: 3,
            img: test2,
            title: 'Народно-сценический танец'
        }
    ]

    return (
        <div>
            <Head>
                {/* Пока тест */}
                {/* <meta property="og:title" content="Ансамбль Сирин - Направления обучения" key="title" /> */}
                <title>Ансамбль Сирин - Направления обучения</title>
            </Head>
            <Preview title='направления' titleSpan='обучения' />
            <List info={data} text='ПОДРОБНЕЕ' />
        </div>
    );
};

export default direction;