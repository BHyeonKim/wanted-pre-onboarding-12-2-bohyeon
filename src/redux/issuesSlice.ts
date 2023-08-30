import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Issues } from 'types'

export interface IssuesState {
  issues: Issues
  currentPage: number
}

const initialState: IssuesState = {
  issues: [],
  currentPage: 1,
}

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    updateIssues: (state, action: PayloadAction<Issues>) => {
      state.issues = [...state.issues, ...action.payload]
    },
    toNextPage: (state) => {
      state.currentPage += 1
    },
  },
})

export const { updateIssues, toNextPage } = issuesSlice.actions

export default issuesSlice.reducer
