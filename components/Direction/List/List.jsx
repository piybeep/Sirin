import React from 'react';
// Component
import CustomButton from '../../CustomButton/CustomButton';
// Img
import test1 from '../../../public/direction/1.png'
import test2 from '../../../public/direction/2.png'
// Style
import s from './List.module.scss'

const List = () => {

    const data = [
        {
            id: 0,
            img: test1,
            text: 'Основы классического танца'
        },
        {
            id: 1,
            img: test2,
            text: 'Народно-сценический танец'
        }
    ]

    const resultData = data.map(current => {
        return(
            <div key={current.text} className={s.item}>
                <img className={s.item__img} src={current.img.src}/>
                <h2 className={s.item__text}>{current.text}</h2>
                <div className={s.item__button}>
                    <CustomButton text='ПОДРОБНЕЕ'/>
                </div>
            </div>
        )
    })

    return (
        <div className={s.list}>
            {resultData}
        </div>
    );
};

export default List;