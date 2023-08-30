import { useCallback, useEffect, useState } from 'react'
import github from 'services/github'
import { Issue } from 'types'

const useIssue = (issueNumber: number) => {
  const [issue, setIssue] = useState<Issue>()

  const fetchIssue = useCallback(async () => {
    const { data } = await github.getIssue(issueNumber)
    setIssue(data)
  }, [issueNumber])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return issue
}

export default useIssue
