import React, { Component } from 'react';
class Date extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <h4>
               <p> Last temp updates: {this.props.calender.dt_txt} </p> 
              </h4>  
            </div>
         );
    }
}
 
export default Date;