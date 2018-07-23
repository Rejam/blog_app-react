import { FETCH_POSTS } from '../actions/types'

const PostsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return action.payload.data.reduce((obj, item) =>
        Object.assign(obj, {[item.id]: item})
      , {})
    default:
      return state
  }
}

export default PostsReducer