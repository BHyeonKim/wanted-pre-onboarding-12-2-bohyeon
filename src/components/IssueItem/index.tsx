import classNames from 'classnames/bind'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { generateDateString } from 'utils/dateString'

import styles from './issueItem.module.scss'

const cx = classNames.bind(styles)

interface IssueItemProps {
  user: string
  title: string
  comments: number
  createdAt: string
  issueNumber: number
}

const IssueItem: FC<IssueItemProps> = ({
  comments,
  createdAt,
  issueNumber,
  title,
  user,
}) => (
  <Link className={cx('issue')} to={`/detail/${issueNumber}`}>
    <header>
      <span>#{issueNumber}</span>
      <h1>{title}</h1>
    </header>
    <footer>
      <span>Issued by: {user || 'anonymouse'}</span>
      <time>create at: {generateDateString(createdAt)}</time>
    </footer>
    <span className={cx('comments')}>코멘트: {comments}</span>
  </Link>
)

export default IssueItem
