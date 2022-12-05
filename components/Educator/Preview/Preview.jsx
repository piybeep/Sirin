import React from 'react';

// img
import currentImg from '../../../public/images/educator/current.png'
// Style
import s from './Preview.module.scss'

const Preview = () => {
    return (
        <div className={s.preview}>
            <div className={s.preview__info}>
            <img className={s.preview__img} src={currentImg.src} alt="" />
                <h2 className={s.preview__title}>Тихонов Александр Александрович</h2>
                <p className={s.preview__text}>Педагог ансамбля по мужскому классу Действующий солист Балета ГААНТ им. И.А.Моисеева</p>
            </div>
        </div>
    );
};

export default Preview;