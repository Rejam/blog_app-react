import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'

class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    const PostList = ({ posts }) =>
      Object.values(posts).map(post =>
        <li className="list-group-item" key={ post.id }>
          { post.title }
        </li>
      )

    return (
      <div>
        <h1>Posts Index</h1>
        <ul className="list-group">
          <PostList posts={ this.props.posts } />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)