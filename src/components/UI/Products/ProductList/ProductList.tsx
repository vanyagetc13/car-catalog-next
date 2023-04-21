import type { IProduct } from '@/interfaces/Product.interface'
import { FC } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductList.module.scss'

interface IProductList {
	products: IProduct[]
}

const ProductList: FC<IProductList> = ({ products }) => {
	return (
		<div className={styles.list}>
			{products.length &&
				products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
		</div>
	)
}

export default ProductList
