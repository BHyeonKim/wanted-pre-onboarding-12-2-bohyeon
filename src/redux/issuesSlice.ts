import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import github from 'services/github'
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

export const fetchIssues = createAsyncThunk(
  'issues/fetchIssues',
  async (currentPage: number) => {
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
      state.isLoaded = true
    },
    toNextPage: (state) => {
      state.currentPage += 1
      state.isLoaded = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      console.log(action.payload)
      state.issues = [...state.issues, ...action.payload]
      state.isLoaded = true
    })
  },
})

export const { updateIssues, toNextPage } = issuesSlice.actions

export default issuesSlice.reducer
