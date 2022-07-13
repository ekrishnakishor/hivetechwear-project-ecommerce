export const CHECKOUT_ORDER = "CHECKOUT_ORDER";
export const checkoutOrderAction = () => {
	return {
		type: CHECKOUT_ORDER,
	};
};

export const CHECKOUT_ORDER_ERROR = "CHECKOUT_ORDER_ERROR";
export const checkoutOrderErrorAction = (errors) => {
	return {
		type: CHECKOUT_ORDER_ERROR,
		payload: {
			errors,
		},
	};
};

export const CLEAR_CHECKOUT_ORDER_ERROR = "CLEAR_CHECKOUT_ORDER_ERROR";
export const clearCheckoutOrderErrorAction = () => {
	return {
		type: CLEAR_CHECKOUT_ORDER_ERROR,
	};
};
