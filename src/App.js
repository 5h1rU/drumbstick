import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    name: 'mariscal'
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
      </div>
    );
  }
}
