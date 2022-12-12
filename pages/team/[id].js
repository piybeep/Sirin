import React, { useEffect, useState } from 'react';
// component
import Preview from '../../components/Educator/Preview/Preview';
import Info from '../../components/Educator/Info/Info';
import Slider from '../../components/Educator/Slider/Slider'
import { useRouter } from 'next/router';
import { personAPI } from '../../src/team/CurrentPerson';

const id = () => {
    const router = useRouter()
    const [id, setId] = useState(0)
    const { data: person } = personAPI.useFetchPersonQuery(id)

    useEffect(() => {
        if (router.isReady) {
            setId(router.query.id)
        }
    }, [router.isReady])


    return (
        <>
            <Preview info={person} />
            <Info />
            <Slider />
        </>
    );
};

export default id;