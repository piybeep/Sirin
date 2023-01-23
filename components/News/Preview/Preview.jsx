import React from 'react';

// img
import img from '../../../public/images/news/preview.png'
// Style
import s from './Preview.module.scss'

const Preview = ({previewNews}) => {
    return (
        <div className={s.preview}>
            <img className={s.preview__img} src={img.src} alt="Картинка" />
            <div className={s.preview__info}>
                <h2 className={s.preview__date}>07.10.2022</h2>
                <h2 className={s.preview__text}>ГРАН-ПРИ на международном марафоне резидентов Melon Kids «Мы внуки Великой Победы»</h2>
                <button className={s.preview__button}>ПОДРОБНЕЕ</button>
            </div>
        </div>
    );
};

export default Preview;