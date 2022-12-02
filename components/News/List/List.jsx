import Link from 'next/link';
import React from 'react';

// img
import newsImg1 from '../../../public/images/news/newsImg1.png'
import newsImg2 from '../../../public/images/news/newsImg2.png'
import newsImg3 from '../../../public/images/news/newsImg3.png'
// Style
import s from './List.module.scss'

const List = () => {

    const data = [
        {
            id: 0, 
            img: newsImg1,
            date: '15.02.2022',
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»'
        },
        {
            id: 1, 
            img: newsImg2,
            date: '07.02.2022',
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»'
        },
        {
            id: 2, 
            img: newsImg3,
            date: '28.01.2022',
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»'
        },
        {
            id: 3, 
            img: newsImg1,
            date: '15.02.2022',
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»'
        },
        {
            id: 4, 
            img: newsImg2,
            date: '07.02.2022',
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»'
        },
        {
            id: 5, 
            img: newsImg3,
            date: '28.01.2022',
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»'
        }
    ]

    const resultData = data.map(current => {
        return(
            <Link key={current.id} href={`/news/${current.id}`} className={s.item}>
                <img className={s.item__img} src={current.img.src} alt="Картинка" />
                <p className={s.item__date}>{current.date}</p>
                <h2 className={s.item__text}>{current.text}</h2>
            </Link>
        )
    })

    return (
        <div className={s.list}>
            {resultData}
        </div>
    );
};

export default List;