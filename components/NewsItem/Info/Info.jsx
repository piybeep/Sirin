import React from 'react';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

// img
import img from '../../../public/images/news/newsInfo.png'
// Style
import s from './Info.module.scss'

const Info = ({currentNews}) => {
    return (
        <div className={s.info}>
            <div className={s.info__header}>
                <h2 className={s.info__title}>{currentNews?.title}</h2>
                <p className={s.info__date}>{currentNews && format(new Date(currentNews?.createdAt), 'P', {locale: ru})}</p>
            </div>
            <img className={s.info__img} src={img.src} alt="картинка" />
            <div className={s.info__list}>
                <h2 className={s.info__text}>{currentNews?.text}</h2>
            </div>
        </div>
    );
};

export default Info;