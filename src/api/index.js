import axios from 'axios'

const ROOTURL = "https://reduxblog.herokuapp.com/api/posts"
const KEY = "rejamblogapp"

const api_getPosts = () =>
  axios(`${ ROOTURL}?key=${KEY}`)

const api_showPost = id =>
  axios(`${ ROOTURL }/${ id }?key=${ KEY }`)

const api_createPost = values =>
  axios.post(`${ ROOTURL}?key=${ KEY }`, values)

export { api_getPosts, api_showPost, api_createPost }

