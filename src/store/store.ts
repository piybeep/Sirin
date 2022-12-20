import { createWrapper } from "next-redux-wrapper";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { teamAPI } from '../team/teamService'
import { newsAPI } from "../news/newsService";

import openSlice from '../form/form'
import { contactsAPI } from "../contacts/contacts";

const rootReducer = combineReducers({
    [teamAPI.reducerPath]: teamAPI.reducer,
    [newsAPI.reducerPath]: newsAPI.reducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,

    openSlice: openSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(teamAPI.middleware, newsAPI.middleware, contactsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });