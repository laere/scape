import React, { Component } from 'react';
import MainHeader from '../components/MainHeader';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        {this.props.children}
      </div>
    );
  }
}
