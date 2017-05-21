import React, {Component} from 'react';

class GoogleMap extends Component{

    //this method is called automaticly when the Component is render on the screen
    componentDidMount(){
        //this create the embeded maps. The param (this.refs.map, looks for this HTML element, and render the map into it)
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return (
            //this.refs.map
            <div ref="map"/>

            )
    }
}

 export default GoogleMap;