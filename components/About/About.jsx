import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

// Style
import s from './About.module.scss'

const About = () => {
    return (
        <div className={s.about}>
            <h2 className={s.about__title}>МЫ – СИРИН</h2>
            <h3 className={s.about__subtitle}>Образцовый хореографический ансамбль является Лауреатом Международных и Всеросийских фестивалей</h3>
            <p className={s.about__text}>У нас большая концертная и гастрольная деятельность. Многие наши выпускники, являются студентами хореографических училищ: Школа-студия при ГААНТ имени Игоря Моисеева, МОКИ, даже успели открыть свои студии
                и успешно работают.
            </p>
            <div className={s.about__button}><CustomButton text='ПОДРОБНЕЕ О НАС'/></div>
        </div>
    );
};

export default About;