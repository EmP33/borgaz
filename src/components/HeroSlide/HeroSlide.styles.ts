import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  opacity: 0;

  @media screen and (max-width: 600px) {
    grid-row: 1/2;
  }

  & > img {
    width: 100%;
    height: 50%;
  }

  &::before {
    content: '';
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, #fff 0%, transparent 100%);
    z-index: 2;

    @media screen and (max-width: 1200px) {
      width: 50%;
      background: linear-gradient(90deg, #fff 0%, transparent 100%);
    }

    @media screen and (max-width: 600px) {
      width: 100%;
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 75%;
  z-index: 3;
  padding: 1rem;
  opacity: 0;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    grid-row: 2/3;
  }
  & p {
    text-transform: uppercase;
    color: var(--color-secondary);
  }
  & h1 {
    font-size: 5rem;
    line-height: 5rem;
    margin-top: 0.5rem;

    @media screen and (max-width: 600px) {
      font-size: 3rem;
      line-height: 3rem;
    }
  }
  & button {
    margin-top: 2rem;
  }
`;
