export const FETCH_CARTS = "FETCH_CARTS";
export const fetchCartsAction = (carts) => {
	return {
		type: FETCH_CARTS,
		payload: { carts },
	};
};

export const ADD_CART = "ADD_CART";
export const addCartAction = (cart) => {
	return {
		type: ADD_CART,
		payload: { cart },
	};
};

export const UPDATE_CART = "UPDATE_CART";
export const updateCartAction = (cart) => {
	return {
		type: UPDATE_CART,
		payload: { cart },
	};
};

export const REMOVE_CART = "REMOVE_CART";
export const removeCartAction = (cartId) => {
	return {
		type: REMOVE_CART,
		payload: { cartId },
	};
};

export const CLEAR_CARTS = "CLEAR_CARTS";
export const clearCartsAction = () => {
	return {
		type: CLEAR_CARTS,
	};
};