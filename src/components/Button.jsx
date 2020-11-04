import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.css';

/**
 * This is uncorrect.  
 * a\_b\_c\_d
 */
export default function Button({ color, size, children }) {
	let styles = {
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<button className={s.root} style={styles}>
			{children}
		</button>
	);
}

Button.propTypes = {
	/**
	 * This is correct.  
	 * a\_b\_c\_d
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};
Button.defaultProps = {
	color: '#333',
	size: 'normal',
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
