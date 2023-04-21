import { FC } from 'react'
import styles from './Loader.module.scss'

const Loader: FC = () => {
	return (
		<div className={styles.spinner_container}>
			<div className={styles.loading_spinner}></div>
		</div>
	)
}

export default Loader
