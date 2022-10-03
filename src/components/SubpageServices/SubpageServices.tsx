import React from 'react';
import { Wrapper } from './SubpageServices.styles';
import { Link } from 'gatsby';
// Icons
import {
  GiHeatHaze,
  GiFuelTank,
  GiOilDrum,
  GiSunRadiations,
  GiGasPump,
} from 'react-icons/gi';
import { CgSmartHomeBoiler } from 'react-icons/cg';
import { MdOutlinePriceChange } from 'react-icons/md';
import { AiOutlineCheck, AiOutlinePercentage } from 'react-icons/ai';

const SubpageServices: React.FC<{ type: string }> = ({ type }) => {
  return (
    <Wrapper>
      {type === `technika-grzewcza` ? (
        <ul>
          <li>
            <div className="icon-wrapper">
              <CgSmartHomeBoiler />
            </div>
            <h3>
              <Link to="/technika-grzewcza/kotly-gazowe">Kotły Gazowe</Link>
            </h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <GiSunRadiations />
            </div>
            <h3>
              <Link to="/technika-grzewcza/pompy-ciepla-kolektory-sloneczne">
                Pompy ciepła, kolektory słoneczne
              </Link>
            </h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <GiHeatHaze />
            </div>
            <h3>
              <Link to="/technika-grzewcza/instalacje-centralnego-ogrzewania">
                Instalacje Centralnego Ogrzewania
              </Link>
            </h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <GiOilDrum />
            </div>
            <h3>
              <Link to="/technika-grzewcza/zbiorniki-przydomowe">
                Zbiorniki przydomowe
              </Link>
            </h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <GiFuelTank />
            </div>
            <h3>
              <Link to="/technika-grzewcza/zbiorniki-przemyslowe">
                Zbiorniki przemysłowe
              </Link>
            </h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <CgSmartHomeBoiler />
            </div>
            <h3>
              <Link to="/technika-grzewcza/kotlownie-olejowe-i-gazowe">
                Kotłownie olejowe i gazowe
              </Link>
            </h3>
          </li>
        </ul>
      ) : type === `auto-gaz` ? (
        <ul>
          <li>
            <div className="icon-wrapper">
              <GiGasPump />
            </div>
            <h3>
              <Link to="/auto-gaz/instalacje-gazowe">Instalacje gazowe</Link>
            </h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <MdOutlinePriceChange />
            </div>
            <h3>
              <Link to="/auto-gaz/cennik-instalacji">Cennik instalacji</Link>
            </h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <AiOutlineCheck />
            </div>
            <h3>
              <Link to="/auto-gaz/przedluz-gwarancje">Przedłuż Gwarancję</Link>
            </h3>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <div className="icon-wrapper">
              <AiOutlinePercentage />
            </div>
            <h3>
              <Link to="/auto-serwis/aktualnosci-i-promocje">
                Aktualności i Promocje
              </Link>
            </h3>
          </li>
        </ul>
      )}
    </Wrapper>
  );
};

export default SubpageServices;
