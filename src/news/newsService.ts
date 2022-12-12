import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INews } from '../models/INews'

export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
    endpoints: (build) => ({
        fetchAllNews: build.query({
            query: () => ({
                url: '/all',
            })
        }),
    })
})