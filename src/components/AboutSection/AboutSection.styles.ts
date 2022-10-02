import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 60vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: max-content 1fr;

  & .content {
    width: 50vw;
  }
  & .leaflet-container {
    height: 500px;
    width: 500px;
  }
`;
