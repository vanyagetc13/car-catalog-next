import { NextPage } from 'next'
import Image from 'next/image'
import Layout from './../components/layout/Layout'
import styles from '@/styles/404.module.scss'

const NotFoundPage: NextPage = () => {
	return (
		<Layout title='404'>
			<div className={styles.p404}>
				<Image src='/404page.png' alt='404' width={900} height={434} />
				<p>Страница не найдена. | Page not found.</p>
			</div>
		</Layout>
	)
}

export default NotFoundPage
