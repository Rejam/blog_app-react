import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import  { BrowserRouter, Route, Switch } from 'react-router-dom'

import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostShow from './components/post_show'

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={ PostsNew } />
          <Route path="/posts/:id" component={ PostShow } />
          <Route path="/" component={ PostsIndex } />
        </Switch>
      </div>
    </BrowserRouter>    
  </Provider>
  , document.querySelector('.container'));
