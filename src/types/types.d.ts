import { Endpoints } from '@octokit/types'

export type IssueListResponseType =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response']

export type Issues = IssueListResponseType['data']
