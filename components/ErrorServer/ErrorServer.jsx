import React from 'react';

//Style
import s from './ErrorServer.module.scss'

const ErrorServer = ({statusError, textError}) => {
    return (
        <div className={s.error}>
            <h2 className={s.error__title}>Произошла ошибка</h2>
            <p className={s.error__text}>{statusError}</p>
            <p className={s.error__text}>{textError}</p>
        </div>
    );
};

export default ErrorServer;