import React from 'react';
import Preview from '../../components/Team/Preview/Preview';
import List from '../../components/Team/List/List'

// Img
import img from '../../public/images/team/image.png'

const index = () => {

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

    return (
        <div>
            <Preview title='познакомьтесь' textOne='c' titleSpan='нашей' textTwo='командой'/>
            <List text='узнать лучше' info={data}/>
        </div>
    );
};

export default index;