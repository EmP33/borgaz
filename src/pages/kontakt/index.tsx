import React from 'react';
// Leaflet MAP
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
// Components
import Layout from '../../components/layout';
import { PrimaryButton } from '../../styles/Buttons.styles';
import Seo from '../../components/seo';
// Styles
import { Wrapper } from '../../styles/Kontakt.styles';
// React-Form
import { useForm } from 'react-hook-form';

const Kontakt = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Layout>
      <Wrapper data-aos="fade-up">
        <div className="content">
          <h2>Skontaktuj się z nami!</h2>
          <div>
            <h3>Telefon</h3>
            <p>87 621 08 76</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>info@borgaz.com.pl</p>
          </div>
          <div>
            <h3>Adres</h3>
            <p>BOR-GAZ s.c. , 19-300 Ełk, ul. Gdańska 40C</p>
          </div>
        </div>
        <div className="map">
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
        </div>
        <div className="contact-form">
          <h3>Wyślij wiadomość</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Imię i nazwisko*"
              {...register(`name`, { required: true })}
            />
            {errors.name && (
              <span role="alert">Pole imię i nazwisko nie może być puste.</span>
            )}
            <input
              type="text"
              placeholder="Adres email*"
              {...register(`email`, {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              })}
            />
            {errors.email && (
              <span role="alert">Wprowadź poprawny adres email.</span>
            )}
            <input
              type="number"
              placeholder="Numer Telefonu*"
              {...register(`phone`, {
                required: true,
                minLength: 9,
                maxLength: 9,
              })}
            />
            {errors.phone && (
              <span role="alert">Pole numer telefonu nie może być puste.</span>
            )}
            <textarea
              id="message"
              rows={6}
              placeholder="Wiadomość*"
              {...register(`message`, { required: true })}
            ></textarea>
            {errors.message && (
              <span role="alert">Pole wiadomość nie może być puste.</span>
            )}
            {errors.exampleRequired && <span>This field is required</span>}
            <PrimaryButton type="submit" light>
              Wyślij wiadomość
            </PrimaryButton>
          </form>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="Kontakt" />;

export default Kontakt;
