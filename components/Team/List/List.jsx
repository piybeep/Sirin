import React from 'react';

// components
import CustomButton from '../../CustomButton/CustomButton'
// Img
import img from '../../../public/team/image.png'
// Style
import s from './List.module.scss'

const List = () => {

    const data = [
        {
            id: 0,
            img: img,
            FIO: 'Давыдова Ирина Сергеевна',
            dolj: 'Балетмейстер, педагог-репетитор и основатель ансамбля'
        },
        {
            id: 1,
            img: img,
            FIO: 'Фокина Екатерина Сергеевна',
            dolj: 'Директор ансамбля, организатор и костюмер'
        },
        {
            id: 2,
            img: img,
            FIO: 'Терентьева Валентина Валерьевна',
            dolj: 'Педагог ансамбля по хореографии'
        }
    ]

    const resultData = data.map(current => {
        return(
            <div className={s.item}>
                <img className={s.item__img} src={current.img.src} />
                <h2 className={s.item__name}>{current.FIO}</h2>
                <h3 className={s.item__text}>{current.dolj}</h3>
                <div className={s.item__button}>
                    <CustomButton text='узнать лучше'/>
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