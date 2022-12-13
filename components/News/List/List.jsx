import Link from 'next/link';
import React from 'react';

// img
import newsImg1 from '../../../public/images/news/newsImg1.png'
import newsImg2 from '../../../public/images/news/newsImg2.png'
import newsImg3 from '../../../public/images/news/newsImg3.png'
// Style
import s from './List.module.scss'

const List = ({ news }) => {

    const resultData = news?.map(current => {
        return (
            <Link key={current.id} href={`/news/${current.id}`} className={s.item}>
                {/* <img className={s.item__img} src={current.coatOfArms.svg} alt="Картинка" />
                <p className={s.item__date}>test</p>
                <h2 className={s.item__text}>{current.name.common}</h2> */}
                {current.id}
            </Link>
        )
    })

    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <h2 className={s.info__date}>07.10.2022</h2>
                <p className={s.info__text}>ГРАН-ПРИ на международном марафоне резидентов Melon Kids «Мы внуки Великой Победы»</p>
                <button className={s.info__button}>Подробнее</button>
            </div>

            <div className={s.list}>
                {resultData}
            </div>
        </div>
    );
};

export default List;