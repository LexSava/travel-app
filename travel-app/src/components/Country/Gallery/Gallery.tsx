import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.scss";
import React, { useState, useEffect } from "react";

import { Carousel, Container, Image } from "react-bootstrap";
import { ArrowsFullscreen, FullscreenExit } from "react-bootstrap-icons";

import { ISights } from "./../../../utils/interfaces";

type GalleryProps = {
  sightsInfo: ISights[];
  conveyLanguage: string;
};

const Gallery = ({ sightsInfo, conveyLanguage }: GalleryProps): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [sightElements, setSightElements] = useState<any>([]);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };

  const handleClickOverview = (e: any): void => {
    handleSelect(e.target.dataset.key * 1);
  };

  const openFullscreen = (e: any): void => {
    const galleryElement: any = e.target.parentElement;
    if (galleryElement.requestFullscreen) {
      setFullScreen(true);
      galleryElement.requestFullscreen();
    }
  };

  const closeFullscreen = (): void => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  const sightsPreviwElements: React.ReactChild[] = sightsInfo.map(
    (sight: ISights, indexSight: number) => {
      let previwClasses: string = "gallery-preview__image";
      if (index === indexSight)
        previwClasses += " gallery-preview__image_current";
      return (
        <Image
          className={previwClasses}
          data-key={indexSight}
          key={indexSight}
          src={sight.photoSrc1}
          onClick={handleClickOverview}
        />
      );
    }
  );

  useEffect(() => {
    setSightElements(
      sightsInfo.map((sight: ISights, sightIndex: number) => {
        if (conveyLanguage === "en") {
          return (
            <Carousel.Item key={sightIndex}>
              <img
                className="d-block w-100"
                src={sight.photoSrc1}
                alt={sight.nameEn}
              />
              <Carousel.Caption>
                <h3>{sight.nameEn}</h3>
                <p>{sight.articleEn}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        } else if (conveyLanguage === "ru") {
          return (
            <Carousel.Item key={sightIndex}>
              <img
                className="d-block w-100"
                src={sight.photoSrc1}
                alt={sight.nameRu}
              />
              <Carousel.Caption>
                <h3>{sight.nameRu}</h3>
                <p>{sight.articleRu}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        } else if (conveyLanguage === "be") {
          return (
            <Carousel.Item key={sightIndex}>
              <img
                className="d-block w-100"
                src={sight.photoSrc1}
                alt={sight.nameBe}
              />
              <Carousel.Caption>
                <h3>{sight.nameBe}</h3>
                <p>{sight.articleBe}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        }
      })
    );
  }, [conveyLanguage]);

  const fullScreenIcon: React.ReactNode = fullScreen ? (
    <FullscreenExit
      className="fullscreen-icon fullscreen-icon_exit"
      onClick={closeFullscreen}
    />
  ) : (
    <ArrowsFullscreen className="fullscreen-icon" onClick={openFullscreen} />
  );

  return (
    <div className="carousel-wrapper">
      <Container>
        {fullScreenIcon}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {sightElements}
        </Carousel>
        <div className="gallery-preview">{sightsPreviwElements}</div>
      </Container>
    </div>
  );
};

export default Gallery;
