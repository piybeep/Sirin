import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        fetchAllNews: build.query({
            query: (page: number) => {
                return ({
                    url: `/news`,
                    params: {
                        count: 12,
                        start: (((page ?? 0) - 1) * 12) + 1,
                    }
                })
            }
        }),

        fetchCurrentNews: build.query({
            query: (id) => `/news/${id}`
        }),

        fetchPreviewNews: build.query({
            query:() => '/news?count=1'
        })
    })
})

export const { fetchAllNews, fetchCurrentNews, fetchPreviewNews } = newsAPI.endpoints