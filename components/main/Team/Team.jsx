import React, { useEffect } from 'react';
import Link from 'next/link';

// Components
import CustomButton from '../../CustomButton/CustomButton';

// Style
import s from './Team.module.scss'

// Img
import ira from '../../../public/images/main/team/irina.png'
import alex from '../../../public/images/main/team/alex.png'
import valentine from '../../../public/images/main/team/valentine.png'
import polina from '../../../public/images/main/team/polina.png'
import artem from '../../../public/images/main/team/artem.png'
import tanya from '../../../public/images/main/team/tanya.png'

const Team = ({ team }) => {
    const teachers = team?.slice(0, 6)

    const resultTeachers = teachers?.map((current, index) => {
        return (
            <div key={current.id} className={[s.teachers, index === 0 ? s.teachers_first : '', index === 5 ? s.teachers_last : ''].join(' ')}>
                <img className={s.teachers__img} src={alex.src} alt="" />
                <h2 className={s.teachers__name}>{current.fullname}</h2>
            </div>
        )
    })
    return (
        <div className={s.team}>
            <div className={s.team__info}>
                <header className={s.team__header}>
                    <h2 className={s.team__title}>НАША КОМАНДА</h2>
                    <p className={s.team__subtitle}>Каждый из нас — талантливый педагог и признанный эксперт в своей области</p>
                    <Link href='/team' className={s.team__button}>
                        <CustomButton text='УЗНАТЬ ЛУЧШЕ' />
                    </Link>
                </header>
                <div className={s.team__list}>
                    {resultTeachers}
                </div>
            </div>
        </div>
    );
};

export default Team;