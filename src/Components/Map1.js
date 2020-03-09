import React, { Component } from 'react';
import Data from "./Data"
import Date from "./Date"
import City from "./Cities"
import Location from "./Location"
import Axios from 'axios';
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            result: [],
            cities: [],
            Location: '',
            Rain: '',
            Date: ''
         }
    }

    submit = (e) =>{
        e.preventDefault();
        const App_Key = "13a7abd459912fdf8833efc12a3429a0";
        const query = e.target.elements.cities.value
        Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${App_Key}`)

        .then(response =>{
            this.setState({result:response.data.list[0].main})
            this.setState({Date:response.data.list[0]})
            this.setState({Location:response.data.city.coord})
            this.setState({cities:response.data.city})
            console.log(this.state.Location)
        })

        .catch( error =>{
            console.log(error)
        })
     }
     
    render() { 
        return ( 
            <div className="Main">
             <div className="container">
                <div className="main-container">
                    <form onSubmit={this.submit}>
                        <input type="text" name="cities" placeholder="Enter City Name" onChange={this.getvalue}/>
                        <button type="submit">Search</button>
                    </form>
                </div>    
             </div>
             <City cities ={this.state.cities}/>
             <Date calender ={this.state.Date}/>
             <Data result ={this.state.result}/>
             <Location locate ={this.state.Location}/>
            </div>
         );
    }
}
 
export default Map;