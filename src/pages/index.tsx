import { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { HeroSection } from '../styles/Home.styles';

// Components
import HeroSlide from '@/components/HeroSlide/HeroSlide';
import IntroSection from '@/components/IntroSection/IntroSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import NewsSection from '@/components/NewsSection/NewsSection';
import AboutSection from '@/components/AboutSection/AboutSection';

export interface ISlide {
  heading: string;
  subheading: string;
  link: string;
  id: number;
  image: number;
}
const slides: ISlide[] = [
  {
    id: 0,
    heading: `STAG Q-generation`,
    subheading: `Instalacje gazowe najnowszej generacji!`,
    link: `/instalacje-gazowe`,
    image: 0,
  },
  {
    id: 1,
    heading: `Instalacje Centralnego Ogrzewania`,
    subheading: `Kompleksowe wykonanie od projektu aż po montaż`,
    link: `/instalacje-centralnego-ogrzewania`,
    image: 2,
  },
  {
    id: 2,
    heading: `Kotły gazowe`,
    subheading: `Szeroka oferta. Autoryzowany sklep instalacyjny`,
    link: `/kotly-gazowe`,
    image: 1,
  },
];

const IndexPage = ({ data }) => {
  const [slide, setSlide] = useState(0);

  if (slide === 3) {
    return setSlide(0);
  }
  useEffect(() => {
    setInterval(() => {
      setSlide((prev) => (prev += 1));
    }, 5000);
  }, []);

  return (
    <Layout>
      <HeroSection>
        <HeroSlide
          key={slides[slide].id}
          slide={slides[slide]}
          image={data.allFile.edges[slides[slide].image].node.childImageSharp}
        />
      </HeroSection>
      <ServicesSection />
      <NewsSection />
      <IntroSection />
      <AboutSection />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allFile(filter: { name: { in: ["slide1", "slide2", "slide3"] } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 750, height: 700)
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <Seo title="Technika Grzewcza | Instalacje Gazowe | Auto Serwis" />
);

export default IndexPage;
