import { StaticImage } from 'gatsby-plugin-image';

//Components
import Layout from '@/components/layout';
import Seo from '@/components/seo';

// Styles
import { Wrapper } from '@/styles/Subpage.styles';
// Icons
import { GiGasPump } from 'react-icons/gi';
import { MdOutlinePriceChange } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';

const AutoGaz = () => {
  return (
    <Layout>
      <Wrapper>
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
        <StaticImage
          alt="technika grzewcza"
          src="../../images/slides/slide1.jpg"
        />
        <div className="services">
          <ul>
            <li>
              <div className="icon-wrapper">
                <GiGasPump />
              </div>
              <h3>Instalacje gazowe</h3>
            </li>
            <li>
              <div className="icon-wrapper">
                <MdOutlinePriceChange />
              </div>
              <h3>Cennik instalacji</h3>
            </li>
            <li>
              <div className="icon-wrapper">
                <AiOutlineCheck />
              </div>
              <h3>Przedłuż Gwarancję</h3>
            </li>
          </ul>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Auto Gaz" />;

export default AutoGaz;
