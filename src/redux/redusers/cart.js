import { ADD_PIZZA_TO_CART, CLEAR_CART, REMOVE_CART_ITEM } from '../actions/cart';

const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
};

const cart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PIZZA_TO_CART: {
			const currentPizzaItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload];
			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItems,
					totalPrice: currentPizzaItems.reduce((sum, obj) => obj.price + sum, 0),
				},
			};

			return {
				...state,
				items: newItems,
				totalPrice: state.totalPrice + action.payload.price,
				totalCount: state.totalCount + 1,
			};
		}
		case CLEAR_CART:
			return { items: {}, totalPrice: 0, totalCount: 0 };

		case REMOVE_CART_ITEM:
			const newItems = {
				...state.items,
			};

			const currentTotalPrice = newItems[action.payload].totalPrice;
			const currentTotalCount = newItems[action.payload].items.length;

			delete newItems[action.payload];

			return {
				...state,
				items: newItems,
				totalCount: state.totalCount - currentTotalCount,
				totalPrice: state.totalPrice - currentTotalPrice,
			};

		default:
			return state;
	}
};

export default cart;
