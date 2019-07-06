import React, { Component } from 'react';

class AddTour extends Component {
  render() {
    return (
      <div className="App">
       
          <h2>Add Band Tour Date</h2>
          <input name="bandname" onChange={this.handleChg.bind(this)} placeholder="name"/>
          <input name="city" onChange={this.handleChg.bind(this)} placeholder="city"/>
          <input name="bandID" onChange={this.handleChg.bind(this)} placeholder="bandID"/>
          <input name="price" onChange={this.handleChg.bind(this)} placeholder="price"/>
          <input name="dateTime" type="date" onChange={this.handleChg.bind(this)} placeholder="date"/>
          <input name="map" onChange={this.handleChg.bind(this)} placeholder="map"/>
          <button onClick={this.saveTourData.bind(this)}>save</button>
    
      
      </div>
    );
  }
  handleChg(e){
      this.setState({[e.target.name]:e.target.value})
  }
  
async saveTourData(){
	const responseData = await fetch(`http://localhost:3000/api/tours`, {
		method:'post',
		headers: {
			'Accept':'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(this.state)
	});
	const content = await responseData.json();
	console.log("content saved");
  }
}

export default AddTour;
