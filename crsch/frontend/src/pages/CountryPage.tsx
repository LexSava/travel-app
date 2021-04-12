import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { onUtcOffsetChanged } from '../actions/utc-offset-action';
import { onCountryChanged } from '../actions/country-action';
import { useParams } from "react-router-dom";

import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import ReactImageGallery from "react-image-gallery";

import '../styles/ImageGallery.scss';
import ReactPlayer from 'react-player/youtube';

import { MapContainer, TileLayer, Marker, Polygon } from 'react-leaflet';
import polygons from '../data/polygon';  
import L from 'leaflet';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet/dist/images/marker-icon.png';
import mapMarker from '../assets/images/marker.png';

import { makeStyles } from '@material-ui/core';
import { theme } from "../mui-style";

import { Loader } from "../components/Loader";
import { CountryAvatar } from "../components/CountryAvatar";
import { ICountryAvatarProps, ISightseeing, AppState, Language, ICountryFull, IRating } from "../interfaces";
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';
import { onWeatherParamsChanged } from "../actions/weather-params-action";
import SightRating from "../components/SightRating";
import Footer from "../components/Footer";

const useStyles = makeStyles({
  container: {
    overflowY: 'auto',
  },
  wrapper: {
    minHeight: 'calc(100% - 64px)',
    'max-width': '60vmax',
    positon: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: theme.spacing(0, 'auto'),
    padding: theme.spacing(0, 2)
  },
  loaderWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#E5F6EB'
  },
  playerWrapper: {
    flex: '0 1 100%',
    margin: theme.spacing(3, 'auto', 0, 'auto'),
    position: 'relative',
    paddingTop: '56.25%',
  },
  reactPlayer: {     
    position: 'absolute',
    top: 0,
    left: 0,
  },
  mapWrapper: {
    flex: '0 1 100%',
    margin: theme.spacing(3, 'auto', 3, 'auto'),
    position: 'relative',
    paddingTop: '56.25%',
  },
  galeryWrapper: {
  },
  leafletMap: {     
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }  
});

const mapboxAccessToken = 'pk.eyJ1IjoicGFjZXRpbiIsImEiOiJja21kZWlub3MyOHR1Mnptem55aHlyZDc5In0.hXmXtrE6Pl0aZsmlXBlLMg';
const engMapTile = `https://api.mapbox.com/styles/v1/pacetin/ckmdggt0nig7l17qo7uqcq0mp/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`;  
const ruMapTile = `https://api.mapbox.com/styles/v1/pacetin/ckmdb9xlo16au17p0ma60oqnx/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`;

const pointerIcon = new L.Icon({
  iconUrl: mapMarker,  
  iconSize: [32, 32],
  className: 'custom-icon'
});

const CountryPage: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { country, lang  } = useSelector<AppState, AppState>(state => state);

  const { id } = useParams<Record<string, string | undefined>>();

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);  
  const [avatar, setAvatar] = useState<ICountryAvatarProps | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<number[] | null>(null);
  const [geometry, setGeometry] = useState<any[][][] | any[][]>([]);  
  const [ratings, setRatings] = useState<IRating[] | []>([]);
  const [ imgIndex, setImgIndex ] = useState(0);
  const [ mapTile, setMapTile ] = useState(lang === 1 ? engMapTile : ruMapTile);    

  useEffect(() => {
    fetch(`/api/countries/${id}?lang=${Language[lang]}`)
      .then(response => response.json())
      .then((data: ICountryFull) => {
        const getImagesFromData = (): ReactImageGalleryItem[] => {
          return data.sights.map((elem: ISightseeing) => {
            return {
              original: `${cloudUrl}/${cloudName}/${elem.imageId}`,
              thumbnail: `${cloudUrl}/${cloudName}/image/upload/h_150/${elem.smallImageId}`,
              originalAlt: elem.name,
              description: elem.description,
            };
          });
        };

        const getAvatarFromData = (): ICountryAvatarProps => {
          return ({
            name: data.name,
            capital: data.capital,
            imageUrl: `${cloudUrl}/${cloudName}/${data.imageId}`,
            description: data.description,
          })
        }

        const getGeometryFromData = (): any[][][] | any[][] => {
          const polygon = polygons.find((elem) => elem.id === data.id);
          return polygon!.geometry;
        }

        const getRatingsFromData = (): IRating[] => data.sights.map((elem: ISightseeing) => ({ ...elem.rating, sightId: elem.sightId || elem.id }));

        setImages(prev => getImagesFromData());
        setAvatar(prev => getAvatarFromData());
        setVideoUrl(prev => data.videoUrl);
        setCoordinates(prev => data.coords);
        setGeometry(prev => getGeometryFromData()); 
        setRatings(prev => getRatingsFromData());
        dispatch(onUtcOffsetChanged(data.utcOffset))
        dispatch(onWeatherParamsChanged(data))
        dispatch(onCountryChanged(data));
        setMapTile(prev => { 
          return (lang === 1) ? engMapTile : ruMapTile;
        });  
        setLoading(prev => false);                       
      })
  }, [id, lang])

  useEffect(() => {
    if (country) {
      console.log(country);
      const getRatingsFromData = (): IRating[] => country!.sights.map((elem: ISightseeing) => ({ ...elem.rating, sightId: elem.sightId || elem.id }));
      console.log(getRatingsFromData());
      setRatings(prev => getRatingsFromData());
    }
  }, [ country ])

    return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        { loading && <div className={classes.loaderWrapper}><Loader/></div>}
        { avatar && <CountryAvatar {...avatar} />}        
        { images.length !== 0 && <ImageGallery
            items={images}
            thumbnailPosition={"bottom"}
            infinite={true}
            lazyLoad={true}
            showBullets={true}
            slideDuration={500}
            slideInterval={2000}
            renderCustomControls={() => <SightRating rating={ratings[imgIndex]}/>}
            onSlide={(curIndex) => {setImgIndex(curIndex)}}
          />
        }
        {videoUrl &&
          <div className={classes.playerWrapper}>
            <ReactPlayer 
              className={classes.reactPlayer}
              url={videoUrl}
              controls={true}
              width='100%'
              height='100%'                           
            />
          </div>
        }
        {coordinates && geometry && mapTile &&
          <div className={classes.mapWrapper}>
            <MapContainer className={classes.leafletMap} fullscreenControl={true} center={[coordinates[0], coordinates[1]]} zoom={5} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors,  Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                url={mapTile}
              />
              <Marker  position={[coordinates[0], coordinates[1]]} icon={pointerIcon}>       
              </Marker>
              <Polygon pathOptions={{ color: '#c9bc1f' }} positions={geometry} />                   
            </MapContainer>
          </div>
        }
      </div>
      <Footer />

    </div>
  );
};

export default CountryPage;