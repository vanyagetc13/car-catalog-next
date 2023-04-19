import { FC } from 'react'
import { useRouter } from 'next/router'
import type { BaseRouter } from 'next/dist/shared/lib/router/router'
import Layout from './../../components/layout/Layout'

const CarPage: FC = () => {
	const { query } = useRouter()
	return (
		<Layout title={query.id + ' Car Page'}>
			<div>CarPage - {query.id}</div>
		</Layout>
	)
}

export default CarPage
