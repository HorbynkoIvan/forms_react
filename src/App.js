import React, { Component } from 'react';
import BasicFormik from './formik/basicForm';
import './scss/common.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicFormik/>
      </div>
    );
  }
}

export default App;
