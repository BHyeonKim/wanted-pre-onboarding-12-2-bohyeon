import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchIssues, toNextPage } from 'redux/issuesSlice'
import type { Issues } from 'types'

const useIssues = (): [Issues, VoidFunction] => {
  const dispatch = useAppDispatch()
  const { issues, currentPage, isLoaded } = useAppSelector((state) => state.issues)

  const moveToNextPage = useCallback(() => {
    dispatch(toNextPage())
  }, [dispatch])

  useEffect(() => {
    if (isLoaded) return
    dispatch(fetchIssues(currentPage))
  }, [currentPage, dispatch, isLoaded])

  return [issues, moveToNextPage]
}

export default useIssues
