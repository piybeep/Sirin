import React from 'react';
import { fetchAllNews, fetchCurrentNews, newsAPI } from '../../src/news/newsService';
import { wrapper } from '../../src/store/store';
// Component
import Info from '../../components/NewsItem/Info/Info';
import Slider from '../../components/NewsItem/Slider/Slider';
import AllNews from '../../components/NewsItem/AllNews/AllNews';
import Head from 'next/head';

// SSR
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const id = context.params.id
        store.dispatch(fetchCurrentNews.initiate(id));
        store.dispatch(fetchAllNews.initiate({ start: id }))

        const [currentNews, allNews] = await Promise.all(store.dispatch(newsAPI.util.getRunningQueriesThunk()));

        if (currentNews.isError) {
            return {
                props: { error: currentNews.error }
            }
        }
        if (allNews.isError) {
            return {
                props: { error: allNews.error }
            }
        }

        if (allNews.data.count == Number(id) || allNews.data.count - 1 == Number(id) || allNews.data.count <= 12) {
            store.dispatch(fetchAllNews.initiate({ page: Math.floor(id / 12) === 0 ? 1 : Math.floor(id / 12) }))
            const [otherNews] = await Promise.all(store.dispatch(newsAPI.util.getRunningQueriesThunk()));

            return {
                props: { currentNews: currentNews.data, id: context.params.id, allNews: otherNews.data }
            }
        }

        return {
            props: { currentNews: currentNews.data, id: context.params.id, allNews: allNews.data }
        }
    }
);

const id = ({ currentNews, allNews, error }) => {

    if (error) {
        console.error(error)
        return (<>  </>)
    }

    return (
        <div>
            <Head>
                <title>{currentNews.title}</title>
            </Head>
            <Info currentNews={currentNews} />
            <Slider currentNews={currentNews} />
            <AllNews allNews={allNews} />
        </div>
    );
};

export default id;