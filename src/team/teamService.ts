import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { ITeam } from '../models/ITeam'

export const teamAPI = createApi({
    reducerPath: 'teamApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        fetchAllTeam: build.query<ITeam[], number>({
            query: (limit: number) => ({
                url: '/users',
                params: {
                    _limit: limit
                }
            })
        })
    })
})