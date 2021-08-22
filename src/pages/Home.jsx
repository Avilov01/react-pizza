import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { useCallback } from 'react';

const categoryItems = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
						{ name: 'популярности', type: 'popular' },
						{ name: 'цене', type: 'price' },
						{ name: 'алфавиту', type: 'alphabet' },
					]

export default function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);

	const onSelectCategory = useCallback(index => {
		dispatch(setCategory(index));
	}, []);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories items={categoryItems} onClickItem={onSelectCategory} />
				<SortPopup
					items={sortItems}
					
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{items.map(obj => (
					<PizzaBlock key={obj.id} {...obj} />
				))}
			</div>
		</div>
	);
}
