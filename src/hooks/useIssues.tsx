import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toNextPage, updateIssues } from 'redux/issuesSlice'
import type { IssueListResponseType, Issues } from 'types'
import octokit, { OWNER, REPO } from 'utils/octokit'

const useIssues = (): [Issues, VoidFunction] => {
  const dispatch = useAppDispatch()
  const { issues, currentPage, isLoaded } = useAppSelector((state) => state.issues)

  const moveToNextPage = useCallback(() => {
    dispatch(toNextPage())
  }, [dispatch])

  const fetch = useCallback(async () => {
    const { data } = (await octokit.request(
      `GET /repos/{owner}/{repo}/issues?page=${currentPage}&sort=comments`,
      {
        owner: OWNER,
        repo: REPO,
      },
    )) as IssueListResponseType

    dispatch(updateIssues(data))
  }, [currentPage, dispatch])

  useEffect(() => {
    if (isLoaded) return
    fetch()
  }, [fetch, isLoaded])

  return [issues, moveToNextPage]
}

export default useIssues
