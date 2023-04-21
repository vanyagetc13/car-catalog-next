import { NextPage } from 'next'
import Layout from './../components/layout/Layout'
import Home from '@/components/screens/Home/Home'
import Loader from '@/components/UI/Loader/Loader'

const indexPage: NextPage = () => {
	return (
		<Layout title='Home'>
			<Home />
			<Loader />
		</Layout>
	)
}

export default indexPage
