import React from 'react';

// Style
import s from './Info.module.scss'

const Info = () => {

    return (
        <div className={s.info}>
            <div className={s.info__item}>
                <h2 className={s.info__title}>ОБРАЗОВАНИЕ</h2>
                <p className={s.info__text}>Московская государственная академия хореографии, педагог-хореограф по специальности Педагогика хореографии</p>
            </div>
            <div className={s.info__item}>
                <h2 className={s.info__title}>СТАЖ РАБОТЫ</h2>
                <p className={s.info__text}>Более 20 лет</p>
            </div>
            <div className={s.info__item}>
                <h2 className={s.info__title}>ДОСТИЖЕНИЯ</h2>
                <ul className={s.info__list}>
                    <li className={s.info__li}>Выпускник Московской Государственной Академии Хореографии</li>
                    <li className={s.info__li}>Выпускник школы при ГААНТ им. И.А. Моисеева</li>
                    <li className={s.info__li}>Заслуженный артист Российской Федерации</li>
                    <li className={s.info__li}>Народный артист Российской Федерации</li>
                    <li className={s.info__li}>Имеет профессиональный балетный приз “Душа танца” в номинации “Звезда народного танца”</li>
                </ul>
            </div>
        </div>
    );
};

export default Info;