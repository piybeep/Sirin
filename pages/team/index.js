import React from 'react';
import Preview from '../../components/Team/Preview/Preview';
import List from '../../components/Team/List/List'

// for SSR
import { fetchAllTeam, teamAPI } from '../../src/team/teamService'
import { wrapper } from '../../src/store/store';

// SSR
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(fetchAllTeam.initiate())

        const [data] = await Promise.all(store.dispatch(teamAPI.util.getRunningQueriesThunk()))

        if (data.isError){
            return {
                props: { error: data.error }
            }
        }
        return {
            props: { data: data.data }
        }
    }
)

const index = ({ data, error }) => {
    if (error){
        return(
            <div style={{display: 'flex', alignItems:'center', flexDirection: 'column', rowGap: '20px', height: '100vh', justifyContent: 'center' }}>
                <h2>Произошла ошибка, сообщите нам и мы её решим</h2>
                <p>{error.status}</p>
                <p>{error.error}</p>
            </div>
            )
    }
    return (
        <div>
            <Preview title='познакомьтесь' textOne='c' titleSpan='нашей' textTwo='командой' />
            <List text='узнать лучше' data={data} />
        </div>
    );
};

export default index;