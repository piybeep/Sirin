import React from 'react';

// Components
import CustomButton from '../CustomButton/CustomButton';

// Style
import s from './Team.module.scss'

// Img
import ira from '../../public/main/team/irina.png'
import alex from '../../public/main/team/alex.png'
import valentine from '../../public/main/team/valentine.png'
import polina from '../../public/main/team/polina.png'
import artem from '../../public/main/team/artem.png'
import tanya from '../../public/main/team/tanya.png'

const Team = () => {

    const teachers = [
        {
            id: 0,
            text: 'Давыдова Ирина',
            img: ira
        },
        {
            id: 1,
            text: 'Тихонов Александр',
            img: alex
        }
        ,
        {
            id: 2,
            text: 'Терентьева Валентина',
            img: valentine
        }
        ,
        {
            id: 3,
            text: 'Брунова Полина',
            img: polina
        }
        ,
        {
            id: 4,
            text: 'Давыдов Артём',
            img: artem
        }
        ,
        {
            id: 5,
            text: 'Автухова Татьяна',
            img: tanya
        }
    ]

    const resultTeachers = teachers.map(current => {
        return (
            <div key={current.text} className={[s.teachers, current.id === 0 ? s.teachers_first : '', current.id === 5 ? s.teachers_last : ''].join(' ')}>
                <img className={s.teachers__img} src={current.img.src} alt="" />
                <h2 className={s.teachers__name}>{current.text}</h2>
            </div>
        )
    })
    return (
        <div className={s.team}>
            <div className={s.team__info}>
                <header className={s.team__header}>
                    <h2 className={s.team__title}>НАША КОМАНДА</h2>
                    <p className={s.team__subtitle}>Каждый из нас — талантливый педагог и признанный эксперт в своей области</p>
                    <div className={s.team__button}>
                        <CustomButton text='УЗНАТЬ ЛУЧШЕ' />
                    </div>
                </header>
                <div className={s.team__list}>
                    {resultTeachers}
                </div>
            </div>
        </div>
    );
};

export default Team;