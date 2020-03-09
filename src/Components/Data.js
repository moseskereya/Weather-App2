import React, { Component } from 'react';
class Data extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h4>
                    Temp: 
                   <span>
                       {Math.round( this.props.result.temp / 10)}
                       &#8451;
                    </span>
                </h4>
                <h4> Pressure :
                   <span>{this.props.result.pressure} hpa</span>
                </h4>
                <h4> Humidity :
                    <span>{this.props.result.humidity}%</span>
                </h4>
                <p>Elevetaion : 
                    <span>
                    {this.props.result.sea_level} 
                </span> AMSL</p>
            </div>
         );
    }
}
 
export default Data;