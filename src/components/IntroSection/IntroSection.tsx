import { PrimaryButton } from '../../styles/Buttons.styles';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Wrapper } from './IntroSection.styles';
// Icons
import { FaWrench } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';

const IntroSection = () => {
  return (
    <Wrapper>
      <div className="content-wrapper">
        <div>
          <BsSnow />
          <h2>Technika Grzewcza</h2>
          <p>
            Wykonujemy kompleksowe prace instalacyjne z zakresu między innymi:
            instalacji centralnego ogrzewania, pomp ciepła i kolektorów
            słonecznych, instalacji sanitarnych
          </p>
          <PrimaryButton light>Sprawdź teraz</PrimaryButton>
        </div>
        <StaticImage
          src="../../images/slides/slide3.jpg"
          alt="technika grzewcza"
        />
      </div>
      <div className="content-wrapper">
        <div>
          <FaWrench />
          <h2>Mechanika Pojazdowa</h2>
          <p>
            Oferujemy usługi takie jak: wymiana olejów i płynów
            eksploatacyjnych, naprawa zawieszenia i geometria kół, wymiana opon
          </p>
          <PrimaryButton light>Sprawdź teraz</PrimaryButton>
        </div>
        <StaticImage src="../../images/mechanika.jpg" alt="technika grzewcza" />
      </div>
    </Wrapper>
  );
};

export default IntroSection;
