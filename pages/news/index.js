import React, { useState } from 'react';
import { fetchAllNews, newsAPI } from '../../src/news/newsService';
import { wrapper } from '../../src/store/store';
// Component
import Preview from '../../components/News/Preview/Preview';
import List from '../../components/News/List/List';
import Flags from '../../components/News/Flags/Flags';

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(fetchAllNews.initiate());

        const data = await Promise.all(store.dispatch(newsAPI.util.getRunningQueriesThunk()));

        if (data[0].data)
        {
            return {
                props: { allNews: data[0].data },
            };
        }
    }
);


const news = ({ allNews, test }) => {
    console.log(test)
    const [countryPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)

    const lastCountryIndex = currentPage * countryPerPage
    const firstCountryIndex = lastCountryIndex - countryPerPage
    const currentCountries = allNews?.slice(firstCountryIndex, lastCountryIndex)

    return (
        <div>
            <Preview />
            <List news={currentCountries} />
            <Flags countryPerPage={countryPerPage} setCurrentPage={setCurrentPage} allNews={allNews} />
        </div>
    );
};

export default news;