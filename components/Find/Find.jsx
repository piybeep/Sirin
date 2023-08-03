import React from 'react';

import s from './Find.module.scss'

const Find = () => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Как нас найти</h2>
            <div className={s.list}>
                <div className={[s.item, s.item__large].join(' ')}>
                    <h3 className={s.item__title}>м. Курская, ул,
                        <br />
                        Земляной Вал д.27, стр.3</h3>
                    <button className={s.item__button}>Подробнее</button>
                </div>
                <div className={s.item}>
                    <h3 className={s.item__title}>ул. Чечулина, д.10, <br /> ГБУ ЦКС «Южное Измайлово»</h3>
                    <button className={s.item__button}>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default Find;