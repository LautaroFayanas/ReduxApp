import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'counter',
  initialState : {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      state.counter  += 1
    },
    decrement: (state) => {
      state.counter  -= 1
    },
    incrementByDos: (state) => {
      state.counter  += 2
    }
  }
})

export const { increment , decrement , incrementByDos  } = CounterSlice.actions
