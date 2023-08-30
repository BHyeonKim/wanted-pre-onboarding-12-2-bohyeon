import { Octokit } from 'octokit'

export const OWNER = 'facebook'
export const REPO = 'react'

const instance = new Octokit({
  auth: import.meta.env.VITE_OCTOKIT_TOKEN,
})

export default instance
