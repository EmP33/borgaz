import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  min-height: 87vh;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
  justify-items: center;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    margin-top: 1rem;
    min-height: 70vh;
  }

  &::after {
    content: 'BOR-GAZ';
    position: absolute;
    left: 20%;
    top: 25%;
    transform: translateX(-20%);
    font-size: 12rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.05);
    z-index: 2;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;
