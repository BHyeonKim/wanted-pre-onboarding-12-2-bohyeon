import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import github from 'services/github'
import { Issues } from 'types'

export interface IssuesState {
  issues: Issues
  currentPage: number
  loadingState: 'loaded' | 'notLoaded' | 'loading'
}

const initialState: IssuesState = {
  issues: [],
  currentPage: 1,
  loadingState: 'notLoaded',
}

export const fetchIssues = createAsyncThunk(
  'issues/fetchIssues',
  async (currentPage: number, { dispatch }) => {
    dispatch(startFetchIssues())
    const { data } = await github.getIssues(currentPage)
    return data
  },
)

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    updateIssues: (state, action: PayloadAction<Issues>) => {
      state.issues = [...state.issues, ...action.payload]
      state.loadingState = 'loaded'
    },
    toNextPage: (state) => {
      state.currentPage += 1
      state.loadingState = 'notLoaded'
    },
    startFetchIssues: (state) => {
      state.loadingState = 'loading'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = [...state.issues, ...action.payload]
      state.loadingState = 'loaded'
    })
  },
})

export const { updateIssues, toNextPage, startFetchIssues } = issuesSlice.actions

export default issuesSlice.reducer
