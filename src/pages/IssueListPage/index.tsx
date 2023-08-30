import IssueList from 'components/IssueList'
import useIssues from 'hooks/useIssues'
import { useEffect, useRef } from 'react'

const IssueListPage = () => {
  const [issues, toNextPage, isLoading] = useIssues()
  const lastElRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const container = document.querySelector('.issues')

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) toNextPage()
      },
      {
        root: container,
      },
    )

    observer.observe(lastElRef.current!)

    return () => observer.disconnect()
  }, [toNextPage])

  return <IssueList isLoading={isLoading} issues={issues} ref={lastElRef} />
}

export default IssueListPage
