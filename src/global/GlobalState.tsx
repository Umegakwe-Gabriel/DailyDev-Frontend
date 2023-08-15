import { createSlice } from '@reduxjs/toolkit'

const initialState = {
dailyState: "" || null,
toggle: false
}

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
        state.dailyState = payload
    },

    logOut: (state) =>{
        state.dailyState = null
    },

    onToggle : (state, {payload}) => {
            state.toggle = payload
    }
  }
});

export const {onToggle, logOut, createUser} = GlobalState.actions

export default GlobalState.reducer