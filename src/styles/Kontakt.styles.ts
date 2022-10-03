import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 3rem auto;
  -webkit-box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1200px) {
    grid-template-columns: minmax(350px, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .content {
    display: grid;
    align-content: center;
    row-gap: 1.25rem;
    padding: 1.5rem;

    @media screen and (max-width: 1200px) {
      padding: 3rem 1.5rem;
    }

    @media screen and (max-width: 600px) {
      padding: 2.5rem 1rem;
    }

    & h2 {
      font-size: 2rem;
      font-weight: 400;
    }

    & h3 {
      font-weight: 500;
    }

    & p {
      color: #555;
    }
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 1;

    @media screen and (max-width: 1200px) {
      height: 400px;
    }
  }

  .contact-form {
    padding: 1.5rem;
    background: var(--color-primary);

    @media screen and (max-width: 600px) {
      padding: 0.75rem;
    }

    & h3 {
      color: #fff;
      margin: 0 0 1rem 0;
    }

    & form {
      display: grid;
      row-gap: 0.5rem;
    }

    & span {
      color: #ff3d00;
      font-weight: 300;
    }

    & input {
      padding: 0.75rem 0.5rem;
    }
    & textarea {
      padding: 0.75rem 0.5rem;
    }
  }
`;
