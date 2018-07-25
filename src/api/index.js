import axios from 'axios'

const ROOTURL = "https://reduxblog.herokuapp.com/api/posts"
const KEY = "rejamblogapp"

const api_fetchPosts = () =>
  axios(`${ ROOTURL}?key=${KEY}`)

const api_showPost = id =>
  axios(`${ ROOTURL }/${ id }?key=${ KEY }`)

const api_createPost = values =>
  axios.post(`${ ROOTURL}?key=${ KEY }`, values)

const api_deletePost = id =>
  axios.delete(`${ ROOTURL }/${ id }?key=${ KEY }`)

export { api_fetchPosts, api_showPost, api_createPost, api_deletePost }

