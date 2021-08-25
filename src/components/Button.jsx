import React from 'react';
import classNames from 'classnames';
import PropsTypes from 'prop-types';

function Button({ className, outline, children, onClick }) {
	return (
		<button
			onClick={onClick}
			className={classNames('button', className, { 'button--outline': outline })}>
			{children}
		</button>
	);
}

Button.propTypes = {
	onClick: PropsTypes.func,
};

export default Button;
