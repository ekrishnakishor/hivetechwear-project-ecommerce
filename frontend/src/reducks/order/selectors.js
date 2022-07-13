import { createSelector } from "reselect";

const ordersSelector = (state) => state.orders;
export const getOrders = createSelector([ordersSelector], (state) => state);
