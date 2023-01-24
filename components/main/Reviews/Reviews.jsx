import React from 'react';

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// img
import img from '../../../public/images/main/reviews/elena.png'
// Style
import s from './Reviews.module.scss'

const Reviews = ({ reviews, error }) => {
    console.log(reviews[0].length)
    // Настройки слайдера
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const resultData = reviews[0]?.map(current => {
        return (
            <div key={current.text} className={s.item}>
                <p className={s.item__text}>{current.text}</p>
                <div className={s.item__info}>
                    <img className={s.item__img} src={img.src} alt="" />
                    <h2 className={s.item__name}>{current.fullname}</h2>
                    <p className={s.item__post}>{current.vacancy}</p>
                </div>
            </div>
        )
    })

    const sliderRef = React.createRef()

    return (
        <div className={s.reviews}>
            <div className={s.reviews__info}>
                <h2 className={s.reviews__title}>о нас <span className={s.reviews__title_span}>говорят</span></h2>
                {
                    error ?
                        <div className={s.error}>
                            <h2>Произошла ошибка на сервере, свяжитесь с нами и мы её решим</h2>
                            <h2>{error.status}</h2>
                            <h2>{error.error}</h2>
                        </div>
                        :
                        reviews[0].length > 0 ?
                            <div className={s.reviews__wrapper}>
                                <button onClick={() => sliderRef.current.slickPrev()} className={s.reviews__button}>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="path-1-inside-1_1_118" fill="white">
                                            <path d="M0 17.021L17.0208 0.000160876L34.6985 17.6778L17.6777 34.6987L0 17.021Z" />
                                        </mask>
                                        <path d="M0 17.021L-2.12132 14.8997L-4.24264 17.021L-2.12132 19.1423L0 17.021ZM2.12132 19.1423L19.1422 2.12148L14.8995 -2.12116L-2.12132 14.8997L2.12132 19.1423ZM19.799 32.5773L2.12132 14.8997L-2.12132 19.1423L15.5563 36.82L19.799 32.5773Z" fill="white" mask="url(#path-1-inside-1_1_118)" />
                                    </svg>
                                </button>
                                <Slider ref={sliderRef} className={s.reviews__slider} {...settings}>
                                    {resultData}
                                </Slider>
                                <button onClick={() => sliderRef.current.slickNext()} className={s.reviews__button}>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="path-1-inside-1_1_119" fill="white">
                                            <path d="M34.6992 17.6777L17.6784 34.6986L0.000714305 17.0209L17.0215 6.51479e-05L34.6992 17.6777Z" />
                                        </mask>
                                        <path d="M34.6992 17.6777L36.8205 19.7991L38.9419 17.6777L36.8205 15.5564L34.6992 17.6777ZM32.5779 15.5564L15.5571 32.5772L19.7997 36.8199L36.8205 19.7991L32.5779 15.5564ZM14.9002 2.12139L32.5779 19.7991L36.8205 15.5564L19.1429 -2.12126L14.9002 2.12139Z" fill="white" mask="url(#path-1-inside-1_1_119)" />
                                    </svg>
                                </button>
                            </div>
                            :
                            <h2 className={s.reviews__none}>Нет ни одного отзыва, но вы можете его добавить</h2>
                }
            </div>
        </div>
    );
};

export default Reviews;