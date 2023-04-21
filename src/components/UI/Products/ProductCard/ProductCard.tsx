import type { IProduct } from '@/interfaces/Product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './ProductCard.module.scss'

interface IProductCard {
	product: IProduct
}

const getDescription = (description: string): string => {
	const SYMBOLS = 100
	if (description.length > SYMBOLS) {
		description = description.substring(0, SYMBOLS)
		return description.substring(0, description.lastIndexOf(' ')) + '...'
	} else return description
}

const ProductCard: FC<IProductCard> = ({ product }) => {
	return (
		<div className={styles.card}>
			<div>
				<div className={styles.image}>
					<Image
						src={product.thumbnail}
						alt='product'
						fill
						style={{ objectFit: 'contain' }}
					/>
				</div>
				<h3>{product.title}</h3>
				<p>{getDescription(product.description)}</p>
			</div>
			<div className={styles.info}>
				<Link href={'/products/' + product.id} className={styles.readmore}>
					Read More
				</Link>
				<p>{product.brand}</p>
				<strong>{product.category}</strong>
			</div>
		</div>
	)
}

export default ProductCard
