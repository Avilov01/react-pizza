import {
	ADD_PIZZA_TO_CART,
	CLEAR_CART,
	MINUS_ITEM,
	PLUS_ITEM,
	REMOVE_CART_ITEM,
} from '../actions/cart';

const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

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
					totalPrice: getTotalPrice(currentPizzaItems),
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

		case PLUS_ITEM: {
			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0],
			];

			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				},
			};

			return {
				...state,
				items: newItems,
				totalCount: state.totalCount + 1,
				totalPrice: state.totalPrice + newObjItems[0].price,
			};
		}

		case MINUS_ITEM: {
			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0],
			];

			const oldItems = state.items[action.payload].items;

			const newItems =
				oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

			return {
				...state,
				items: {
					...state.items,
					[action.payload]: {
						items: newItems,
						totalPrice: getTotalPrice(newItems),
					},
				},

				totalCount: oldItems.length > 1 ? state.totalCount - 1 : state.totalCount,
				totalPrice:
					oldItems.length > 1 ? state.totalPrice - newObjItems[0].price : state.totalPrice,
			};
		}

		default:
			return state;
	}
};

export default cart;
