import React from 'react';
import Link from 'next/link';

// img
import vk from '../../public/svg/footer/vk.svg'
import facebook from '../../public/svg/footer/facebook.svg'
import telegram from '../../public/svg/footer/telegram.svg'
import youtube from '../../public/svg/footer/youtube.svg'
import instagram from '../../public/svg/footer/instagram.svg'
// Style
import s from './Footer.module.scss'

const Footer = () => {
    const links = [
        {
            id: 0,
            text: 'о нас',
            href: '/about'
        },
        {
            id: 1,
            text: 'ПЕДАГОГИ',
            href: '/team'
        },
        {
            id: 2,
            text: 'НАПРАВЛЕНИЯ',
            href: '/direction'
        },
        {
            id: 3,
            text: 'контакты',
            href: '/contacts'
        },
        {
            id: 4,
            text: 'НОВОСТИ',
            href: '/news'
        },
        {
            id: 5,
            text: 'Устав Сирин',
            href: '/info'
        }
    ]

    const resultLinks = links.map(current => {
        return (
            <Link key={current.id} href={current.href} className={s.footer__link}>{current.text}</Link>
        )
    })

    const imgs = [
        {
            id: 0,
            img: vk,
            href: 'https://www.vk.com/'
        },
        {
            id: 1,
            img: facebook,
            href: 'https://www.facebook.com.vn'
        },
        {
            id: 2,
            img: telegram,
            href: 'https://web.telegram.org/z/'
        },
        {
            id: 3,
            img: youtube,
            href: 'https://youtube.com'
        },
        {
            id: 4,
            img: instagram,
            href: 'https://instagram.ru'
        },
    ]

    const resultImg = imgs.map(current => {
        return (
            <a key={current.id} href={current.href} target='blank' className={s.icon}>
                <img className={s.icon__link} src={current.img.src} alt='Иконка' />
            </a>
        )
    })

    return (
        <div className={s.footer}>
            <div className={s.footer__wrapper}>
                <div className={s.footer__info}>
                    <div className={s.footer__navigation}>
                        {resultLinks}
                    </div>

                    <div className={s.footer__contact}>
                        <div className={s.footer__list}>
                            <div className={s.footer__item}>
                                <h2 className={s.footer__text + ' ' + s.footer__text_adress}>ул. Земляной Вал, д.27, стр.3, метро Курская</h2>
                                <h2 className={s.footer__text + ' ' + s.footer__text_adress}>ул. Чечулина д.10, ГБУ ЦКС «Южное Измайлово»</h2>
                            </div>
                            <div className={s.footer__item}>
                                <h2 className={s.footer__title}>номера для связи</h2>
                                <a className={s.footer__text} href="tel: +7 (967) 042-21-04">+7 (967) 042-21-04</a>
                                <a className={s.footer__text} href="tel:  +7 (917) 595-12-88">+7 (917) 595-12-88</a>
                            </div>
                        </div>
                        <div className={s.footer__icon}>
                            {resultImg}
                        </div>
                    </div>
                </div>
                <div className={s.footer__root}>
                    <span>
                        © 2011-2022 Ансамбль Сирин. Все права защищены
                    </span>
                    <a target='_blank' href="https://piybeep.com" className={s.footer__piybeep}>Сделано в студии <span className={s.footer__piybeep_span}>Piybeep</span></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;