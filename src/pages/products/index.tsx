import { GetStaticProps, NextPage } from 'next'
import ProductList from '@/components/UI/Products/ProductList/ProductList'
import type { IProduct } from '@/interfaces/Product.interface'
import ProductService from '@/services/ProductService'
import Layout from '@/components/layout/Layout'
import { useEffect, useState } from 'react'

interface Props {
	total: number
}

const productsByPage = 12

const indexPage: NextPage<Props> = ({ total }) => {
	let pages: number[] = []
	for (let i = 1; i <= Math.ceil(total / productsByPage); i++) {
		pages.push(i)
	}
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [products, setProducts] = useState<IProduct[]>([])
	const fetchData = async () => {
		const dataPaginated = await ProductService.getPaginated(currentPage)
		const products: IProduct[] = dataPaginated.products
		setProducts(products)
	}
	useEffect(() => {
		fetchData()
		return () => {
			setProducts([])
		}
	}, [currentPage])
	return (
		<Layout title='Products'>
			<ProductList products={products} />
			<div>
				{pages.map(page => (
					<div onClick={() => setCurrentPage(page)}>{page}</div>
				))}
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async context => {
	const data = await ProductService.getAll()
	if (!data)
		return {
			notFound: true,
		}
	const total: number = data.total
	return {
		props: { total },
	}
}

export default indexPage
