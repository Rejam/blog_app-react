import { FETCH_POSTS, SHOW_POST } from '../actions/types'

const PostsReducer = (state = {}, action) => {
  switch(action.type) {
    case SHOW_POST:
      const { data } = action.payload
      return { 
        ...state,
        [data.id]: data
      }

    case FETCH_POSTS:
      return action.payload.data.reduce((obj, item) =>
        Object.assign(obj, {[item.id]: item})
      , {})

    default:
      return state
  }
}

export default PostsReducer