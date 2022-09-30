import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    max-height: 100vh;
  }
  @media screen and (max-width: 600px) {
    max-height: 150vh;
  }

  .content-wrapper {
    display: grid;
    color: #fff;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    & div {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      row-gap: 0.75rem;

      @media screen and (max-width: 1400px) {
        padding: 1.5rem;
      }

      & svg {
        font-size: 3.5rem;
        @media screen and (max-width: 900px) {
          font-size: 3rem;
        }
      }

      & h2 {
        font-size: 2.5rem;

        @media screen and (max-width: 900px) {
          font-size: 2rem;
        }
      }
      & p {
        font-size: 1.1rem;
        @media screen and (max-width: 900px) {
          font-size: 0.9rem;
        }
      }
      & button {
        margin-top: 2rem;
      }
    }

    &:nth-of-type(1) {
      background: linear-gradient(
        90deg,
        var(--color-primary),
        rgba(35, 80, 125)
      );
    }

    &:nth-of-type(2) {
      background-color: #222222;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111111' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
      position: relative;

      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }

      & div:nth-child(1) {
        @media screen and (max-width: 1200px) {
          grid-column: 2/3;
          grid-row: 1;
        }

        @media screen and (max-width: 600px) {
          grid-column: auto;
          grid-row: auto;
        }
      }
      & img {
        grid-column: 1/2;
      }
    }
  }
`;
