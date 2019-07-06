import React, { Component } from 'react';
import '../App.css';
import CityDetail from './CityDetail';


class Tour extends Component {
  render() {
    return (
        <div className="App">
        <p>{this.props.t.id}</p> 
        <p>{this.props.t.bandname}</p> 
        <p className="cityLink" onClick={this.gotocity.bind(this)}>{this.props.t.city}</p> 
        <p>{this.props.t.price}</p> 
        <p>{this.props.t.dateTime}</p> 
        
        <p>{this.props.t.map}</p> 
      </div>
    );
  }

  gotocity(){
      this.props.navigate('/city/'+this.props.t.city);
  }
}

export default Tour;
