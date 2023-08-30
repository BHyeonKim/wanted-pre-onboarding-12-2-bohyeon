import classNames from 'classnames/bind'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'

const cx = classNames.bind(styles)

interface LayoutProps {
  title: string
}

const Layout: FC<LayoutProps> = ({ title }) => (
  <main className={cx('main')}>
    <header className={cx('header')}>{title}</header>
    <Outlet />
  </main>
)

export default Layout
