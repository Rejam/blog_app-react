import { FETCH_POSTS } from './types'
import { getPosts } from '../api'

const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: getPosts()
})

export { fetchPosts }