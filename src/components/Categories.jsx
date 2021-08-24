import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onSelectCategory }) {
	return (
		<div className='categories'>
			<ul>
				<li
					className={activeCategory === null ? 'active' : ''}
					onClick={() => onSelectCategory(null)}>
					Все
				</li>
				{items &&
					items.map((name, index) => (
						<li
							onClick={() => onSelectCategory(index)}
							key={name}
							className={classNames({ active: activeCategory === index })}>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
});

Categories.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onSelectCategor: PropTypes.func,
};

Categories.defaultProps = {
	activeCategory: 0,
	items: [],
};

export default Categories;
