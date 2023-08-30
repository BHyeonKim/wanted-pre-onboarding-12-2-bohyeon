import classNames from 'classnames/bind'

import styles from './loadingSpinner.module.scss'

const cx = classNames.bind(styles)

const LoadingSpinner = () => <span className={cx('loader')} />

export default LoadingSpinner
