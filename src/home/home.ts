import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { HYDRATE } from "next-redux-wrapper";

interface fetchVideoProps {
    url_video?: string,
}

export const homeAPI = createApi({
    reducerPath: 'homeApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        fetchHomeVideo: build.query({
            query: () => {
                return ({
                    url: `home`,
                })
            }
        }),
    })
})

export const { fetchHomeVideo } = homeAPI.endpoints