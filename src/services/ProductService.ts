import axios from 'axios'
import type { IProduct } from './../interfaces/Product.interface'
const ProductService = {
	async getAll() {
		const response = await axios
			.get('https://dummyjson.com/products', {
				params: {
					limit: 0,
				},
			})
			.catch(e => null)
		if (!response) return null
		const { data, status } = response
		if (data && status === 200) return data
		else return null
	},
	async getPaginated(currentPage: number, pageLimit: number = 12) {
		const response = await axios
			.get('https://dummyjson.com/products', {
				params: {
					limit: pageLimit,
					skip: (currentPage - 1) * pageLimit,
				},
			})
			.catch(e => null)
		if (!response) return null
		const { data, status } = response
		if (data && status === 200) return data
		else return null
	},
	async getById(id: string) {
		const response = await axios
			.get('https://dummyjson.com/products/' + id)
			.catch(e => null)
		if (!response) return null
		const { data, status } = response
		if (data && status === 200) return data
		else return null
	},
}

export default ProductService
