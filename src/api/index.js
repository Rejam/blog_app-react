import axios from 'axios'

const ROOTURL = "https://reduxblog.herokuapp.com/api/posts"
const KEY = "rejamblogapp"

const getPosts = () =>
  axios(`${ ROOTURL}?key=${KEY}`)

  export { getPosts }