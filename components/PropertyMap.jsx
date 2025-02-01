'use client';
import { useEffect, useState } from 'react';
import { setDefaults, fromAddress} from 'react-geocode';

const PropertyMap = () => {

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    const [viewport, setViewport] = useState({
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 12,
        with: '100%',
        height: '500px',
    });

    const [ loading, setLoading ] = useState(true);
    const [ geocodeError, setGeocodeError ] = useState(false);
    setDefaults({   
        // key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        key: "",
        language: 'en',
        region: 'canada',
    });

    useEffect(() => {
        const fetchCoords = async () => {
            try {
                const response = await fromAddress('1600 Amphitheatre Parkway, Mountain View, CA');

                if (response.results.length === 0) {
                    setGeocodeError(true);
                    return;
                }
                const { lat, lng } = response.results[0].geometry.location;
                console.log('Helloooo ',lat, lng);
            } catch (error) {
                console.error('Error fetching geocode data: ', error);
                setGeocodeError(true);
            }finally {
            setLoading(false);
            }
        };
        fetchCoords();  
    }
    ,[]);

    return (
        <div>Under Construction Map</div>
    );
}


export default PropertyMap;