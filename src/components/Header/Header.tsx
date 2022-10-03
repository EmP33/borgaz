import React, { useState, useEffect } from 'react';

import { HeaderLink, Wrapper } from './Header.styles';
import useMediaQuery from '../../hooks/useMediaQuery';

// Images
import { StaticImage } from 'gatsby-plugin-image';

// Icons
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

const Header = () => {
  const { pathname } = window.location;
  const matches = useMediaQuery(`(max-width: 900px)`);
  const [showMenu, setShowMenu] = useState(false);
  const [showDetails, setShowDetails] = useState<{
    show: boolean;
    number: number | null;
  }>({ show: false, number: null });

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleShowDetails = (e: any, numb: number) => {
    e.stopPropagation();

    if (!matches) return;
    if (e.target.localName === `svg` || e.target.localName === `path`) {
      if (numb !== showDetails.number) {
        return setShowDetails(() => ({ show: true, number: numb }));
      }
      setShowDetails((prev) => ({ show: !prev.show, number: numb }));
    }
  };

  useEffect(() => {
    if (!matches) setShowDetails(() => ({ show: false, number: null }));
  }, [matches]);

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
        <HeaderLink to="/">
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            placeholder="blurred"
            width={200}
          />
        </HeaderLink>
        <GiHamburgerMenu onClick={handleShowMenu} />
        <ul>
          <li>
            <HeaderLink activated={pathname === `/`} to="/">
              START
            </HeaderLink>
          </li>
          <li>
            <HeaderLink
              activated={pathname.includes(`technika-grzewcza`)}
              to="/technika-grzewcza"
            >
              TECHNIKA GRZEWCZA
            </HeaderLink>
            <AiOutlinePlus
              onClick={(e: React.MouseEvent) => {
                handleShowDetails(e, 1);
              }}
            />
            <div
              className={
                showDetails.number === 1 && showDetails.show
                  ? `dropdown-content-activated`
                  : `dropdown-content`
              }
            >
              <HeaderLink to="/technika-grzewcza/kotly-gazowe">
                Kotły Gazowe
              </HeaderLink>
              <HeaderLink to="/technika-grzewcza/pompy-ciepla-kolektory-sloneczne">
                Pompy Ciepła, kolektory słoneczne
              </HeaderLink>
              <HeaderLink to="/technika-grzewcza/instalacje-centralnego-ogrzewania">
                Instalacje Centralnego Ogrzewania
              </HeaderLink>
              <HeaderLink to="/technika-grzewcza/zbiorniki-przydomowe">
                Zbiorniki przydomowe
              </HeaderLink>
              <HeaderLink to="/technika-grzewcza/zbiorniki-przemyslowe">
                Zbiorniki przemysłowe
              </HeaderLink>
              <HeaderLink to="/technika-grzewcza/kotlownie-olejowe-i-gazowe">
                Kotłownie olejowe i gazowe
              </HeaderLink>
            </div>
          </li>
          <li>
            <HeaderLink
              activated={pathname.includes(`auto-gaz`)}
              to="/auto-gaz"
            >
              AUTO GAZ
            </HeaderLink>
            <AiOutlinePlus
              onClick={(e: React.MouseEvent) => {
                handleShowDetails(e, 2);
              }}
            />
            <div
              className={
                showDetails.number === 2 && showDetails.show
                  ? `dropdown-content-activated`
                  : `dropdown-content`
              }
            >
              <HeaderLink to="/auto-gaz/instalacje-gazowe">
                Instalacje gazowe
              </HeaderLink>
              <HeaderLink to="/auto-gaz/cennik-instalacji">
                Cennik instalacji
              </HeaderLink>
              <HeaderLink to="/auto-gaz/przedluz-gwarancje">
                Przedłuż gwarancje
              </HeaderLink>
            </div>
          </li>
          <li>
            <HeaderLink
              activated={pathname.includes(`auto-serwis`)}
              to="/auto-serwis"
            >
              AUTO SERWIS
            </HeaderLink>
            <AiOutlinePlus
              onClick={(e: React.MouseEvent) => {
                handleShowDetails(e, 3);
              }}
            />
            <div
              className={
                showDetails.number === 3 && showDetails.show
                  ? `dropdown-content-activated`
                  : `dropdown-content`
              }
            >
              <HeaderLink to="/auto-serwis/aktualnosci-i-promocje">
                Aktualności i promocje
              </HeaderLink>
            </div>
          </li>
          <li>
            <HeaderLink activated={pathname === `/promocje`} to="/promocje">
              PROMOCJE
            </HeaderLink>
          </li>
          <li>
            <HeaderLink activated={pathname === `/kontakt`} to="/kontakt">
              KONTAKT
            </HeaderLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default React.memo(Header);
