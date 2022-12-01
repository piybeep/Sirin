import React from 'react';

// Кнопка
import CustomButton from '../../../CustomButton/CustomButton';
// Style
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <h2 className={s.header__title}>ЗАПИШИСЬ НА КУРСЫ</h2>
            <p className={s.header__subtitle}>Запишитесь на курсы и реализуйте свой творческий потенциал!</p>
            <div className={s.header__button}>
                <CustomButton text='ПОДАТЬ ЗАЯВКУ' />
            </div>
        </div>
    );
};

export default Header;