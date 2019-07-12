import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  shouldComponentUpdate(nextProps) {
    return !(
      this.props.location.lat === nextProps.location.lat &&
      this.props.location.lng === nextProps.location.lng
    );
  }

  render() {
    const GoogleMapWrapper = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{
          lat: this.props.location.lat,
          lng: this.props.location.lng
        }}
        defaultZoom={15}
        options={{ streetViewControl: false, gestureHandling: 'none' }}
      >
        <Marker position={this.props.location} />
      </GoogleMap>
    ));
    return (
      <div
        style={{
          height: 350,
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          padding: 0
        }}
      >
        <GoogleMapWrapper
          containerElement={
            <div
              style={{
                width: '100%',
                marginLeft: 0
              }}
            />
          }
          mapElement={<div style={{ height: '100%', width: '100%' }} />}
        />
      </div>
    );
  }
}
export default Map;
