import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AddTour from './comps/AddTour';
import AllBands from './comps/AllBands';
import AllTours from './comps/AllTours';
import AddBands from './comps/AddBands';
import CityDetail from './comps/CityDetail';
import Tour from './comps/Tour';

class App extends Component {
  state={
    bands:[],
    tours:[]
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/tours').then(r=>r.json()).then(data=>{
    this.setState({ tours:data})
  });

  fetch('http://localhost:3000/api/bands').then(r=>r.json()).then(data=>{
    this.setState({ bands:data})
  });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Router>
                    <div>
                        <ul>
                        <li>
                                <Link to="/bands">All Bands</Link>
                            </li>
                            <li>
                                <Link to="/tours">All Tours</Link>
                            </li>
                            <li>
                                <Link to="/addtours">Add Tour</Link>
                            </li>
                            <li>
                                <Link to="/addbands">Add Band</Link>
                            </li>
                        </ul>

                        <hr />
                        <Route path='/tours' render={(props) => 
                        <AllTours {...props} alltours={this.state.tours}/>}/>

                        <Route path='/bands' render={(props) => 
                        <AllBands {...props} allbands={this.state.bands}/>}/>

                        <Route path='/tours' render={(props) => <AddTour {...props} />}/>
                        <Route path='/tour' render={(props) => <Tour {...props} />}/>

                        <Route path="/addtour" component={AddTour} />
                        <Route path="/addband" component={AddBands} />

                        <Route exact path="/city/:cityid" component={CityDetail} />
                    </div>
                </Router>
         
         

        </div>
     
      </div>
    );
  }
}

export default App;
