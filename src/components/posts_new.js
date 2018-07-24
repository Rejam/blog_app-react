import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostsNew = props =>
<main>
  <h1>Make a new post</h1>
  <form>
    <FormInput name="title" type="text" label="Post Title"/>
    <FormInput name="categories" type="text" label="Categories"/>
    <FormInput component="textarea" name="content" type="text" label="Content"/>
  </form>
</main>

const FormInput = ({ name, type, label, component="input" }) =>
  <div className="form-group">
    <label htmlFor={ name }>{ label }</label>
    <Field
      className="form-control"
      id={ name }
      name={ name }
      type={ type }
      component={ component }
      placeholder={ name }
    />
  </div>

export default reduxForm({
  form: "PostsNewForm"
})(PostsNew)