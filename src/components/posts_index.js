import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
        </li>)

    return (
      <div>
        <div className="text-xs-right">
          <Link
            className="btn btn-primary"
            to="/posts/new">Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
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