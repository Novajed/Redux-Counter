import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
  }

  handleAdd() {
    console.log('call action');
    const { increment } = this.props;
    increment();
  }

  handleSubtract() {
    console.log('call action');
    const { decrement } = this.props;
    decrement();
  }

  render() {
    const { count } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Redux Counter</h2>
          <p>Use the buttons below to adjust the count</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>The count is {count}</p>
          <button className="btn" onClick={this.handleAdd}>
            Add +
          </button>
          <button className="btn" onClick={this.handleSubtract}>
            Subtract -
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(App);
