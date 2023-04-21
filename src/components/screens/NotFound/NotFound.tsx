import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import { FC } from 'react'
import styles from './NotFound.module.scss'

const NotFound: FC = () => {
	return (
		<Layout title='404'>
			<div className={styles.p404}>
				<Image
					src='/404page.png'
					alt='404'
					fill
					style={{ objectFit: 'contain' }}
					quality={33}
				/>
				<p>404 | Страница не найдена. | Page not found.</p>
			</div>
		</Layout>
	)
}

export default NotFound
