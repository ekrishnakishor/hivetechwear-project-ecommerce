import API from "../../API";
import { checkoutOrderAction, checkoutOrderErrorAction } from "./actions";

const api = new API();

export const checkoutOrder = (addCartBody, onSuccess = null) => {
	return (dispatch) => {
		return api
			.checkoutOrder(addCartBody)
			.then(() => {
				dispatch(checkoutOrderAction());
				onSuccess();
			})
			.catch((error) => {
				dispatch(checkoutOrderErrorAction(error.response.data));
			});
	};
};
