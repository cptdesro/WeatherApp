import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component{
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const humidity= cityData.list.map(weather => weather.main.humidity);
        const pressure= cityData.list.map(weather => weather.main.pressure);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;

        return(
            <tr key={cityName}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                </td>
                <td>
                    <Chart data={temperature} color="orange" units="K"/>
                </td>
                <td>
                    <Chart data={pressure} color="blue" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="green" units="%"/>
                </td>
            </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );//{this.props.weather.map(this.renderWeather)} => for each city inside weather, call the function with city as params
    }


}

function mapStateToProps(state){
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
