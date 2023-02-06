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

        const [person] = await Promise.all(store.dispatch(teamAPI.util.getRunningQueriesThunk()))

        if (person.isError) {
            return {
                props: { error: person.error }
            }
        }
        return {
            props: { person: person.data }
        }
    }
)

const id = ({ person, error }) => {
    if (error) {
        console.error(error)
        return (<></>)
    }

    return (
        <>
            <Preview
                personInfo={person}
            />
            <Info
                personInfo={person}
            />
            <Slider images={person.images}/>
        </>
    );
};

export default id;