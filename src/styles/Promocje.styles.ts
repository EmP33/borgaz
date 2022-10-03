import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 95%;
    padding: 2rem 0;
  }

  & > h2 {
    color: var(--color-primary);
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .promotions {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    padding: 2rem 0;
    column-gap: 1rem;
    row-gap: 1rem;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      padding: 0;
      column-gap: 0;
      row-gap: 4rem;
    }

    .promotion-block {
      display: grid;
      justify-items: center;
      row-gap: 1rem;
      align-items: center;
      grid-template-rows: 1fr max-content max-content;

      .img-wrapper {
        width: 100%;
        height: auto;
      }

      & img {
        width: 100%;
        height: auto;
        margin: 0 auto;
      }

      & span {
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
  }
`;
