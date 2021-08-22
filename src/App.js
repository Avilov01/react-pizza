import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

import { setPizzas } from './redux/actions/pizzas';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get('http://localhost:3001/pizzas')
			.then(({ data }) => dispatch(setPizzas(data)));
	}, []);

	return (
		<div className='wrapper'>
			<div className='content'>
				<Header />
				<Route exact path='/' component={Home} />
				<Route exact path='/cart' component={Cart} />
			</div>
		</div>
	);
}

export default App;
