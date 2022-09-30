import styled from 'styled-components';

export const PrimaryButton = styled.button<{ light?: boolean }>`
  text-transform: uppercase;
  padding: 1rem 2rem;
  background: transparent;
  border: ${({ light }) =>
    light ? `2px solid #fff` : `2px solid var(--color-secondary)`};
  cursor: pointer;
  transition: all 0.1s linear;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px;
  color: ${({ light }) => (light ? `#fff` : `#000`)};

  &:hover {
    background: ${({ light }) =>
      light ? `rgba(255,255,255,.15)` : `var(--color-secondary)`};
    color: #fff;
  }
`;
