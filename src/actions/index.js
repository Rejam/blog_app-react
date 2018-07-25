import { FETCH_POSTS, SHOW_POST, CREATE_POST } from './types'
import { api_getPosts, api_showPost, api_createPost } from '../api'

const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: api_getPosts()
})

const showPost = id => ({
  type: SHOW_POST,
  payload: api_showPost(id)
})

const createPost = (values, callback) => {
  const req = api_createPost(values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: req
  }
}

export { fetchPosts, showPost, createPost }