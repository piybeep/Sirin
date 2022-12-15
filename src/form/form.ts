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
            // Тестовый вариант
            action.payload === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset' 
            state.value = action.payload
            return state
        },
    }
})


export const {setOpen} = openSlice.actions
export default openSlice.reducer
