import axios from "axios";

export const LOGIN_USER_KEY = "HIVE_TECHWEAR_LOGIN_USER_KEY";

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
	baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
	baseURL = "http://127.0.0.1:8000";
}

const api = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	(config) => {
		if (config.requireToken) {
			const user = localStorage.getItem(LOGIN_USER_KEY) ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY)) : null;
			config.headers.common["Authorization"] = user.token;
		}

		return config;
	},
	(err) => console.error(err)
);

api.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		console.log("error.response", error);
		if (error.response.status === 401) {
			localStorage.removeItem(LOGIN_USER_KEY);
		}

		return Promise.reject(error);
	}
);

export default class API {
	signUp = async (signUpBody) => {
		const formData = new FormData();

		for (const key in signUpBody) {
			formData.append(key, signUpBody[key]);
		}

		return api.post("/users/signup/", formData);
	};

	signIn = async (signInBody) => {
		const formData = new FormData();
		for (const key in signInBody) {
			formData.append(key, signInBody[key]);
		}
		return api.post("/users/signin/", formData);
	};

	// Category
	getCategories = () => {
		return api.get("/categories/");
	};

	// Product
	getProducts = (query = {}) => {
		return api.get("/products/", { params: query, requireToken: true });
	};

	// Cart
	getCarts = (query = {}) => {
		return api.get("/carts/", { params: query, requireToken: true });
	};

	addCart = (addCartBody) => {
		const formData = new FormData();
		for (const key in addCartBody) {
			formData.append(key, addCartBody[key]);
		}
		return api.post("/carts/add/", formData, { requireToken: true });
	};

	updateCart = (updateCartBody, cartId) => {
		const formData = new FormData();
		for (const key in updateCartBody) {
			formData.append(key, updateCartBody[key]);
		}
		return api.put(`/carts/update/${cartId}/`, formData, { requireToken: true });
	};

	// Checkout
	checkoutOrder = (checkoutOrderBody) => {
		return api.post("/orders/add/", checkoutOrderBody, { requireToken: true });
	};

}
