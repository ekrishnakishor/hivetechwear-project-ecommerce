import API, { LOGIN_USER_KEY } from '../../API';
import { clearErrorsAction, signInAction, signInError, signUpAction, signUpError, signUserStoreAction } from './actions';

const api = new API();

export const fetchUserFromLocalStorage = () => {
	return (dispatch) => {
		const userJSON = localStorage.getItem(LOGIN_USER_KEY);
		if (userJSON && userJSON.token !== "") {
			dispatch(signUserStoreAction(JSON.parse(userJSON)));
		}
	};
};

export const signUp = (data = {}, onSuccess = null) => {
	return async (dispatch) => {
		return api
			.signUp(data)
			.then((response) => {
				localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response));
				dispatch(signUpAction(response));
				onSuccess();
				clearErrorsAction()
			})
			.catch((error) => {
				dispatch(signUpError(error.response.data));
			});
	};
};

export const signIn = (data = {}, onSuccess = null) => {
	return async (dispatch) => {
		return api
			.signIn(data)
			.then((response) => {
				localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response));
				dispatch(signInAction(response));
				onSuccess();
				clearErrorsAction()
			})
			.catch((error) => {
				dispatch(signInError(error.response.data));
			});
	};
};
