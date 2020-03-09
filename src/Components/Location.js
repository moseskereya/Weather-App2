import React, { Component } from 'react';
class Location extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h3>
                  Locations
                </h3>
                <h4>Latitude :{this.props.locate.lat}</h4>
                <h4> Longitude:{this.props.locate.lon}</h4>
            </div>
         );
    }
}
 
export default Location;