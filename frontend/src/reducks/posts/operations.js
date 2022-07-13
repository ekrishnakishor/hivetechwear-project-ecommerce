import API from '../../API';
import { fetchPostsAction, addPostAction, deletePostAction } from './actions';

const api = new API();

export const fetchPosts = params => {
    return dispatch => {
        return api
            .getPosts(params)
            .then(posts => {
                dispatch(fetchPostsAction(posts));
            })
            .catch(error => {
                alert('Failed to connect API: /posts/');
            });
    };
};

export const deletePost = id => {
    return dispatch => {
        return api
            .deletePost(id)
            .then(() => {
                dispatch(deletePostAction(id));
            })
            .catch(error => {
                alert('Failed to connect API to delete a post');
                console.log(error);
            });
    };
};

export const addPost = postBody => {
    const { name, body } = postBody;
    return dispatch => {
        // Validation
        if (name === '' || body === '') {
            alert('Please fill out name and body.');
            return false;
        }

        return api
            .addPost(postBody)
            .then(post => {
                dispatch(addPostAction(post));
            })
            .catch(error => {
                alert('Failed to connect API to add a post');
                console.log(error);
            });
    };
};
