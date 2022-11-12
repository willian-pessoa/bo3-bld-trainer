import { createSlice } from '@reduxjs/toolkit'

/*
format times
{
    id: 0,
    time: "00:00.00",
    memo: "00:00.00",
    exec: "00:00.00",
    dnf: false,
    plus2: false,
  }
*/

const initialState = {
  solves: []
}

export const solvesSlice = createSlice({
  name: "solves",
  initialState,
  reducers: {
    insertTime: (state, action) => {
      //const tempArr = state.solves
      //tempArr.push(action.payload)
      return {
        ...state,
        solves: action.payload
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const {
  insertTime,
} = solvesSlice.actions

export default solvesSlice.reducer