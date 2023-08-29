import classNames from 'classnames/bind'
import { FC } from 'react'

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
}) => {
  const date = new Date(createdAt)
  const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  return (
    <li className={cx('issue')}>
      <header>
        <span>#{issueNumber}</span>
        <h1>{title}</h1>
      </header>
      <footer>
        <span>Issued by: {user || 'anonymouse'}</span>
        <time>create at: {dateString}</time>
      </footer>
      <span className={cx('comments')}>코멘트: {comments}</span>
    </li>
  )
}

export default IssueItem
