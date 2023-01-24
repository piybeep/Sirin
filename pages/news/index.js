import React from 'react';
import { fetchAllNews, fetchPreviewNews, newsAPI } from '../../src/news/newsService';
import { wrapper } from '../../src/store/store';
// Component
import Preview from '../../components/News/Preview/Preview';
import List from '../../components/News/List/List';
import Flags from '../../components/News/Flags/Flags';

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(fetchAllNews.initiate({page: context.query.page ?? 1}));
        store.dispatch(fetchPreviewNews.initiate())

        const [allNews, previewNews] = await Promise.all(store.dispatch(newsAPI.util.getRunningQueriesThunk()));

        if (allNews.isError) {
            return {
                props: { error: allNews.error }
            }
        }
        if (previewNews.isError) {
            return {
                props: { error: previewNews.error }
            }
        }
        return {
            props: { allNews: allNews.data, previewNews: previewNews.data }
        }
    }
);

const news = ({ allNews, previewNews, error }) => {
    if (error) {
        return (
            <div style={{display: 'flex', alignItems:'center', flexDirection: 'column', rowGap: '20px', height: '100vh', justifyContent: 'center' }}>
                <h2>Произошла ошибка, сообщите нам и мы её решим</h2>
                <p>{error.status}</p>
                <p>{error.error}</p>
            </div>
        )
    }
    return (
        <div>
            <Preview previewNews={previewNews.data[0]} />
            <List news={allNews.data} />
            <Flags count={allNews.count} />
        </div>
    );
};

export default news;