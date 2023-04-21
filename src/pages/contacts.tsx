import Contacts from '@/components/screens/Contacts/Contacts'
import { NextPage } from 'next'
import Layout from './../components/layout/Layout'

const contactsPage: NextPage = () => {
	return (
		<Layout title='Contacts'>
			<Contacts />
		</Layout>
	)
}

export default contactsPage
