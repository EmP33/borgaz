import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 85%;
  min-height: 50vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 2rem 0;

  @media screen and (max-width: 900px) {
    width: 95%;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  & .heading {
    & h2 {
      color: var(--color-primary);
      margin-bottom: 1rem;
    }
    & ul {
      padding-left: 2rem;
    }
  }
  & .img-wrapper {
    width: 350px;
    margin: 0 auto;
    @media screen and (max-width: 400px) {
      width: 275px;
    }
  }
`;
