import React, { useRef, useEffect } from 'react';
import { ContentWrapper, ImageWrapper } from './HeroSlide.styles';

import { PrimaryButton } from '../../styles/Buttons.styles';
import { ISlide } from '../../pages/index';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import gsap from 'gsap';

interface Props {
  slide: ISlide;
  image: IGatsbyImageData | null;
}

const HeroSlide: React.FC<Props> = ({ slide, image }) => {
  const contentRef = useRef();
  const imageRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(contentRef.current, { opacity: `1` });
    gsap.to(imageRef.current, { opacity: `1` });
  });
  return (
    <>
      <ContentWrapper ref={contentRef}>
        <p>{slide.subheading}</p>
        <h1>{slide.heading}</h1>
        <PrimaryButton>Czytaj więcej</PrimaryButton>
      </ContentWrapper>
      <ImageWrapper ref={imageRef}>
        {image !== undefined ? (
          <GatsbyImage image={getImage(image)} alt="basic alt" />
        ) : (
          ``
        )}
      </ImageWrapper>
    </>
  );
};

export default HeroSlide;
