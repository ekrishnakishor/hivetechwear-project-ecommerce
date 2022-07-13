import { createSelector } from "reselect";

const categoriesSelector = (state) => state.categories;
export const getCategories = createSelector([categoriesSelector], (state) => state);
