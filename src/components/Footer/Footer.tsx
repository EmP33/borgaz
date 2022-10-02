import { PrimaryButton } from '@/styles/Buttons.styles';
import { StaticImage } from 'gatsby-plugin-image';
import { Wrapper } from './Footer.styles';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';

const Footer = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/logo.png"
        alt="logo"
        placeholder="blurred"
        width={250}
      />
      <div className="info-blocks">
        <div className="info-blocks__block">
          <div>
            <BsFillTelephoneFill />
            <h2>Zadzwoń do nas</h2>
            <h3>87 621 08 76</h3>
          </div>
          <div>
            <ImLocation />
            <h2>Jesteśmy tutaj</h2>
            <h3>Gdańska 40C, 19-300 Ełk</h3>
          </div>
        </div>
        <div className="info-blocks__block">
          <h2>Godziny otwarcia</h2>
          <h3>Pon-Pt: 7.00 - 16.00</h3>
          <h3>Sob: 7.00 - 14.00</h3>
        </div>
        <div className="info-blocks__block">
          <h2>Potrzebujesz pomocy? Możesz też napisać tutaj</h2>
          <PrimaryButton filled>Wiadomość</PrimaryButton>
        </div>
      </div>
      <p>Copyright &copy; 2022 BORGAZ by Emp33. Wszystkie prawa zastrzeżone.</p>
    </Wrapper>
  );
};

export default Footer;
