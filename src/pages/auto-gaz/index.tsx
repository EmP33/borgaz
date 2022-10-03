import { StaticImage } from 'gatsby-plugin-image';

//Components
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import SubpageServices from '../../components/SubpageServices/SubpageServices';

// Styles
import { Wrapper } from '../../styles/Subpage.styles';

const AutoGaz = () => {
  return (
    <Layout>
      <Wrapper data-aos="fade-up">
        <div className="heading">
          <h2>Auto Gaz</h2>
          <p>
            Doświadczenie zdobyte przez naszą firmę pozwala nam zaoferować
            Państwu bogatą gamę usług, począwszy od montażu instalacji gazowych
            w samochodach osobowych, skończywszy na projektowaniu, montowaniu i
            serwisie modułów stacji LPG.
          </p>
          <p>
            Dodatkowo do ceny dochodzi tankowanie gazu w zależności od
            pojemności zbiornika. Klient otrzymuje kompletną dokumentację na
            podstawie której uzyskuje wpis w wydziale komunikacji o treści
            "przystosowany do zasilania gazem".
          </p>
        </div>
        <StaticImage alt="stag gaz" src="../../images/slides/slide1.jpg" />
        <SubpageServices type="auto-gaz" />
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Auto Gaz" />;

export default AutoGaz;
