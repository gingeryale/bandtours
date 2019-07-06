import React, { Component } from 'react';
import Tour from './Tour';
import '../App.css';


class AllTours extends Component {
  render() {
    return (
      <div className="App">
       
       <h2>See All Tours</h2>
         {this.props.alltours.map(t=> <Tour t={t} navigate={this.props.history.push} key={t.id} />)}
      </div>
    );
  }
}

export default AllTours;
