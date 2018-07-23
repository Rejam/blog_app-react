import { combineReducers } from 'redux';
import { FETCH_POSTS } from '../actions/types';

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return action.payload.data.reduce((obj, item) =>
        Object.assign(obj, {[item.id]: item})
      , {})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer
