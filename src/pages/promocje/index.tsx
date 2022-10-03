import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
// Components
import Seo from '../../components/seo';
import Layout from '../../components/layout';
import { Wrapper } from '../../styles/Promocje.styles';
import { PrimaryButton } from '../../styles/Buttons.styles';

const Promocje = () => {
  return (
    <Layout>
      <Wrapper>
        <h2>Aktualne Promocje</h2>
        <div className="promotions">
          <div className="promotion-block">
            <div className="img-wrapper">
              <StaticImage
                src="../../images/GENUS-ONE.png"
                alt="Genus One"
                layout="constrained"
              />
            </div>
            <span>
              GENUS ONE Kocioł kondensacyjny dwufunkcyjny z możliwością zdalnego
              sterowania
            </span>
            <Link to="/promocje/genus-one">
              <PrimaryButton filled>Czytaj więcej</PrimaryButton>
            </Link>
          </div>
          <div className="promotion-block">
            <div className="img-wrapper">
              <StaticImage
                src="../../images/ALTEAS_ONE.png"
                alt="Genus One"
                layout="constrained"
              />
            </div>
            <span>
              ALTEAS ONE NET Kocioł kondensacyjny dwufunkcyjny, hi-tech design,
              zintegrowane zdalne sterowanie
            </span>
            <Link to="/promocje/alteas-one">
              <PrimaryButton filled>Czytaj więcej</PrimaryButton>
            </Link>
          </div>
          <div className="promotion-block">
            <div className="img-wrapper">
              <StaticImage
                src="../../images/clas-one.png"
                alt="Genus One"
                layout="constrained"
              />
            </div>
            <span>
              CLAS ONE Kocioł kondensacyjny dwufunkcyjny z funkcją Auto
            </span>
            <Link to="/promocje/clas-one">
              <PrimaryButton filled>Czytaj więcej</PrimaryButton>
            </Link>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Promocje" />;

export default Promocje;
