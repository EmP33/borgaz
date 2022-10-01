import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  margin-top: 5rem;
  background-color: #dddddd;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E");
  display: grid;
  justify-items: center;
  padding-top: 5rem;

  .info-blocks {
    display: grid;
    grid-template-columns: repeat(3, 250px);
    column-gap: 3rem;
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
