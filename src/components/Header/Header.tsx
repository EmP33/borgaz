import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Wrapper } from './Header.styles';
import useMediaQuery from '../../hooks/useMediaQuery';

// Images
import { StaticImage } from 'gatsby-plugin-image';

// Icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const matches = useMediaQuery('(max-width: 900px)');
  const [showMenu, setShowMenu] = useState(false);
  const [showDetails, setShowDetails] = useState<{
    show: boolean;
    number: number | null;
  }>({ show: false, number: null });

  console.log(matches);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleShowDetails = (e: any, numb: number) => {
    e.stopPropagation();
    if (!matches) return;
    if (e.target.localName === 'svg' || e.target.localName === 'path') {
      if (numb !== showDetails.number) {
        return setShowDetails((prev) => ({ show: true, number: numb }));
      }
      setShowDetails((prev) => ({ show: !prev.show, number: numb }));
    }
  };

  console.log(showDetails);

  return (
    <Wrapper showMenu={showMenu}>
      <div className="contact-section">
        <div className="contact-section__element">
          <BsFillTelephoneFill /> 87 621 08 76
        </div>
        <div className="contact-section__element">
          <ImLocation2 /> Gdańska 40C, 19-300 Ełk
        </div>
        <div className="contact-section__element">
          Jesteśmy otwarci Pn-Pt: 7:00 - 16:00, Sobota: 7:00 - 14:00
        </div>
      </div>
      <nav className="appbar">
        <a href="/">
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            placeholder="blurred"
            width={200}
          />
        </a>
        <GiHamburgerMenu onClick={handleShowMenu} />
        <ul>
          <li>
            <a href="#">START</a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e: React.MouseEvent) => {
                handleShowDetails(e, 1);
              }}
            >
              TECHNIKA GRZEWCZA <AiOutlinePlus />
            </a>
            <div
              className={
                showDetails.number === 1 && showDetails.show
                  ? 'dropdown-content-active'
                  : 'dropdown-content'
              }
            >
              <a href="#">Kotły Gazowe</a>
              <a href="#">Pompy Ciepła, kolektory słoneczne</a>
              <a href="#">Instalacje Centralnego Ogrzewania</a>
              <a href="#">Zbiorniki przydomowe</a>
              <a href="#">Zbiorniki przemysłowe</a>
              <a href="#">Kotłownie olejowe i gazowe</a>
            </div>
          </li>
          <li>
            <a
              href="#"
              onClick={(e: React.MouseEvent) => {
                handleShowDetails(e, 2);
              }}
            >
              AUTO GAZ <AiOutlinePlus />
            </a>
            <div
              className={
                showDetails.number === 2 && showDetails.show
                  ? 'dropdown-content-active'
                  : 'dropdown-content'
              }
            >
              <a href="#">Instalacje gazowe</a>
              <a href="#">Cennik instalacji</a>
              <a href="#">Przedłuż gwarancje</a>
            </div>
          </li>
          <li>
            <a
              href="#"
              onClick={(e: React.MouseEvent) => {
                handleShowDetails(e, 3);
              }}
            >
              AUTO SERWIS <AiOutlinePlus />
            </a>
            <div
              className={
                showDetails.number === 3 && showDetails.show
                  ? 'dropdown-content-active'
                  : 'dropdown-content'
              }
            >
              <a href="#">Aktualności i promocje</a>
            </div>
          </li>
          <li>
            <a href="#">PROMOCJE</a>
          </li>
          <li>
            <a href="#">KONTAKT</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
