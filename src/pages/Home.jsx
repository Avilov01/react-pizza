import React, { useEffect } from 'react';
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { useCallback } from 'react';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryItems = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
	{ name: 'популярности', type: 'popular' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'alphabet' },
];

export default function Home() {
	const dispatch = useDispatch();
	const { items, isLoaded } = useSelector(({ pizzas }) => {
		return {
			items: pizzas.items,
			isLoaded: pizzas.isLoaded,
		};
	});

	useEffect(() => {
		items.length === 0 && dispatch(fetchPizzas());
	}, []);

	const onSelectCategory = useCallback(index => {
		dispatch(setCategory(index));
	}, []);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories items={categoryItems} onClickItem={onSelectCategory} />
				<SortPopup items={sortItems} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{!isLoaded
					? (Array(12).fill(<PizzaLoadingBlock />))
					: items.map(obj => <PizzaBlock key={obj.id} {...obj} isLoaded={isLoaded} />)}
			</div>
		</div>
	);
}
