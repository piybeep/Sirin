import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const contactsAPI = createApi({
    reducerPath: 'contactsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        fetchContact: build.query({
            query: () => ({
                url: 'contacts',
            })
        })
    }),
})

export const { fetchContact } = contactsAPI.endpoints

export const { useFetchContactQuery } = contactsAPI