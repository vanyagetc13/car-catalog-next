import About from '@/components/screens/About/About'
import { NextPage } from 'next'
import Layout from './../components/layout/Layout'

const aboutPage: NextPage = () => {
	return (
		<Layout title='About'>
			<About />
		</Layout>
	)
}

export default aboutPage
