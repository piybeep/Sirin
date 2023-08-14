import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { HYDRATE } from "next-redux-wrapper"
import { ITeam } from '../models/ITeam'

export const teamAPI = createApi({
    reducerPath: 'teamApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        fetchAllTeam: build.query<ITeam[], number>({
            query: () => ({
                url: 'crew',
            })
        }),
        fetchCurrentTeam: build.query({
            query: (id: number) => ({
                url: `crew/${id}`
            })
        })
    })
})

export const { fetchAllTeam, fetchCurrentTeam } = teamAPI.endpoints