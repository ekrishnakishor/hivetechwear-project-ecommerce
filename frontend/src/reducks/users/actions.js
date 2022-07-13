export const SIGN_UP = "SIGN_UP";
export const signUpAction = (user) => {
    return {
        type: "SIGN_UP",
        payload: {
            user
        },
    };
};

export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const signUpError = (errors) => {
    return {
        type: SIGN_UP_ERROR,
        payload: {
            errors
        }
    };
};

export const SIGN_IN = "SIGN_IN";
export const signInAction = (user) => {
    return {
        type: SIGN_IN,
        payload: {
            user
        }
    };
};

export const SIGN_USER_STORE = "SIGN_USER_STORE";
export const signUserStoreAction = (user) => {
    return {
        type: SIGN_USER_STORE,
        payload: {
            user
        }
    };
};

export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const signInError = (errors) => {
    return {
        type: SIGN_IN_ERROR,
        payload: {
            errors
        }
    };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return {
        type: SIGN_OUT
    };
};

export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const clearErrorsAction = () => {
    return {
        type: CLEAR_ERRORS
    };
};