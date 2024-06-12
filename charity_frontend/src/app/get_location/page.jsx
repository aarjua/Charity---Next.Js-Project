"use client"
import { useState } from 'react';

const GeoLocator = () => {
    const [status, setStatus] = useState('');
    const [mapLink, setMapLink] = useState('');

    const geoFindMe = () => {
        setStatus('Locating…');
        setMapLink('');

        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setStatus('');
            setMapLink(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
        };

        const error = () => {
            setStatus('Unable to retrieve your location');
        };

        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    return (

        <div>
            <div className="big-banner-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="big-banner-descs">
                                <h1 className="big-b-title">Find My Location</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="error-area">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className="error-descs">
                                <h2>Show My Location</h2>
                                <button onClick={geoFindMe} className="btn-dnt" type="submit">
                                    Show My Location
                                </button>
                                {mapLink && (
                                    <a id="map-link" href={mapLink} target="_blank" rel="noopener noreferrer">
                                        {mapLink}
                                    </a>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeoLocator;