import React from "react";

export default function OrderListCard(props) {
	const { name, price } = props.orderItem.product;
	const { quantity } = props.orderItem;

	return (
		<div className="order-list">
			<p>{name}</p>
			<p>{quantity}</p>
			<p>${price}</p>
		</div>
	);
}
