import React, { useState } from 'react';
// Styles
import { Wrapper, IconWrapper, ServiceElement } from './ServicesSection.styles';
// Icons
import { FiChevronRight } from 'react-icons/fi';
import { FaOilCan } from 'react-icons/fa';
import {
  GiSpring,
  GiCarKey,
  GiGasPump,
  GiCarWheel,
  GiSteeringWheel,
  GiHeatHaze,
  GiVacuumCleaner,
} from 'react-icons/gi';
import { CgSmartHomeBoiler } from 'react-icons/cg';
import { MdCable } from 'react-icons/md';

const ServicesSection = () => {
  const [service, setService] = useState(0);
  return (
    <Wrapper activeService={service}>
      <ul>
        <ServiceElement
          active={service === 0}
          onClick={() => {
            setService(0);
          }}
        >
          01 Auto Serwis <FiChevronRight />
        </ServiceElement>
        <ServiceElement
          active={service === 1}
          onClick={() => {
            setService(1);
          }}
        >
          02 Technika Grzewcza <FiChevronRight />
        </ServiceElement>
      </ul>
      <div className="icons-wrapper">
        {service === 0 ? (
          <>
            <IconWrapper>
              <FaOilCan />
              <span>Oleje i płyny</span>
            </IconWrapper>
            <IconWrapper>
              <GiCarWheel />
              <span>Wymiana opon</span>
            </IconWrapper>
            <IconWrapper>
              <GiSpring />
              <span>Zawieszenie</span>
            </IconWrapper>
            <IconWrapper>
              <GiCarKey />
              <span>Przegląd</span>
            </IconWrapper>
            <IconWrapper>
              <GiGasPump />
              <span>Instalacja gazowa</span>
            </IconWrapper>
            <IconWrapper>
              <GiSteeringWheel />
              <span>Układ kierowniczyy</span>
            </IconWrapper>
          </>
        ) : (
          <>
            <IconWrapper>
              <CgSmartHomeBoiler />
              <span>Kotłownie</span>
            </IconWrapper>
            <IconWrapper>
              <GiHeatHaze />
              <span>Centralne ogrzewanie</span>
            </IconWrapper>

            <IconWrapper>
              <GiVacuumCleaner />
              <span>Odkurzacze centralne</span>
            </IconWrapper>
            <IconWrapper>
              <MdCable />
              <span>Instalacje sanitarne</span>
            </IconWrapper>
            <IconWrapper>
              <GiGasPump />
              <span>Zbiorniki gazowe</span>
            </IconWrapper>
            <IconWrapper>
              <CgSmartHomeBoiler />
              <span>Oczyszczalnie</span>
            </IconWrapper>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default ServicesSection;
