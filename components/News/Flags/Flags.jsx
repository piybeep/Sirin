import React from 'react';

// Style
import s from './Flags.module.scss'

const Flags = () => {

    const count = 5

    let resultCount = [];

    for (let index = 0; index < count; index++) {
        resultCount.push(index + 1)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.flags}>
                <button className={s.flags__button}>
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.36279 1L0.998832 7.36396L7.36279 13.7279" stroke="black" />
                    </svg>
                </button>
                {resultCount.map(current => <h2 key={current} className={s.flags__number}>{current}</h2>)}
                <button className={s.flags__button}>
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.550293 14L6.91425 7.63604L0.550292 1.27208" stroke="black" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Flags;