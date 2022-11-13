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
    scramble: [String],
  }
*/

const initialState = {
  currentScramble: [""],
  solves: [],
  changeScramble: true,
}

export const solvesSlice = createSlice({
  name: "solves",
  initialState,
  reducers: {
    insertTime: (state, action) => {
      return {
        ...state,
        solves: action.payload
      }
    },
    updateCurrentScramble: (state, action) => {
      return {
        ...state,
        currentScramble: action.payload
      }
    },
    updateChangeScramble: (state, action) => {
      return {
        ...state,
        changeScramble: action.payload
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  insertTime,
  updateCurrentScramble,
  updateChangeScramble,
} = solvesSlice.actions

export default solvesSlice.reducer