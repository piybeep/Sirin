import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Style
import s from './AllNews.module.scss'

// img
import img1 from '../../../public/images/news/allNews/allNews1.png'
import img2 from '../../../public/images/news/allNews/allNews2.png'
import img3 from '../../../public/images/news/allNews/allNews3.png'
import img4 from '../../../public/images/news/allNews/allNews4.png'

const AllNews = () => {

    const swiperRef = useRef()

    const data = [
        {
            id: 0,
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»',
            date: '21.01.2022',
            img: img1
        },
        {
            id: 1,
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»',
            date: '18.01.2022',
            img: img2
        },
        {
            id: 2,
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»',
            date: '31.12.2021',
            img: img3
        },
        {
            id: 3,
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»',
            date: '21.01.2022',
            img: img4
        },
        {
            id: 4,
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»',
            date: '21.01.2022',
            img: img1
        },
        {
            id: 5,
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»',
            date: '18.01.2022',
            img: img2
        },
        {
            id: 6,
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»',
            date: '31.12.2021',
            img: img1
        },
        {
            id: 7,
            text: 'ГРАН-ПРИ на марафоне резидентов Melon Kids «Мы внуки Великой Победы»',
            date: '21.01.2022',
            img: img2
        }
    ]

    const resultData = data.map(current => {
        return (
            <SwiperSlide className={s.allNews__slide} key={current.id}>
                <Link href={`/news/${current.id}`}>
                    <img className={s.allNews__img} src={current.img.src} alt="Картинка" />
                    <p className={s.allNews__date}>{current.date}</p>
                    <h2 className={s.allNews__text}>{current.text}</h2>
                </Link>
            </SwiperSlide >
        )
    })

    const [windowWidth, setWindowWidth] = useState(0)

    const windowScreen = () => {
        if (window.screen.width < 1421 && window.screen.width > 1024){
            setWindowWidth(57)
        }
        else{
            setWindowWidth(27)
        }
    }

    useEffect(() => {
        windowScreen()
    },[])


    return (
        <div className={s.allNews}>
            <h2 className={s.allNews__title}>другие новости</h2>
            <div className={s.allNews__info}>
                <button onClick={() => swiperRef.current.slidePrev()} className={s.allNews__button}>
                    <svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.0208 0L0 17.0208L17.6777 34.6985L19.799 32.5772L4.24264 17.0208L19.1422 2.12132L17.0208 0Z" fill="black" />
                    </svg>
                </button>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    slidesPerView={'auto'}
                    spaceBetween={windowWidth}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    className={s.allNews__swiper}
                >
                    {resultData}
                </Swiper>
                <button onClick={() => swiperRef.current.slideNext()} className={s.allNews__button}>
                    <svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.57698 34.6985L20.5978 17.6777L2.92015 0L0.798828 2.12132L16.3552 17.6777L1.45566 32.5772L3.57698 34.6985Z" fill="black" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AllNews;