import React from 'react';
import { useRouter } from 'next/router'

// Style
import s from './MiniHeader.module.scss'

const MiniHeader = () => {

    const links = [
        {
            id: 0,
            text: 'Новости',
            href: '/news',
            active: false
        },
        {
            id: 1,
            text: 'КОМАНДА',
            href: '/team',
            active: false
        },
        {
            id: 2,
            text: 'Направления',
            href: '/direction',
            active: false
        },
        {
            id: 3,
            text: 'Достижения',
            href: '#',
            active: false
        },
        {
            id: 4,
            text: 'Расписание',
            href: '#',
            active: false
        },
        {
            id: 5,
            text: 'Контакты',
            href: '/contact',
            active: false
        },
        {
            id: 5,
            text: 'О нас',
            href: '#',
            active: false
        },
    ]

    const resultLink = links.map(current => {
        const navigate = useRouter()
        current.href === navigate.route ? current.active = true : current.active = false

        return (
            <a key={current.text} className={[s.miniHeader__link, current.active && s.miniHeader__link_active].join(' ')} href={current.href}>{current.text}</a>
        )
    })

    return (
        <div className={s.miniHeader}>
            <div className={s.miniHeader__wrapper}>
                <div className={s.miniHeader__info}>
                    <h2 className={s.miniHeader__title}>Сирин</h2>
                    <p className={s.miniHeader__subtitle}>Образцовый хореографический ансамбль</p>
                </div>

                <div className={s.miniHeader__nav}>
                    {resultLink}
                </div>
            </div>
        </div>
    );
};

export default MiniHeader;