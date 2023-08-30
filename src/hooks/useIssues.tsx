import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toNextPage, updateIssues } from 'redux/issuesSlice'
import { RootState } from 'redux/store'
import type { IssueListResponseType, Issues } from 'types'
import octokit, { OWNER, REPO } from 'utils/octokit'

const useIssues = (): [Issues, VoidFunction] => {
  const dispatch = useDispatch()
  const { issues, currentPage } = useSelector((state: RootState) => state.issues)

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
    fetch()
  }, [fetch])

  return [issues, moveToNextPage]
}

export default useIssues
