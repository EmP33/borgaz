import { PrimaryButton } from '@/styles/Buttons.styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper } from './NewsSection.styles';

const NewsSection = () => {
  return (
    <Wrapper>
      <div className="news-wrapper">
        <div className="images">
          <div className="img-wrapper">
            <StaticImage src="../../images/GENUS-ONE.png" alt="kociol" />
          </div>
          <div className="img-wrapper">
            <StaticImage src="../../images/ALTEAS_ONE.png" alt="kociol" />
          </div>
        </div>
        <div className="content">
          <h2>GENUS ONE | ALTEAS ONE NET</h2>

          <ul>
            <li>
              GENUS ONE - Kocioł kondensacyjny dwufunkcyjny z możliwością
              zdalnego sterowania
            </li>
            <li>
              ALTEAS ONE NET - Kocioł kondensacyjny dwufunkcyjny, hi-tech
              design, zintegrowane zdalne sterowanie
            </li>
          </ul>
          <PrimaryButton>Sprawdź</PrimaryButton>
        </div>
      </div>
      <div className="news-wrapper">
        <div className="content">
          <h2>Dynamiczna wymiana oleju w skrzyniach automatycznych</h2>
          <p>
            Podczas statycznej wymiany płynu ATF, która jest najczęściej
            spotykana, wymianie podlega jedynie jego część ( ok. 30-60 %)
            ponieważ reszta pozostaje w komponentach skrzyni biegów. Dynamiczna
            wymiana oleju w skrzyni automatycznej pozwala na całkowitą wymianę
            oleju. Zapobiega to przedwczesnemu zniszczeniu skrzyni.
          </p>
          <PrimaryButton>Sprawdź</PrimaryButton>
        </div>
        <div className="images">
          <div className="img-wrapper">
            <StaticImage src="../../images/car.png" alt="car" />
          </div>
          <div className="img-wrapper">
            <StaticImage
              src="../../images/wymiana-oleju-w-skrzyni.png"
              alt="kociol"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewsSection;
