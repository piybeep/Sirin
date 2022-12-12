import Link from 'next/link';
import React from 'react';

// Style
import s from './Menu.module.scss'

const Menu = () => {

    const link = [
        {
            id: 0,
            text: 'Новости',
            link: '/news'
        },
        {
            id: 1,
            text: 'КОМАНДА',
            link: '/team'
        },
        {
            id: 2,
            text: 'Направления',
            link: '/direction'
        },
        {
            id: 3,
            text: 'Контакты',
            link: '/contacts'
        },
        {
            id: 4,
            text: 'О нас',
            link: '/about'
        },
    ]

    const resultLink = link.map(current => {
        return (
            <Link key={current.text} className={s.menu__link} href={current.link}>{current.text}</Link>
        )
    })


    return (
        <div className={s.menu}>
            {resultLink}
        </div>
    );
};

export default Menu;