import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={`${styles.header} header`}>
			<div className={styles.header_text}>
				Antisocial network
			</div>
		</header>
	)
}

export default Header;