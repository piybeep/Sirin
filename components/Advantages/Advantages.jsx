import React from 'react';

// img
import img1 from '../../public/main/advantages/1.png'
import img2 from '../../public/main/advantages/2.png'
import img3 from '../../public/main/advantages/3.png'
import img4 from '../../public/main/advantages/4.png'
import img5 from '../../public/main/advantages/5.png'
import img6 from '../../public/main/advantages/6.png'
// Style
import s from './Advantages.module.scss'

const Advantages = () => {

    const data = [
        {
            id: 0,
            img: img1,
            text: 'основы танцевальных знаний'
        },
        {
            id: 1,
            img: img2,
            text: 'выразительность и гибкость'
        },
        {
            id: 2,
            img: img3,
            text: 'выносливость и терпение'
        },
        {
            id: 3,
            img: img4,
            text: 'здоровая осанка'
        },
        {
            id: 4,
            img: img5,
            text: 'соблюдение дисциплины'
        },
        {
            id: 5,
            img: img6,
            text: 'грациозность движений'
        },
    ]

    const resultItem = data.map(current => {
        return (
            <div key={current.text} className={s.item}>
                <img className={s.item__img} src={current.img.src} alt="Картинка" />
                <h4 className={s.item__slogan}>{current.text}</h4>
            </div>
        )
    })
    
    return (
        <div className={s.advantages}>
            <div className={s.advantages__info}>
                <h2 className={s.advantages__title}>Преимущества <span className={s.advantages__title_span}>наших</span>  занятий</h2>
                <div className={s.advantages__list}>
                    {resultItem}
                </div>
            </div>
        </div>
    );
};

export default Advantages;