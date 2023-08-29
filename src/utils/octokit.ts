import { Octokit } from 'octokit'

const instance = new Octokit({
  auth: import.meta.env.VITE_OCTOKIT_TOKEN,
})

export default instance
