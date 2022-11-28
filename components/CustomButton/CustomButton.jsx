import React from 'react';

// Style
import s from './CustomButton.module.scss'

const CustomButton = ({ text }) => {
    return (
        <button className={s.customButton}>{text}</button>
    );
};

export default CustomButton;