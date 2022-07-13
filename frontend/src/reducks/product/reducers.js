import initialState from "../store/initialState";
import * as Actions from "./actions";

export const ProductsReducer = (state = initialState.products, action) => {
	switch (action.type) {
		case Actions.FETCH_PRODUCTS:
			return {
				...state,
                ...action.payload.products,
				results: [...action.payload.products.results],
			};
		default:
			return state;
	}
};
