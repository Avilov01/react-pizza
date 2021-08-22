import React from 'react';
import classNames from 'classnames';
import PropsTypes from 'prop-types';

export default function Button({ className, outline, children }) {
	return (
		<button className={classNames('button', className, { 'button--outline': outline })}>
			{children}
		</button>
	);
}

Button.propTypes = {
	onClick: PropsTypes.func,
};
