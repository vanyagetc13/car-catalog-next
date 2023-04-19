import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'
import { links } from './Header.links'

const Header: FC = () => {
	const { pathname } = useRouter()
	return (
		<header className={styles.header}>
			{links.map(link => (
				<Link
					key={link.id}
					href={link.path}
					className={pathname === link.path ? styles.active : ''}
				>
					{link.name}
				</Link>
			))}
		</header>
	)
}

export default Header
