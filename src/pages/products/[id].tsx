import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/Layout'
import ProductService from '@/services/ProductService'
import type { IProduct } from '@/interfaces/Product.interface'
import { ParsedUrlQuery } from 'querystring'

interface Props {
	product: IProduct
}

const CarPage: NextPage<Props> = ({ product }) => {
	const { query } = useRouter()
	return (
		<Layout title={product.title}>
			<div>Product Page - {query.id}</div>
			<div>{product.description}</div>
		</Layout>
	)
}

interface Params extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const data = await ProductService.getAll()
	const products: IProduct[] = data.products
	return {
		paths: products.map(product => ({
			params: { id: product.id.toString() },
		})),
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id as string
	if (!id)
		return {
			notFound: true,
		}
	const data: IProduct = await ProductService.getById(id)
	if (!data)
		return {
			notFound: true,
		}
	return {
		props: { product: data },
	}
}

export default CarPage
