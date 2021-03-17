import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  YMaps,
  Map,
  Placemark,
  Polygon,
  TypeSelector,
} from 'react-yandex-maps';
import { Container } from 'react-bootstrap';

import './Map.scss';

interface MapCountryProps {
  latlng: number[];
  coordinates: any;
}

const MapCountry = ({ latlng, coordinates }: MapCountryProps): JSX.Element => {
  return (
    <Container className='map-wrapper'>
      <YMaps>
        <Map
          defaultState={{
            center: latlng,
            zoom: 3,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          height='40vh'
          width='100%'
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <TypeSelector options={{ float: 'right' }} />
          <Placemark defaultGeometry={latlng} />
          <Polygon
            geometry={coordinates}
            options={{
              fillColor: '#00FF00',
              strokeColor: '#0000FF',
              opacity: 0.5,
              strokeWidth: 5,
              strokeStyle: 'shortdash',
            }}
          />
        </Map>
      </YMaps>
    </Container>
  );
};

export default MapCountry;
