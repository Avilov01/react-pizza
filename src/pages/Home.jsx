import React, { useEffect } from 'react';
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { useCallback } from 'react';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryItems = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
	{ name: 'популярности', type: 'popular', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'asc' },
];

export default function Home() {
	const dispatch = useDispatch();

	const items = useSelector(({ pizzas }) => pizzas.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const cartItems = useSelector(({ cart }) => cart.items);
	const { category, sortBy } = useSelector(({ filters }) => filters);

	useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	}, [sortBy, category]);

	const onSelectCategory = useCallback(index => {
		dispatch(setCategory(index));
	}, []);

	const onSelectSortType = useCallback(type => {
		dispatch(setSortBy(type));
	}, []);

	const onAddPizzaToCart = useCallback(item => {
		dispatch(addPizzaToCart(item));
	}, []);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					items={categoryItems}
					onSelectCategory={onSelectCategory}
					activeCategory={category}
				/>
				<SortPopup
					items={sortItems}
					activeSortType={sortBy}
					onClickSortType={onSelectSortType}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{!isLoaded
					? [...Array(12)].map((_, index) => <PizzaLoadingBlock key={index} />)
					: items.map(obj => (
							<PizzaBlock
								key={obj.id}
								{...obj}
								onAddPizzaToCart={onAddPizzaToCart}
								addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
							/>
					  ))}
			</div>
		</div>
	);
}
