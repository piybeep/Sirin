import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { HYDRATE } from "next-redux-wrapper"
import { ITeam } from '../models/ITeam'

export const teamAPI = createApi({
    reducerPath: 'teamApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        fetchAllTeam: build.query<ITeam[], number>({
            query: (limit: number) => ({
                url: '/users',
                params: {
                    _limit: limit
                }
            })
        }),
        fetchCurrentTeam: build.query({
            query: (id: number) => ({
                url: `/users/${id}`
            })
        })
    })
})

export const { fetchAllTeam, fetchCurrentTeam } = teamAPI.endpoints