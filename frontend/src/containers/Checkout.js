import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import Empty from "../components/default/Empty";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import OrderListCard from "../components/order/OrderListCard";
import { clearCarts, fetchCarts } from "../reducks/cart/operations";
import { getCarts } from "../reducks/cart/selectors";
import { clearCheckoutOrderErrorAction } from "../reducks/order/actions";
import { checkoutOrder } from "../reducks/order/operations";
import { getOrders } from "../reducks/order/selectors";
import { getUser } from "../reducks/users/selectors";

export default function Checkout() {
	const selector = useSelector((state) => state);
	const dispatch = useDispatch();
	const user = getUser(selector);
	const errors = getOrders(selector).errors;
	const history = useHistory();
	const carts = getCarts(selector);
	const [isLoading, setIsLoading] = useState(false);
	const isEmpty = carts.results && carts.results.length > 0 ? false : true;
	
	useEffect(() => {
		dispatch(fetchCarts());
		// eslint-disable-next-line
	}, []);

	const order_items = carts.results.map((cart) => {
		return {
			qty: cart.quantity,
			product: cart.product.id,
		};
	});

	const initialValues = {
		customer_name: user.name,
		customer_phone: "",
		address: "",
		pin_code: "",
		building_type: "",
		city: "",
		state: "",
	};
	const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const onSubmitCheckout = () => {
		setIsLoading(true);
		dispatch(
			checkoutOrder(
				{ ...values, total_price: carts.totalPrice, total_qty: carts.totalCartItems, order_items },
				() => {
					history.push("/thank-you");
					dispatch(clearCheckoutOrderErrorAction());
					dispatch(clearCarts());
				}
			)
		);
		
		setIsLoading(false);
	};

	return (
		<>
			<Header totalCart={carts.totalCart} />
			<section className="main-wrapper">
				<div className="checkout">
					<p className="title">My Items Detail</p>
					{isEmpty ? (
						<>
							<p>Cart is empty. Please go to shopping in order to add product to cart.</p>
							<button onClick={() => history.push("/")} className="custom-btn">
								Go to Shopping
							</button>
						</>
					) : (
						<>
							<p>Please check your items and confirm it</p>
							<div className="order-detail">
								{carts.results && carts.results.length > 0 ? (
									carts.results.map((cart) => <OrderListCard key={cart.id} orderItem={cart} />)
								) : (
									<Empty />
								)}
							</div>
							<hr className="checkout-line" />
							<div className="total-order">
								<p>Total Price</p>
								<p>{carts.totalCartItems}</p>
								<p>${carts.totalPrice}</p>
							</div>
							<div className="checkout-form-container">
								<label htmlFor="fullName">Full Name</label>
								<span className="required-field">*</span>
								<input
									onChange={handleInputChange}
									value={values.customer_name}
									name="customer_name"
									className="custom-input"
									type="text"
									placeholder="Enter Recipient's name"
								/>
								{errors.customer_name ? (
									<span className="mb-3 error-text">{errors.customer_name[0]}</span>
								) : null}
								<label htmlFor="email">Phone Number</label>
								<span className="required-field">*</span>
								<input
									onChange={handleInputChange}
									value={values.customer_phone}
									name="customer_phone"
									className="custom-input"
									type="text"
									placeholder="Enter Phone Number"
								/>
								{errors.customer_phone ? (
									<span className="mb-3 error-text">{errors.customer_phone[0]}</span>
								) : null}
								<label htmlFor="email">Street address or P.O. Box</label>
								<span className="required-field">*</span>
								<input
									onChange={handleInputChange}
									value={values.address}
									name="address"
									className="custom-input"
									type="text"
									placeholder="Enter Street address or P.O. Box"
								/>
								{errors.address ? <span className="mb-3 error-text">{errors.address[0]}</span> : null}
								<label htmlFor="email">PIN Code</label>
								<span className="required-field">*</span>
								<input
									onChange={handleInputChange}
									value={values.pin_code}
									name="pin_code"
									className="custom-input"
									type="text"
									placeholder="Enter PIN Code"
								/>
								{errors.pin_code ? <span className="mb-3 error-text">{errors.pin_code[0]}</span> : null}
								<label htmlFor="email">Apt, suite, unit, building, floor, etc.</label>
								<input
									onChange={handleInputChange}
									value={values.building_type}
									name="building_type"
									className="custom-input"
									type="text"
									placeholder="Enter Apt, suite, unit, building, floor, etc."
								/>
								{errors.building_type ? (
									<span className="mb-3 error-text">{errors.building_type[0]}</span>
								) : null}
								<label htmlFor="email">City</label>
								<span className="required-field">*</span>
								<input
									onChange={handleInputChange}
									value={values.city}
									name="city"
									className="custom-input"
									type="text"
									placeholder="Enter City"
								/>
								{errors.city ? <span className="mb-3 error-text">{errors.city[0]}</span> : null}
								<label htmlFor="email">State</label>
								<span className="required-field">*</span>
								<input
									onChange={handleInputChange}
									value={values.state}
									name="state"
									className="custom-input"
									type="text"
									placeholder="Enter State"
								/>
								{errors.state ? <span className="mb-3 error-text">{errors.state[0]}</span> : null}
								<button onClick={onSubmitCheckout} className="custom-btn">
									{isLoading ? "Submitting the order..." : "Confirm and submit"}
								</button>
							</div>
						</>
					)}
				</div>
			</section>
			<Footer />
		</>
	);
}
