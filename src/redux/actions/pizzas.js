import axios from 'axios';

export const SET_PIZZAS = 'SET_PIZZAS';
export const SET_LOADED = 'SET_LOADED';

export const fetchPizzas = (sortBy, category) => dispatch => {
	dispatch(setLoaded(false));
	axios
		.get(
			`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
				sortBy.order
			}`,
		)
		.then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = payload => ({ type: SET_PIZZAS, payload });
const setLoaded = payload => ({ type: SET_LOADED, payload });
