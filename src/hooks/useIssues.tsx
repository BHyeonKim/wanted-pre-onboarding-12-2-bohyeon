import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toNextPage, updateIssues } from 'redux/issuesSlice'
import github from 'services/github'
import type { Issues } from 'types'

const useIssues = (): [Issues, VoidFunction] => {
  const dispatch = useAppDispatch()
  const { issues, currentPage, isLoaded } = useAppSelector((state) => state.issues)

  const moveToNextPage = useCallback(() => {
    dispatch(toNextPage())
  }, [dispatch])

  const fetch = useCallback(async () => {
    const { data } = await github.getIssues(currentPage)

    dispatch(updateIssues(data))
  }, [currentPage, dispatch])

  useEffect(() => {
    if (isLoaded) return
    fetch()
  }, [fetch, isLoaded])

  return [issues, moveToNextPage]
}

export default useIssues
