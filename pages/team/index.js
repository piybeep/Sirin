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

        const data = await Promise.all(store.dispatch(teamAPI.util.getRunningQueriesThunk()))

        if (data[0].data){
            return {
                props: { data: data[0].data }
            }
        }
    }
)

const index = ({ data }) => {
    return (
        <div>
            <Preview title='познакомьтесь' textOne='c' titleSpan='нашей' textTwo='командой' />
            <List text='узнать лучше' data={data} />
        </div>
    );
};

export default index;