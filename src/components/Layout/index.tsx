import classNames from 'classnames/bind'
import { FC, ReactNode } from 'react'

import styles from './layout.module.scss'

const cx = classNames.bind(styles)

interface LayoutProps {
  children: ReactNode
  title: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <main className={cx('main')}>
    <header className={cx('header')}>{title}</header>
    {children}
  </main>
)

export default Layout
