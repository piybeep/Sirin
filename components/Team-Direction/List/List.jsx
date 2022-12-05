import React from 'react';
import { useRouter } from 'next/router'
// components
import CustomButton from '../../CustomButton/CustomButton'
// Style
import s from './List.module.scss'

const List = ({ info, text }) => {

    const navigate = useRouter()

    const resultData = info.map(current => {
        return (
            navigate.pathname === '/team' ?
                <a href={`/team/${current.id}`} key={current.id} className={s.item}>
                    <img className={s.item__img} src={current.img.src} />
                    <h2 className={s.item__title}>{current.FIO}</h2>
                    <h3 className={s.item__subtitle}>{current.dolj}</h3>
                    <div className={s.item__button}>
                        <CustomButton text={text} />
                    </div>
                </a>
                :
                <div key={current.id} className={s.item}>
                    <img className={s.item__img} src={current.img.src} />
                    <h2 className={s.item__title}>{current.title}</h2>
                    <div className={s.item__button}>
                        <CustomButton text={text} />
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