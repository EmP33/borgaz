import { PrimaryButton } from '@/styles/Buttons.styles';
import React from 'react';
import { Wrapper } from './AboutSection.styles';
// Leaflet MAP
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require(`leaflet/dist/images/marker-icon-2x.png`).default,
  iconUrl: require(`leaflet/dist/images/marker-icon.png`).default,
  shadowUrl: require(`leaflet/dist/images/marker-shadow.png`).default,
});

const AboutSection = () => {
  return (
    <Wrapper>
      <div className="content">
        <p>O firmie</p>
        <h2>Wysoka jakość i zadowolenie</h2>
        <div>
          <p>Co możemy zaoferować?</p>
          <ul>
            <li>generalne wykonawstwo inwestycji budowlanych,</li>
            <li>stacje paliw i lpg, - kompleksowe prace instalacyjne,</li>
            <li>
              hurtownia materiałów opałowych, budowlanych i instalacyjnych,
            </li>
            <li>auto serwis i sklep części zamiennych,</li>
            <li>dostawy gazów technicznych oraz opału,</li>
            <li>wykonawstwo instalacji wod-kan i c.o.</li>
            <li>pompy ciepła i kolektory słoneczne.</li>
          </ul>
        </div>
        <h3>Zapraszamy do współpracy</h3>
        <PrimaryButton>Kontakt</PrimaryButton>
      </div>
      <MapContainer
        center={[53.8303145, 22.3540491]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/endipl/cl8rd27qr001515lgw1u9sqrl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZW5kaXBsIiwiYSI6ImNrdjIybmF3MjA2OWIyd29icTh1dmZqMzkifQ.uMlZ7XyN41K4fy_qfMaktA"
        />
        <Marker position={[53.8303145, 22.3540491]}>
          <Popup>
            Gdańska 40C <br /> Gdańska 40C, 19-300 Ełk
          </Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

export default AboutSection;
