import classNames from 'classnames/bind'
import Banner from 'components/Banner'
import IssueItem from 'components/IssueItem'
import { forwardRef } from 'react'
import { Issues } from 'types/types'

import styles from './issueList.module.scss'

interface IssueListProps {
  issues?: Issues
}

const cx = classNames.bind(styles)

const IssueList = forwardRef<HTMLLIElement, IssueListProps>(({ issues }, ref) => (
  <ul className={cx('issues')}>
    {issues?.map((issue, index) => {
      console.log(index)
      if ((index + 1) % 4 === 0)
        return (
          <>
            <IssueItem
              comments={issue.comments}
              createdAt={issue.created_at}
              issueNumber={issue.number}
              key={issue.node_id}
              title={issue.title}
              user={issue.user!.login}
            />
            <Banner />
          </>
        )
      return (
        <IssueItem
          comments={issue.comments}
          createdAt={issue.created_at}
          issueNumber={issue.number}
          key={issue.node_id}
          title={issue.title}
          user={issue.user!.login}
        />
      )
    })}
    <li className={cx('loader')} ref={ref}>
      loading...
    </li>
  </ul>
))

IssueList.displayName = 'Issue List'

export default IssueList
