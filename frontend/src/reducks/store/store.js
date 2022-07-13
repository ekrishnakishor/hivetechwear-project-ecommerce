import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import thunk from 'redux-thunk';

import { CartsReducer } from '../cart/reducers';
import { CategoriesReducer } from '../category/reducers';
import { OrdersReducer } from '../order/reducers';
import { ProductsReducer } from '../product/reducers';
import { UserReducer } from '../users/reducers';

export default function createStore(history) {
	return reduxCreateStore(
		combineReducers({
			router: connectRouter(history),
			user: UserReducer,
			categories: CategoriesReducer,
			products: ProductsReducer,
			carts: CartsReducer,
			orders: OrdersReducer,
		}),
		compose(
			applyMiddleware(routerMiddleware(history), thunk)
			// DEBUG MODE
			// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
}
