import { StaticImage } from 'gatsby-plugin-image';

// Components
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import SubpageServices from '../../components/SubpageServices/SubpageServices';

// Styles
import { Wrapper } from '../../styles/Subpage.styles';

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
        <StaticImage alt="auto serwis" src="../../images/mechanika.jpg" />
        <SubpageServices type="auto-serwis" />
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Auto Serwis" />;

export default AutoSerwis;
