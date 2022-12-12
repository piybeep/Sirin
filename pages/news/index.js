import React, { useState, useEffect } from 'react';
import { newsAPI } from '../../src/news/newsService';
// Component
import Preview from '../../components/News/Preview/Preview';
import List from '../../components/News/List/List';
import Flags from '../../components/News/Flags/Flags';

const news = () => {
    const { data: allNews, isLoading, error } = newsAPI.useFetchAllNewsQuery()

    const [countryPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)

    const lastCountryIndex = currentPage * countryPerPage
    const firstCountryIndex = lastCountryIndex - countryPerPage
    const currentCountries = allNews?.slice(firstCountryIndex, lastCountryIndex)

    console.log(allNews)

    return (
        <div>
            <Preview />
            <List news={currentCountries} />
            <Flags countryPerPage={countryPerPage} setCurrentPage={setCurrentPage} allNews={allNews} />
        </div>
    );
};

export default news;