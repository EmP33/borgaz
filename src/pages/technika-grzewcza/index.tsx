import React from 'react';
// Styles
import { Wrapper } from '../../styles/Subpage.styles';
// Components
import Layout from '../../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../../components/seo';
import SubpageServices from '../../components/SubpageServices/SubpageServices';
// Icons
import {
  GiHeatHaze,
  GiFuelTank,
  GiOilDrum,
  GiSunRadiations,
} from 'react-icons/gi';
import { CgSmartHomeBoiler } from 'react-icons/cg';

const TechnikaGrzewcza = () => {
  return (
    <Layout>
      <Wrapper data-aos="fade-up">
        <div className="heading">
          <h2>Technika Grzewcza</h2>
          <p>Wykonujemy kompleksowe prace instalacyjne</p>
          <ul>
            <li>Instalacje centralnego ogrzewania:</li>
            <li>Kotłownie olejowe i gazowe;</li>
            <li>pompy ciepła , kolektory słoneczne;</li>
            <li>kotłownie na pelety i eko groszek;</li>
            <li>odkurzacze centralne;</li>
            <li>przyłącza wod-kan-gaz do budynków;</li>
            <li>odprowadzanie wód opadowych i odwodnienia;</li>
            <li>prace ziemne, wynajem sprzętu budowlanego;</li>
            <li>oczyszczalnie ekologiczne oraz biologiczne;</li>
            <li>zbiorniki gazowe do celów grzewczych i technologicznych.</li>
          </ul>
        </div>
        <StaticImage
          alt="technika grzewcza"
          src="../../images/slides/slide2.jpg"
        />
        <SubpageServices type="technika-grzewcza" />
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Technika Grzewcza" />;

export default TechnikaGrzewcza;
