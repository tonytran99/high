import {RECIEVED_POSTS, REQUEST_POSTS} from '../action/postAction'

const initState = {}

const postReducer = (state = initState, action) => {

    switch (action.type) {
        case RECIEVED_POSTS:
            return {
                ...state,
                loading : false,
                posts: action.data
            };
        case REQUEST_POSTS:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default postReducer