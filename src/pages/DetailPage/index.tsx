import 'github-markdown-css'

import classNames from 'classnames/bind'
import useIssue from 'hooks/useIssue'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { generateDateString } from 'utils/dateString'

import styles from './detailPage.module.scss'

const cx = classNames.bind(styles)

const DetailPage = () => {
  const { issueNumber } = useParams()
  const issue = useIssue(Number(issueNumber))
  return (
    <>
      <div className={styles.issue}>
        <header>
          <span>#{issueNumber}</span>
          <h1>{issue?.title}</h1>
        </header>
        <footer>
          <span>Issued by: {issue?.user?.id || 'anonymouse'}</span>
          <time>create at: {generateDateString(issue?.created_at)}</time>
        </footer>
        <span className={cx('comments')}>코멘트: {issue?.comments}</span>
      </div>
      <ReactMarkdown
        className="markdown-body"
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter {...props} PreTag="div" language={match[1]} style={dark}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          },
        }}
      >
        {issue?.body || ''}
      </ReactMarkdown>
    </>
  )
}

export default DetailPage
