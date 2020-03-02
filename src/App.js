import React from 'react';
import styles from './index.css';

const App = () => {
	return (
		<React.Fragment>
			<div style={{ textAlign: 'center' }}>
				<h1 className={styles.font}>Hello World !</h1>
			</div>
			<div style={{ paddingTop: '100px' }}>
				<div style={{ textAlign: 'center' }}>
					<h2 className={styles.font}>
						It's React Webpack Boilerplate code
					</h2>
				</div>
				<div style={{ textAlign: 'center' }}>
					<img
						src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
						className={styles.logo}
					/>
					<img
						src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg"
						className={styles.logo}
					/>
				</div>
			</div>
		</React.Fragment>
	);
};
export default App;
