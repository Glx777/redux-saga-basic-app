import { CREATE_POST, REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, HIDE_ALERT, SHOW_ALERT } from "./types";

export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post,
})

export const showLoader = () => ({
    type: SHOW_LOADER
})

export const hideLoader = () => ({
    type: HIDE_LOADER
})
export const showAlert = text => dispatch => {
    dispatch({
        type: SHOW_ALERT,
        payload: text
    })

    setTimeout(() => {
        dispatch(hideAlert())
    }, 3000)
}

export const hideAlert = () => ({
    type: HIDE_ALERT
})


export const fetchPosts = () => ({
    type: REQUEST_POSTS
})