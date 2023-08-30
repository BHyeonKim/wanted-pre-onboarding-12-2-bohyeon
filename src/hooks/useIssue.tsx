import { useCallback, useEffect, useState } from 'react'
import { Issue } from 'types'
import octokit, { OWNER, REPO } from 'utils/octokit'

const useIssue = (issueNumber: number) => {
  const [issue, setIssue] = useState<Issue>()

  const fetchIssue = useCallback(async () => {
    const { data } = await octokit.request(
      'GET /repos/{owner}/{repo}/issues/{issue_number}',
      {
        owner: OWNER,
        repo: REPO,
        issue_number: issueNumber,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )
    setIssue(data)
  }, [issueNumber])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return issue
}

export default useIssue
