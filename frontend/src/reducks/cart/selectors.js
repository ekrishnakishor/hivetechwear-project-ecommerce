import { createSelector } from "reselect";

const cartsSelector = (state) => state.carts;
export const getCarts = createSelector([cartsSelector], (state) => state);
