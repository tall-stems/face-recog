import React from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './Logo.module.css';

const Logo = () => {
	return (
		<Tilt className={styles.container}>
			<span className="f1 white">⛶</span>
		</Tilt>
	);
};

export default Logo;
