import React, { Component } from 'react';
import Band from './Band';
import '../App.css';


class AllBands extends Component {
  render() {
    return (
      <div className="App-bands">
       
       <h2>See All Bands</h2>
         {this.props.allbands.map(b=> <Band b={b} key={b.id} />)}
      </div>
    );
  }
}

export default AllBands;
