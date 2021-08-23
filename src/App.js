import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
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
