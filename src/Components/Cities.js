import React, { Component } from 'react';
class City extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
             <div className="city-details">
               <h3> Weather in  {this.props.cities.name}, 
                {this.props.cities.country}</h3> 
             </div>
            </div>
         );
    }
}
 
export default City;