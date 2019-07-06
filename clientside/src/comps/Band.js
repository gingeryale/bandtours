import React, { Component } from 'react';
import '../App.css';

class Band extends Component {
  render() {
    return (
      <div className="App">
        <span>
        <li>{this.props.b.id}</li> 
        
        <li>&nbsp;{this.props.b.bandname}</li> 
        </span>
      </div>
    );
  }
}

export default Band;
