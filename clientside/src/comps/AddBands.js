import React, { Component } from 'react';
import '../App.css';

class AddBands extends Component {
  render() {
    return (
      <div className="App">
       
          <h2>Add Band Name</h2>
          <input name="bandname" onChange={this.handleChg.bind(this)} placeholder="band name"/>
          <button onClick={this.saveTourData.bind(this)}>save</button>
    
      
      </div>
    );
  }
  handleChg(e){
      this.setState({[e.target.name]:e.target.value})
  }
  
async saveTourData(){
	const responseData = await fetch(`http://localhost:3000/api/bands`, {
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

export default AddBands;
