import Link from 'next/link';
import React from 'react';

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// img
import img1 from '../../../public/images/main/preview/background-1.png'
// Style
import s from './Preview.module.scss'

const Preview = () => {

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
            text: 'Расписание',
            link: '/timing'
        },
        {
            id: 4,
            text: 'Контакты',
            link: '/#contacts'
        },
        {
            id: 5,
            text: 'О нас',
            link: '/#about'
        },
    ]

    const resultLink = link.map(current => {
        return (
            <a key={current.text} className={s.preview__link} href={current.link}>{current.text}</a>
        )
    })

    const dataImg = [
        {
            id: 0,
            text: 'img1',
            img: img1,
            active: true
        },
        {
            id: 1,
            text: 'img2',
            img: img1,
            active: false
        },
        {
            id: 2,
            text: 'img3',
            img: img1,
            active: false
        },
        {
            id: 3,
            text: 'img4',
            img: img1,
            active: false
        },
        {
            id: 4,
            text: 'img5',
            img: img1,
            active: false
        },
        {
            id: 5,
            text: 'img6',
            img: img1,
            active: false
        },
        {
            id: 6,
            text: 'img7',
            img: img1,
            active: false
        },
        {
            id: 7,
            text: 'img8',
            img: img1,
            active: false
        },
    ]

    const resultImg = dataImg.map(current => {
        return (
            <img key={current.text} className={s.preview__img} src={current.img.src} alt={current.id} />
        )
    })

    return (
        // style={{minHeight:`${widthImg} px`}}
        <div className={s.preview}>
            <div className={s.preview__menu}>
                {resultLink}
            </div>
            <div className={s.preview__info}>
                <h2 className={s.preview__title}>Ансамбль является Лауреатом <pre />Международных и Всеросийских фестивалей</h2>
                <button className={s.preview__button}>ПОДРОБНЕЕ</button>
            </div>

            {/* Рабочий вариант, только точки немного поднять */}
            <div className={s.slider}>
                <Carousel
                    // Эмуляция пальца по экрану
                    emulateTouch={true}
                    // Скрывает стрелки
                    showArrows={false}
                    // Бесконечная крутилка
                    infiniteLoop={true}
                    // Убрать статус какая фотография
                    showStatus={false}
                    // Убрать вывод фоток слева снизу
                    showThumbs={false}
                    // Автоматическое прокручивание раз в 5с
                    autoPlay={true} interval={5000}
                    // Время на прокрутку в 1с
                    transitionTime={500}>
                    {resultImg}
                </Carousel>
            </div>
        </div>
    );
};

export default Preview;