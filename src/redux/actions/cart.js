export const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const PLUS_ITEM = 'PLUS_ITEM';
export const MINUS_ITEM = 'MINUS_ITEM';

export const addPizzaToCart = payload => ({
	type: ADD_PIZZA_TO_CART,
	payload,
});

export const clearCart = () => ({
	type: CLEAR_CART,
});

export const removeCartItem = id => ({
	type: REMOVE_CART_ITEM,
	payload: id,
});

export const plusCartItem = id => ({
	type: PLUS_ITEM,
	payload: id,
});

export const minusCartItem = id => ({
	type: MINUS_ITEM,
	payload: id,
});
