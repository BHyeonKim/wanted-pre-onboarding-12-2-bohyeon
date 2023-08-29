import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIssues } from 'redux/issuesSlice'
import { RootState } from 'redux/store'
import type { IssueListResponseType, Issues } from 'types/types'
import octokit from 'utils/octokit'

const useIssues = (initialStep: number): [Issues, Dispatch<SetStateAction<number>>] => {
  const [step, setStep] = useState(initialStep)
  const dispatch = useDispatch()
  const { issues } = useSelector((state: RootState) => state.issues)

  const fetch = useCallback(async () => {
    const { data } = (await octokit.request(
      `GET /repos/{owner}/{repo}/issues?page=${step}&sort=comments`,
      {
        owner: 'facebook',
        repo: 'react',
      },
    )) as IssueListResponseType

    dispatch(updateIssues(data))
  }, [dispatch, step])

  useEffect(() => {
    fetch()
  }, [fetch])

  return [issues, setStep]
}

export default useIssues
