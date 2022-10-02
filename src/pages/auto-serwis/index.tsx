import { StaticImage } from 'gatsby-plugin-image';

// Components
import Layout from '@/components/layout';
import Seo from '@/components/seo';

// Styles
import { Wrapper } from '@/styles/Subpage.styles';
// Icons

import { AiOutlinePercentage } from 'react-icons/ai';

const AutoSerwis = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="heading">
          <h2>Auto Serwis</h2>
          <ul>
            <li>Wymiana olejów i płynów eksploatacyjnych,</li>
            <li>Sklep części zamiennych,</li>
            <li>Wymiana opon w samochodach osobowych i dostawczych,</li>
            <li>Naprawa zawieszenia i geometria kół,</li>
            <li>Układ kierowniczy, hamulcowy, wydechowy,</li>
            <li>Przeglądy i serwis układów klimatyzacji,</li>
            <li>Montaż instalacji gazowych w samochodach.</li>
          </ul>
        </div>
        <StaticImage alt="technika grzewcza" src="../../images/mechanika.jpg" />
        <div className="services">
          <ul>
            <li>
              <div className="icon-wrapper">
                <AiOutlinePercentage />
              </div>
              <h3>
                <a href="#">Aktualności i Promocje</a>
              </h3>
            </li>
          </ul>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Auto Serwis" />;

export default AutoSerwis;
