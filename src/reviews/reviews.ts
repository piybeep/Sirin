import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const reviewsAPI = createApi({
    reducerPath: 'reviewsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        getReviews: build.query({
            query: () => ({
                url: 'reviews',
            })
        })
    }),
})

export const { getReviews } = reviewsAPI.endpoints