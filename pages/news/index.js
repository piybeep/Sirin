import React from 'react';
import Link from 'next/link'

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
            {data.map(current => {
                return (
                    <Link key={current.id} href={`/news/${current.id}`}>{current.text}</Link>
                )
            })}
        </div>
    );
};

export default news;