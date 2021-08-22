import classNames from 'classnames';
import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
	const [activeItem, setActiveItem] = useState(null);

	const onSelectItem = index => {
		setActiveItem(index);
		onClickItem(index);
	};

	const isActiveItem = index => activeItem === index && true;

	return (
		<div className='categories'>
			<ul>
				<li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
					Все
				</li>
				{items &&
					items.map((name, index) => (
						<li
							onClick={() => onSelectItem(index)}
							key={name}
							className={classNames({ active: isActiveItem(index) })}>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
});

export default Categories;
