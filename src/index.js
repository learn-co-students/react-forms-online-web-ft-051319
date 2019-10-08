import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import DisplayData from './components/DisplayData'
import ParentComponent from './components/ParentComponent'

ReactDOM.render(
  <div>
    <ParentComponent/>
  </div>,
  document.getElementById('root')
);
