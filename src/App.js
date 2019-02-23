import React, { Component } from 'react';
import BasicFormik1 from './formik/basicForm1';
import BasicFormik2 from './formik/basicForm2';
import BasicFormik3 from './formik/basicForm3_with_yup';
import './scss/common.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicFormik1/>
        <BasicFormik2/>
        <BasicFormik3/>
      </div>
    );
  }
}

export default App;
