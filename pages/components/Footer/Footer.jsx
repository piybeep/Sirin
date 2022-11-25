import React from 'react';

// img
import vk from '../../assets/footer/vk.svg'
import facebook from '../../assets/footer/facebook.svg'
import telegram from '../../assets/footer/telegram.svg'
import youtube from '../../assets/footer/youtube.svg'
import instagram from '../../assets/footer/instagram.svg'
// Style
import s from './Footer.module.scss'

const Footer = () => {

    const links = [
        {
            id: 0,
            text: 'о нас',
            href: 'test'
        },
        {
            id: 1,
            text: 'НОВОСТИ',
            href: 'test'
        },
        {
            id: 2,
            text: 'НОВОСТИ',
            href: 'test'
        },
        {
            id: 3,
            text: 'ПЕДАГОГИ',
            href: 'test'
        },


        {
            id: 4,
            text: 'достижения',
            href: 'test'
        },
        {
            id: 5,
            text: 'достижения',
            href: 'test'
        },
        {
            id: 6,
            text: 'НАПРАВЛЕНИЯ',
            href: 'test'
        },
        {
            id: 7,
            text: 'расписание',
            href: 'test'
        },

        {
            id: 8,
            text: 'расписание',
            href: 'test'
        },
        {
            id: 9,
            text: 'контакты',
            href: 'test'
        },
        {
            id: 10,
            text: 'устав сирин',
            href: 'test'
        },
        {
            id: 11,
            text: 'устав сирин',
            href: 'test'
        }
    ]

    const resultLinks = links.map(current => {
        return (
            <a className={s.footer__link}>{current.text}</a>
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
            <a href={current.href} target='blank' className={s.icon}>
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
                <h2 className={s.footer__root}>© 2011-2022 Ансамбль Сирин. Все права защищены</h2>
            </div>
        </div>
    );
};

export default Footer;