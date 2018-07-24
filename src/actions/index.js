import { FETCH_POSTS, CREATE_POST } from './types'
import { api_getPosts, api_createPost } from '../api'

const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: api_getPosts()
})

const createPost = (values, callback) => {
  const req = api_createPost(values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: req
  }
}

export { fetchPosts, createPost }