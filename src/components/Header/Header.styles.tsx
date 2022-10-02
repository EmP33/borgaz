import styled from 'styled-components';

export const Wrapper = styled.header<{ showMenu: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;

  .contact-section {
    width: 100%;
    background: var(--color-primary);
    color: var(--color-silver);
    display: flex;
    padding: 0.7rem 1.5rem;
    column-gap: 3rem;

    @media screen and (max-width: 760px) {
      flex-direction: column;
      row-gap: 0.5rem;
      padding: 0.7rem;
    }

    .contact-section__element {
      display: flex;
      align-items: center;

      svg {
        color: var(--color-secondary);
        margin-right: 0.3rem;
        font-size: 1.2rem;
      }

      &:nth-of-type(2) {
        flex-grow: 1;
      }
    }
  }

  .appbar {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    position: relative;

    @media screen and (max-width: 1200px) {
      padding: 0 0.5rem;
    }

    @media screen and (max-width: 900px) {
      display: flex;
      padding: 0;
      justify-content: space-between;
    }

    ul {
      display: flex;
      list-style: none;
      flex-grow: 1;
      justify-content: center;
      column-gap: 2rem;
      z-index: 99;

      @media screen and (max-width: 1200px) {
        column-gap: 0.7rem;
      }
      @media screen and (max-width: 900px) {
        margin-top: 1rem;
        flex-direction: column;
        grid-column: 1/-1;
        width: 100%;
        position: absolute;
        text-align: center;
        background-color: #fff;
        bottom: 0;
        transform: ${({ showMenu }) =>
          showMenu ? 'translateY(100%)' : 'translateY(-200%)'};
        opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
        transition-property: transform, opacity;
        transition-duration: 0.2s, 0.1s;
        transition-timing-function: ease-in;
        padding: 2rem 0;
      }

      li {
        padding: 0.5rem 0;

        &:hover .dropdown-content {
          display: block;
        }
        a {
          color: var(--color-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          letter-spacing: 1px;
          font-size: 1.1rem;
          width: 100%;
          display: block;
          padding: 0.75rem;

          @media screen and (max-width: 1200px) {
            font-size: 1rem;
            padding: 0.3rem;
          }

          @media screen and (max-width: 900px) {
            width: 100%;
          }

          &:hover {
            color: var(--color-secondary);
          }
          & > svg {
            font-size: 0.9rem;
            transition: all 0.2s linear;

            @media screen and (max-width: 900px) {
              &:hover {
                transform: rotate(45deg);
              }
            }
          }
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f1f1f1;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 3;

          @media screen and (max-width: 900px) {
            transition: all 0s;
            position: relative;
            display: block;
            visibility: hidden;
            max-height: 0;
          }
        }

        .dropdown-content-active {
          @media screen and (max-width: 900px) {
            transition: all 0.5s;
            visibility: visible;
            opacity: 1;
            max-height: 500px;
          }
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: #ddd;
        }
      }
    }

    & > svg {
      font-size: 2rem;
      margin-right: 1rem;
      @media screen and (min-width: 900px) {
        display: none;
      }
    }
  }
`;
