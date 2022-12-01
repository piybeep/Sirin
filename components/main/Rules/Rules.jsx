import React from 'react';
import CustomButton from '../../CustomButton/CustomButton';

// Style
import s from './Rules.module.scss'

const Rules = () => {
    return (
        <div className={s.rules}>
            <h2 className={s.rules__title}>ПРАВИЛА АНСАМБЛЯ</h2>
            <h3 className={s.rules__subtitle}>В нашем коллективе существует ряд общепринятых и важных правил</h3>
            <div className={s.rules__button}><CustomButton text='ОЗНАКОМИТЬСЯ'/></div>
        </div>
    );
};

export default Rules;