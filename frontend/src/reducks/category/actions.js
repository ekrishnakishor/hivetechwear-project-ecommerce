export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const fetchCategoriesAction = (categories) => {
	return {
		type: FETCH_CATEGORIES,
		payload: { categories },
	};
};
