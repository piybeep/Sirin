import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IPerson } from '../models/IPerson'

export const personAPI = createApi({
    reducerPath: 'personAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        fetchPerson: build.query<IPerson[], number>({
            query: (id: number) => ({
                url: `/users/${id}`
            })
        })
    })
})