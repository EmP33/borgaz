import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    padding: 2.5rem 0;
  }

  ul {
    list-style: none;
    display: grid;
    row-gap: 5rem;

    @media screen and (max-width: 500px) {
      row-gap: 2rem;
    }

    & li {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      position: relative;
      padding-left: 6.4rem;
      cursor: pointer;

      @media screen and (max-width: 1200px) {
        padding-left: 3rem;
      }
      @media screen and (max-width: 500px) {
        padding: 0 1rem;
      }

      & a {
        text-decoration: none;
        color: #000;

        &:hover {
          text-decoration: underline;
          color: var(--color-primary);
        }
      }

      & .icon-wrapper {
        font-size: 2rem;
        grid-row: span 2;
        background: #fff;
        color: #aaa;
        width: 75px;
        height: 75px;
        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        position: absolute;
        transform: translateX(-50%);
        -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 1200px) {
          width: 70px;
          height: 70px;
        }
        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }
  }
`;
