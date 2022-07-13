import React from "react";

import ProductCard from "./ProductCard";

export default function ProductListCard(props) {
	const { products, carts, labelType } = props;
	if (labelType) {
		return (
			<>
				<div className="homepage-subtitle">{labelType}</div>
				<div className="product-container">
					{products.map((p) => {
						const cart = carts.find((c) => c.product.id === p.id) || null;
						return <ProductCard key={p.id} products={p} cart={cart} />;
					})}
				</div>
			</>
		);
	} else {
		return (
			<div className="product-container">
				{products.map((p) => {
					const cart = carts.find((c) => c.product.id === p.id) || null;
					return <ProductCard key={p.id} products={p} cart={cart} />;
				})}
			</div>
		);
	}
}
