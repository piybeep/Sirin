import React from 'react';
import PreviewContacts from '../../components/PreviewContacts/PreviewContacts';

// for SSR
import { wrapper } from "../../src/store/store";
import { contactsAPI, fetchContact } from "../../src/contacts/contacts";
import Head from "next/head";
import Find from '../../components/Find/Find';


// SSR for team
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(fetchContact.initiate());
        const [contacts] = await Promise.all(
            store.dispatch(contactsAPI.util.getRunningQueriesThunk()),
        );

        return {
            props: {
                contacts: !contacts.isError && contacts.data,
                contactsError: contacts.isError && contacts.error,
            },
        };
    },
);

const index = ({ contacts, contactsError }) => {
    return (
        <div>
            <Head>
                <title>Ансамбль Сирин - Контакты</title>
            </Head>

            <PreviewContacts contacts={contacts} error={contactsError} />
            <Find />
        </div>
    );
};

export default index;