import { createSlice } from '@reduxjs/toolkit'

import { removeItemFromArrayByIndex, findIndexSolveById } from './solveSlice.utils'

/*
format times
{
    id: 0,
    milliseconds: Number
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
    resetSolves: (state) => {
      return {
        ...state,
        solves: []
      }
    },
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
    },
    removeSolveById: (state, action) => {
      const tempStateSolves = JSON.parse(JSON.stringify(state.solves))
      const index = findIndexSolveById(tempStateSolves, action.payload)
      const newSolvesState = removeItemFromArrayByIndex(tempStateSolves, index)
      return {
        ...state,
        solves: newSolvesState
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  insertTime,
  updateCurrentScramble,
  updateChangeScramble,
  removeSolveById,
  resetSolves,
} = solvesSlice.actions

export default solvesSlice.reducer