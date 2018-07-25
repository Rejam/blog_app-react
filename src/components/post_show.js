import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { showPost, deletePost } from '../actions'

class PostShow extends React.Component {
  componentDidMount = () =>
    this.props.showPost(this.props.match.params.id)

  deletePost = id =>
    this.props.deletePost(id,
    () => this.props.history.push("/"))

  render() {
    const { post } = this.props
    const { id } = this.props.match.params

    return (
      <div>
        <Link to="/">Back</Link>
        {
          !post ?
            <div>Loading...</div>
            :
            <div>
              <h3>{post.title}</h3>
              <p>{post.categories}</p>
              <p>{post.content}</p>
            </div>
        }
        <button
          className="btn btn-danger"
          onClick={ () => this.deletePost(id) }
        >Delete</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.id]
})

export default connect(mapStateToProps, { showPost, deletePost })(PostShow)