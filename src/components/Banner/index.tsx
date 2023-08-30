import bannerImage from 'assets/pngs/wanted_BI_logotype.png'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './banner.module.scss'

const cx = classNames.bind(styles)

const Banner = () => (
  <Link to="https://www.wanted.co.kr/">
    <img alt="wanted banner" className={cx('banner')} src={bannerImage} />
  </Link>
)

export default Banner
