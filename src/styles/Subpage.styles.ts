import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 85%;
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

  .services {
    padding: 5rem 0;

    @media screen and (max-width: 500px) {
      padding: 2.5rem 0;
    }

    ul {
      list-style: none;
      display: grid;
      row-gap: 5rem;

      @media screen and (max-width: 500px) {
        row-gap: 2rem;
      }

      & li {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        position: relative;
        padding-left: 6.4rem;

        @media screen and (max-width: 1200px) {
          padding-left: 3rem;
        }
        @media screen and (max-width: 500px) {
          padding: 0 1rem;
        }

        & .icon-wrapper {
          font-size: 2rem;
          grid-row: span 2;
          background: #fff;
          color: #aaa;
          width: 75px;
          height: 75px;
          display: flex;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          position: absolute;
          transform: translateX(-50%);
          -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
          box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);

          @media screen and (max-width: 1200px) {
            width: 70px;
            height: 70px;
          }
          @media screen and (max-width: 500px) {
            display: none;
          }
        }
      }
    }
  }
`;
