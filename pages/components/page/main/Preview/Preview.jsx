import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import img1 from '../../../../assets/main/preview/background-1.png'
// Style
import s from './Preview.module.scss'

const Preview = () => {

    const link = [
        {
            id: 0,
            text: 'Новости',
            link: 'news'
        },
        {
            id: 1,
            text: 'КОМАНДА',
            link: 'team'
        },
        {
            id: 2,
            text: 'Направления',
            link: 'test'
        },
        {
            id: 3,
            text: 'Достижения',
            link: 'test'
        },
        {
            id: 4,
            text: 'Расписание',
            link: 'test'
        },
        {
            id: 5,
            text: 'Контакты',
            link: 'test'
        },
        {
            id: 6,
            text: 'О нас',
            link: 'test'
        }
    ]

    const resultLink = link.map(current => {
        return (
            <Link key={current.text} className={s.preview__link} href={current.link}>{current.text}</Link>
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

    const [isSlide, setIsSlide] = useState(0)

    const resultImg = dataImg.map(current => {
        return (
            <img key={current.text} style={{ transform: `translateX(${-isSlide}px)` }} className={s.preview__img} src={current.img.src} alt={current.id} />
        )
    })

    const ref = React.createRef()

    const changeRadio = (e) => {
        const currentInputValue = e.target.attributes[1].textContent
        const currentWidthImg = e.target.parentElement.parentElement.parentElement.offsetWidth
        setIsSlide(currentInputValue * currentWidthImg)
    }

    const resultDots = dataImg.map(current => {
        return (
            <div key={current.text} className={s.dots}>
                <input onChange={(e) => changeRadio(e)} className={s.dots__input} defaultChecked={current.active} id={current.id} name='radio' type="radio" />
                <label className={s.dots__label} htmlFor={current.id}></label>
            </div>
        )
    })

    return (
        <div ref={ref} className={s.preview}>
            <div className={s.preview__menu}>
                {resultLink}
            </div>
            <div className={s.preview__info}>
                <h2 className={s.preview__title}>Ансамбль является Лауреатом <pre />Международных и Всеросийских фестивалей</h2>
                <button className={s.preview__button}>ПОДРОБНЕЕ</button>
            </div>

            <div className={s.preview__dots}>
                {resultDots}
            </div>

            <div className={s.preview__slider}>
                {resultImg}
            </div>
        </div>
    );
};

export default Preview;