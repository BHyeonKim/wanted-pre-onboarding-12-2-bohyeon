import IssueList from 'components/IssueList'
import Layout from 'components/Layout'
import useIssues from 'hooks/useIssues'
import { useEffect, useRef } from 'react'

const IssueListPage = () => {
  const [issues, toNextPage] = useIssues()
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

  return (
    <Layout title="react">
      <IssueList issues={issues} ref={lastElRef} />
    </Layout>
  )
}

export default IssueListPage
