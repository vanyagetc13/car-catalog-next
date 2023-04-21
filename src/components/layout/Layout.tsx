import { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'
import Head from 'next/head'

interface Props {
	title: string
	description?: string
}

const getTitle = (title: string) => `${title} | Products Catalog`

const Layout: FC<PropsWithChildren<Props>> = ({
	children,
	title,
	description,
}) => {
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				<meta name='description' content={description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Header />
			<main className='main'>{children}</main>
		</>
	)
}

export default Layout
