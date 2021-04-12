import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { YMaps, Map as YMap, FullscreenControl, GeoObject, TypeSelector, Placemark, Polygon } from 'react-yandex-maps';

import './Map.scss';

export default function Map({ data }) {
  const { locale } = useSelector(state => state);
  const { zoom = 6, capital, geometry } = data;

  const [shouldUpdate, forceUpdate] = useState(false);

  useEffect(() => {
    forceUpdate(true)
    setTimeout(() => forceUpdate(false), 0)
  }, [locale])

  return (
    <div className="wrapper map-wrapper">
    { !shouldUpdate &&
      <YMaps
        query={{
          lang: locale,
          coordorder: 'longlat',
          apikey: "6a7ecd4e-5dac-4c29-8e69-110f766bb06c"
        }}
      >
        <YMap
          width='100%'
          height='100%'
          className='map'
          defaultState={{
            center: capital.coordinates,
            zoom: zoom
          }}
          defaultOptions={{
            autoFitToViewport: 'always',
            exitFullscreenByEsc: true,
            nativeFullscreen: true,
          }}
        >
          <FullscreenControl/>
          <Placemark
            geometry={capital.coordinates}
            properties={{
              iconCaption: capital.name,
            }}
            options={{
              preset: 'islands#redDotIconWithCaption'
            }}
          />
          { geometry && geometry.map((poly, i) => (
            <Polygon
              key={i}
              geometry={poly}
              options={{
                fillColor: '#FF000011',
                strokeColor: '#FF0000',
                strokeWidth: 5
              }}
            />
          ))
          }
          <TypeSelector />
        </YMap>
      </YMaps>
    }
    </div>
  )
};
