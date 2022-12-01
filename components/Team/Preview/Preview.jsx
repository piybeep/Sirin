import React from 'react';

// Style
import s from './Preview.module.scss'

const Preview = () => {
    return (
        <div className={s.preview}>
            <h2 className={s.preview__title}>
                познакомьтесь
                <br />
                с  <span className={s.preview__title_span}>нашей</span>  командой
            </h2>
        </div>
    );
};

export default Preview;