import React from 'react';

// img
import person from '../../../public/images/educator/current.png'

// Style
import s from './Info.module.scss'

const Info = ({ personInfo }) => {
    const achievements = personInfo.achievements?.split(';')

    return (
        <div className={s.wrapper}>
            <div className={s.person}>
                <div className={s.person__info}>
                    <img className={s.person__img} src={person.src} alt='фотография' />
                    <h2 className={s.person__title}>{personInfo.fullname}</h2>
                </div>
                <p className={s.person__text}>{personInfo.vacancy}</p>
            </div>

            <div className={s.info}>
                <div className={s.info__item}>
                    <h2 className={s.info__title}>ОБРАЗОВАНИЕ</h2>
                    <p className={s.info__text}>{personInfo.education}</p>
                </div>
                <div className={s.info__item}>
                    <h2 className={s.info__title}>СТАЖ РАБОТЫ</h2>
                    <p className={s.info__text}>{personInfo.experience}</p>
                </div>
                {personInfo.achievements &&
                    <div className={s.info__item}>
                        <h2 className={s.info__title}>ДОСТИЖЕНИЯ</h2>
                        <ul className={s.info__list}>
                            {achievements.map(current => {
                                return (
                                    <li key={current} className={s.info__li}>{current}</li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Info;