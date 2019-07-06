import React from 'react';
import '../App.css';
import Tour from './Tour';
import GoogleMapReact from 'google-map-react';



class CityDetail extends React.Component {
  state = {
    resdata: [],
    city: this.props.match.params.cityid
}
   
       componentDidMount() {
        let cityID = this.props.match.params.cityid;
        fetch(`http://localhost:3000/api/tours/city/${cityID}`)
        .then(r => r.json()).then(data => {
                this.setState({resdata:data});
            })
    }


    render() {
        return (
            <div className="App">
                <h1>All Bands Performing at: {this.state.city}</h1>
                <p>
                {this.state.resdata.map(s=> <span key={s.bandID}>Band Name:{s.bandname}</span>)}
                </p>
       
            </div>
        );

    }

}

export default CityDetail;
