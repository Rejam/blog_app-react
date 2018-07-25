import React from 'react'
import { connect } from 'react-redux'
import { showPost } from '../actions'

class PostShow extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.showPost(id)
  }
  render() {
    const { post } = this.props
    return (
      <div>
        <h1>Show a post</h1>
        {
          !post ? <div>Loading...</div> :
            <div> 
              <h3>{ post.title }</h3>
              <p>{ post.categories }</p>
              <p>{ post.content }</p>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.id]
})

export default connect(mapStateToProps, { showPost })(PostShow)