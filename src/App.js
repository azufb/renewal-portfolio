import Navi from './component/Navi';
import './App.css';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='contents'>
        <Navi />
        <footer>&copy;2021 Azusa</footer>
      </div>
    )
  }
}