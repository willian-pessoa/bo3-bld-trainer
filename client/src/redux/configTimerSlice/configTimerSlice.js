import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  room: "",
  twoPhases: false,
  showTime: true,
  bo3Session: 5,
  numberOfCubes: 1,
}

export const configTimerSlice = createSlice({
  name: 'configTimer',
  initialState,
  reducers: {
    updateConfigTimer: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const {
  updateConfigTimer,
} = configTimerSlice.actions

export default configTimerSlice.reducer