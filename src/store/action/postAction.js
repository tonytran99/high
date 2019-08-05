export const RECIEVED_POSTS = 'RECIEVED_POSTS'
export const REQUEST_POSTS = 'REQUEST_POST'

export const requestPost = () =>({
    type: REQUEST_POSTS,
})

export const recievedPost = (data) =>({
    type: RECIEVED_POSTS,
    data: data.items
})

export const fetchPosts = () => {
    return (dispatch) =>{
        dispatch(requestPost());
        return fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mheidj')
        .then((res) => res.json())
        .then((data) => { // data from api call
            dispatch(recievedPost(data))
        });
    }
}