import React from 'react';

// img
import currentImg from '../../../public/images/educator/current.png'
// Style
import s from './Preview.module.scss'

const Preview = ({ personInfo }) => {
    return (
        <div className={s.preview}>
            <div className={s.preview__info}>
                {
                    personInfo ?
                        <>
                            < img className={s.preview__img} src={currentImg.src} alt="" />
                            <h2 className={s.preview__title}>{personInfo.name}</h2>
                            <p className={s.preview__text}>{personInfo.website}</p>
                        </>
                        :
                        <h2>Загрузка...</h2>
                }
            </div>
        </div>
    );
};

export default Preview;