import React from 'react';
import { ContentWrapper, ImageWrapper } from './HeroSlide.styles';

import { PrimaryButton } from '@/styles/Buttons.styles';
import { ISlide } from '../../pages/index';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  slide: ISlide;
  image: IGatsbyImageData | null;
}

const HeroSlide: React.FC<Props> = ({ slide, image }) => {
  return (
    <>
      <ContentWrapper>
        <p>{slide.subheading}</p>
        <h1>{slide.heading}</h1>
        <PrimaryButton>Czytaj więcej</PrimaryButton>
      </ContentWrapper>
      <ImageWrapper>
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
