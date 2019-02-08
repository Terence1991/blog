import jsonPlacholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
 const response =  await jsonPlacholder.get('/posts')


 dispatch({ type: 'FETCH_POSTS', payload: response })
};
