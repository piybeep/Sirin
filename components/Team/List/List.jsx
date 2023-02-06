import React from 'react';
import Link from 'next/link';

// Пока хардкод картинка
import img from '../../../public/images/team/image.png'
// components
import CustomButton from '../../CustomButton/CustomButton'
// Style
import s from './List.module.scss'

const List = ({ data, text }) => {
    const resultData = data?.map(current => {
        return (
            <div key={current.id} className={s.item}>
                <img className={s.item__img} src={process.env.NEXT_PUBLIC_STATIC_URL + current.photo[0].filename} />
                <div className={s.item__info}>
                    <h2 className={s.item__title}>{current.fullname}</h2>
                    <h3 className={s.item__subtitle}>{current.vacancy}</h3>
                    <Link href={`/team/${current.id}`} className={s.item__button}>
                        <CustomButton text={text} />
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <div className={s.list}>
            {resultData}
        </div>
    );
};

export default List;