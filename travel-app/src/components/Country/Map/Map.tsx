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

const polygonGeopetry: any = [
  [
    [53.912498, 23.484128],
    [53.905702, 24.450684],
    [54.282423, 25.536354],
    [54.846963, 25.768433],
    [55.167176, 26.588279],
    [55.615107, 26.494331],
    [55.783314, 27.10246],
    [56.16913, 28.176709],
    [55.918344, 29.229513],
    [55.670091, 29.371572],
    [55.789463, 29.896294],
    [55.550976, 30.873909],
    [55.081548, 30.971836],
    [54.811771, 30.757534],
    [54.157056, 31.384472],
    [53.974639, 31.791424],
    [53.794029, 31.731273],
    [53.618045, 32.405599],
    [53.351421, 32.693643],
    [53.132726, 32.304519],
    [53.167427, 31.497644],
    [53.073996, 31.305201],
    [52.742052, 31.540018],
    [52.101678, 31.785998],
    [52.042353, 30.927549],
    [51.822806, 30.619454],
    [51.319503, 30.555117],
    [51.416138, 30.157364],
    [51.368234, 29.254938],
    [51.602044, 28.992835],
    [51.427714, 28.617613],
    [51.572227, 28.241615],
    [51.592303, 27.454066],
    [51.832289, 26.337959],
    [51.910656, 25.327788],
    [51.888461, 24.553106],
    [51.617444, 24.005078],
    [51.578454, 23.527071],
    [52.023647, 23.508002],
    [52.486977, 23.199494],
    [52.691099, 23.799199],
    [53.089731, 23.804935],
    [53.470122, 23.527536],
    [53.912498, 23.484128],
  ],
];

const MapCountry = (): JSX.Element => {
  return (
    <Container className='map-wrapper'>
      <YMaps>
        <Map
          defaultState={{
            center: [53.53, 27.33],
            zoom: 5,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          height='40vh'
          width='100%'
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <TypeSelector options={{ float: 'right' }} />
          <Placemark defaultGeometry={[53.53, 27.33]} />
          <Polygon
            geometry={polygonGeopetry}
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
