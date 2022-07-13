import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../../assets/images/cart.png";

export default function CartLink(props) {
	const { totalCart } = props;
	return (
		<li>
			<Link className="menu__item" to="/cart">
				<img className="cart-icon" src={CartIcon} alt="cart-icon" />
				<span className="cart-text">Cart</span>
				{totalCart > 0 ? (
					<div className="cart-number">
						<span>{totalCart}</span>
					</div>
				) : (
					""
				)}
			</Link>
		</li>
	);
}
