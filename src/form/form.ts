import { createSlice } from "@reduxjs/toolkit"

interface open{
    value: boolean
}

const initialState = { value: false } as open

const openSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        setOpen(state, action){
            state.value = action.payload
            return state
        },
    }
})


export const {setOpen} = openSlice.actions
export default openSlice.reducer
