import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

// Validation rules
const validate = values => {
  const errors = {}
  errors.title = values.title ? undefined : "Enter a title"
  errors.content = values.content ? undefined : "Enter some content"
  
  return errors
}

// redux-form input Field creator
const formInput = ({ input, meta, label}) => {
  const { error, touched } = meta

  return(
    <div className={ "form-group"}>
      <div className="d-flex justify-content-between">
        <label htmlFor={ input.name }>{ label }</label>
        <span className="ml-auto text-danger">
          { touched && (error && <span> { error }</span>) }
        </span>
      </div>
      <input
        {...input}
        className={`form-control ${ touched && error && "is-invalid"}`}
        type="text"
        id={ input.name } />
    </div>
  )
}

const PostsNew = props => {
  const onSubmit = values => console.log("values", values)
  const { handleSubmit, reset } = props
    
  return (
    <main>
      <form onSubmit={ handleSubmit(onSubmit) } onReset={ reset } >
      <h1>Make a new post</h1>
        
        <Field name="title" label="Post Title" component={formInput} />
        <Field name="categories" label="Categories" component={formInput} />
        <Field name="content" label="Content" component={formInput} />

        <div className="d-flex justify-content-between">
          <Link to="/" className="btn btn-danger">Cancel</Link>
          <button type="reset"  className="btn btn-outline-secondary">Reset</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </main>
  )
}

export default reduxForm({
  validate,
  form: "newPostForm"
})(PostsNew)