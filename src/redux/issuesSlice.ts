import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import github from 'services/github'
import { Issues } from 'types'

import { RootState } from './store'

export interface IssuesState {
  issues: Issues
  currentPage: number
  loadingState: boolean
}

const initialState: IssuesState = {
  issues: [],
  currentPage: 1,
  loadingState: false,
}

export const fetchIssues = createAsyncThunk<Issues, undefined, { state: RootState }>(
  'issues/fetchIssues',
  async (_, { getState }) => {
    const { issues } = getState()
    const { data } = await github.getIssues(issues.currentPage)
    return data
  },
)

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = [...state.issues, ...action.payload]
      state.currentPage += 1
      state.loadingState = false
    })
    builder.addCase(fetchIssues.pending, (state) => {
      state.loadingState = true
    })
  },
})

export default issuesSlice.reducer
