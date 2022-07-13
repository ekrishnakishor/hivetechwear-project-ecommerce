import * as Actions from './actions';
import initialState from '../store/initialState';

export const PostsReducer = (state = initialState.posts, action) => {
    switch (action.type) {
        case Actions.FETCH_POST:
            return {
                ...state,
                ...action.payload.posts,
                results: [...state.results, ...action.payload.posts.results]
            };
        case Actions.ADD_POST:
            return {
                ...state,
                results: [action.payload.post, ...state.results]
            };
        case Actions.DELETE_POST:
            return {
                ...state,
                ...action.payload.posts,
                results: state.results.filter(result => result.id !== action.payload.postId)
            };
        default:
            return state;
    }
};
