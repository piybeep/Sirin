import React from 'react';
import Error from '../components/Error/Error';
import SecHeader from '../components/SecHeader/SecHeader';

export default function custom404() {
    return (
        <Error />
    )
}

custom404.getLayout = function getLayout(page) {
    return (
        <>
            <SecHeader />
            {page}
        </>
    )
}