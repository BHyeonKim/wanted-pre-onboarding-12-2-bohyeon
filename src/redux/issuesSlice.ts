import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Issues } from 'types/types'

export interface IssuesState {
  issues: Issues
}

const initialState: IssuesState = {
  issues: [],
}

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    updateIssues: (state, action: PayloadAction<Issues>) => {
      state.issues = [...state.issues, ...action.payload]
    },
  },
})

export const { updateIssues } = issuesSlice.actions

export default issuesSlice.reducer
