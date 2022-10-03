import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 85%;
  min-height: 50vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 350px 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 250px 1fr;
    width: 90%;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 35% 1fr;
    width: 95%;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .heading {
    display: grid;
    align-content: center;
    padding: 1rem;

    & ul {
      margin: 0.75rem 0 0 2rem;
      font-size: 1.1rem;
    }

    @media screen and (max-width: 900px) {
      justify-content: center;
      grid-column: 1/-1;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 500px) {
      margin-top: 2rem;
    }

    & h2 {
      font-size: 2.2rem;
      padding-bottom: 0.5rem;
      color: var(--color-primary);
    }
    & p {
      font-size: 1.2rem;
      position: relative;
      padding-bottom: 1rem;
    }
    & p:nth-last-of-type(1) {
      &::after {
        content: '';
        width: 25%;
        position: absolute;
        left: 0;
        bottom: 0;
        border: 2px solid var(--color-secondary);
      }
    }
  }
`;
