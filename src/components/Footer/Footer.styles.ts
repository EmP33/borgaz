import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #dddddd;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
  display: grid;
  justify-items: center;
  padding-top: 5rem;

  .info-blocks {
    margin: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(3, 250px);
    column-gap: 3rem;
    row-gap: 1.5rem;

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 250px);
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    &__block {
      @media screen and (max-width: 900px) {
        text-align: center;
      }
      & h3 {
        font-weight: 400;
      }
      & div {
        display: grid;
        grid-template-columns: max-content 1fr;
        align-items: center;
        column-gap: 0.7rem;

        @media screen and (max-width: 600px) {
          grid-template-columns: repeat(2, max-content);
          justify-content: center;
        }

        & svg {
          font-size: 1.3rem;
          color: var(--color-primary);
        }

        & h3 {
          font-weight: 400;
          grid-column: 2;
        }
      }

      &:nth-of-type(2) {
        & h2 {
          margin-bottom: 0.5rem;
        }
      }

      &:nth-of-type(3) {
        @media screen and (max-width: 900px) {
          grid-column: 1/-1;
          text-align: center;
        }
        & h2 {
          margin-bottom: 1rem;
        }
      }
    }
  }

  & > p {
    width: 100%;
    border: 1px solid #333;
    padding: 1rem 0 1rem 0;
    font-weight: bold;
    font-family: var(--font-secondary);
    text-align: center;
  }
`;
