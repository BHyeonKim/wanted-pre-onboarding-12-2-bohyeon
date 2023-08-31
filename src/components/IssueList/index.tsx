import classNames from 'classnames/bind'
import Banner from 'components/Banner'
import IssueItem from 'components/IssueItem'
import LoadingSpinner from 'components/LoadingSpinner'
import { FC, RefObject } from 'react'
import { Issues } from 'types'

import styles from './issueList.module.scss'

interface IssueListProps {
  issues?: Issues
  isLoading: boolean
  containerRef: RefObject<HTMLUListElement>
  lastElRef: RefObject<HTMLLIElement>
}

const cx = classNames.bind(styles)

const IssueList: FC<IssueListProps> = ({
  isLoading,
  issues,
  containerRef,
  lastElRef,
}) => (
  <ul className={cx('issues')} ref={containerRef}>
    {issues?.map((issue, index) => {
      const bannerKey = `banner-${index}`
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
            <Banner key={bannerKey} />
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
    <li className={cx('loader')} ref={lastElRef}>
      {isLoading ? <LoadingSpinner /> : '끝 입니다.'}
    </li>
  </ul>
)

IssueList.displayName = 'Issue List'

export default IssueList
