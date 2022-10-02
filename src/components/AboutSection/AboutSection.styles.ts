import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 60vw 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(500px, auto));
  }

  & .content {
    background: #ddd;
    display: grid;
    place-content: center;
    grid-template-columns: 1fr max-content;
    align-items: center;
    padding: 7rem 2.5rem;

    @media screen and (max-width: 600px) {
      padding: 3rem 1rem;
    }

    & p {
      font-size: 1.1rem;
    }

    & h2 {
      font-size: 2rem;
    }

    & .offers {
      border-top: 1px solid #000;
      grid-column: 1/-1;
      padding-top: 1rem;
      margin-top: 1rem;

      & > p {
        font-size: 1.1rem;
        font-weight: bold;
      }
    }
    & .offer-blocks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      column-gap: 1rem;

      & ul {
        list-style: none;
        font-size: 1.1rem;
        font-family: var(--font-secondary);
      }
    }
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;
