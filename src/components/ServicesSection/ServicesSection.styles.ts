import styled from 'styled-components';

export const Wrapper = styled.section<{ activeService: number }>`
  width: 100%;
  background: var(--color-primary);
  display: grid;
  grid-template-columns: 30% 1fr;
  font-family: var(--font-secondary);

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  & ul {
    list-style: none;
    margin: 0;
    font-size: 1.6rem;
    color: #fff;

    @media screen and (max-width: 900px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  & .icons-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    @media screen and (max-width: 1330px) {
      grid-template-columns: repeat(3, minmax(150px, 1fr));
    }
    @media screen and (max-width: 900px) {
      padding: 1.5rem 0;
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(150px, 1fr));
    }
    @media screen and (max-width: 450px) {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: #ccc;
  row-gap: 1rem;
  text-align: center;

  @media screen and (max-width: 450px) {
    row-gap: 0.5rem;
  }

  &:hover {
    color: var(--color-secondary);
  }

  & svg {
    font-size: 3.5rem;
  }
  & span {
    font-size: 1.5rem;
  }
`;

export const ServiceElement = styled.li<{ active: boolean }>`
  padding: 2.5rem 1rem;
  cursor: pointer;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  filter: ${({ active }) => (active ? `brightness(125%)` : `brightness(100%)`)};

  &:hover {
    filter: brightness(125%);
  }
`;
