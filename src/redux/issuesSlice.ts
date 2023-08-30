import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Issues } from 'types'

export interface IssuesState {
  issues: Issues
  currentPage: number
  isLoaded: boolean
}

const initialState: IssuesState = {
  issues: [],
  currentPage: 1,
  isLoaded: false,
}

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    updateIssues: (state, action: PayloadAction<Issues>) => {
      state.issues = [...state.issues, ...action.payload]
      state.isLoaded = true
    },
    toNextPage: (state) => {
      state.currentPage += 1
      state.isLoaded = false
    },
  },
})

export const { updateIssues, toNextPage } = issuesSlice.actions

export default issuesSlice.reducer
