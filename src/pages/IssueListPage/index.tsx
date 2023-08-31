import IssueList from 'components/IssueList'
import useInfiniteScroll from 'hooks/useInfiniteScroll'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { fetchIssues } from 'redux/issuesSlice'

const IssueListPage = () => {
  const dispatch = useAppDispatch()
  const { loadingState, issues } = useAppSelector((state) => state.issues)
  const { containerRef, lastElRef } = useInfiniteScroll<HTMLUListElement, HTMLLIElement>(
    () => !loadingState && dispatch(fetchIssues()),
  )
  return (
    <IssueList
      containerRef={containerRef}
      isLoading={loadingState}
      issues={issues}
      lastElRef={lastElRef}
    />
  )
}

export default IssueListPage
