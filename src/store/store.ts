import { createWrapper } from "next-redux-wrapper";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { teamAPI } from '../team/teamService'
import { personAPI } from '../team/CurrentPerson'
import { newsAPI } from "../news/newsService";

import openSlice from '../form/form'

const rootReducer = combineReducers({
    [teamAPI.reducerPath]: teamAPI.reducer,
    [personAPI.reducerPath]: personAPI.reducer,
    [newsAPI.reducerPath]: newsAPI.reducer,

    openSlice: openSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(teamAPI.middleware, personAPI.middleware, newsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });