import React from 'react';
// Styles
import { Wrapper } from '@/styles/Subpage.styles';
// Components
import Layout from '@/components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '@/components/seo';
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
      <Wrapper>
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
        <div className="services">
          <ul>
            <li>
              <div className="icon-wrapper">
                <CgSmartHomeBoiler />
              </div>
              <h3>Kotły Gazowe</h3>
              <p>
                W kotłach kondensacyjnych następuje kondensacja zawartej w
                spalinach pary wodnej (powstałej w wyniku spalania gazu), a
                odzyskana dzięki temu dodatkowa energia zostaje przekazana do
                instalacji c.o.
              </p>
            </li>
            <li>
              <div className="icon-wrapper">
                <GiSunRadiations />
              </div>
              <h3>Pompy ciepła, kolektory słoneczne</h3>
            </li>
            <li>
              <div className="icon-wrapper">
                <GiHeatHaze />
              </div>
              <h3>Instalacje Centralnego Ogrzewania</h3>
            </li>
            <li>
              <div className="icon-wrapper">
                <GiOilDrum />
              </div>
              <h3>Zbiorniki przydomowe</h3>
            </li>
            <li>
              <div className="icon-wrapper">
                <GiFuelTank />
              </div>
              <h3>Zbiorniki przemysłowe</h3>
              <p>
                Nasze instalacje mają zastosowanie wszędzie tam, gdzie wymagana
                jest bezawaryjna praca urządzeń, wysoka jakość i szybka dostawa
                gazu jak również tam gdzie liczy się ekonomiczna strona pracy
                instalacji.
              </p>
            </li>
            <li>
              <div className="icon-wrapper">
                <CgSmartHomeBoiler />
              </div>
              <h3>Kotłownie olejowe i gazowe</h3>
            </li>
          </ul>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Technika Grzewcza" />;

export default TechnikaGrzewcza;
