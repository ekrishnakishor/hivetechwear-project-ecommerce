export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const fetchProductsAction = (products) => {
	return {
		type: FETCH_PRODUCTS,
		payload: { products },
	};
};
