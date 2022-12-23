import { contactsAPI, fetchContact } from "../../src/contacts/contacts"
import { wrapper } from "../../src/store/store"

// SSR for team
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(fetchContact.initiate())
        const contacts = await Promise.all(store.dispatch(contactsAPI.util.getRunningQueriesThunk()))

        return {
            props: { contacts: contacts }
        }
    }
)