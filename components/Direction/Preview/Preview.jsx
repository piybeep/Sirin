import React from 'react';

// Style
import s from './Preview.module.scss'

const Preview = () => {
    return (
        <div className={s.preview}>
            <h2 className={s.preview__title}>
                направления
                <br />
                <span className={s.preview__title_span}>обучения </span>
            </h2>
        </div>
    );
};

export default Preview;