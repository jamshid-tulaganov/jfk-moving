import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react'
import './style.css'

export class MapContainer extends React.Component {


    open = {
        width: '100%',
        position: 'fixed',
        bottom: '0',
        left: '0',
        height: '280px',
        transform: 'translateY(100%)',
        transition: '1s',
        backgroundColor: 'white',
        zIndex: '0',
    }
    close = {
        width: '100%',
        position: 'fixed',
        bottom: '0',
        left: '0',
        height: '280px',
        transform: 'translateY(100%)',
        transition: '1s',
        backgroundColor: 'white',
        zIndex: '0',
    }

    render() {
        return (
            <Map
                google={this.props.google}

                zoom={14}

                containerStyle={{
                    width: '100%',
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    height: window.innerWidth > 767 ? '280px' : '100%',
                    transform: this.props.active ? 'translateY(0%)' : 'translateY(100%)',
                    transition: '1s',
                    backgroundColor: 'white',
                    zIndex: '0'

                }}
            >

                <Marker onClick={this.props.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div style={{
                        width: '300px',
                        height: '400px',
                        backgroundColor: 'red'
                    }} >
                        <h1>Salom</h1>
                    </div>
                </InfoWindow>
                {this.props.active ? <div className="col-md-4 d-flex justify-content-start align-items-end">

                    <button className="continue-button-map" onClick={this.props.setIsActive}>Continue</button>

                </div> : null}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer)