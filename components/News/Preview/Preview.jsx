import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Link from 'next/link';
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
                <h2 className={s.preview__date}>{format(new Date (previewNews?.createdAt), 'P', {locale: ru})}</h2>
                <h2 className={s.preview__text}>{previewNews?.text}</h2>
                <Link href={`/news/${previewNews?.id}`} className={s.preview__button}>ПОДРОБНЕЕ</Link>
            </div>
        </div>
    );
};

export default Preview;