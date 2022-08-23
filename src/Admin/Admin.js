import React, { Component } from 'react';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}
