import { useDispatch } from "react-redux";

import { fetchProducts } from "../../reducks/product/operations";

const Pagination = (props) => {
	const { totalPages, current, currentQuery } = props.metadata;
	const elements = [];
	const dispatch = useDispatch();

	const pageHandler = (i) => {
		dispatch(fetchProducts({ page: i, ...currentQuery }, () => {}));
		window.scrollTo(0, 0)
	};
	for (let i = 1; i <= totalPages; i++) {
		// eslint-disable-next-line no-lone-blocks
		{
			const pages = (
				<div key={i} onClick={() => pageHandler(i)} className={current === i ? "active" : ""}>
					<li> {i} </li>
				</div>
			);
			elements.push(pages);
		}
	}

	return elements;
};

export default Pagination;
