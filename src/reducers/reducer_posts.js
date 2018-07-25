import { FETCH_POSTS, SHOW_POST, DELETE_POST } from '../actions/types'

const PostsReducer = (state = {}, action) => {
  switch(action.type) {

    case SHOW_POST:
      const { data } = action.payload
      return { 
        ...state,
        [data.id]: data
      }

    case DELETE_POST:
      const postId = action.payload
      const { [postId]: toBeDeleted, ...posts } = state
      return posts

    case FETCH_POSTS:
      return action.payload.data.reduce((obj, item) =>
        Object.assign(obj, {[item.id]: item})
      , {})

    default:
      return state
  }
}

export default PostsReducer