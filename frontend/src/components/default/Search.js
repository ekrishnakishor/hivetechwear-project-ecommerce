import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "../../assets/images/search.svg";

export default function Search({ setSearch, setPage }) {
	const [query, setQuery] = useState("");
	const handleInputChange = (e) => {
		setQuery(e.target.value);
		setPage(1);
	};

	useEffect(() => {
		const timeOutId = setTimeout(() => setSearch(query), 300);
		return () => clearTimeout(timeOutId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return (
		<li>
			<Link className="menu__item search" to="/">
				<div className="search-input">
					<input
						onChange={handleInputChange}
						className="custom-search-input"
						type="text"
						placeholder="Search"
					/>
					<img className="search-icon" src={SearchIcon} alt="" />
				</div>
			</Link>
		</li>
	);
}
