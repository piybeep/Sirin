import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        fetchAllNews: build.query({
            query: (limit: number) => ({
                url: '/photos',
                params: {
                    _limit: 15,
                }
            })
        }),

        fetchCurrentNews: build.query({
            query: (id) => `/photos/${id}`
        })
    })
})

export const { fetchAllNews, fetchCurrentNews } = newsAPI.endpoints