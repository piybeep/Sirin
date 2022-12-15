import React from 'react';
// redux
import { wrapper } from '../../src/store/store';
import { fetchCurrentTeam, teamAPI } from '../../src/team/teamService';
// component
import Preview from '../../components/Educator/Preview/Preview';
import Info from '../../components/Educator/Info/Info';
import Slider from '../../components/Educator/Slider/Slider'

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const id = context.params.id
        store.dispatch(fetchCurrentTeam.initiate(id))

        const person = await Promise.all(store.dispatch(teamAPI.util.getRunningQueriesThunk()))

        return {
            props: { person: person[0].data }
        }
    }
)

const id = ({ person }) => {
    return (
        <>
            <Preview
            personInfo={person} 
            />
            <Info />
            <Slider />
        </>
    );
};

export default id;