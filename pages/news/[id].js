import React from 'react';
import { fetchCurrentNews, newsAPI } from '../../src/news/newsService';
import { wrapper } from '../../src/store/store';
// Component
import Info from '../../components/NewsItem/Info/Info';
import Slider from '../../components/NewsItem/Slider/Slider';
import AllNews from '../../components/NewsItem/AllNews/AllNews';

// Style
import s from './idMedia.module.scss'

// SSR
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const id = context.params.id
        store.dispatch(fetchCurrentNews.initiate(id));

        const data = await Promise.all(store.dispatch(newsAPI.util.getRunningQueriesThunk()));

        return {
            props: { data: data[0].data, id: context.params.id },
        };
    }
);

const id = ({ data, id }) => {
    console.log(data)
    console.log(id)

    return (
        <div>
            <Info />
            <div className={s.hidden}>
                <Slider />
            </div>
            <AllNews />
        </div>
    );
};

export default id;