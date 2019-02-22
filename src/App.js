import React, { Component } from 'react';
import BasicFormik1 from './formik/basicForm1';
import BasicFormik2 from './formik/basicForm2';
import './scss/common.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicFormik1/>
        <BasicFormik2/>
      </div>
    );
  }
}

export default App;
