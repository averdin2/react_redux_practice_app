import React, { Component } from 'react';
import Users from './components/Users';
import Posts from './components/Posts';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Users />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
