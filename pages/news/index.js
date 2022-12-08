import React from 'react';
// Component
import Preview from '../../components/News/Preview/Preview';
import List from '../../components/News/List/List';
import Flags from '../../components/News/Flags/Flags';

const news = () => {

    const data = [
        {
            id: 0,
            text: 'test 1'
        },
        {
            id: 1,
            text: 'test 2'
        },
        {
            id: 2,
            text: 'test 3'
        }
    ]

    return (
        <div>
            <Preview/>
            <List/>
            <Flags/> 
        </div>
    );
};

export default news;