import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

// img
import logo from '../../public/svg/secHeader/sirin.svg'
import textSirin from '../../public/svg/secHeader/textSirin.svg'
// Style
import s from './SecHeader.module.scss'

const SecHeader = () => {

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
            text: 'Контакты',
            href: '/contacts',
            active: false
        },
        {
            id: 4,
            text: 'О нас',
            href: '/about',
            active: false
        },
    ]

    const navigate = useRouter()
    const [thisPage, setThisPage] = useState()
    useEffect(() => {
        setThisPage(Array.from(navigate.route.split('/')))
    }, [])

    // thisPage && console.log(thisPage[1])

    const resultLink = links.map(current => {
        if (thisPage) {
            current.href === '/' + thisPage[1] ? current.active = true : current.active = false
        }

        return (
            <a key={current.text} className={[s.SecHeader__link, current.active && s.SecHeader__link_active].join(' ')} href={current.href}>{current.text}</a>
        )
    })

    return (
        <div className={s.SecHeader}>
            <div className={s.SecHeader__wrapper}>
                <a href='/' className={s.SecHeader__info}>
                    <img className={s.SecHeader__title} src={logo.src} alt="" />
                    <img className={s.SecHeader__subtitle} src={textSirin.src} alt="" />
                </a>

                <div className={s.SecHeader__nav}>
                    {resultLink}
                </div>
            </div>
        </div>
    );
};

export default SecHeader;