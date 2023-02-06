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
                            < img className={s.preview__img} src={process.env.NEXT_PUBLIC_STATIC_URL + personInfo.photo[0].filename} alt="" />
                            <h2 className={s.preview__title}>{personInfo.fullname}</h2>
                            <p className={s.preview__text}>{personInfo.vacancy}</p>
                        </>
                        :
                        <h2>Загрузка...</h2>
                }
            </div>
        </div>
    );
};

export default Preview;