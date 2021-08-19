import classNames from 'classnames';
import React, { useState } from 'react';

export default function Categories({ items }) {
	const [activeItem, setActiveItem] = useState('Все');

	const onSelectItem = name => {
		setActiveItem(name);
	};

	const isActiveItem = name => (activeItem === name && true);

	return (
		<div className='categories'>
			<ul>
				{items &&
					items.map(name => (
						<li
							onClick={() => onSelectItem(name)}
							key={name}
							className={classNames({ active: isActiveItem(name) })}>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
}
