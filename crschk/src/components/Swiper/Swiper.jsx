import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Swiper.scss';
import img from '../../assets/img/player-background.jpeg'



export default function Swiper({countryState, setCurrentImage}) {
  const [images, setimages] = React.useState([{
    original: img,
    thumbnail: img
  }])

  React.useEffect(() => {
    setimages(countryState.attractions.map((el,index)=>{
      return {
        original: el.image,
        originalClass: 'image-gallery__image',
        thumbnail: el.image
      }
    }))
  }, [])


  return (
    images && <ImageGallery
      items={images}
      lazyLoad={true}
      thumbnailPosition="top"
      onSlide={(index) => {
        setCurrentImage(index);
      }}
    />
  );
}
