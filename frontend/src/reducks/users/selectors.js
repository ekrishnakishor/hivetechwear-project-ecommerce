import { createSelector } from "reselect";

const userSelector = (state) => state.user;
export const getUser = createSelector(
    [userSelector],
    state => state
);