import { 
  FETCH_POSTS, 
  SHOW_POST, 
  CREATE_POST, 
  DELETE_POST } from './types'
import { 
  api_fetchPosts, 
  api_showPost, 
  api_createPost, 
  api_deletePost } from '../api'

const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: api_fetchPosts()
})

const showPost = id => ({
  type: SHOW_POST,
  payload: api_showPost(id)
})

const createPost = (values, callback) => {
  const req = api_createPost(values)
    .then(callback)

  return {
    type: CREATE_POST,
    payload: req
  }
}

const deletePost = (id, callback) => {
  const req =  api_deletePost(id)
    .then(callback)
  return {
    type: DELETE_POST,
    payload: req
  }
}

export { fetchPosts, showPost, createPost, deletePost }