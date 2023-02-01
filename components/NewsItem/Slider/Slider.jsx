import React, { useEffect, useRef, useState } from 'react';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// img
import img1 from '../../../public/images/news/slider/slider1.png'
import img2 from '../../../public/images/news/slider/slider2.png'
// Style
import s from './Slider.module.scss'

const Slider = ({ currentNews }) => {

    if (currentNews.images.length <= 0) {
        return (
            <div className={s.slider}>
                <h2>фотографий пока нет</h2>
            </div>
        )
    }

    const swiperRef = useRef()

    // Для отступа у слайдера
    const [windowWidth, setWindowWidth] = useState(0)

    const windowScreen = () => {
        if (window.screen.width < 1920 && window.screen.width > 1420) {
            setWindowWidth(30)
        }
        else if (window.screen.width < 1420 && window.screen.width > 1024) {
            setWindowWidth(23)
        }
        else if (window.screen.width < 1024 && window.screen.width > 768) {
            setWindowWidth(15)
        }
        else if (window.screen.width < 768 && window.screen.width > 420) {
            setWindowWidth(17)
        }
        else {
            setWindowWidth(13)
        }
    }

    useEffect(() => {
        windowScreen()
    }, [])

    const data = [
        {
            id: 0,
            img: img1
        },
        {
            id: 1,
            img: img2
        },
        {
            id: 2,
            img: img1
        },
        {
            id: 3,
            img: img2
        }
    ]

    const resultData = currentNews.images.map(current => {
        return (
            <SwiperSlide key={current.id}>
                <img className={s.slider__img} src={current.img.src} alt="Картинка" />
            </SwiperSlide>
        )
    })

    return (
        <div className={s.slider}>
            <button onClick={() => swiperRef.current.slidePrev()} className={s.slider__button} >
                <svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0208 0L0 17.0208L17.6777 34.6985L19.799 32.5772L4.24264 17.0208L19.1422 2.12132L17.0208 0Z" fill="black" />
                </svg>
            </button>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                slidesPerView={2}
                spaceBetween={windowWidth}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                className={s.slider__swiper}
            >
                {resultData}
            </Swiper>
            <button onClick={() => swiperRef.current.slideNext()} className={s.slider__button}>
                <svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.57698 34.6985L20.5978 17.6777L2.92015 0L0.798828 2.12132L16.3552 17.6777L1.45566 32.5772L3.57698 34.6985Z" fill="black" />
                </svg>
            </button>
        </div>
    );
};

export default Slider;