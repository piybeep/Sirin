import React from 'react';
import Link from 'next/link';
// components
import CustomButton from '../../CustomButton/CustomButton'
// Style
import s from './List.module.scss'

const List = ({ info, text }) => {

    const resultData = info.map(current => {
        return (
                <div key={current.id} className={s.item}>
                    <img className={s.item__img} src={current.img.src} />
                    <div className={s.item__info}>
                    <h2 className={s.item__title}>{current.FIO}</h2>
                    <h3 className={s.item__subtitle}>{current.dolj}</h3>
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