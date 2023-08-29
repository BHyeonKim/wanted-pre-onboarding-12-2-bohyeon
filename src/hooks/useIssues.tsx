import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toNextPage, updateIssues } from 'redux/issuesSlice'
import { RootState } from 'redux/store'
import type { IssueListResponseType, Issues } from 'types/types'
import octokit from 'utils/octokit'

const useIssues = (): [Issues, VoidFunction] => {
  const dispatch = useDispatch()
  const { issues, currentPage } = useSelector((state: RootState) => state.issues)

  const moveToNextPage = () => {
    dispatch(toNextPage())
  }

  const fetch = useCallback(async () => {
    const { data } = (await octokit.request(
      `GET /repos/{owner}/{repo}/issues?page=${currentPage}&sort=comments`,
      {
        owner: 'facebook',
        repo: 'react',
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
