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
              <Link to="#">Pompy ciepła, kolektory słoneczne</Link>
            </h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <GiHeatHaze />
            </div>
            <h3>Instalacje Centralnego Ogrzewania</h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <GiOilDrum />
            </div>
            <h3>Zbiorniki przydomowe</h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <GiFuelTank />
            </div>
            <h3>Zbiorniki przemysłowe</h3>
          </li>
          <li>
            <div className="icon-wrapper">
              <CgSmartHomeBoiler />
            </div>
            <h3>Kotłownie olejowe i gazowe</h3>
          </li>
        </ul>
      ) : type === `auto-gaz` ? (
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
      ) : (
        <ul>
          <li>
            <div className="icon-wrapper">
              <AiOutlinePercentage />
            </div>
            <h3>
              <Link to="#">Aktualności i Promocje</Link>
            </h3>
          </li>
        </ul>
      )}
    </Wrapper>
  );
};

export default SubpageServices;
