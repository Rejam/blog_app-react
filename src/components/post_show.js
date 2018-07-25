import React from 'react'
import { connect } from 'react-redux'
import { showPost, deletePost } from '../actions'
import { Link } from 'react-router-dom'

class PostShow extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.showPost(id)
  }

  deletePost = id =>
    this.props.deletePost(id,
    () => this.props.history.push("/"))
    
  render() {
    const { post } = this.props
    const { id } = this.props.match.params
    return (
      <div>
        <h1>Show a post</h1>
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
        <Link to="/" className="btn btn-primary">Back</Link>
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