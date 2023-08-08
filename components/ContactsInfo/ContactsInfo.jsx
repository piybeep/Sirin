import classNames from 'classnames';
import Image from 'next/image';
import React, { useEffect } from 'react';

import s from './ContactsInfo.module.scss'

import img1 from '../../public/images/contactsInfo/Курская1.png'
import img2 from '../../public/images/contactsInfo/Чечулина1.png'


import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const ContactsInfo = ({ adress, setAdress }) => {
    const [swiperState, setSwiperState] = React.useState()
    const [swiperIndex, setSwiperIndex] = React.useState()

    const [data, setData] = React.useState(null)

    useEffect(() => {
        adress.number == 1 ? setData(dataOne) : setData(dataTwo)
    }, [adress])

    const dataOne = [
        {
            id: 0,
            title: 'м. Курская, \n ул. Земляной Вал д.27, стр.3',
            list: [
                'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.',
                'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
                'Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.',
                'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.'
            ],
            imgs: [
                {
                    id: 0,
                    img: img1
                },
                {
                    id: 1,
                    img: img1
                }
            ]
        }
    ]

    const dataTwo = [
        {
            id: 0,
            title: 'ул. Чечулина, д.10, \n ГБУ ЦКС «Южное Измайлово»',
            list: [
                'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.',
                'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.',
                'Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.',
                'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.'
            ],
            imgs: [
                {
                    id: 0,
                    img: img2
                },
                {
                    id: 1,
                    img: img2
                }
            ]
        }
    ]

    return (
        <div className={classNames(s.wrapper, {
            [s.wrapper__open]: adress.isShow
        })} onClick={() => setAdress({ ...adress, isShow: false })}>
            {
                data && data.map(current => (
                    <div onClick={e => e.stopPropagation()} key={current.id} className={s.wrapper__info}>
                        <button className={s.close} onClick={() => setAdress({ ...adress, isShow: false })}>Закрыть</button>
                        <Swiper className={s.slider}
                            onSwiper={swiper => {
                                setSwiperState(swiper)
                                setSwiperIndex({ ...swiper })
                            }}
                            onSlideChange={swiper => {
                                setSwiperState(swiper)
                                setSwiperIndex({ ...swiper })
                            }}
                        >
                            {
                                current?.imgs?.map((current, index) => (
                                    <SwiperSlide key={index}>
                                        <Image className={s.slider__img} src={current.img} alt={'Картинка'} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className={s.info}>
                            <h2 className={s.info__title}>{current.title}</h2>
                            <div className={s.list}>
                                <h2 className={s.list__title}>Как нас найти?</h2>
                                <ul className={s.list__ul}>
                                    {
                                        current?.list?.map((current, index) => (
                                            <li key={index} className={s.list__text}>{current}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={s.pagination}>
                            <svg onClick={() => swiperState.slidePrev()} className={s.pagination__button} width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <mask id="path-1-inside-1_201_940" fill="white">
                                        <path d="M0 14.0212L13.6167 0.404572L27.7588 14.5467L14.1421 28.1634L0 14.0212Z" />
                                    </mask>
                                    <path d="M0 14.0212L-2.12132 11.8999L-4.24264 14.0212L-2.12132 16.1426L0 14.0212ZM2.12132 16.1426L15.738 2.52589L11.4953 -1.71675L-2.12132 11.8999L2.12132 16.1426ZM16.2635 26.0421L2.12132 11.8999L-2.12132 16.1426L12.0208 30.2847L16.2635 26.0421Z" fill="black" mask="url(#path-1-inside-1_201_940)" />
                                </g>
                            </svg>
                            <div className={s.pagination__list}>
                                {
                                    current.imgs.map((current, index) => (
                                        <span key={index} onClick={() => swiperState.slideTo(index)}
                                            className={classNames(s.pagination__dot, {
                                                [s.pagination__dot_active]: swiperIndex && swiperIndex.activeIndex === index
                                            })}
                                        ></span>
                                    ))
                                }
                            </div>
                            <svg onClick={() => swiperState.slideNext()} className={s.pagination__button} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <mask id="path-1-inside-1_201_941" fill="white">
                                        <path d="M28.7578 14.6777L15.1411 28.2944L0.999008 14.1523L14.6157 0.535599L28.7578 14.6777Z" />
                                    </mask>
                                    <path d="M28.7578 14.6777L30.8791 16.7991L33.0005 14.6777L30.8791 12.5564L28.7578 14.6777ZM26.6365 12.5564L13.0198 26.1731L17.2625 30.4157L30.8791 16.7991L26.6365 12.5564ZM12.4944 2.65692L26.6365 16.7991L30.8791 12.5564L16.737 -1.58572L12.4944 2.65692Z" fill="black" mask="url(#path-1-inside-1_201_941)" />
                                </g>
                            </svg>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default ContactsInfo;